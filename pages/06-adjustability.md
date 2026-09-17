---
layout: section
routeAlias: adjustability
---

# Adjustability [instead of]{.marker} precision

Design for alignment, not for perfection

---
layout: two-cols-header
---

# Precision or adjustment?

::left::

### Demand precision

- Five parts at [±0.01 mm]{.technical} each
- Expensive, slow, and measured on a CMM
- Still off by the **stack-up**, temperature, and assembly
- When the setup changes, you need **new parts**

::right::

### Design in adjustment

- Five parts at [ISO 2768-m]{.technical}
- One or two **adjustment** features
- Aligned to the **actual** beam, sample, or sensor
- Can be **re-aligned** when the setup changes

::bottom::

<div class="takeaway">
In a test setup you usually align to the physics, not to the drawing. Adjustment gets you there more cheaply.
</div>

---

# The adjustment toolbox

| Feature | Range | Notes |
|---|---|---|
| **Slotted holes** | [mm]{.technical} | Simplest. Lock with screws, maybe a dowel afterward |
| **Shims** | [0.01–1 mm]{.technical} steps | Cheap, stable, repeatable. Standard shim stock |
| **Set screws / push-pull screws** | [0.1–1 mm]{.technical} | Fine adjustment, lock with a counter screw |
| **Eccentric pins or bushings** | [< 1 mm]{.technical} | Compact, rotational adjustment |
| **Fine-pitch adjusters, micrometers** | [µm–mm]{.technical} | Buy them (see <Link to="buy-assemble-machine">Buy, assemble, or machine</Link>) |
| **Flexures** | [µm–0.1 mm]{.technical} | No friction, no backlash |

<div class="warning mt-6">
Always include a way to <strong>lock</strong> the adjustment. An adjustment that drifts is worse than none.
</div>

---
layout: two-cols-header
---

# Exact constraint

::left::

A rigid body has **6 degrees of freedom**: 3 translations, 3 rotations.

- **Exactly constrained**: each DOF constrained once. Stable, repeatable, no stress
- **Over-constrained**: constrained more than once. It rocks, jams, or gets stressed and warps
- **Under-constrained**: it wobbles

::right::

### Examples

- A **three-legged stool** never rocks. A four-legged one does
- A shaft in **two tight bearings** that aren't perfectly aligned: over-constrained
- **Two tight dowel pins**: over-constrained (next slides)

<!--
Physicists usually love this. Connect it to degrees of freedom they already know from mechanics.
-->

---
layout: two-cols-header
---

# Kinematic mounts

::left::

<Sketch name="kinematic-mount"><KinematicMount /></Sketch>

::right::

### Kelvin clamp

Three balls on three different features:

- **Cone**: 3 constraints
- **V-groove**, pointing at the cone: 2 constraints
- **Flat**: 1 constraint

3 + 2 + 1 = **6**: exactly constrained

- Repeatability of **micrometers** when you remove and replace it
- Needs **preload**: gravity, springs, or magnets
- **Maxwell** variant: three V-grooves at [120°]{.technical}

---
layout: two-cols-header
---

# Dowel pins for repeatable positioning

::left::

- Screws **clamp**, dowels **locate**. Clearance holes have play
- **Press fit** in one part, **slip fit** in the other
- Use **two** pins, as far apart as possible
- Make **one hole round** and the **other a slot** (or use a diamond pin), so the pins aren't over-constrained
- Holes are **reamed** ([H7]{.technical})

::right::

### Practical details

- **Blind** dowel holes: add a vent, or use pins with an extraction thread
- Don't put dowels in **both** parts as press fits: you'll never get them apart
- Drill and ream both parts **together** for the best alignment, if the workshop agrees

---

# One round hole, one slot

<Sketch name="dowel-hole-slot" class="h-96" hint="Two plates located by two dowel pins: a round hole at one pin, a slot pointing at it for the other" />

---
layout: two-cols-header
---

# Flexures

::left::

Motion by **bending** material instead of sliding or rolling.

- **No friction**, **no backlash**, **no wear**
- Resolution down to **nanometers**
- Small range: typically µm to a fraction of a mm
- Can be made from one piece by milling or wire EDM

::right::

### Typical uses

- Fine alignment stages
- Parallel leaf-spring guides
- Mirror and sample mounts
- Strain relief between parts with different thermal expansion

<div class="warning mt-4">Keep stresses well below the fatigue limit. Ask for help sizing them.</div>

---

# Take-aways

- **Adjustment** is often cheaper and better than precision
- Always add a way to **lock** the adjustment
- Constrain each degree of freedom **exactly once**
- **Kinematic mounts** give µm repeatability
- **Dowels** locate: one round hole, one slot
- **Flexures**: fine motion without friction or backlash
