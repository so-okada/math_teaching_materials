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
| [Parabola](https://so-okada.github.io/math_teaching_materials/parabola.html) | Conic Sections | Focus, directrix, reflection of parallel rays |
| [Rule of 72](https://so-okada.github.io/math_teaching_materials/rule_of_72.html) | Financial Mathematics | Compound interest, exponential growth |
| [Stirling's Formula](https://so-okada.github.io/math_teaching_materials/stirling_formula.html) | Approximation Theory | Factorial, asymptotic analysis |
| [Small World Network](https://so-okada.github.io/math_teaching_materials/smallworld.html) | Graph Theory | Watts-Strogatz model, six degrees of separation |
| [PageRank](https://so-okada.github.io/math_teaching_materials/pagerank.html) | Graph Theory | Markov chains, eigenvector centrality |
| [Arrow's Impossibility Theorem](https://so-okada.github.io/math_teaching_materials/arrows_impossibility_theorem.html) | Social Choice Theory | Voting systems, impossibility results |
| [Maxwell's Equations FDTD](https://so-okada.github.io/math_teaching_materials/maxwell.html) | Electromagnetism | Wave propagation, finite-difference methods |
| [Binomial to Gaussian](https://so-okada.github.io/math_teaching_materials/binomialtogaussian.html) | Probability & Statistics | Central limit theorem, de Moivre-Laplace |
| [Galton Board](https://so-okada.github.io/math_teaching_materials/galton_board.html) | Probability & Statistics | Normal distribution, random walks |
| [Conic Sections](https://so-okada.github.io/math_teaching_materials/conic_sections.html) | Geometry | Cone slicing, eccentricity, degenerate conics |
| [Pinhole Camera](https://so-okada.github.io/math_teaching_materials/pinhole_camera.html) | Geometry | Perspective projection, similar triangles, circle of confusion |
| [Small Angle Approximation](https://so-okada.github.io/math_teaching_materials/xsinx.html) | Trigonometry | x ≈ sin(x), Taylor series |
| [Simple Sea Waves](https://so-okada.github.io/math_teaching_materials/simple_sea_waves.html) | Trigonometry | Sin waves, phases, frequencies |
| [Law of Cosines](https://so-okada.github.io/math_teaching_materials/cosine_theorem.html) | Trigonometry | Triangle geometry, cosine rule |
| [Law of Sines](https://so-okada.github.io/math_teaching_materials/sine_theorem.html) | Trigonometry | Sine rule, circumscribed circle |
| [Fundamental Theorem of Calculus](https://so-okada.github.io/math_teaching_materials/ftc_vertical.html) | Calculus | FTC Part 1, derivative of integral |
| [Riemann Sum Quadrature](https://so-okada.github.io/math_teaching_materials/quadrature_xn.html) | Calculus | Numerical integration, convergence |
| [Newton's Method](https://so-okada.github.io/math_teaching_materials/newton_method.html) | Numerical Analysis | Root finding, tangent line iteration |
| [Gradient Descent](https://so-okada.github.io/math_teaching_materials/gradient_descent.html) | Numerical Analysis | Steepest descent, learning rate, convergence |
| [Napier's Number e](https://so-okada.github.io/math_teaching_materials/napier_number.html) | Analysis | Limit definition, series, compound interest |
| [Clothoid Highway Curves](https://so-okada.github.io/math_teaching_materials/clothoid_highway_demo.html) | Differential Geometry | Euler spiral, curvature, road design |
| [Catenary Curve](https://so-okada.github.io/math_teaching_materials/catenary.html) | Differential Geometry | Hyperbolic cosine, hanging chain, curvature |
| [Bottle Flip Physics](https://so-okada.github.io/math_teaching_materials/bottle_flip_edu.html) | Mechanics | Projectile motion, angular momentum |
| [Strandbeest (Jansen Linkage)](https://so-okada.github.io/math_teaching_materials/strandbeest_demo.html) | Mechanics | Planar linkage, circle intersection, walking curve |
| [Vibration (2nd-Order ODE)](https://so-okada.github.io/math_teaching_materials/vibration_demo.html) | Differential Equations | Damped harmonic oscillator, phase portraits |

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

## Calculus of Variations

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

## Multivariable Calculus

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

## Conic Sections

### [Ellipse Billiard](https://so-okada.github.io/math_teaching_materials/ellipse_billiard.html)
**File:** `ellipse_billiard.html`

Demonstrates the reflection property of ellipses: a ray from one focus always passes through the other focus after reflection.

**Mathematical Background:**
For an ellipse with semi-axes $a$ and $b$, the foci are at $(\pm c, 0)$ where $c = \sqrt{a^2 - b^2}$.

The defining property—that the sum of distances from any point on the ellipse to both foci is constant ($2a$)—implies that the tangent at any point makes equal angles with lines to both foci (reflection law).

**Controls:**
- **Focal distance**: Slider to set the separation $2c$ between the foci (the ellipse reshapes, keeping the semi-major axis fixed)
- Move mouse to aim from the left focus (F₁)
- Click to launch the ball
- Click again to reset

---

### [Parabola](https://so-okada.github.io/math_teaching_materials/parabola.html)
**File:** `parabola.html`

Interactive visualization of the parabola and its focal properties, demonstrating how parallel rays reflect through the focus.

**Mathematical Background:**
A parabola with vertex $(h, k)$ and focal length $p$ satisfies:
$$(x - h)^2 = 4p(y - k)$$

equivalently $y = \dfrac{1}{4p}(x - h)^2 + k$. The key elements are:

- **Focus**: $(h,\, k + p)$
- **Directrix**: $y = k - p$
- **Axis of symmetry**: $x = h$

When $p > 0$ the parabola opens upward; when $p < 0$ it opens downward. The reflection property states that any ray parallel to the axis of symmetry reflects off the parabola and passes through the focus.

**Controls:**
- **Vertex $h$, $k$** (−5 to 5): Position of the vertex
- **Focal length $p$** (−3 to 3): Distance from vertex to focus
- **Display toggles**: Vertex, axis of symmetry, focus, directrix, parallel rays
- **Number of rays** (2–12): Incoming parallel rays with reflected paths to the focus
- Mouse coordinates displayed on hover

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

## Approximation Theory

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
- **Matrix tabs**: View adjacency matrix, transition matrix, or eigenvector
- Node size reflects current PageRank value

---

## Social Choice Theory

### [Arrow's Impossibility Theorem](https://so-okada.github.io/math_teaching_materials/arrows_impossibility_theorem.html)
**File:** `arrows_impossibility_theorem.html`

Interactive demonstration of Arrow's Impossibility Theorem, a fundamental result in social choice theory.

**Mathematical Background:**
Arrow's theorem (1951) states that no voting system with three or more candidates can simultaneously satisfy all of:

1. **Unrestricted Domain (U)**: All voter preference orderings are allowed
2. **Non-Imposition (N)**: Every social ordering is achievable by some profile
3. **Independence of Irrelevant Alternatives (IIA)**: The social ranking of $A$ vs $B$ depends only on individual rankings of $A$ vs $B$
4. **Non-Dictatorship (D)**: No single voter determines the outcome

**Features:**
- **Drag-and-drop voter preferences**: Set rankings for multiple voters
- **Preset profiles**: Condorcet cycle, unanimous agreement, etc.
- **Voting methods**: Plurality, Borda count, Pairwise majority, Dictatorship
- **Condition checker**: See which conditions each method satisfies/violates
- **IIA violation demo**: Concrete example of how Borda count violates IIA
- **Condorcet cycle detection**: Visualize when pairwise majority produces intransitive results

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

## Probability & Statistics

### [Binomial to Gaussian](https://so-okada.github.io/math_teaching_materials/binomialtogaussian.html)
**File:** `binomialtogaussian.html`

Interactive visualization of the binomial distribution converging to the Gaussian (normal) distribution as the number of trials increases.

**Mathematical Background:**
The binomial distribution $B(n, p)$ gives the probability of $k$ successes in $n$ independent trials:
$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$

The **de Moivre-Laplace theorem** (a special case of the Central Limit Theorem) states that as $n \to \infty$:
$$\frac{X - np}{\sqrt{np(1-p)}} \xrightarrow{d} N(0,1)$$

The binomial distribution approaches a normal distribution with mean $\mu = np$ and standard deviation $\sigma = \sqrt{np(1-p)}$.

**Controls:**
- **Number of Trials (n)**: 1–150, observe convergence as n increases
- **Probability (p)**: Success probability per trial (0.05–0.95)
- **Show Gaussian Curve**: Toggle the fitted normal distribution overlay
- **Animate Convergence**: Watch n increase automatically
- Click on bars to see exact $\binom{n}{k}$ values

---

### [Galton Board](https://so-okada.github.io/math_teaching_materials/galton_board.html)
**File:** `galton_board.html`

Physical simulation of a Galton board (bean machine), demonstrating how random binary choices lead to a normal distribution.

**Mathematical Background:**
As balls fall through $n$ rows of pegs, each bouncing left or right with equal probability ($p = 0.5$), the final distribution follows the binomial distribution, which approximates the Gaussian:
$$f(x) = \frac{N}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$$

where $\mu = 0.5n$ and $\sigma = \sqrt{0.25n}$.

**Controls:**
- **Rows**: Number of peg rows (5–25)
- **Drop Rate**: Speed of ball generation
- **Show Bell Curve**: Overlay theoretical normal distribution

---

## Geometry

### [Conic Sections](https://so-okada.github.io/math_teaching_materials/conic_sections.html)
**File:** `conic_sections.html`

Interactive 3D visualization showing how slicing a double cone at different angles produces the four conic sections.

**Mathematical Background:**
The type of conic depends on the plane's tilt angle $\theta$ relative to the cone's half-angle $\alpha$:

- **Circle** ($\theta = 0$): Plane perpendicular to axis, eccentricity $e = 0$
- **Ellipse** ($\theta < 90° - \alpha$): Plane cuts one nappe, $0 < e < 1$
- **Parabola** ($\theta = 90° - \alpha$): Plane parallel to generatrix, $e = 1$
- **Hyperbola** ($\theta > 90° - \alpha$): Plane cuts both nappes, $e > 1$

Eccentricity is computed as $e = \dfrac{\sin\theta}{\cos\alpha}$.

**Controls:**
- **Plane Tilt Angle (θ)**: Angle of cutting plane (−180° to 180°)
- **Plane Height (h)**: Vertical position of the plane
- **Cone Half-Angle (α)**: Opening angle of the cone (10°–60°)
- **3D Rotation**: Rotate the view (drag or slider)
- **Preset buttons**: Jump to Circle, Ellipse, Parabola, Hyperbola, Point, or Line

---

### [Pinhole Camera](https://so-okada.github.io/math_teaching_materials/pinhole_camera.html)
**File:** `pinhole_camera.html`

Interactive side-view ray diagram of a pinhole camera, showing how a single hole maps every scene point to an inverted image, with the similar-triangle geometry, the perspective-projection map, and the finite-aperture blur.

**Mathematical Background:**
With the pinhole at the origin, an object of height $h_o$ at distance $d_o$ and its image at distance $d_i$ span two similar right triangles sharing the apex at the hole:
$$\frac{h_i}{h_o} = \frac{d_i}{d_o}, \qquad h_i = h_o\,\frac{d_i}{d_o}.$$

The image lies on the opposite side of the optical axis, giving the signed magnification $m = -d_i/d_o$. In 3D, a scene point $(X, Y, Z)$ projects onto the image plane at $z = d_i$ as
$$\big(x', y'\big) = \left(d_i\,\frac{X}{Z},\; d_i\,\frac{Y}{Z}\right),$$
which in homogeneous coordinates is the linear map
$$\begin{pmatrix} x' \\ y' \\ 1 \end{pmatrix} \sim
\begin{pmatrix} d_i & 0 & 0 & 0 \\ 0 & d_i & 0 & 0 \\ 0 & 0 & 1 & 0 \end{pmatrix}
\begin{pmatrix} X \\ Y \\ Z \\ 1 \end{pmatrix}.$$
For a real object the screen sits behind the hole, so the projection becomes the point reflection $(X, Y) \mapsto -\tfrac{d_i}{Z}(X, Y)$—a $180^\circ$ rotation about the optical axis (upside-down **and** left–right reversed).

A real aperture of diameter $a > 0$ spreads each point into a *circle of confusion* of diameter
$$b = a\left(1 + \frac{d_i}{d_o}\right) = a\,(1 + m),$$
independent of image height. The demo convolves the image with this uniform disc—the exact geometric point-spread of a circular aperture. Geometric optics favors smaller $a$, but diffraction blurs by $\sim \lambda d_i / a$, so the two effects balance at the classical optimal diameter
$$a_{\mathrm{opt}} \sim \sqrt{\lambda\,\frac{d_o d_i}{d_o + d_i}} \approx 1.9\sqrt{\lambda\, d_i} \quad (d_o \gg d_i).$$

**Controls:**
- **Object distance $d_o$, Image distance $d_i$, Object height $h_o$**: Scene and camera geometry
- **Pinhole size $a$**: Aperture diameter, driving the blur disc
- **Toggles**: Similar triangles, projection rays, dimension labels
- Live readout of magnification $m$, image height $h_i$, and blur $b$

---

## Trigonometry

### [Small Angle Approximation](https://so-okada.github.io/math_teaching_materials/xsinx.html)
**File:** `xsinx.html`

Demonstrates the small angle approximation $\sin x \approx x$ (for $x$ in radians) through unit circle and function graph visualizations.

**Mathematical Background:**
The Taylor series expansion of sine is:
$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$$

For small $x\approx 0$, the higher-order terms become negligible, yielding $\sin x \approx x$. This approximation is fundamental in physics (pendulum motion, optics, wave mechanics) and engineering.

**Error Analysis:**
- At $x = 0.1$ rad (5.7°): Error ≈ 0.17%
- At $x = 0.5$ rad (28.6°): Error ≈ 4.2%
- At $x = 1.0$ rad (57.3°): Error ≈ 18.8%

**Controls:**
- **Angle slider**: Adjust angle from $-\pi/2$ to $\pi/2$ radians
- **Preset buttons**: Quick access to small, medium, and large angles
- **Unit circle view**: Shows arc length (x) vs. vertical height (sin x)
- **Graph view**: Compares $y = x$ and $y = \sin x$ curves

---

### [Simple Sea Waves](https://so-okada.github.io/math_teaching_materials/simple_sea_waves.html)
**File:** `simple_sea_waves.html`

Animated visualization of layered sine waves and the parameters that control wave behavior.

**Mathematical Background:**
Each wave layer $i$ is computed using:
$$y_i(x, t) = y_{\text{pos}} + A_i \sin(k_i x + \omega_i t + \phi_i)$$

The parameters scale across layers:
- **Amplitude**: $A_i = A_{\text{base}} \cdot (1 - C_A \cdot i)$
- **Wave number**: $k_i = k_{\text{base}} \cdot (1 + C_k \cdot i)$
- **Angular frequency**: $\omega_i = \omega_{\text{base}} \cdot (1 + i \cdot \text{variance})$
- **Phase**: $\phi_i = \phi_0 + i \cdot \text{separation}$

**Controls:**
- **Base Amplitude/Frequency/Speed**: Primary wave parameters
- **Wave Layers**: Number of superimposed waves (1–6)
- **Amplitude Reduction**: How quickly amplitude decreases per layer
- **Frequency Increment**: How frequency increases per layer
- **Phase Offset ($\phi_0$)**: Initial phase shift
- **Layer Separation**: Phase difference between layers
- **Show Superposition**: Display the sum $y_{\text{total}} = \sum_i A_i \sin(k_i x + \omega_i t + \phi_i)$

---

### [Law of Cosines](https://so-okada.github.io/math_teaching_materials/cosine_theorem.html)
**File:** `cosine_theorem.html`

Interactive visualization of the Law of Cosines with draggable triangle vertices.

**Mathematical Background:**
The Law of Cosines relates the sides and angles of any triangle:
$$c^2 = a^2 + b^2 - 2ab\cos C$$

This generalizes the Pythagorean theorem; when $C = 90°$, the formula reduces to $c^2 = a^2 + b^2$.

**Controls:**
- **Drag vertices A, B, C**: Reshape the triangle interactively
- **Preset buttons**: Equilateral triangle, Right triangle ($C = 90°$)
- Live display of sides, angles, and verification of the formula

---

### [Law of Sines](https://so-okada.github.io/math_teaching_materials/sine_theorem.html)
**File:** `sine_theorem.html`

Interactive visualization of the Law of Sines with circumscribed circle display.

**Mathematical Background:**
The Law of Sines states that in any triangle:
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$

where $R$ is the circumradius (radius of the circumscribed circle).

**Controls:**
- **Drag vertices A, B, C**: Reshape the triangle interactively
- **Show/Hide Circumscribed Circle**: Toggle the circumcircle and radius $R$
- **Preset buttons**: Equilateral triangle, Right triangle ($C = 90°$)
- Live display of angles, sides, sine values, and ratios

---

## Calculus

### [Fundamental Theorem of Calculus](https://so-okada.github.io/math_teaching_materials/ftc_vertical.html)
**File:** `ftc_vertical.html`

Interactive demonstration of the Fundamental Theorem of Calculus, Part 1, showing how the derivative of an integral recovers the original function.

**Mathematical Background:**
The FTC Part 1 states that if $f$ is continuous on $[a, b]$, then:
$$\frac{d}{dx} \int_a^x f(t) dt = f(x)$$

This demo visualizes the limit process:
$$\lim_{h \to 0} \frac{1}{h} \int_x^{x+h} f(t) dt = f(x)$$

by comparing the area under the curve with the rectangle approximation $h \cdot f(x+h)$.

**Controls:**
- **x slider**: Position on the x-axis
- **h slider**: Width of the interval (watch as h → 0)
- **Animate h → 0**: Automatic animation showing convergence
- Numerical comparison table shows how the quotient approaches f(x)

---

### [Riemann Sum Quadrature](https://so-okada.github.io/math_teaching_materials/quadrature_xn.html)
**File:** `quadrature_xn.html`

Visualization of Riemann sums approximating the integral $\int_0^1 x^n \, dx = \frac{1}{n+1}$.

**Mathematical Background:**
The definite integral is defined as the limit of Riemann sums:
$$\int_0^1 x^n \, dx = \lim_{N \to \infty} \sum_{i=1}^{N} f(x_i^*) \Delta x$$

where $\Delta x = 1/N$ and $x_i^*$ is a sample point in each subinterval. Three sampling methods are available:
- **Left**: $x_i^* = (i-1)/N$
- **Right**: $x_i^* = i/N$  
- **Midpoint**: $x_i^* = (i - 0.5)/N$

**Controls:**
- **Exponent (n)**: Power in $x^n$ (0.5–5)
- **Rectangles (N)**: Number of subdivisions (1–100)
- **Sum type**: Left, Right, or Midpoint rule
- **Animate**: Watch rectangles increase and error decrease

---

## Numerical Analysis

### [Newton's Method](https://so-okada.github.io/math_teaching_materials/newton_method.html)
**File:** `newton_method.html`

Interactive visualization of the Newton–Raphson root-finding algorithm with step-by-step iteration display.

**Mathematical Background:**
Newton's method iteratively approximates a root of $f(x) = 0$ using:
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

Starting from an initial guess $x_0$, each iteration follows the tangent line at $(x_n, f(x_n))$ to its $x$-intercept.

**Controls:**
- **Preset functions**: Common examples ($x^3 - 2x - 5$, $\cos x - x$, etc.)
- **Custom f(x) and f′(x)**: Enter any function and its derivative
- **Initial guess (x₀)**: Starting point (click on graph to set)
- **Run/Step/Reset**: Execute all iterations, single step, or restart
- Drag to pan, scroll to zoom

---

### [Gradient Descent](https://so-okada.github.io/math_teaching_materials/gradient_descent.html)
**File:** `gradient_descent.html`

Interactive visualization of gradient descent minimizing a function of two variables, tracing the iterate path over a contour heat map together with the negative-gradient direction at each step.

**Mathematical Background:**
To minimize a differentiable $f:\mathbb{R}^2 \to \mathbb{R}$, gradient descent steps in the direction of steepest decrease, the negative gradient:
$$\mathbf{x}_{n+1} = \mathbf{x}_n - \eta\,\nabla f(\mathbf{x}_n), \qquad \nabla f = \left(\frac{\partial f}{\partial x},\, \frac{\partial f}{\partial y}\right)$$

The step size $\eta > 0$ (the *learning rate*) controls how far each step travels. For a quadratic with Hessian eigenvalues $\lambda_i$, convergence requires $\eta < 2/\lambda_{\max}$; an ill-conditioned $f$ (large ratio $\kappa = \lambda_{\max}/\lambda_{\min}$) forces the characteristic zig-zag across the valley, while too large an $\eta$ makes the iterates diverge.

**Controls:**
- **Objective function**: Bowl $x^2 + y^2$, ill-conditioned $x^2 + 10y^2$, Rosenbrock, Himmelblau (four minima), or a custom $f(x,y)$
- **Custom $f(x,y)$**: Enter any expression with an adjustable view window (gradient computed numerically by central differences)
- **Learning rate $\eta$**: Log-scaled slider, $10^{-4}$ to $10^0$
- **Speed**: Iteration steps per animation frame
- **Initial point**: Click on the contour plot to set $\mathbf{x}_0$
- **Step/Run/Reset**: Single step, animate, or restart

---

## Analysis

### [Napier's Number e](https://so-okada.github.io/math_teaching_materials/napier_number.html)
**File:** `napier_number.html`

Multiple visualizations of Euler's number $e \approx 2.71828$ through its various definitions.

**Mathematical Background:**
The number $e$ can be defined in several equivalent ways:

1. **Limit definition**: $e = \displaystyle\lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^n$
2. **Series definition**: $e = \displaystyle\sum_{k=0}^{\infty}\frac{1}{k!}$
3. **Exponential slope**: $e$ is the unique base where $\dfrac{d}{dx}a^x\big|_{x=0} = 1$

**Features:**
- Limit convergence: watch $(1 + 1/n)^n$ approach $e$
- Series convergence: add terms of $\sum 1/k!$
- Convergence comparison: series vs limit (log scale)
- Slope of $y = a^x$: adjust base to see when tangent slope equals 1
- Compound interest interpretation

---

## Differential Geometry

### [Clothoid Highway Curves](https://so-okada.github.io/math_teaching_materials/clothoid_highway_demo.html)
**File:** `clothoid_highway_demo.html`

Interactive demonstration of clothoid (Euler spiral) curves used in highway and railway design for smooth transitions between straight sections and circular arcs.

**Mathematical Background:**
The clothoid (Cornu spiral) is defined by the property that curvature increases linearly with arc length:
$$\kappa(s) = \frac{s}{A^2}$$

where $A$ is the clothoid parameter. The curve is given by Fresnel integrals:
$$x(s) = \int_0^s \cos\left(\frac{t^2}{2A^2}\right) dt, \quad y(s) = \int_0^s \sin\left(\frac{t^2}{2A^2}\right) dt$$

The fundamental relation $A^2 = R \cdot L$ connects the parameter $A$, the final radius $R$, and the spiral length $L$.

**Controls:**
- **Clothoid Parameter (A)**: Controls the spiral's "tightness"
- **Target Radius (R)**: Final circular arc radius
- **Design Speed**: Vehicle speed for comfort analysis
- **View modes**: Highway view, spiral view, curvature graph
- **Animate**: Watch a vehicle traverse the transition

---

### [Catenary Curve](https://so-okada.github.io/math_teaching_materials/catenary.html)
**File:** `catenary.html`

Interactive visualization of the catenary curve—the shape formed by a uniform chain hanging under gravity—with comparison to the osculating parabola and a hanging chain suspended between two supports.

**Mathematical Background:**
The catenary is defined by:
$$y = a\cosh\!\left(\frac{x}{a}\right) = \frac{a}{2}\left(e^{x/a} + e^{-x/a}\right)$$

At the vertex $(0, a)$, the curvature is $\kappa = 1/a$. The parabola $y = \dfrac{x^2}{2a} + a$ shares the same curvature at this point, illustrating why a catenary resembles a parabola near the vertex but diverges further out.

The arc length of the chain between the two supports at $x = \pm L$ follows from $y' = \sinh(x/a)$, so $1 + (y')^2 = \cosh^2(x/a)$:
$$S = \int_{-L}^{L}\sqrt{1 + (y')^2}\,dx = 2\,|a|\,\sinh\!\left(\frac{L}{|a|}\right)$$

The chain is drawn along the exact catenary arc between two knots, with the half-span $L$ recovered from the chosen length via $L = |a|\,\operatorname{asinh}\!\left(\dfrac{S}{2|a|}\right)$.

**Controls:**
- **Parameter $a$** (−5 to 5): Shape parameter; positive values hang downward, negative values arch upward (inverted catenary)
- **Parabola**: Toggle the osculating parabola overlay
- **Chain**: Toggle the hanging chain with two supports
- **Chain length**: Total arc length $S$ of the chain between the two knots
- **Rotation** (−180° to 180°): Rotate the entire figure about the origin
- Mouse hover: Displays $x$, catenary $y$, and arc length from vertex

---

## Mechanics

### [Bottle Flip Physics](https://so-okada.github.io/math_teaching_materials/bottle_flip_edu.html)
**File:** `bottle_flip_edu.html`

Physics simulation of the "bottle flip challenge," demonstrating projectile motion with rotation and the role of water redistribution in successful landings.

**Mathematical Background:**
The bottle undergoes projectile motion with rotation. Key equations:
$$x(t) = x_0 + v_0 \cos\theta \cdot t, \quad y(t) = y_0 + v_0 \sin\theta \cdot t - \frac{1}{2}gt^2$$
$$\theta(t) = \theta_0 + \omega_0 t$$

The shifting center of mass due to water sloshing creates a damping effect on rotation, which is crucial for landing upright. Angular momentum conservation and energy dissipation determine landing success.

**Controls:**
- **Initial Velocity (v₀)**: Launch speed in m/s
- **Launch Angle (θ)**: Angle from horizontal in degrees
- **Angular Velocity (ω₀)**: Initial spin rate in rad/s
- **Fill Level**: Water amount (affects center of mass dynamics)
- **Gravity**: Adjustable for experimentation
- Real-time display of flight time, rotation, and landing angle

---

### [Strandbeest (Jansen Linkage)](https://so-okada.github.io/math_teaching_materials/strandbeest_demo.html)
**File:** `strandbeest_demo.html`

Interactive construction and animation of the Jansen leg—the single-degree-of-freedom planar linkage behind Theo Jansen's walking *Strandbeest*—built joint by joint from circle intersections so the foot's walking curve emerges from the geometry.

**Mathematical Background:**
The leg is a planar linkage driven by one rotating crank, with all rod lengths fixed by Jansen's thirteen "holy numbers." Each moving joint is located as the intersection of two circles: given two already-known points $A$ and $B$ connected to the unknown joint $J$ by rods of length $r_A$ and $r_B$, the joint satisfies
$$|J - A| = r_A, \qquad |J - B| = r_B.$$

Writing $d = |B - A|$, the perpendicular offset of $J$ from the line $AB$ is
$$\ell = \frac{r_A^2 - r_B^2 + d^2}{2d}, \qquad h = \sqrt{r_A^2 - \ell^2},$$
and the two solutions are $J = A + \ell\,\hat{u} \pm h\,\hat{u}^{\perp}$, where $\hat{u} = (B - A)/d$. A consistent choice of branch at each stage propagates the crank angle $\theta$ through the whole linkage; the foot then traces a closed curve whose nearly straight bottom edge gives the flat ground-contact stroke that makes the mechanism walk. The construction is only valid while $r_A^2 \ge \ell^2$ (the circles actually meet), which the demo checks live.

**Controls:**
- **Crank angle $\theta$**: Drag on the canvas or use the slider to drive the linkage
- **Animation speed**: Crank rate in rpm, with play/pause and reset
- **Construction stage**: Step through the eight circle-intersection stages from crank to foot $S$
- **Mutate one length**: Select a rod $a$–$m$ and scale it to perturb the holy numbers
- **Tiny random test**: Apply small random rod perturbations; **Reset rods** restores Jansen's values
- **Show trace, Zoom, Rod thickness**: Display options for the foot path and figure
- **Live construction checks**: Flags any stage where the two circles fail to intersect

---

## Differential Equations

### [Vibration (2nd-Order ODE)](https://so-okada.github.io/math_teaching_materials/vibration_demo.html)
**File:** `vibration_demo.html`

Interactive visualization of the second-order linear ODE governing mechanical vibrations, with real-time phase portraits and energy analysis.

**Mathematical Background:**
The damped harmonic oscillator is described by:
$$m\ddot{x} + c\dot{x} + kx = F(t)$$

The damping ratio $\zeta = \dfrac{c}{2\sqrt{mk}}$ classifies the system behavior:
- **Underdamped** ($\zeta < 1$): Oscillatory decay with $x(t) = e^{-\gamma t}(A\cos\omega_d t + B\sin\omega_d t)$
- **Critically damped** ($\zeta = 1$): Fastest non-oscillatory return
- **Overdamped** ($\zeta > 1$): Slow exponential decay
- **Negative damping** ($\zeta < 0$): Unstable growth

**Controls:**
- **Mass (m), Damping (c), Stiffness (k)**: System parameters
- **Initial conditions**: $x(0)$ and $\dot{x}(0)$
- **Mode**: Free vibration or forced ($F_0\cos\omega t$)
- **Show Envelope**: Display exponential decay envelope
- **Animation**: Play/pause with adjustable speed
- Plots: Displacement vs time, phase portrait ($x$ vs $\dot{x}$), energy

---

## Technical Notes

**Browser Compatibility:** All demos use vanilla JavaScript and HTML5 Canvas.

**Dependencies:**
- `brachistochrone.html`: Uses Tailwind CSS (CDN)
- `stirling_formula.html`: Uses Chart.js and Tailwind CSS (CDN)
- `indefinite_integral.html`: Uses MathJax and Tailwind CSS (CDN)
- `smallworld.html`: Uses Tailwind CSS (CDN)
- `pagerank.html`: Uses Tailwind CSS (CDN)
- `binomialtogaussian.html`: Uses Tailwind CSS (CDN)
- `xsinx.html`: Uses Tailwind CSS and math.js (CDN)
- `ftc_vertical.html`: Uses MathJax (CDN)
- `quadrature_xn.html`: Uses MathJax (CDN)
- `clothoid_highway_demo.html`: Uses MathJax (CDN)
- `catenary.html`: Uses MathJax (CDN)
- `bottle_flip_edu.html`: Uses MathJax (CDN)
- `galton_board.html`: Uses MathJax (CDN)
- `conic_sections.html`: Uses MathJax (CDN)
- `parabola.html`: Uses MathJax (CDN)
- `simple_sea_waves.html`: Uses MathJax (CDN)
- `vibration_demo.html`: Uses MathJax (CDN)
- `newton_method.html`: Uses MathJax (CDN)
- `gradient_descent.html`: Uses MathJax (CDN)
- `napier_number.html`: Uses MathJax (CDN)
- `cosine_theorem.html`: Uses MathJax (CDN)
- `sine_theorem.html`: Uses MathJax (CDN)
- `arrows_impossibility_theorem.html`: Uses MathJax (CDN)
- `pinhole_camera.html`: Uses MathJax (CDN)

---

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).

You are free to share and adapt these materials for non-commercial purposes, provided you give appropriate credit to the author.

---

## Author

**So Okada** (so.okada@gmail.com)

These demonstrations were created through AI-assisted development using generative AI tools including Claude/Gemini/ChatGPT. The development process involved iterative collaboration—describing mathematical concepts and desired interactions in natural language, then refining the AI-generated code through conversation.
