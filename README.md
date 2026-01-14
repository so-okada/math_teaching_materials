# Mathematical Teaching Demonstrations

A collection of interactive, browser-based visualizations for teaching mathematical concepts. All applications are standalone HTML files requiring no installation—simply open in any modern browser.

## Contents

| Demo | Topic | Key Concepts |
|------|-------|--------------|
| [Gaudí's Hyperboloid](https://so-okada.github.io/math_teaching_materials/gaudi_hyperboloid.html) | Ruled Surfaces | Hyperboloid of one sheet, doubly ruled surfaces |
| [Hyperbolic Paraboloid](https://so-okada.github.io/math_teaching_materials/hyperbolic_paraboloid.html) | Ruled Surfaces | Saddle surface, two families of rulings |
| [Wave Ruled Surface](https://so-okada.github.io/math_teaching_materials/wave_ruled_surface.html) | Ruled Surfaces | Sinusoidal curves, phase shift, traveling waves |
| [Brachistochrone](https://so-okada.github.io/math_teaching_materials/brachistochrone.html) | Calculus of Variations | Cycloid, fastest descent, variational problems |
| [Double Integral Visualizer](https://so-okada.github.io/math_teaching_materials/indefinite_integral.html) | Multivariable Calculus | Improper integrals, convergence criteria |
| [Ellipse Billiard](https://so-okada.github.io/math_teaching_materials/ellipse_billiard.html) | Conic Sections | Focal properties, reflection law |
| [Rule of 72](https://so-okada.github.io/math_teaching_materials/rule_of_72.html) | Financial Mathematics | Compound interest, exponential growth |
| [Stirling's Formula](https://so-okada.github.io/math_teaching_materials/stirling_formula.html) | Approximation Theory | Factorial, asymptotic analysis |
| [Small World Network](https://so-okada.github.io/math_teaching_materials/smallworld.html) | Graph Theory | Watts-Strogatz model, six degrees of separation |
| [PageRank](https://so-okada.github.io/math_teaching_materials/pagerank.html) | Graph Theory | Markov chains, eigenvector centrality |
| [Maxwell's Equations FDTD](https://so-okada.github.io/math_teaching_materials/maxwell.html) | Electromagnetism | Wave propagation, finite-difference methods |

---

## Ruled Surfaces

### [Gaudí's Hyperboloid](https://so-okada.github.io/math_teaching_materials/gaudi_hyperboloid.html)
**File:** `gaudi_hyperboloid.html`

Interactive visualization of the hyperboloid of one sheet, demonstrating how twisting straight lines between two parallel circles generates a curved surface.

**Mathematical Background:**
The hyperboloid of one sheet is defined by:
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$$

It is a *doubly ruled surface*—every point lies on exactly two straight lines contained entirely in the surface. This property was exploited by Antoni Gaudí in architectural designs, allowing curved surfaces to be constructed from straight structural elements.

**Controls:**
- **Twist Angle** (−180° to 180°): Rotate the top circle relative to the bottom
- **Number of Lines** (6–48): Density of ruling lines
- **Drag**: Rotate the 3D view
- **Animate**: Automatic twist oscillation

---

### [Hyperbolic Paraboloid](https://so-okada.github.io/math_teaching_materials/hyperbolic_paraboloid.html)
**File:** `hyperbolic_paraboloid.html`

Visualization of the saddle surface $z = xy$, showing both families of straight lines (rulings) that lie on the surface.

**Mathematical Background:**
The hyperbolic paraboloid can be written as:
$$z = \frac{x^2}{a^2} - \frac{y^2}{b^2}$$

or equivalently $z = xy$ after rotation. Two distinct families of lines:
- Family 1 (red): Lines of constant $u$ where $(x,y,z) = (u, v, uv)$
- Family 2 (cyan): Lines of constant $v$

This surface appears in tensile roof structures (e.g., Pringles chip shape).

**Controls:**
- **Twist Angle**: Deform the rectangular frame
- **Number of Lines**: Lines per family
- **Toggle**: Show/hide each family independently
- **Drag**: Rotate view

---

### [Wave Ruled Surface](https://so-okada.github.io/math_teaching_materials/wave_ruled_surface.html)
**File:** `wave_ruled_surface.html`

Straight rods connecting two sinusoidal curves create a ruled surface with wave-like geometry.

**Mathematical Description:**
Two parallel sinusoidal curves serve as directrices:
$$\text{Front edge: } z = A\sin(\omega x)$$
$$\text{Back edge: } z = A\sin(\omega x + \varphi)$$

When $\varphi = 0$, all rods are horizontal. As $\varphi$ increases, the rods tilt, creating a twisted wave surface.

**Controls:**
- **Phase Shift** (−180° to 180°): Phase difference between front and back curves
- **Wave Amplitude**: Height of sine waves
- **Wave Frequency**: Number of complete cycles
- **Number of Rods**: Density of ruling lines
- **Animate Wave**: Traveling wave animation
- **Auto Rotate**: Continuous view rotation

---

## Calculus & Analysis

### [Brachistochrone](https://so-okada.github.io/math_teaching_materials/brachistochrone.html)
**File:** `brachistochrone.html`

Physics simulation comparing descent times along three paths: linear, circular arc, and cycloid.

**Mathematical Background:**
The brachistochrone problem asks: *What curve between two points yields the shortest travel time for a frictionless bead under gravity?*

The solution is the **cycloid**, parametrized by:
$$x = r(\theta - \sin\theta), \quad y = r(1 - \cos\theta)$$

This was solved independently by Johann Bernoulli, Newton, Leibniz, L'Hôpital, and Jakob Bernoulli (1696–97), marking a foundational problem in the calculus of variations.

**Features:**
- Drag endpoint to change geometry
- Real-time race simulation with physics: $v = \sqrt{2gh}$
- AI assistant for physics explanations (requires API key)

---

### [Double Integral Visualizer](https://so-okada.github.io/math_teaching_materials/indefinite_integral.html)
**File:** `indefinite_integral.html`

Interactive 3D visualization of the improper double integral:
$$I = \int_{1}^{\infty} \int_{1}^{\infty} \frac{1}{x^n y^n} \, dx\, dy$$

**Convergence Analysis:**
By Fubini's theorem, this separates into:
$$I = \left(\int_{1}^{\infty} x^{-n} dx\right)^2$$

- **Convergent** when $n > 1$: $I = \dfrac{1}{(n-1)^2}$
- **Divergent** when $n \leq 1$

**Controls:**
- **Parameter n** (0.1–6.0): Exponent in the integrand
- **Drag**: Rotate the 3D surface plot
- Live MathJax rendering of step-by-step calculation

---

### [Stirling's Formula](https://so-okada.github.io/math_teaching_materials/stirling_formula.html)
**File:** `stirling_formula.html`

Compare the exact factorial $n!$ with Stirling's approximation:
$$n! \approx \sqrt{2\pi n} \left(\frac{n}{e}\right)^n$$

**Features:**
- Slider for $n$ from 1 to 140
- Display exact value, approximation, difference, and ratio
- Logarithmic scale chart showing both curves

**Mathematical Note:**
The ratio $\dfrac{\text{Stirling}}{n!} \to 1$ as $n \to \infty$. Even for small $n$, the approximation is remarkably accurate (e.g., 0.92 at $n=1$, 0.9917 at $n=10$).

---

## Geometry

### [Ellipse Billiard](https://so-okada.github.io/math_teaching_materials/ellipse_billiard.html)
**File:** `ellipse_billiard.html`

Demonstrates the reflection property of ellipses: a ray from one focus always passes through the other focus after reflection.

**Mathematical Background:**
For an ellipse with semi-axes $a$ and $b$, the foci are at $(\pm c, 0)$ where $c = \sqrt{a^2 - b^2}$.

The defining property—that the sum of distances from any point on the ellipse to both foci is constant ($2a$)—implies that the tangent at any point makes equal angles with lines to both foci (reflection law).

**Controls:**
- Move mouse to aim from the left focus (F₁)
- Click to launch the ball
- Click again to reset

---

## Financial Mathematics

### [Rule of 72](https://so-okada.github.io/math_teaching_materials/rule_of_72.html)
**File:** `rule_of_72.html`

Visualizes the "Rule of 72" approximation for compound interest doubling time.

**Mathematical Background:**
For continuous compounding at rate $r$, the exact doubling time is:
$$t_{\text{exact}} = \frac{\ln 2}{\ln(1 + r/100)} \approx \frac{0.693}{\ln(1 + r/100)}$$

The Rule of 72 approximates this as:
$$t_{\text{approx}} \approx \frac{72}{r}$$

This approximation works well for rates between 2% and 20%.

**Controls:**
- **Interest Rate** (0.1%–100%): Annual rate slider
- Live comparison of Rule of 72 estimate vs. exact calculation
- Growth curve visualization

---

## Graph Theory

### [Small World Network](https://so-okada.github.io/math_teaching_materials/smallworld.html)
**File:** `smallworld.html`

Interactive simulation of the Watts-Strogatz small world model, demonstrating the "six degrees of separation" phenomenon.

**Mathematical Background:**
The Watts-Strogatz model starts with a regular ring lattice of $N$ nodes, each connected to $K$ nearest neighbors. Each edge is then rewired with probability $p$:

- $p = 0$: Regular lattice (high clustering, long path lengths)
- $p = 1$: Random graph (low clustering, short path lengths)
- $0 < p < 1$: **Small world** regime (high clustering AND short path lengths)

The key insight is that a small number of random "shortcuts" dramatically reduces the average path length while preserving local clustering structure.

**Controls:**
- **Nodes (N)**: Total vertices in the graph (10–150)
- **Neighbors (K)**: Initial connections per node (must be even)
- **Rewire Prob (p)**: Probability of rewiring each edge
- **Find New Path**: Highlight shortest path between random nodes
- Statistics display: Average path length, degrees of separation

---

### [PageRank](https://so-okada.github.io/math_teaching_materials/pagerank.html)
**File:** `pagerank.html`

Visualization of Google's original PageRank algorithm for ranking web pages by importance.

**Mathematical Background:**
PageRank models a "random surfer" who either follows links or jumps to a random page. The rank $PR(i)$ of page $i$ satisfies:

$$PR(i) = \frac{1-d}{N} + d \sum_{j \in B_i} \frac{PR(j)}{L_j}$$

where:
- $d = 0.85$ is the damping factor
- $N$ is the total number of pages
- $B_i$ is the set of pages linking to $i$
- $L_j$ is the number of outbound links from page $j$

This is equivalent to finding the principal eigenvector of the modified adjacency matrix (a Markov chain stationary distribution).

**Controls:**
- **Step (+1)**: Perform one iteration of the algorithm
- **Auto Run**: Continuously iterate until convergence
- **Reset**: Generate a new random graph
- **Drag nodes**: Rearrange the force-directed layout
- Node size reflects current PageRank value

---

## Electromagnetism

### [Maxwell's Equations FDTD](https://so-okada.github.io/math_teaching_materials/maxwell.html)
**File:** `maxwell.html`

Real-time simulation of electromagnetic wave propagation using the Finite-Difference Time-Domain (FDTD) method.

**Mathematical Background:**
This simulation solves the 2D Transverse Magnetic (TMz) mode of Maxwell's equations. Three field components are computed:

- $E_z$: Electric field perpendicular to the screen
- $H_x$, $H_y$: Magnetic field components in the plane

The FDTD method discretizes Faraday's and Ampère's laws:
$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{H} = \frac{\partial \mathbf{D}}{\partial t}$$

The Courant number $C = c \cdot \Delta t / \Delta x$ must satisfy $C < 1/\sqrt{2}$ for numerical stability in 2D.

**Controls:**
- **Draw on canvas**: Create conducting walls (perfect electric conductors)
- **Frequency**: Adjust source oscillation frequency
- **Speed**: Simulation steps per frame
- **Pause/Resume**: Stop or continue the simulation
- **Clear Walls**: Remove all obstacles

**Features:**
- Observe wave reflection, diffraction, and interference
- Build waveguides, slits, and barriers interactively
- Color mapping: Cyan/blue = positive $E_z$, Red/orange = negative $E_z$

---

## Technical Notes

**Browser Compatibility:** All demos use vanilla JavaScript and HTML5 Canvas. Tested on Chrome, Firefox, Safari, and Edge.

**Dependencies:**
- Most demos are completely standalone (no external libraries)
- `brachistochrone.html`: Uses Tailwind CSS (CDN)
- `stirling_formula.html`: Uses Chart.js and Tailwind CSS (CDN)
- `indefinite_integral.html`: Uses MathJax and Tailwind CSS (CDN)
- `ellipse_billiard.html`: Uses Tailwind CSS (CDN)
- `smallworld.html`: Uses Tailwind CSS (CDN)
- `pagerank.html`: Uses Tailwind CSS (CDN)

**Mobile Support:** All demos include touch event handlers for drag-to-rotate functionality on mobile devices.

**Offline Use:** Download the HTML files. Demos using CDN libraries require internet on first load (libraries are typically cached thereafter).

---

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).

You are free to share and adapt these materials for non-commercial purposes, provided you give appropriate credit to the author.

---

## Author

**So Okada** (so.okada@gmail.com)

These demonstrations were created through AI-assisted development using generative AI tools including **Claude** (Anthropic) and **Gemini** (Google). The development process involved iterative collaboration—describing mathematical concepts and desired interactions in natural language, then refining the AI-generated code through conversation.
