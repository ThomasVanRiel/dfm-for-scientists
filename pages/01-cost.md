---
layout: section
---

# 1. What parts actually cost

Material, tools, and time are not free

---

# Anatomy of a quote

| Cost item | What it is | Scales with |
|---|---|---|
| **Material** | The stock you start from | Size of the *bounding box*, not the part |
| **Programming** | Turning CAD into toolpaths | Number and complexity of features |
| **Setup** | Fixturing, clamping, zeroing, first-part check | Number of orientations, per batch |
| **Cycle time** | The machine actually cutting | Volume removed, tool changes, slow finishing passes |
| **Inspection** | Measuring what you asked for | Number of tight tolerances |
| **Finishing** | Deburring, anodizing, coating, cleaning | Surface area, masking, special requirements |

<div class="takeaway mt-6">
For one-off lab parts, programming and setup are usually <strong>most</strong> of the cost. The machine hours come second, the material a distant third.
</div>

<!--
Ask the room first: "What do you think is the most expensive part of a machined part?" Most will say material.
-->

---

# Same function, two designs

<div class="todo mb-3">Illustrative numbers at €80/h. Replace with a real before/after quote from our workshop.</div>

| | Monolithic block | Three bolted plates |
|---|---:|---:|
| Material | €25 | €15 |
| Programming | 2.0 h → €160 | 1.0 h → €80 |
| Setups | 4 × 0.5 h → €160 | 3 × 0.25 h → €60 |
| Cycle time | 3.0 h → €240 | 1.0 h → €80 |
| Inspection | 0.5 h → €40 | 0.25 h → €20 |
| Finishing | €40 | €30 |
| Screws and dowels | – | €5 |
| **Total** | **€665** | **€290** |

<div class="mt-4">
Material is <strong>4 %</strong> of the monolithic part. Time is the other 96 %.
</div>

<!--
The strongest version of this slide is a real part from our own workshop with the real hours. Bring the physical parts if you can.
-->

---

# Chips are not free

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

A 120 × 80 × 60 mm aluminum block:

- 576 cm³, about **1.55 kg** of material
- The final part is **58 cm³**
- **90 %** leaves the machine as chips

</div>

<div>

That 90 % costs:

- **Machine time**: every cm³ is removed by a spinning tool
- **Tool wear**: roughing tools wear out
- **Attention**: someone loads, watches, clears chips
- **Waste**: chips are recycled at a fraction of the price you paid
- **Distortion**: removing lots of material releases internal stress (see section 7)

</div>

</div>

<div class="takeaway mt-8">
Start from the closest standard stock size, not from the bounding box.
</div>

---

# Setups and tolerances drive the price

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### Every setup means

- Un-clamping and re-clamping the part
- Finding the zero again
- A new alignment error between faces
- Checking the first cut before continuing

A part with features on 5 faces needs *at least* 5 setups.

</div>

<div>

### Every tight tolerance means

- Slower finishing passes
- Possibly a different machine or process
- Measuring, sometimes on a CMM
- A higher chance of scrapping the part

±0.01 mm on a non-functional face buys you nothing.

</div>

</div>

---

# Section 1: take-aways

- A quote is mostly **time**: programming, setups, cutting, measuring
- **Setups** and **tolerances** often cost more than the material
- Removing 90 % of a block is slow, expensive, and wasteful
- Batch size 1 means setup is the whole cost

<div class="takeaway mt-8">
Every feature costs machine time, tool changes, setups, and someone's attention.
</div>
