---
layout: section
---

# 4. Holes and threads

Small topic, endless trouble

---

# Use standard drill sizes

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

<v-clicks>

- A **standard diameter** is one drill and a few seconds
- An **odd diameter** (Ø7.3) is milled in a circle: slower and less round
- A **precise diameter** (Ø6 H7) is drilled and then **reamed**
- Very small holes (< 2 mm) and very deep holes (> 10 × Ø) need special tools

</v-clicks>

</div>

<div v-click>

### Through or blind?

- **Through holes** are easier: chips escape, taps go through, easy to clean
- **Blind holes** need an extra drill depth, trap chips and fluid, and are hard to clean
- **Flat-bottom** holes need a separate end mill operation

</div>

</div>

---

# Blind holes have a cone

<div class="grid grid-cols-2 gap-10 mt-4 items-center">

<div>

<BlindHole />

</div>

<div>

<v-clicks>

- Drills have a **118°** (or 135°) point that leaves a cone
- A tap can't cut a full thread to the bottom
- So the **drill depth** must be deeper than the **thread depth**
- On a drawing, state both: `M6 ↧ 12, drill Ø5 ↧ 16`
- Don't let the cone break through the other side of the part

</v-clicks>

</div>

</div>

---

# How deep should a thread be?

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

<v-clicks>

- The **first few threads** carry most of the load
- In steel, engagement beyond **≈ 1.5 × D** adds little strength
- In aluminum and brass, use **≈ 2 × D**
- In plastics, tapped threads are weak: use **inserts**
- Deeper threads = longer tapping, more broken taps

</v-clicks>

</div>

<div v-click>

| Thread | Tap drill | 1.5 × D | 2 × D |
|---|---:|---:|---:|
| M3 | 2.5 | 4.5 | 6 |
| M4 | 3.3 | 6 | 8 |
| M5 | 4.2 | 7.5 | 10 |
| M6 | 5.0 | 9 | 12 |
| M8 | 6.8 | 12 | 16 |

<div class="text-xs opacity-60 mt-1">All dimensions in mm, coarse metric threads.</div>

</div>

</div>

---

# Clearance holes and counterbores

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

| Screw | Clearance (medium) | Counterbore Ø | Counterbore depth |
|---|---:|---:|---:|
| M3 | 3.4 | 6.5 | 3.4 |
| M4 | 4.5 | 8 | 4.4 |
| M5 | 5.5 | 10 | 5.4 |
| M6 | 6.6 | 11 | 6.4 |
| M8 | 9.0 | 15 | 8.6 |

<div class="text-xs opacity-60 mt-1">mm; clearance per ISO 273, counterbores for ISO 4762 socket head cap screws. Check your CAD hole wizard.</div>

</div>

<div>

<v-clicks>

- Use the **clearance** size, not the thread size: an M6 screw doesn't go into a Ø6 hole
- Clearance holes give **play**: they don't locate parts (use dowels, section 6)
- **Counterbores** let screw heads sit flush
- Use the CAD **hole wizard**, so the workshop can read the intent

</v-clicks>

</div>

</div>

---

# Threads in soft materials

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### The problem

- Threads in aluminum, brass, and plastics **wear** with repeated assembly
- Steel screws **strip** soft threads easily
- Test setups get taken apart **a lot**

</div>

<div v-click>

### The fixes

- **Wire thread inserts** (helicoils) in metals: strong, wear-resistant, replaceable
- **Threaded inserts** (heat-set, press-in) in plastics
- A **through hole with a nut** where there is room
- Longer engagement (2 × D)

</div>

</div>

<div class="warning mt-8" v-click>
In vacuum: a screw in a blind hole traps a volume of air that leaks out slowly (a "virtual leak"). Use vented screws or a vent hole.
</div>

---

# Use as few screw sizes as possible

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

Every different screw size means:

<v-clicks>

- Another drill, another tap, another **tool change**
- Another **hex key** for whoever assembles it
- Another box of screws to stock
- More chance of the wrong screw in the wrong hole

</v-clicks>

</div>

<div v-click>

### Pick a small set

- e.g. **M3** for small parts, **M6** for structure
- Match the lab's **optical table** thread (often M6)
- Use the same **screw lengths** where possible

<div class="todo mt-4">Agree on a lab standard with the workshop.</div>

</div>

</div>

---

# Section 4: take-aways

<v-clicks>

- Use **standard** drill sizes. Ream only where it matters
- **Blind holes** need extra drill depth for the cone and tap
- Thread depth **≈ 1.5 × D** in steel, **≈ 2 × D** in soft metals
- **Clearance holes** don't locate parts
- Use **inserts** in soft materials
- Use **few** screw sizes

</v-clicks>
