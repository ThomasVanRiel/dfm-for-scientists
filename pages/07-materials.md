---
layout: section
routeAlias: materials
---

# Materials from a [manufacturing]{.marker} perspective

Machinability, stability, and the lab environment

---
class: text-sm
---

# Machinability and cost

| Material | Machinability | Cost | Notes |
|---|:---:|:---:|---|
| **Aluminum 6061 / 6082** | <Rating :value="4" tone="blue" label="Excellent" /> | <Rating :value="1" tone="amber" label="Low" /> | Default choice. Cheap, fast to machine, light |
| **Aluminum 7075** | <Rating :value="4" tone="blue" label="Excellent" /> | <Rating :value="2" tone="amber" label="Moderate" /> | Stronger, more expensive |
| **Cast aluminum tooling plate** | <Rating :value="4" tone="blue" label="Excellent" /> | <Rating :value="2" tone="amber" label="Moderate" /> | Stress-free and precision flat. Great for base plates |
| **Free-cutting brass** | <Rating :value="4" tone="blue" label="Excellent" /> | <Rating :value="3" tone="amber" label="High" /> | Easy, but contains zinc and lead (not for vacuum bake-out) |
| **Structural / free-cutting steel** | <Rating :value="3" tone="blue" label="Good" /> | <Rating :value="1" tone="amber" label="Low" /> | Cheap, stiff, rusts |
| **Stainless 303** | <Rating :value="2" tone="blue" label="Fair" /> | <Rating :value="2" tone="amber" label="Moderate" /> | The machinable stainless |
| **Stainless 304 / 316L** | <Rating :value="1" tone="blue" label="Poor" /> | <Rating :value="3" tone="amber" label="High" /> | Gummy, work-hardens, wears tools. Slower and more expensive |
| **Titanium** | <Rating :value="1" tone="blue" label="Poor" /> | <Rating :value="4" tone="amber" label="Very high" /> | Slow, expensive tools, only when you really need it |
| **POM (Delrin)** | <Rating :value="4" tone="blue" label="Excellent" /> | <Rating :value="1" tone="amber" label="Low" /> | Stable, low friction. The default plastic |
| **PEEK** | <Rating :value="3" tone="blue" label="Good" /> | <Rating :value="4" tone="amber" label="Very high" /> | Expensive. Vacuum and chemically resistant |
| **PTFE (Teflon)** | <Rating :value="2" tone="blue" label="Fair" /> | <Rating :value="2" tone="amber" label="Moderate" /> | Creeps and deforms, hard to hold tolerances |

<div class="text-xs opacity-70 mt-2">
<Rating :value="3" tone="blue" /> more circles = easier to machine &nbsp;·&nbsp;
<Rating :value="3" tone="amber" /> more circles = more expensive
</div>

---
layout: two-cols-header
---

# Residual stress: parts that warp

::left::

- Rolled plate and bar contain **internal stresses** from production
- Remove lots of material, especially from **one side**, and the part **bows**
- It can look fine on the machine and warp **after unclamping**
- Hours or days later it may still move

::right::

### What helps

- Use **stress-relieved** or **cast tooling plate**
- Remove material **symmetrically**
- **Rough**, unclamp, let it rest, then **finish**
- Avoid removing 90 % of a block<br/> (see <Link to="cost">What parts actually cost</Link>)
- Leave **stiffness** in the part: ribs, flanges

---
layout: two-cols-header
cols: 2/3
---

# Thermal expansion

::left::

| Material | α (µm / m·K) |
|---|---:|
| Invar | ≈ 1.2 |
| Titanium | ≈ 8.6 |
| Steel | ≈ 12 |
| Stainless 304 | ≈ 17 |
| Copper | ≈ 17 |
| Aluminum | ≈ 23 |
| PEEK | ≈ 47 |
| POM | ≈ 110 |

::right::

- A [**200 mm**]{.technical} aluminum plate, **5 K** warmer:<br/>[23 × 0.2 × 5 = **23 µm**]{.technical} longer
- So [±0.01 mm]{.technical} means nothing without a **temperature**
- **Mixed materials** (aluminum on steel) bend like a bimetal, or bolts slip
- Plastics move **5–10 ×** more than metals
- Cryogenic setups: parts **shrink** a lot, and differently

---
layout: two-cols-header
---

# Combining metals: the least noble one corrodes

::left::

