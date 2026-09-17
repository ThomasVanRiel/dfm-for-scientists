---
layout: section
routeAlias: tolerances
---

# Tolerances and fits

Tolerance only what [matters]{.marker}

---
layout: two-cols-header
---

# Two ways to get it wrong

::left::

### [±0.01 mm]{.technical} everywhere

- Every face gets slow finishing passes
- Every dimension must be **measured**
- Temperature alone changes an aluminum part by more than that
- The machinist can't tell which ones really matter

::right::

### Nothing specified

- The machinist has to **guess** what's important
- Mating parts might not fit
- Nobody can say whether a part is **good or bad**
- You get a phone call, or a part that doesn't work

::bottom::

<div class="takeaway">
Specify tight tolerances on <strong>functional</strong> features. Use a general tolerance for everything else.
</div>

---

# Tolerance vs. cost

<div class="grid grid-cols-5 gap-8 mt-2 items-center">

<div class="col-span-3">

<Sketch name="tolerance-cost"><ToleranceCost /></Sketch>

</div>

<div class="col-span-2">

- Cost rises **steeply** as tolerances tighten
- Each step can mean a **different process**: sawing → milling → grinding → lapping
- Below ≈ [±0.02 mm]{.technical}, **measuring** and **temperature** become the problem

</div>

</div>

<!--
The curve is qualitative. The typical tolerances per process are rough orders of magnitude; ask the machinist what our machines hold comfortably.
-->

---
layout: center
---

<!-- Replace the placeholder with e.g.:
<video src="/professionals-have-standards.mp4" controls class="h-120 mx-auto" />
(put the file in public/)
-->

<div class="todo text-center p-16">
Video: TF2 "Meet the Sniper", "Professionals have standards"
</div>

<!--
Play the clip, then move straight to ISO 2768.
-->

---
layout: two-cols-header
---

# General tolerances: ISO 2768

One note on the drawing covers every dimension without its own tolerance.

<div class="technical">

| Nominal size (mm) | 0.5–3 | 3–6 | 6–30 | 30–120 | 120–400 | 400–1000 |
|---|---:|---:|---:|---:|---:|---:|
| **f** (fine) | ±0.05 | ±0.05 | ±0.1 | ±0.15 | ±0.2 | ±0.3 |
| **m** (medium) | ±0.1 | ±0.1 | ±0.2 | ±0.3 | ±0.5 | ±0.8 |
| **c** (coarse) | ±0.2 | ±0.3 | ±0.5 | ±0.8 | ±1.2 | ±2 |

</div>

::left::

- Write e.g. **"General tolerances [ISO 2768-mK]{.technical}"** in the title block
- The **m** class is a sensible default for machined lab parts

::right::

- The second letter (**H, K, L**) covers geometric tolerances such as flatness and perpendicularity
- Only dimensions that need more get an explicit tolerance

---
layout: two-cols-header
cols: 3/2
align: center
---

# Fits: ISO 286

For shafts in holes, give a **fit** instead of a ± tolerance.

::left::

| Fit | Type | Use |
|---|---|---|
| [**H7/g6**]{.technical} | Clearance | Sliding, rotating, easy to assemble |
| [**H7/h6**]{.technical} | Close clearance | Locating, can still be assembled by hand |
| [**H7/k6**]{.technical} | Transition | Accurate location, light press |
| [**H7/p6**]{.technical} | Interference | Press fit, permanent |

::right::

### Example: [Ø10 H7/g6]{.technical}

- Hole [H7]{.technical}: **10.000 to 10.015**
- Shaft [g6]{.technical}: **9.986 to 9.995**
- Clearance: [**0.005 to 0.029 mm**]{.technical}

::bottom::

<div class="tip" v-click>
The letter sets the <strong>position</strong>, the number sets the <strong>width</strong> of the tolerance band.<br/>
Capital = hole, small = shaft.
</div>

<div class="tip mt-2" v-click>
A mnemonic for the shaft letters: <strong>h</strong> is <em>home</em>, <strong>g</strong> is <em>glide</em>, <strong>p</strong> is <em>press</em>.
</div>

---
layout: two-cols-header
---

# The fit that holds our flange on

::left::

### [Ø25 H7/p6]{.technical}

- Hole in the flange, H7: [**25.000 to 25.021**]{.technical}
- Shaft, p6: [**25.022 to 25.035**]{.technical}
- Interference: [**0.001 to 0.035 mm**]{.technical}

The shaft is always bigger than the hole. The flange is pushed on with an arbor press and held by friction alone: no key, no screw, no glue.

::right::

### What this buys, and what it costs

