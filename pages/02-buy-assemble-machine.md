---
layout: section
---

# 2. Buy, assemble, or machine?

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

---

# Catalog components

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### Positioning and optics

- Optical posts, mounts, breadboards
- Linear and rotation stages, micrometer heads
- Kinematic mounts (see section 6)

### Structure

- Aluminum extrusion profiles and brackets
- Standard angle brackets, gussets, T-nuts

</div>

<div>

### Configurable parts

- Shafts, spacers, plates, blocks cut to your dimensions
- Choose length, holes, and threads from a web form
- Typically delivered in days, with a known price

### Machine elements

- Dowel pins, bearings, bushings, springs
- Shaft collars, couplings, leveling feet

</div>

</div>

<div class="todo mt-6">Add the suppliers our lab already has accounts with.</div>

---

# Design with standard stock

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

Material comes in standard sizes. Use them:

- **Plate**: e.g. 5, 6, 8, 10, 12, 15, 20, 25, 30 mm
- **Round and square bar**, **flat bar**
- **Tube**: round, square, rectangular
- **Angle** and **channel**

<div class="todo mt-4">Replace with the sizes our supplier stocks.</div>

</div>

<div>

If a part is 20 mm thick, draw it 20 mm, not 18.5 mm:

- The faces can stay as delivered
- One fewer operation
- Less material removed, so less distortion

<div class="warning mt-4">
Rolled plate is not precision flat or precise in thickness. If a face matters, it must be machined, or use cast tooling plate.
</div>

</div>

</div>

---

# One turned part, or two pressed together?

<Sketch name="solid-vs-pressed" class="h-96" hint="The same flanged shaft twice: turned from one piece of Ø100 bar, and a Ø25 shaft with a separate flange pressed onto it" />

---

# Assemble instead of carving one monolith

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### Why an assembly wins

- Each piece is mostly **one setup**, from **stock that is already the right size**
- The shaft is bar you barely touch; the flange is a short slice
- Change one piece, not the whole part
- Deep "pockets" become open space between plates
- 2D profiles can be **laser or waterjet cut**

</div>

<div>

### What to watch

- Joints need **alignment**: a fit, dowel pins, or screws
- Stiffness depends on the joints
- More parts to assemble and keep track of
- Tolerances add up across the joint (see section 5)
- A press fit holds by **friction**: there is a torque and axial load limit

</div>

</div>

<div class="takeaway mt-8">
A Ø25 shaft with a flange pressed on beats the same shape turned from Ø100 bar. An L-bracket from two plates and four screws beats one milled L. Same rule, round or square.
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
| **Sheet metal bending** | Enclosures, brackets, covers (section 10). Light and cheap | Minimum flange lengths, bend radii, loose tolerances |
| **Welding** | Large frames, joining thick sections | Distortion; precise faces need machining afterward |
| **3D printing** | Complex shapes, jigs, quick iterations | Anisotropic strength, creep, accuracy, outgassing |

<div class="takeaway mt-4">
Combine them: a laser-cut plate with a few milled precision features is often the sweet spot.
</div>

<!--
Don't go deep here. The goal is that they know these processes exist and roughly what they're for, so they can ask the workshop "could this be laser cut?"
-->

---

# Section 2: take-aways

- **Buy** before you design: catalog and configurable parts are fast and cheap
- Design around **standard stock sizes**
- Build **assemblies of simple pieces** instead of carving one monolith
- Pick the **process** that suits the shape, not the other way around

