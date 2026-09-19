---
layout: section
routeAlias: buy-assemble-machine
---

# [Buy]{.marker}, assemble, or machine?

The cheapest part is the one you don't have to make

---

# Decide in this order

<div class="ladder">
<div class="rung" v-click="1">
<div class="q"><span class="step">1</span>In a <strong>catalog</strong>?</div>
<div class="edge"><span class="word">yes</span>→</div>
<div class="tip">Buy it</div>
</div>
<div class="edge down" v-click="2">no ↓</div>
<div class="rung" v-click="2">
<div class="q"><span class="step">2</span>A <strong>configurable</strong> part?</div>
<div class="edge"><span class="word">yes</span>→</div>
<div class="tip">Configure and order</div>
</div>
<div class="edge down" v-click="3">no ↓</div>
<div class="rung" v-click="3">
<div class="q"><span class="step">3</span>Built from <strong>plates, stock, profiles</strong>?</div>
<div class="edge"><span class="word">yes</span>→</div>
<div class="tip">Assemble</div>
</div>
<div class="edge down" v-click="4">no ↓</div>
<div class="rung" v-click="4">
<div class="nothing"><span class="step"></span>Nothing off the shelf fits</div>
<div class="edge"><span class="word"></span>→</div>
<div class="warning final">Machine it</div>
</div>
</div>

<div class="takeaway mt-8" v-click="5">
Your own design time counts too.<br/>
A €150 catalog stage is cheap compared to a week of designing and a week of machining.
</div>

