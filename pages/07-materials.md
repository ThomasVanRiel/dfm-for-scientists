---
layout: section
---

# 7. Materials from a manufacturing perspective

Machinability, stability, and the lab environment

---
class: text-sm
---

# Machinability and cost

| Material | Machinability | Notes |
|---|---|---|
| **Aluminum 6061 / 6082** | Excellent | Default choice. Cheap, fast to machine, light |
| **Aluminum 7075** | Excellent | Stronger, more expensive |
| **Cast aluminum tooling plate** | Excellent | Stress-free and precision flat. Great for base plates |
| **Free-cutting brass** | Excellent | Easy, but contains zinc and lead (not for vacuum bake-out) |
| **Structural / free-cutting steel** | Good | Cheap, stiff, rusts |
| **Stainless 303** | Fair | The machinable stainless |
| **Stainless 304 / 316L** | Poor | Gummy, work-hardens, wears tools. Slower and more expensive |
| **Titanium** | Poor | Slow, expensive tools, only when you really need it |
| **POM (Delrin)** | Excellent | Stable, low friction. The default plastic |
| **PEEK** | Good | Expensive. Vacuum and chemically resistant |
| **PTFE (Teflon)** | Fair | Creeps and deforms, hard to hold tolerances |

<div class="todo mt-2">Add relative prices from our supplier.</div>

---

# Residual stress: parts that warp

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

<v-clicks>

- Rolled plate and bar contain **internal stresses** from production
- Remove lots of material, especially from **one side**, and the part **bows**
- It can look fine on the machine and warp **after unclamping**
- Hours or days later it may still move

</v-clicks>

</div>

<div v-click>

### What helps

- Use **stress-relieved** or **cast tooling plate**
- Remove material **symmetrically**
- **Rough**, unclamp, let it rest, then **finish**
- Avoid removing 90 % of a block (section 1)
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

<v-clicks>

- A **200 mm** aluminum plate, **5 K** warmer:<br/>23 × 0.2 × 5 = **23 µm** longer
- So ±0.01 mm means nothing without a **temperature**
- **Mixed materials** (aluminum on steel) bend like a bimetal, or bolts slip
- Plastics move **5–10 ×** more than metals
- Cryogenic setups: parts **shrink** a lot, and differently

</v-clicks>

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

# Section 7: take-aways

<v-clicks>

- **Aluminum** is the default: cheap and fast to machine
- **Stainless** and **titanium** cost much more machine time
- Removing lots of material causes **warping**. Use stress-free plate
- **Thermal expansion** often beats your tolerance
- Check **vacuum**, **magnetic**, and **chemical** compatibility early

</v-clicks>
