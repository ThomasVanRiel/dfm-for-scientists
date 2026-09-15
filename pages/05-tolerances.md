---
layout: section
---

# 5. Tolerances and fits

Tolerance only what matters

---

# Two ways to get it wrong

<div class="grid grid-cols-2 gap-10 mt-8">

<div>

### ±0.01 mm everywhere

- Every face gets slow finishing passes
- Every dimension must be **measured**
- Temperature alone changes an aluminum part by more than that
- The machinist can't tell which ones really matter

</div>

<div>

### Nothing specified

- The machinist has to **guess** what's important
- Mating parts might not fit
- Nobody can say whether a part is **good or bad**
- You get a phone call, or a part that doesn't work

</div>

</div>

<div class="takeaway mt-10" v-click>
Specify tight tolerances on <strong>functional</strong> features. Use a general tolerance for everything else.
</div>

---

# Tolerance vs. cost

<div class="grid grid-cols-5 gap-8 mt-2 items-center">

<div class="col-span-3">

<Sketch name="tolerance-cost"><ToleranceCost /></Sketch>

</div>

<div class="col-span-2">

<v-clicks>

- Cost rises **steeply** as tolerances tighten
- Each step can mean a **different process**: sawing → milling → grinding → lapping
- Below ≈ ±0.02 mm, **measuring** and **temperature** become the problem

</v-clicks>

</div>

</div>

<!--
The curve is qualitative. The typical tolerances per process are rough orders of magnitude; ask the machinist what our machines hold comfortably.
-->

---

# General tolerances: ISO 2768

One note on the drawing covers every dimension without its own tolerance.

| Nominal size (mm) | 0.5–3 | 3–6 | 6–30 | 30–120 | 120–400 | 400–1000 |
|---|---:|---:|---:|---:|---:|---:|
| **f** (fine) | ±0.05 | ±0.05 | ±0.1 | ±0.15 | ±0.2 | ±0.3 |
| **m** (medium) | ±0.1 | ±0.1 | ±0.2 | ±0.3 | ±0.5 | ±0.8 |
| **c** (coarse) | ±0.2 | ±0.3 | ±0.5 | ±0.8 | ±1.2 | ±2 |

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

- Write e.g. **"General tolerances ISO 2768-mK"** in the title block
- The **m** class is a sensible default for machined lab parts

</div>

<div>

- The second letter (**H, K, L**) covers geometric tolerances such as flatness and perpendicularity
- Only dimensions that need more get an explicit tolerance

</div>

</div>

---

# Fits: ISO 286

For shafts in holes, give a **fit** instead of a ± tolerance.

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

| Fit | Type | Use |
|---|---|---|
| **H7/g6** | Clearance | Sliding, rotating, easy to assemble |
| **H7/h6** | Close clearance | Locating, can still be assembled by hand |
| **H7/k6** | Transition | Accurate location, light press |
| **H7/p6** | Interference | Press fit, permanent |

</div>

<div v-click>

### Example: Ø10 H7/g6

- Hole H7: **10.000 to 10.015**
- Shaft g6: **9.986 to 9.995**
- Clearance: **0.005 to 0.029 mm**

<div class="mt-4">
The letter sets the <strong>position</strong>, the number sets the <strong>width</strong> of the tolerance band. Capital = hole, small = shaft.
</div>

</div>

</div>

---

# Surface finish: Ra

| Process | Typical Ra (µm) | Use |
|---|---:|---|
| Sawing, waterjet | 6.3–25 | Non-functional edges |
| Milling, turning | 1.6–3.2 | Most machined faces (a good default) |
| Fine milling, reaming | 0.8–1.6 | Fits, sliding surfaces |
| Grinding | 0.2–0.8 | Bearing seats, precise flat faces |
| Lapping, polishing | < 0.2 | Seals, optics, vacuum flanges |

<div class="takeaway mt-6">
Only specify Ra where it matters: sealing faces, sliding surfaces, optical mounting faces.
</div>

---

# Which features are functional?

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### Tolerance these

- Faces that **mate** with other parts
- Holes and pins that **locate** parts
- **Bearing** and shaft seats
- **Sealing** faces (O-rings, flanges)
- Features that set **optical or beam alignment**

</div>

<div>

### General tolerance is enough

- Outer contours
- Clearance holes
- Pockets for weight reduction or clearance
- Chamfers and edge breaks
- Anything that can be **adjusted** (section 6)

</div>

</div>

<div class="takeaway mt-8" v-click>
For each tolerance, you should be able to say what goes wrong if it's missed.
</div>

---

# Exercise: tolerance stack-up

<div class="grid grid-cols-2 gap-10 mt-4 items-center">

<div>

Four spacers, each **10 ± 0.1 mm**, go into a housing slot of **40.5 ± 0.1 mm**.

**Does it always fit? What is the gap?**

</div>

<Sketch name="stack-up" class="h-80" hint="Four 10 mm spacers in a 40.5 mm slot, with the gap at the end" />

</div>

---

# Stack-up: the answer

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

<div v-click>

### Worst case

- Nominal gap: 40.5 − 4 × 10 = **0.5 mm**
- Tolerances add: 4 × 0.1 + 0.1 = **±0.5 mm**
- Gap: **0.0 to 1.0 mm**: it just fits, with up to 1 mm of play

</div>

</div>

<div v-click>

### Statistical (RSS)

- √(5 × 0.1²) ≈ **±0.22 mm**
- Gap: about **0.28 to 0.72 mm** for nearly all assemblies

### Lessons

- Tolerances **add up** along a chain
- Fewer parts in the chain = less stack-up
- Or design in **adjustment** (section 6)

</div>

</div>

---

# Datums and GD&T, lightly

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### Datums

- **A, B, C**: the reference faces a part is measured from
- They should match how the part is **used**: the face it sits on, the edge it's aligned to
- **3-2-1**: 3 points define a plane, 2 a line, 1 a point
- Dimension features **from datums**, not from each other

</div>

<div v-click>

### GD&T: tolerances on form and position

| Symbol | Controls |
|---|---|
| <span class="text-2xl">⏥</span> | Flatness |
| <span class="text-2xl">⟂</span> | Perpendicularity |
| <span class="text-2xl">∥</span> | Parallelism |
| <span class="text-2xl">⌖</span> | Position of a feature relative to datums |

Know what you're asking for: each one must be **measured**.

</div>

</div>

<!--
Keep this light. The goal is not to make them GD&T experts, but to understand that "the hole must be in the right place" means "relative to what?"
-->

---

# Section 5: take-aways

<v-clicks>

- Cost rises **steeply** with tighter tolerances
- Use **ISO 2768-m** as the default; tighten only **functional** features
- Use **fits** (H7/g6) for shafts and holes
- Specify **Ra** only where it matters
- Tolerances **stack up**; fewer parts in the chain helps
- Dimension from **datums**

</v-clicks>
