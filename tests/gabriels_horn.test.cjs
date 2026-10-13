// Run with Node.js 18+: node --test tests/gabriels_horn.test.cjs
// No browser or external packages required. DOM/canvas calls are simulated;
// CSS layout and MathJax rendering still require a real browser check.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'gabriels_horn.html'), 'utf8');

function loadDemo() {
  const elements = new Map();
  let viewport = {width: 640, height: 260};
  const drawCounts = new Map();
  function target() {
    const listeners = new Map();
    return {
      addEventListener(type, fn) { listeners.set(type, fn); },
      dispatch(type, event = {}) {
        assert.ok(listeners.has(type), 'Missing listener: ' + type);
        listeners.get(type)(event);
      }
    };
  }
  for (const match of html.matchAll(/<(\w+)\b([^>]*\bid="([^"]+)"[^>]*)>/g)) {
    const [, tag, attrs, id] = match;
    assert.ok(!elements.has(id), 'Duplicate id: ' + id);
    const element = Object.assign(target(), {
      value: attrs.match(/\bvalue="([^"]*)"/)?.[1] ?? '',
      textContent: '',
      getBoundingClientRect: () => viewport,
      setPointerCapture() {}
    });
    if (tag === 'canvas') {
      drawCounts.set(id, 0);
      const context = {};
      for (const method of ['setTransform', 'clearRect', 'beginPath', 'moveTo',
        'lineTo', 'closePath', 'fill', 'stroke', 'setLineDash', 'fillText', 'arc']) {
        context[method] = (...args) => {
          for (const value of args.flat()) {
            if (typeof value === 'number') assert.ok(Number.isFinite(value), id + ': ' + method);
          }
          if (method === 'clearRect') drawCounts.set(id, drawCounts.get(id) + 1);
        };
      }
      element.getContext = () => context;
    }
    elements.set(id, element);
  }
  const media = target();
  const window = Object.assign(target(), {devicePixelRatio: 1, matchMedia: () => media});
  const context = vm.createContext({
    window,
    document: {
      documentElement: {},
      getElementById(id) {
        assert.ok(elements.has(id), 'Missing element: ' + id);
        return elements.get(id);
      }
    },
    getComputedStyle: () => ({
      getPropertyValue(name) {
        const value = html.match(new RegExp(name + ':\\s*(#[a-fA-F0-9]+)'))?.[1];
        assert.ok(value, 'Missing color: ' + name);
        return value;
      }
    })
  });
  for (const [, source] of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) {
    if (source.trim()) vm.runInContext(source, context, {timeout: 5000});
  }
  return {
    context, elements, window, media, drawCounts,
    resize(width, height) { viewport = {width, height}; window.dispatch('resize'); }
  };
}

function close(actual, expected, tolerance = 1e-10) {
  assert.ok(Math.abs(actual - expected) <= tolerance,
    actual + ' differs from ' + expected + ' by more than ' + tolerance);
}

// Independent composite Simpson quadrature after u = ln x. A direct mesh in x
// would badly underresolve the integral when L is large. No closed form is used.
function areaByQuadrature(L, n = 8192) {
  const end = Math.log(L), step = end / n;
  const f = u => 2 * Math.PI * Math.sqrt(1 + Math.exp(-4 * u));
  let sum = f(0) + f(end), compensation = 0;
  for (let i = 1; i < n; i++) {
    const y = (i % 2 ? 4 : 2) * f(i * step) - compensation;
    const next = sum + y;
    compensation = (next - sum) - y;
    sum = next;
  }
  return sum * step / 3;
}

test('surface area agrees with independent quadrature, including near L=1', () => {
  const {context: demo} = loadDemo();
  const cutoffs = [1, 1 + Number.EPSILON, 1 + 1e-12, 1 + 1e-8,
    10 ** 0.001, 1.1, 2, 3, 10, 25, 100, 1000, 1e4, 1e5, 1e6];
  for (const L of cutoffs) {
    const expected = areaByQuadrature(L);
    close(demo.surfaceArea(L), expected, Math.max(1e-28, expected * 2e-12));
  }
  assert.equal(demo.surfaceArea(1), 0);
  const L = 1 + 1e-12;
  close(demo.surfaceArea(L) / (L - 1), 2 * Math.PI * Math.SQRT2, 2e-11);
});

