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

<FancyArrow from="(140, 270)" to="(193, 346)" arc="-0.25" color="var(--sk-accent)" width="2" />

::right::

| | Monolithic block | Three bolted plates |
|---|---:|---:|
| Material | €300 | €85 |
| Programming | 3.0 h → €240 | 1.5 h → €120 |
| Setups | 4 × 0.75 h → €240 | 5 × 0.25 h → €100 |
| Cycle time | 10.0 h → €800 | 2.0 h → €160 |
| Inspection | 1.0 h → €80 | 0.5 h → €40 |
| Finishing and assembly | €60 | €40 + 0.5 h → €80 |
| Screws and dowels | – | €5 |
| **Total** | <span data-id="mono-total">**€1720**</span> | <span data-id="plates-total">**€590**</span> |

<FancyArrow class="cost-arrow" from="[data-id=mono-total]@bottom" to="[data-id=plates-total]@bottom"
  arc="-0.5" color="var(--sk-accent)" width="2">
  <span class="block translate-y-4 font-semibold text-[var(--sk-accent)]">−66 %</span>
</FancyArrow>

::bottom::

Material is **17 %** of the monolithic part. Time is nearly all of the other 83 %.

<div class="aside mt-2">
€1130 saved on this one part — more than the €800 this meeting cost. You're welcome.
</div>

<!--
The plates column is five setups: the two small plates have holes on two sides, so two setups each, and the large plate is one. The plate material is ordered to size, so nobody pays to mill it to size. Finishing here is deburring every edge, breaking the sharp corners, cleaning, and the anodizing bill — no coating masking on this part. The three plates have more edges to deburr but far less surface to machine, so the finishing half still lands slightly cheaper; the half hour of assembly on top of it, plus the screws and dowels line, is what the split costs you back.
-->

---
layout: two-cols-header
cols: 2/3
---

# Chips are not free

::left::

A [460 × 120 × 133 mm]{.technical} aluminum block:

- 7340 cm³, about **19.8 kg** of material
- The final part is **1650 cm³**
- **78 %** leaves the machine as chips

Every one of those cm³ is removed by a tool that has to reach it, from a direction the part can be clamped in.

::right::

That 78 % costs:

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
You paid for 19.8 kg of aluminium and took home 4.4 kg, leaving €233 worth of chips.
</div>