- **Two easy parts** instead of one expensive one (see <Link to="cost">What parts actually cost</Link>)
- Only **one diameter on each part** is tightly toleranced
- The other [175 mm]{.technical} of shaft can be ordinary turned stock
- A damaged flange can be **pressed off and replaced**; a shoulder turned from solid cannot

<div class="warning mt-4">
The joint holds by <strong>friction</strong>. It has a torque and axial load limit the solid part doesn't, and pressing adds a little <strong>runout</strong>. If the load is high, add a key or a shoulder.
</div>

::bottom::

<div class="aside mt-6">
Thirty-five microns of interference is the difference between a part and a pile of parts.
</div>

<!--
Worth saying out loud: the press fit is the entire reason the cheap version is cheap. It replaces a feature that would otherwise have to be carved out of solid bar with a tolerance on two diameters.

If there's an arbor press in the workshop, press one on during the tour.
-->

---

# Surface finish: Ra

| Process | Typical Ra (µm) | Use |
|---|---:|---|
| Sawing, waterjet | [6.3–25]{.technical} | Non-functional edges |
| Milling, turning | [1.6–3.2]{.technical} | Most machined faces (a good default) |
| Fine milling, reaming | [0.8–1.6]{.technical} | Fits, sliding surfaces |
| Grinding | [0.2–0.8]{.technical} | Bearing seats, precise flat faces |
| Lapping, polishing | [< 0.2]{.technical} | Seals, optics, vacuum flanges |

<div class="takeaway mt-6">
Only specify Ra where it matters: sealing faces, sliding surfaces, optical mounting faces.
</div>

---
layout: two-cols-header
---

# Which features are functional?

::left::

### Tolerance these

- Faces that **mate** with other parts
- Holes and pins that **locate** parts
- **Bearing** and shaft seats
- **Sealing** faces (O-rings, flanges)
- Features that set **optical or beam alignment**

::right::

### General tolerance is enough

- Outer contours
- Clearance holes
- Pockets for weight reduction or clearance
- Chamfers and edge breaks
- Anything that can be **adjusted** (see <Link to="adjustability">Adjustability</Link>)

::bottom::

<div class="takeaway">
For each tolerance, you should be able to say what goes wrong if it's missed.
</div>

---
layout: two-cols-header
---

# Exercise: tolerance stack-up

::left::

Four spacers, each [**10 ± 0.1 mm**]{.technical}, go into a housing slot of [**40.5 ± 0.1 mm**]{.technical}.

**Does it always fit? What is the gap?**

::right::

<Sketch name="stack-up" class="h-80" hint="Four 10 mm spacers in a 40.5 mm slot, with the gap at the end" />

---
layout: two-cols-header
---

# Stack-up: the answer

::left::

### Worst case

- Nominal gap: [40.5 − 4 × 10 = **0.5 mm**]{.technical}
- Tolerances add: [4 × 0.1 + 0.1 = **±0.5 mm**]{.technical}
- Gap: [**0.0 to 1.0 mm**]{.technical}: it just fits, with up to [1 mm]{.technical} of play

::right::

### Statistical (RSS)

- [√(5 × 0.1²) ≈ **±0.22 mm**]{.technical}
- Gap: about [**0.28 to 0.72 mm**]{.technical} for nearly all assemblies

### Lessons

- Tolerances **add up** along a chain
- Fewer parts in the chain = less stack-up
- Or design in **adjustment** (see <Link to="adjustability">Adjustability</Link>)

---
layout: two-cols-header
---

# Datums and GD&T, lightly

::left::

### Datums

- **A, B, C**: the reference faces a part is measured from
- They should match how the part is **used**: the face it sits on, the edge it's aligned to
- **3-2-1**: 3 points define a plane, 2 a line, 1 a point
- Dimension features **from datums**, not from each other

::right::

### GD&T: tolerances on form and position

| Symbol | Controls |
|---|---|
| <span class="text-2xl">⏥</span> | Flatness |
| <span class="text-2xl">⟂</span> | Perpendicularity |
| <span class="text-2xl">∥</span> | Parallelism |
| <span class="text-2xl">⌖</span> | Position of a feature relative to datums |

Know what you're asking for: each one must be **measured**.

<!--
Keep this light. The goal is not to make them GD&T experts, but to understand that "the hole must be in the right place" means "relative to what?"
-->

---

# Take-aways

- Cost rises **steeply** with tighter tolerances
- Use [**ISO 2768-m**]{.technical} as the default; tighten only **functional** features
- Use **fits** ([H7/g6]{.technical}) for shafts and holes
- Specify **Ra** only where it matters
- Tolerances **stack up**; fewer parts in the chain helps
- Dimension from **datums**
