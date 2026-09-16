---
layout: section
---

# [Sheet metal]{.marker} covers

Safety guards and demo enclosures

---

# Why sheet metal for covers

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### When your setup needs a cover

- **Safety**: lasers, high voltage, hot surfaces, moving or rotating parts, pinch points
- **Protection**: dust, stray light, air currents, curious hands
- **Public demos and shows**: it has to be touchable, robust, and look finished

</div>

<div>

### Why not mill it

- A cover is **large, thin, and not precise**: the worst case for milling
- Laser cutting + bending is **fast**, often a matter of hours
- **Light** and **stiff** thanks to the bends
- Easy to **powder coat** in any color

</div>

</div>

<div class="takeaway mt-8">
A cover is not a precision part. Design it as sheet metal from the start, not as a hollowed-out block.
</div>

---

# How the workshop makes it

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

1. **Laser cut** the flat pattern, including all holes and slots
2. **Deburr** the edges
3. **Bend** on a press brake, one bend at a time
4. **Press in** nuts, studs, or standoffs
5. **Finish**: powder coating, anodizing, or bare

Every hole is made while the part is still **flat**. Holes added after bending are slow and awkward.

</div>

<Sketch name="sheet-metal-steps" class="h-96" hint="Flat laser-cut blank with holes and bend lines, then the same part bent into a U-shaped cover" />

</div>

<!--
If there is a press brake in our workshop: show it during the tour. Seeing the tooling explains the minimum flange length immediately.
-->

---
class: text-sm
---

# Design rules for bending

<div class="grid grid-cols-2 gap-10 mt-2">

<div>

| Rule | Rule of thumb |
|---|---|
| **One thickness** | The whole part is one sheet: 1, 1.5, 2, or 3 mm |
| **Inner bend radius** | ≥ sheet thickness *t*, the same for every bend |
| **Flange length** | ≥ 4 × *t*, or the tool can't grip it |
| **Holes near a bend** | ≥ 2 × *t* + radius from the bend, or they deform |
| **Bend relief** | Small cut-out where a bend meets an edge, or the corner tears |
| **Tolerances** | ±0.1 mm on flat cuts, ±0.5 mm across bends |

</div>

<div>

### Material

- **Aluminum 5754 / 5083**: bends well, light
- **Aluminum 6082-T6**: strong, but **cracks** at tight radii
- **Steel DC01**: cheap and stiff, needs a coating
- **Stainless 304**: no coating, harder to bend

### In CAD

- Use the **sheet metal** tools, not a shelled solid
- Check that the **flat pattern** unfolds
- Fewer bends, all in the **same direction**, is cheaper

</div>

</div>

<div class="todo mt-4">Check thicknesses, radii, and materials with what our workshop stocks.</div>

---

# Fastening thin sheet

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### A 1.5 mm sheet can't hold a thread

Use hardware made for sheet metal:

- **Press-in nuts** (PEM): a strong thread flush in the sheet
- **Press-in studs and standoffs**: mount PCBs and brackets
- **Rivet nuts**: can be added later, from one side
- **Captive screws**: stay in the cover when it's removed

</div>

<div>

### Mounting the cover

- Mount it on the **frame or standoffs**, not on precision parts
- Use **slotted holes**: covers never line up perfectly
- Leave **clearance**: 5 mm or more to anything inside
- A cover is **not structural**: nothing should rely on it

</div>

</div>

<div class="takeaway mt-8">
If removing the cover shifts your alignment, the cover is mounted to the wrong part.
</div>

---

# Covers for safety

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

- A **fixed** guard should need a **tool** to remove it
- A cover you **open regularly** needs an **interlock**: open the lid, the laser or motor stops
- **Ground** metal covers near mains voltage
- **Openings** for cooling or viewing must be too small to reach the hazard through
- **Cable pass-throughs** need grommets or glands: sheet edges cut cables

</div>

<div>

### Seeing inside

- **Polycarbonate** windows: tough, doesn't shatter
- Not **acrylic** (PMMA): it cracks on impact
- For **lasers**: use certified laser-safe window material for your wavelength

<div class="todo mt-4">Add our safety officer's rules and contact, and the relevant standards (e.g. ISO 13857, EN 60825).</div>

</div>

</div>

<!--
Be careful not to present this slide as the full safety story. The message is: design the cover together with the safety officer, not after the risk assessment fails.
-->

---

# Covers for public demos and shows

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### Assume everyone touches it

- **No sharp edges**: hem or fold edges, round the corners
- **No pinch points** at lids and hinges
- **Tamper-proof** screws on anything that shouldn't open
- **Stable**: it will be leaned on, bumped, and carried
- **Handles** and a transport-friendly size

</div>

<div>

### Make it look like it works

- **Powder coat** in one color: it hides a lot
- **Windows** where the interesting part is
- **Laser-engraved** labels and logos, done in the same cut
- Hide the cables, show the **experiment**

</div>

</div>

<div class="takeaway mt-8">
A clean cover turns a lab setup into a demo, for about the price of an afternoon of machining.
</div>

---

# Take-aways

- Covers are **large, thin, and imprecise**: make them from **sheet metal**, not milled plates
- Put every hole in the **flat pattern**
- Respect **bend radius**, **flange length**, and **hole-to-bend** distance
- Use **press-in hardware** instead of tapped threads
- Mount covers with **slots** and **clearance**, never on precision parts
- Safety covers: **tools** or **interlocks**, and talk to the safety officer
- Demo covers: **no sharp edges**, and make it look finished
