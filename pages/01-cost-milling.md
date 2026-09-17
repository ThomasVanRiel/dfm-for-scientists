---
layout: two-cols-header
cols: 2/3
align: center
---

<!--
  Section 1, worked example: MILLING.
  Swap with 01-cost-turning.md in slides.md for an audience that turns.
  The shared slides live in 01-cost.md and 01-cost-drivers.md.
-->

# Same function, two designs

::left::

<Sketch name="monolith-vs-plates" class="h-64" hint="The same bracket twice: milled from one solid block, and bolted together from three plates" />

::right::

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

::bottom::

Material is **4 %** of the monolithic part. Time is the other 96 %.

<!--
The strongest version of this slide is a real part from our own workshop with the real hours. Bring the physical parts if you can.

The plates column is three setups for three parts, because each plate is mostly one operation. The screws and dowels line is what the assembly costs you back.
-->

---
layout: two-cols-header
---

# Chips are not free

::left::

A [120 × 80 × 60 mm]{.technical} aluminum block:

- 576 cm³, about **1.55 kg** of material
- The final part is **58 cm³**
- **90 %** leaves the machine as chips

Every one of those cm³ is removed by a tool that has to reach it, from a direction the part can be clamped in.

::right::

That 90 % costs:

- **Machine time**: every cm³ is removed by a spinning tool
- **Tool wear**: roughing tools wear out
- **Attention**: someone loads, watches, clears chips
- **Waste**: chips are recycled at a fraction of the price you paid
- **Distortion**: removing lots of material releases internal stress (see <Link to="materials">Materials</Link>)

::bottom::

<div class="takeaway">
Start from the closest standard stock size, not from the bounding box.
</div>

<div class="aside mt-4">
You paid for 1.55 kg of aluminium and took home 157 g. The rest left in a bin worth 30 cents a kilo.
</div>
