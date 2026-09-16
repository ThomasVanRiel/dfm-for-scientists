<!--
  Section 1, worked example: TURNING.
  Swap with 01-cost-milling.md in slides.md for an audience that mills.
  The shared slides live in 01-cost.md and 01-cost-drivers.md.
-->

# Same function, two designs

<div class="todo mb-3">Illustrative numbers at €80/h. Replace with a real before/after quote from our workshop.</div>

<div class="grid grid-cols-5 gap-8 items-center">

<div class="col-span-2">

<Sketch name="solid-vs-pressed" class="h-64" hint="The same flanged shaft twice: turned from one piece of Ø100 bar, and a Ø25 shaft with a separate flange pressed onto it" />

</div>

<div class="col-span-3">

| | Turned from solid | Shaft + pressed flange |
|---|---:|---:|
| Material | €45 | €15 |
| Programming | 1.5 h → €120 | 1.0 h → €80 |
| Setups | 3 × 0.5 h → €120 | 3 × 0.25 h → €60 |
| Cycle time | 2.0 h → €160 | 0.75 h → €60 |
| Inspection | 0.5 h → €40 | 0.25 h → €20 |
| Finishing | €40 | €30 |
| Pressing | – | €10 |
| **Total** | **€525** | **€275** |

</div>

</div>

<div class="mt-4">
Material is <strong>9 %</strong> of the part turned from solid. Time is the other 91 %.
</div>

<!--
The strongest version of this slide is a real part from our own workshop with the real hours. Bring the physical parts if you can.

The two-part column is three setups for two parts: one for the shaft, two for the flange (turn it, then drill the bolt circle). Pressing is minutes on an arbor press.
-->

---

# Chips are not free

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

To turn the flanged shaft from solid you buy Ø100 bar, 192 mm long:

- 1508 cm³, about **11.8 kg** of steel
- The final part is **183 cm³**, about **1.4 kg**
- **88 %** leaves the machine as chips

The flange is 12 mm of that length. The other 180 mm of Ø100 bar exists only so a Ø25 shaft can be cut out of the middle of it.

</div>

<div>

That 88 % costs:

- **Machine time**: every cm³ is removed by a spinning tool
- **Tool wear**: roughing steel is hard on inserts
- **Attention**: someone loads, watches, clears chips
- **Waste**: chips are recycled at a fraction of the price you paid
- **Distortion**: removing lots of material releases internal stress (see section 7)

</div>

</div>

<div class="takeaway mt-8">
Start from the closest standard stock size, not from the bounding box. Here that means two stock sizes, not one big one.
</div>

<div class="aside mt-4">
You paid for 11.8 kg of steel and took home 1.4 kg. The rest left in a bin worth 20 cents a kilo.
</div>

---