| Galvanic series | V vs SCE | |
|---|---:|:--|
| Magnesium | −1.6 | <Galvanic :value="-4" label="Dissolves fastest" /> |
| Zinc (galvanized steel) | −1.0 | <Galvanic :value="-3" /> |
| **Aluminum** | −0.8 | <Galvanic :value="-2" /> |
| Carbon steel, tin, solder | −0.6 | <Galvanic :value="-1" /> |
| **Brass, copper** | −0.3 | <Galvanic :value="1" /> |
| **Stainless steel (passive)** | −0.1 | <Galvanic :value="2" /> |
| Titanium | 0.0 | <Galvanic :value="3" /> |
| Graphite, carbon fibre, gold | +0.2 | <Galvanic :value="4" label="Protected, and hard on its neighbours" /> |

<div class="text-xs opacity-70 mt-2 text-center">
<Galvanic :value="-2" :max="2" /> dissolves &nbsp;·&nbsp;
<Galvanic :value="2" :max="2" /> protected &nbsp;·&nbsp;
typical in seawater (± 0.1 V)
</div>

::right::

### Seen in the lab

- Stainless **screws** in an aluminum plate:<br/> fine, the plate corrodes but spread thin
- Steel **dowels** pressed into aluminum:<br/> the aluminum goes first
- **Brass or bronze** on aluminum,<br/>bushings, inserts, fittings: a classic mistake

::bottom::

<div class="takeaway">
Cut the <strong>path</strong> with a plastic washer, bush, or grease, treat the <strong>surface</strong> with <Link to="finishing">anodizing</Link> or plating,<br/> or remove the <strong>water</strong> with a dry joint that gives a drop nowhere to sit. You only need one of the three.
</div>

<!--
What helps, in the order you should reach for it. Break the path: a plastic washer, a shouldered bush, a bonded-in titanium or stainless fitting. Treat the surface: anodizing, passivation, plating — but remember a screw cuts straight through an anodized face, and plating wears through where parts rub. Remove the water: dry air, and no crevices, blind gaps or upward-facing joints for a drop to sit in.

The numbers are typical corrosion potentials in seawater (ASTM G82), not textbook standard electrode potentials. That matters: E° for iron and chromium would put stainless near the corroding end, while in practice its passive oxide layer lands it next to copper. Passive is the key word — starve stainless of oxygen, in a crevice or under a gasket, and it drops back down the list.

They are rounded to a tenth. A real series prints bands rather than points, because alloy, temper and surface move a metal by about that much: 7075 sits nearer −0.9 than the −0.8 quoted here for aluminum. Rounding is safe as long as nobody reads a 0.1 V difference as meaningful — the thresholds worth quoting out loud are 0.25 V between metals, or 0.15 V if the joint ever gets wet.

The bottom row is the one that surprises people: graphite and carbon fibre sit at the noble end with gold, and they conduct. A carbon-fibre tube or breadboard bolted straight to an aluminum fitting is a large cathode against a small anode — the worst area ratio there is — and it eats the aluminum. Use a bonded-in titanium or stainless fitting, or an insulating bush.

Dry lab air is why most setups survive this at all. It becomes real the moment there is condensation, a cooling circuit, a cleaning step, or anything outdoors. Brass inserts pressed into aluminum are the other common offender.
-->

---

# Lab-specific concerns

<div class="grid grid-cols-2 gap-x-10 gap-y-4 mt-2 text-sm">

<div>

### Vacuum

- Prefer **304L / 316L**, bare aluminum, OFHC copper, **PEEK**, ceramics
- Avoid **porous** surfaces (anodizing), POM, PVC, nylon, most glues
- Avoid **zinc and cadmium** (brass, some platings) for bake-out
- Vent **trapped volumes** (blind holes, screws)

</div>

<div>

### Magnetism

- **304** becomes magnetic after **machining** or cold work
- Use **316L**, titanium, aluminum, copper, or brass
- Check the **screws**, inserts, and springs too

</div>

<div>

### Chemical resistance

- **Aluminum** is attacked by acids and bases
- **PTFE**, **PEEK**, and **PP** resist most chemicals
- Check the specific chemical, temperature, and duration

</div>

<div>

### Also consider

- **Electrical**: anodizing insulates, which is bad for grounding
- **Cryogenic**: normal carbon steel becomes brittle
- **Radiation, UV, cleanroom** requirements

</div>

</div>

---

# Take-aways

- **Aluminum** is the default: cheap and fast to machine
- **Stainless** and **titanium** cost much more machine time
- Removing lots of material causes **warping**. Use stress-free plate
- **Thermal expansion** often beats your tolerance
- **Mixing metals** costs you twice: bimetal bending and galvanic corrosion
- Check **vacuum**, **magnetic**, and **chemical** compatibility early

