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

# Residual stress: parts that warp

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

- Rolled plate and bar contain **internal stresses** from production
- Remove lots of material, especially from **one side**, and the part **bows**
- It can look fine on the machine and warp **after unclamping**
- Hours or days later it may still move

</div>

<div>

### What helps

- Use **stress-relieved** or **cast tooling plate**
- Remove material **symmetrically**
- **Rough**, unclamp, let it rest, then **finish**
- Avoid removing 90 % of a block (see <Link to="cost">What parts actually cost</Link>)
- Leave **stiffness** in the part: ribs, flanges

</div>

</div>

---

# Thermal expansion

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

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

</div>

<div>

- A **200 mm** aluminum plate, **5 K** warmer:<br/>23 × 0.2 × 5 = **23 µm** longer
- So [±0.01 mm]{.technical} means nothing without a **temperature**
- **Mixed materials** (aluminum on steel) bend like a bimetal, or bolts slip
- Plastics move **5–10 ×** more than metals
- Cryogenic setups: parts **shrink** a lot, and differently

</div>

</div>

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

<div class="todo mt-4">Add the rules specific to our lab's setups.</div>

---

# Take-aways

- **Aluminum** is the default: cheap and fast to machine
- **Stainless** and **titanium** cost much more machine time
- Removing lots of material causes **warping**. Use stress-free plate
- **Thermal expansion** often beats your tolerance
- Check **vacuum**, **magnetic**, and **chemical** compatibility early

