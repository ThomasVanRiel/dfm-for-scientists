---
layout: section
routeAlias: buy-assemble-machine
---

# [Buy]{.marker}, assemble, or machine?

The cheapest part is the one you don't have to make

---

# Decide in this order

```mermaid
flowchart LR
  A[Need a part] --> B{In a catalog?}
  B -- yes --> C[Buy it]
  B -- no --> D{Configurable part?}
  D -- yes --> E[Configure and order]
  D -- no --> F{Build from plates,<br/>stock, profiles?}
  F -- yes --> G[Assemble]
  F -- no --> H[Machine it]
```

<div class="takeaway mt-8">
Your own design time counts too. A €150 catalog stage is cheap compared to a week of designing and a week of machining.
</div>

<!--
Replace this mermaid diagram with a professional handdrawn one.
-->

---
layout: two-cols-header
---

# Catalog components

::left::

### Positioning and optics

- Optical posts, mounts, breadboards
- Linear and rotation stages, micrometer heads
- Kinematic mounts (see <Link to="adjustability">Adjustability</Link>)

### Structure

- Aluminum extrusion profiles and brackets
- Standard angle brackets, gussets, T-nuts

::right::

### Configurable parts

- Shafts, spacers, plates, blocks cut to your dimensions
- Choose length, holes, and threads from a web form
- Typically delivered in days, with a known price

### Machine elements

- Dowel pins, bearings, bushings, springs
- Shaft collars, couplings, leveling feet

::bottom::

<div class="todo">Add the suppliers our lab already has accounts with.</div>

---
layout: two-cols-header
---

# Design with standard stock

::left::

Material comes in standard sizes. Use them:

- **Plate**: e.g. [5, 6, 8, 10, 12, 15, 20, 25, 30 mm]{.technical}
- **Round and square bar**, **flat bar**
- **Tube**: round, square, rectangular
- **Angle** and **channel**

<div class="todo mt-4">Replace with the sizes our supplier stocks.</div>

::right::

If a part is [20 mm]{.technical} thick, draw it [20 mm]{.technical}, not [18.5 mm]{.technical}:

- The faces can stay as delivered
- One fewer operation
- Less material removed, so less distortion

<div class="warning mt-4">
Rolled plate is not precision flat or precise in thickness. If a face matters, it must be machined, or use cast tooling plate.
</div>

---

# One turned part, or two pressed together?

<Sketch name="solid-vs-pressed" class="h-96" hint="The same flanged shaft twice: turned from one piece of Ø100 bar, and a Ø25 shaft with a separate flange pressed onto it" />

---
layout: two-cols-header
---

# Assemble instead of carving one monolith

::left::

### Why an assembly wins

- Each piece is mostly **one setup**, from **stock that is already the right size**
- The shaft is bar you barely touch; the flange is a short slice
- Change one piece, not the whole part
- Deep "pockets" become open space between plates
- 2D profiles can be **laser or waterjet cut**

::right::

### What to watch

- Joints need **alignment**: a fit, dowel pins, or screws
- Stiffness depends on the joints
- More parts to assemble and keep track of
- Tolerances add up across the joint (see <Link to="tolerances">Tolerances and fits</Link>)
- A press fit holds by **friction**: there is a torque and axial load limit

::bottom::

<div class="takeaway">
A <span class="technical">Ø25</span> shaft with a flange pressed on beats the same shape turned from <span class="technical">Ø100</span> bar. An L-bracket from two plates and four screws beats one milled L. Same rule, round or square.
</div>

---
class: text-sm
---

# The main processes

| Process | Good at | Bad at |
|---|---|---|
| **CNC milling** | Prismatic parts, pockets, precise faces and holes | Deep narrow features, sharp internal corners, many setups |
| **CNC turning** | Round parts: shafts, spacers, flanges. Fast and accurate | Anything that isn't rotationally symmetric |
| **Laser cutting** | Fast 2D profiles in sheet and thin plate | Thick plate, heat-affected edges, no pockets or threads |
| **Waterjet cutting** | Thick plate, almost any material, no heat | Tapered, rougher edges; lower accuracy |
| **Sheet metal bending** | Enclosures, brackets, covers (see <Link to="sheet-metal">Sheet metal</Link>). Light and cheap | Minimum flange lengths, bend radii, loose tolerances |
| **Welding** | Large frames, joining thick sections | Distortion; precise faces need machining afterward |
| **3D printing** | Complex shapes, jigs, quick iterations | Anisotropic strength, creep, accuracy, outgassing |

<div class="takeaway mt-4">
Combine them: a laser-cut plate with a few milled precision features is often the sweet spot.
</div>

<!--
Don't go deep here. The goal is that they know these processes exist and roughly what they're for, so they can ask the workshop "could this be laser cut?"
-->

---

# Take-aways

- **Buy** before you design: catalog and configurable parts are fast and cheap
- Design around **standard stock sizes**
- Build **assemblies of simple pieces** instead of carving one monolith
- Pick the **process** that suits the shape, not the other way around
