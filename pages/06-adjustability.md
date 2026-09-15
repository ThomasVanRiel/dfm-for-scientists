---
layout: section
---

# 6. Adjustability instead of precision

Design for alignment, not for perfection

---

# Precision or adjustment?

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### Demand precision

- Five parts at ±0.01 mm each
- Expensive, slow, and measured on a CMM
- Still off by the **stack-up**, temperature, and assembly
- When the setup changes, you need **new parts**

</div>

<div v-click>

### Design in adjustment

- Five parts at ISO 2768-m
- One or two **adjustment** features
- Aligned to the **actual** beam, sample, or sensor
- Can be **re-aligned** when the setup changes

</div>

</div>

<div class="takeaway mt-8" v-click>
In a test setup you usually align to the physics, not to the drawing. Adjustment gets you there more cheaply.
</div>

---

# The adjustment toolbox

| Feature | Range | Notes |
|---|---|---|
| **Slotted holes** | mm | Simplest. Lock with screws, maybe a dowel afterward |
| **Shims** | 0.01–1 mm steps | Cheap, stable, repeatable. Standard shim stock |
| **Set screws / push-pull screws** | 0.1–1 mm | Fine adjustment, lock with a counter screw |
| **Eccentric pins or bushings** | < 1 mm | Compact, rotational adjustment |
| **Fine-pitch adjusters, micrometers** | µm–mm | Buy them (section 2) |
| **Flexures** | µm–0.1 mm | No friction, no backlash |

<div class="warning mt-6">
Always include a way to <strong>lock</strong> the adjustment. An adjustment that drifts is worse than none.
</div>

---

# Exact constraint

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

A rigid body has **6 degrees of freedom**: 3 translations, 3 rotations.

<v-clicks>

- **Exactly constrained**: each DOF constrained once. Stable, repeatable, no stress
- **Over-constrained**: constrained more than once. It rocks, jams, or gets stressed and warps
- **Under-constrained**: it wobbles

</v-clicks>

</div>

<div v-click>

### Examples

- A **three-legged stool** never rocks. A four-legged one does
- A shaft in **two tight bearings** that aren't perfectly aligned: over-constrained
- **Two tight dowel pins**: over-constrained (next slides)

</div>

</div>

<!--
Physicists usually love this. Connect it to degrees of freedom they already know from mechanics.
-->

---

# Kinematic mounts

<div class="grid grid-cols-2 gap-10 mt-4 items-center">

<div>

<Sketch name="kinematic-mount"><KinematicMount /></Sketch>

</div>

<div>

### Kelvin clamp

Three balls on three different features:

- **Cone**: 3 constraints
- **V-groove**, pointing at the cone: 2 constraints
- **Flat**: 1 constraint

3 + 2 + 1 = **6**: exactly constrained

<v-clicks>

- Repeatability of **micrometers** when you remove and replace it
- Needs **preload**: gravity, springs, or magnets
- **Maxwell** variant: three V-grooves at 120°

</v-clicks>

</div>

</div>

---

# Dowel pins for repeatable positioning

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

<v-clicks>

- Screws **clamp**, dowels **locate**. Clearance holes have play
- **Press fit** in one part, **slip fit** in the other
- Use **two** pins, as far apart as possible
- Make **one hole round** and the **other a slot** (or use a diamond pin), so the pins aren't over-constrained
- Holes are **reamed** (H7)

</v-clicks>

</div>

<div v-click>

### Practical details

- **Blind** dowel holes: add a vent, or use pins with an extraction thread
- Don't put dowels in **both** parts as press fits: you'll never get them apart
- Drill and ream both parts **together** for the best alignment, if the workshop agrees

</div>

</div>

---

# One round hole, one slot

<Sketch name="dowel-hole-slot" class="h-96" hint="Two plates located by two dowel pins: a round hole at one pin, a slot pointing at it for the other" />

---

# Flexures

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

Motion by **bending** material instead of sliding or rolling.

<v-clicks>

- **No friction**, **no backlash**, **no wear**
- Resolution down to **nanometers**
- Small range: typically µm to a fraction of a mm
- Can be made from one piece by milling or wire EDM

</v-clicks>

</div>

<div v-click>

### Typical uses

- Fine alignment stages
- Parallel leaf-spring guides
- Mirror and sample mounts
- Strain relief between parts with different thermal expansion

<div class="warning mt-4">Keep stresses well below the fatigue limit. Ask for help sizing them.</div>

</div>

</div>

---

# Section 6: take-aways

<v-clicks>

- **Adjustment** is often cheaper and better than precision
- Always add a way to **lock** the adjustment
- Constrain each degree of freedom **exactly once**
- **Kinematic mounts** give µm repeatability
- **Dowels** locate: one round hole, one slot
- **Flexures**: fine motion without friction or backlash

</v-clicks>