test('all 6001 length-slider positions satisfy bounds and monotonicity', () => {
  const {context: demo} = loadDemo();
  let previousArea = -1;
  for (let i = 0; i <= 6000; i++) {
    const L = 10 ** (i / 1000), area = demo.surfaceArea(L);
    const lower = 2 * Math.PI * Math.log(L);
    const upper = lower + Math.PI / 4 * (1 - L ** -4);
    assert.ok(area >= lower - 1e-12 && area <= upper + 1e-12);
    assert.ok(area > previousArea);
    if (i > 0) assert.ok(area > lower);
    previousArea = area;
    for (const t of [0.005, 0.04, 0.2]) {
      const v = demo.volumes(L, t), a = demo.areas(L, t);
      close(v.inside + v.remaining, Math.PI);
      close(v.coat, v.linear + v.quadratic);
      close(a.coatPerThickness, v.coat / t, 1e-9);
      assert.equal(a.area, area);
      assert.ok(Object.values(v).every(Number.isFinite));
    }
  }
});

test('large-cutoff values and the stated asymptotic offset are correct', () => {
  const {context: demo} = loadDemo();
  const v = demo.volumes(1e6, 0.04);
  close(v.linear, 3.4722165179594233);
  close(v.quadratic, 5026.543219195424);
  close(v.coat, 5030.015435713383);
  close(demo.surfaceArea(1e6), 87.51537253780907);
  const offset = Math.PI * (Math.SQRT2 - 1 + Math.log(2 / (1 + Math.SQRT2)));
  close(demo.surfaceArea(1e6) - 2 * Math.PI * Math.log(1e6), offset);
  // A bounded numerical check of quadratic dominance, not a proof of a limit.
  const L = 1e12, t = 0.04;
  close(demo.volumes(L, t).coat / (Math.PI * t * t * L), 1, 2e-9);
});

test('radial thin-layer limit differs from area at fixed L', () => {
  const {context: demo} = loadDemo();
  const L = 10, limit = 2 * Math.PI * Math.log(L);
  let previous = Infinity;
  for (const t of [1e-2, 1e-4, 1e-6, 1e-8, 1e-10]) {
    const error = demo.volumes(L, t).coat / t - limit;
    assert.ok(error > 0 && error < previous);
    close(error, Math.PI * t * (L - 1), 1e-13);
    previous = error;
  }
  assert.ok(demo.surfaceArea(L) - limit > 0.7);
  assert.equal(demo.volumes(L, 0).coat, 0);
});

test('controls, endpoints, reset, drag, resize and theme events execute', () => {
  const demo = loadDemo(), {elements: el, context: context} = demo;
  const text = id => el.get(id).textContent;
  const input = (id, value) => {
    const previous = new Map(demo.drawCounts);
    el.get(id).value = String(value);
    el.get(id).dispatch('input');
    for (const canvas of ['horn', 'plot', 'areaPlot']) {
      assert.ok(demo.drawCounts.get(canvas) > previous.get(canvas), canvas + ' did not redraw');
    }
  };
  assert.equal(text('lengthValue'), 'L = 100');
  assert.equal(text('thicknessValue'), 't = 0.040');
  const area100 = text('area'), initialCamera = vm.runInContext('[yaw,pitch].join(",")', context);
  input('thickness', 0.2);
  assert.equal(text('area'), area100);
  assert.equal(text('radialLimit'), context.fmt(2 * Math.PI * Math.log(100)));
  input('length', 0);
  for (const id of ['inside', 'paint', 'area', 'radialLimit', 'coatPerThickness', 'coatLinear', 'coatQuadratic']) {
    assert.equal(text(id), '0');
  }
  assert.equal(text('quadraticShare'), 'Both terms start at zero.');
  input('length', 6);
  for (const t of [0.005, 0.04, 0.2]) {
    input('thickness', t);
    assert.equal(text('area'), '87.515373');
    assert.equal(text('paint'), context.fmt(context.volumes(1e6, t).coat));
  }
  input('thickness', 0.04);
  assert.equal(text('paint'), '5,030.015436');
  assert.equal(text('coatLinear'), '3.472217');
  assert.equal(text('coatQuadratic'), '5,026.543219');
  const horn = el.get('horn');
  horn.dispatch('pointerdown', {clientX: 50, clientY: 50, pointerId: 1});
  horn.dispatch('pointermove', {clientX: 90, clientY: 80});
  assert.notEqual(vm.runInContext('[yaw,pitch].join(",")', context), initialCamera);
  horn.dispatch('pointerup');
  horn.dispatch('pointercancel');
  demo.resize(320, 260);
  demo.resize(960, 350);
  demo.window.devicePixelRatio = 2;
  demo.window.dispatch('resize');
  demo.media.dispatch('change');
  el.get('reset').dispatch('click');
  assert.equal(text('lengthValue'), 'L = 100');
  assert.equal(text('thicknessValue'), 't = 0.040');
  assert.equal(text('area'), area100);
  assert.equal(vm.runInContext('[yaw,pitch].join(",")', context), initialCamera);
  for (const element of el.values()) assert.doesNotMatch(element.textContent, /NaN|Infinity|undefined/);
});