<style>
.ladder {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

/* Question, the answer that leaves the ladder, and the path that stays on it. */
.rung {
  display: grid;
  grid-template-columns: 26rem 4rem 1fr;
  align-items: center;
  column-gap: 1rem;
}

.q {
  border: 1px solid var(--sk-rule);
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
}

/*
  A fixed width, so the last rung can carry an empty one and still line its
  text up with the questions above it. Same trick as `.word` below: the
  placeholder does the aligning, not a magic padding.
*/
.step {
  display: inline-block;
  width: 1.1rem;
  font-family: 'IBM Plex Sans Condensed', ui-sans-serif, system-ui, sans-serif;
  color: var(--sk-label);
}

.edge {
  font-family: 'IBM Plex Sans Condensed', ui-sans-serif, system-ui, sans-serif;
  font-size: 0.85em;
  color: var(--sk-label);
}

/* Holds the arrow's place when there is no "yes" in front of it. */
.edge .word {
  display: inline-block;
  width: 2.2rem;
}

/* The "no" sits under the question it belongs to, on the path down. */
.down {
  padding-left: 1.4rem;
}

/*
  The last rung has no question: every answer above it was no. Saying that in
  the question column keeps the row from reading as a gap, and it is the
  sentence the audience is thinking by the time they get there. Unboxed and
  in the label grey, because it is a statement, not a decision.
*/
.nothing {
  border: 1px dashed var(--sk-rule);
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
  color: var(--sk-label);
}

.final {
  font-weight: 500;
}
</style>

<!--
Prototype B: the same decision as a ladder, in the deck's own type and
colours, using .tip and .warning for the outcomes so dark mode comes free.
Reads top to bottom, and each rung can take a v-click if it should arrive one
question at a time.
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

- Shafts, spacers, plates, blocks cut to spec
- Choose length, holes, and threads
- Typically delivered in days, with a known price

### Machine elements

- Dowel pins, bearings, bushings, springs
- Shaft collars, couplings, leveling feet


---
layout: two-cols-header
---

# Design with standard stock

::left::

Material comes in standard sizes. Use them:

- **Plate**: e.g. [5, 6, 8, 10, 12, 15, 16, 18, 20, 25, 30 mm]{.technical}
- **Round and square bar**, **flat bar**
- **Tube**: round, square, rectangular
- **Angle** and **channel**

::right::

[18.5 mm]{.technical} is not a thickness. [18]{.technical} and [20]{.technical} are. Pick from the list before you draw, not after:

- The faces can stay as delivered
- One fewer operation
- Less material removed, so less distortion
- More material is not necessarily a higher cost

::bottom::

<div class="takeaway">
Standard stock is usually in the rack already: no waiting for material, and fewer faces to machine.
</div>

<div class="warning mt-4">
Rolled plate is not precision flat or precise in thickness.<br/> If a face matters, it must be machined, or use cast tooling plate.
</div>

<!--
Refer to the part from before that was redesigned using 20 mm plates.

The plate thicknesses are the real 6082 T6/T651 list from Salomon's Metalen
(producten.salomons-metalen.nl, read 2026-09-19), trimmed to the range people
actually draw in. Their full list runs 0.5 to 200 mm, and the steps widen as
you go up: fractions of a millimetre low down, 5 mm from 20 to 60, then 10 mm
and coarser.
-->

---

# One turned part, or two pressed together?

<Sketch name="solid-vs-pressed" class="h-96" hint="The same flanged shaft twice: turned from one piece of Ø150 bar, and a Ø40 shaft with a separate flange pressed onto it" />

<div class="aside mt-4">
The ratio is the point, not the minutes: your shop's numbers will differ. The four hours of turning air will not.
</div>

<!--
The dashed arrow is the optional step: if the press fit alone will not carry the load, weld the joint. Say that out loud — a dashed line does not read from the back of the room.

The part: Ø150 bar, 200 mm long, turned down to a Ø40 shaft behind a 20 mm flange. 3534 cm³ of stock, 580 cm³ of part — 3 dm³ of chips, 84 % of what you bought.

Where the times come from: material removal rate on our own lathe, plus setup, not a quote. Three litres of steel at about 15 cm³/min is 3 h 17 of cutting; setup is the rest of the four hours. That is a rate for roughing steel with the interruptions a real job has, not the rate while the insert is in the cut, which is far higher. The 20 min after it is finishing, where removal rate is not what limits you. The assembly route barely removes anything: the shaft is bar already at diameter, the flange a 20 mm slice, so what is left is setup and handling.

Precision is extra on either route — a tight fit, a runout spec, heat treat — but they are cheaper operations on a Ø40 bar than on a Ø150 billet.
-->

---
layout: two-cols-header
---

# Assemble instead of carving one monolith

::left::

### Why an assembly wins

- Each piece is mostly **one setup**,<br/> from **stock already near size**
- Change one piece, not the whole part
- Deep "pockets" become open space between plates
- 2D profiles can be **laser or waterjet cut**

::right::

### What to watch

- Joints need **alignment**:<br/> a fit, dowel pins, or screws
- **Stiffness and tolerances** live in the joint<br/> (see <Link to="tolerances">Tolerances and fits</Link>)
- More parts to assemble and keep track of
- A press fit holds by **friction** and has<br/> torque and axial load limits

::bottom::

<div class="takeaway">
An L-bracket from two plates and four screws beats one milled L. Same rule, round or square.
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
| **Waterjet cutting** | Thick plate, almost any material, no heat | Tapered, rougher edges, lower accuracy |
| **Wire EDM** | Hardened steel, sharp internal corners, accurate profiles in thick stock | Slow, through-profiles only, only conductive materials |
| **Sheet metal bending** | Enclosures, brackets, covers (see <Link to="sheet-metal">Sheet metal</Link>). Light and cheap | Minimum flange lengths, bend radii, loose tolerances |
| **Welding** | Large frames, joining thick sections | Distortion, precise faces need machining afterward |
| **3D printing** | Complex shapes, jigs, quick iterations | Anisotropic strength, creep, accuracy, outgassing |

<div class="takeaway mt-4">
Combine them: a laser-cut plate with a few milled precision features is often the sweet spot.
</div>

<!--
Wire EDM is on this list because it is cheap for us — our shop is the exception. Elsewhere it is the expensive last resort, so say that.

Don't go deep here. The goal is that they know these processes exist and roughly what they're for, so they can ask the workshop "could this be laser cut?"
-->

---

# Take-aways

- **Check the catalog before you draw**: a part you can buy is faster and cheaper than one you design
- Design around **standard stock sizes**
- Build **assemblies of simple pieces** instead of carving one monolith
- Pick the **process** that suits the shape, not the other way around
