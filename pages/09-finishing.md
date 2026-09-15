---
layout: section
---

# 9. Finishing and secondary operations

The part isn't done when it leaves the mill

---

# Anodizing and coatings add thickness

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

| Finish | Layer (µm) | Notes |
|---|---:|---|
| Anodizing (Type II) | 5–25 | About half grows outward |
| Hard anodizing (Type III) | 25–75 | Wear resistant, about half outward |
| Electroless nickel | 5–25 | Very uniform, also in holes |
| Chromate conversion | < 1 | Stays conductive |
| Passivation (stainless) | ≈ 0 | Improves corrosion resistance |
| Powder coating | 60–120 | Not for precision surfaces |

</div>

<div>

### What that means

- A hole **shrinks** by twice the build-up: an H7 fit may no longer fit
- Threads get **tight**
- Anodizing is an electrical **insulator**: grounding and contact
- Anodizing is **porous**: not for vacuum

### So

- **Mask** fits, threads, and contact surfaces
- Tell the workshop **before** machining, so they can compensate

</div>

</div>

---

# Deburring and edge breaks

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

- Every machined edge leaves a **burr**
- Sharp edges **cut** people, gloves, and cables
- Burrs **prevent** parts from sitting flat
- Burrs inside **cross holes** are hard to reach, and can come loose later

</div>

<div>

### On the drawing

- A general note: **"Break all edges 0.2–0.5 mm"**
- Or specify per ISO 13715
- Mark edges that must stay **sharp** (e.g. knife edges) explicitly
- Avoid intersecting holes where you can

</div>

</div>

---

# Heat treatment and welding

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### Heat treatment

- Hardening **changes dimensions** and can **warp** the part
- Hardened steel is very hard to machine
- Order: **rough machine → heat treat → grind or finish**
- Specify what you need: e.g. **hardness in HRC**

</div>

<div>

### Welding

- Welds **shrink** as they cool and **pull** the part out of shape
- A welded frame is never precise as welded
- Order: **weld → stress relieve → machine** the precise faces
- Leave **machining allowance** on faces that matter

</div>

</div>

<div class="takeaway mt-8">
The order of operations is part of the design. Discuss it with the workshop.
</div>

---

# Cleaning for sensitive environments

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

Vacuum, optics, cleanrooms, and biology all need **clean** parts.

- **Cutting fluid** and oil residue outgas and contaminate
- **Blind holes** and threads trap fluid and chips
- **Silicone** lubricants spread and are hard to remove
- Fingerprints are contamination too

</div>

<div>

### What to do

- State the **cleaning requirement** on the drawing or order
- Agree on the procedure: degreasing, ultrasonic, rinsing
- Ask for **suitable cutting fluids** if needed
- Specify **packaging**: gloves, clean bags
- Avoid blind holes where you can

<div class="todo mt-4">Add our lab's cleaning procedure.</div>

</div>

</div>

---

# Section 9: take-aways

- Coatings add **thickness**: mask or compensate fits and threads
- Specify **edge breaks**
- **Heat treatment** and **welding** distort: finish machining afterward
- State **cleaning** requirements up front
- The **order of operations** is part of the design

