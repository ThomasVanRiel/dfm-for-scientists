---
layout: section
---

# 3. How a milling machine sees your part

The heart of the course

---

# Tools are round

<div class="grid grid-cols-2 gap-10 mt-4 items-center">

<div>

<Sketch name="corner-radius"><CornerRadius /></Sketch>

</div>

<div>

A spinning end mill can't cut a sharp internal corner.

- Every internal vertical corner gets **at least the tool radius**
- Make the radius **slightly larger** than the tool radius, so the tool doesn't wrap around the corner and chatter
- **Larger radius = larger tool** = stiffer, faster, cheaper
- If a square part must fit into a pocket: add **dog-bone** relief cuts

</div>

</div>

<!--
Hold up an end mill. Let them feel that it is round.
-->

---

# Tools are short

<div class="grid grid-cols-2 gap-10 mt-4 items-center">

<div>

<Sketch name="pocket-depth"><PocketDepth /></Sketch>

</div>

<div>

- Rule of thumb: pocket depth **≤ 3–4 × tool diameter**
- Longer tools **deflect** (stiffness drops with length³) and **chatter**
- They need slow feeds and light cuts, so they take a long time
- A 6 mm slot, 40 mm deep: expensive or impossible
- Narrow **and** deep is the combination to avoid

</div>

</div>

<div class="takeaway mt-6">
Make pockets wider or shallower, or open them to one side. Or build the part from plates.
</div>

---

# Thin walls vibrate

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

- Cutting forces push thin walls away, so they end up **thicker at the top**
- The wall **rings** like a tuning fork and leaves a poor surface
- **Clamping** forces bend them. They spring back when released
- Removing material on one side releases **stress** (section 7)

</div>

<div>

### Rules of thumb

- Metals: walls **≥ 1 mm**, more for tall walls
- Plastics: walls **≥ 2 mm**
- Keep wall height moderate relative to thickness
- Add **ribs** or a lip at the top for stiffness

<div class="todo mt-4">Check these numbers with our machinist.</div>

</div>

</div>

---

# Every feature needs a direction

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

On a 3-axis mill, the tool only comes **from above**.

- Features on 5 faces → at least **5 setups**
- Every reorientation: re-clamp, re-zero, new alignment error
- Features on different faces are only as well aligned as the setups
- Holes at odd angles need special fixtures or a 5-axis machine

</div>

<div>

### Design for fewer setups

- Put features on **as few faces as possible**
- Put all features that must align with each other **on the same face**
- Prefer holes parallel to the main axes
- Ask: "From which direction is this cut?"

</div>

</div>

---

# Holding the part

<Sketch name="vise-clamping" class="h-96" hint="A part clamped in a vise: jaws, parallels underneath, and the zone the tool can't reach" />

---

# The machinist has to hold it

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

- A vise needs **two parallel faces** to grip
- The jaws cover a few mm, and **nothing can be cut there**
- Clamping force **distorts** thin or delicate parts
- Round, organic, or fully machined parts have **nothing to grip**

</div>

<div>

### Help the machinist

- Keep **flat, parallel reference faces**
- Allow **extra stock** or a clamping tab that is removed at the end
- Provide **holes** that can be used to bolt the part to a fixture
- Don't machine every surface just because you can

</div>

</div>

<div class="takeaway mt-8">
If you can't imagine how the part is clamped, the machinist can't either.
</div>

<!--
This is the ideal moment for a workshop tour: show a vise, soft jaws, a fixture plate, and a part being flipped.
-->

---

# Easy in CAD, hard in metal

| CAD feature | Why it's hard | Alternative |
|---|---|---|
| **Sharp internal corners** | Tools are round | Radius, dog-bone relief |
| **Undercuts** | Need special T-slot or dovetail cutters | Split into two parts |
| **Internal cavities** | No tool can get in | Split, or use a plate with a lid |
| **Deep narrow slots** | Long tools deflect | Wider slot, plates, wire EDM |
| **Tiny radii in deep pockets** | Tiny tools break | Larger radius |
| **3D freeform surfaces** | Ball-nose tools, very slow | Flat faces and chamfers |
| **Engraved text** | Tiny tools, long toolpaths | Label or laser marking |
| **Features on every face** | Many setups | Put features on fewer faces |

---

# Section 3: take-aways

- Tools are **round**: internal corners need radii
- Tools are **short**: depth ≤ 3–4 × tool diameter
- Thin walls **vibrate and deflect**
- Every face with features is **another setup**
- The part has to be **clamped** somewhere
- If it looks trivial in CAD, **ask** anyway

