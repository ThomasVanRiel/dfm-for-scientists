---
layout: section
routeAlias: printing
---

# [3D printing]{.marker}

Fast, and not a small machine shop

---
layout: two-cols-header
---

# What printing is actually for

::left::

### Where it wins

- **Jigs and fixtures**: a holder used twenty times, then thrown away
- **Mock-ups**: check fit, reach and cable routing *before* you order metal
- **One-offs**: a sample holder, a lens cap, a funnel, a spacer
- **Shapes no tool reaches**: internal channels, organic transitions
- **Today**, not in three weeks

::right::

### Where it loses

- Anything **load-bearing** for longer than an afternoon
- Anything **precise**: it is a [±0.3 mm]{.technical} process, not a [±0.01 mm]{.technical} one
- Anything **warm**, in **vacuum**, or in **solvent**
- Anything you need **again in a year** with the same dimensions

::bottom::

<div class="takeaway">
Print the thing that holds the part. Machine the part.
</div>

<!--
The honest framing: a printer is the fastest way to be wrong cheaply. That is
worth a lot — most of the cost in a bad part is the three weeks you waited
before finding out.

Say out loud that the mock-up use is the one that saves the most money, and the
one nobody does. A €2 print that shows the connector does not fit pays for the
whole printer.
-->

---
class: text-sm
---

# The three processes you meet

| | **FDM** (filament) | **SLA / DLP** (resin) | **SLS / MJF** (powder) |
|---|---|---|---|
| **How** | Molten bead, layer by layer | Liquid resin cured by light | Powder bed fused by laser or ink |
| **Where** | On a shelf in your lab | Small box in the lab, or a service | Service bureau |
| **Accuracy** | [±0.3–0.5 mm]{.technical} | [±0.1 mm]{.technical} | [±0.3 mm]{.technical} |
| **Good at** | Cheap, big, tough enough, many materials | Fine detail, smooth surfaces | Strong, isotropic, no supports |
| **Bad at** | Layer strength, overhangs, fine detail | Brittle, creeps, degrades in UV | Rough surface, minimum feature size |
| **Materials** | PLA, PETG, ABS/ASA, PC, nylon, filled | Proprietary resins | PA11, PA12, filled nylons |
| **Cost** | Material only, pennies | Material and a mess | Real money, real invoice |

<div class="tip mt-4">
Resin parts keep curing and keep creeping. For a fixture that has to stay dimensionally right for a year, powder or a machined part.
</div>

<div class="todo mt-4">Replace the accuracy and cost columns with what our own printers and our usual bureau actually deliver.</div>

<!--
The accuracy numbers are rules of thumb for a well-behaved machine, not
measurements and not a spec. A tuned FDM printer beats them; a cold, draughty
one does not come close. Say that: the number that matters is the one your
printer gives you on your geometry, and the only way to know it is to print a
test part and measure it.

Do not go deep here. They need to know the three families exist and roughly
what each is for, so they can ask "should this be printed, and on what?".
-->

---
layout: two-cols-header
---

# A printed part has a grain

::left::

A print is stacked layers, welded to each other as they cool. That weld is the
weakest thing in the part.

- **Across** the layers is much weaker than **along** them — call it half, and treat it as a guess, not a number
- The part breaks **at a layer line**, cleanly, with no warning
- **Orientation is a design decision**, not a print setting: decide it, then say it on the drawing or in the file name
- **Overhangs** past about [45°]{.technical} need support, and support leaves a bad surface where it touched
- Big flat parts **warp** as they cool

::right::

<Sketch name="print-orientation" class="h-80" hint="The same L-bracket printed twice: lying flat with the layer lines running along the load path, and standing upright with the layer lines across the root of the L. A load arrow on the upright one pulls the layers apart at the corner; a crack is drawn there." />

::bottom::

<div class="warning">
A bracket printed the convenient way up is a bracket with a crack drawn through its root.
</div>

<!--
The 50 % is the one number on this slide I would not defend in a paper. Real
layer-adhesion strength runs anywhere from a third to nearly all of the in-plane
strength depending on material, temperature, nozzle and geometry. It is a
design attitude — assume the Z direction is bad — not a value to calculate with.

If someone asks for a real number: tell them to print and break their own
coupons, both orientations. It is an afternoon.

The 45° is a geometric convention, not a physical limit: it is where each layer
is still half-supported by the one under it. Good machines do more, bridging
does better, and a chamfer under an overhang beats support every time.
-->

---
class: text-sm
layout: two-cols-header
---

# Design rules

::left::

| Rule | Rule of thumb |
|---|---|
| **Wall thickness** | ≥ 3 extrusion widths, so ≥ [1.2 mm]{.technical} on a [0.4 mm]{.technical} nozzle |
| **Overhangs** | Keep under [45°]{.technical}, or chamfer instead of supporting |
| **Holes** | Print **undersize**, then drill or ream to size |
| **Threads** | Don't print them: **heat-set insert**, captive nut, or tap a printed boss for a light load |
| **Clearance** | [0.3–0.5 mm]{.technical} per side between parts that must fit |
| **Small features** | Nothing thinner than the nozzle survives |
| **Fillets** | At every internal corner: prints stress-concentrate like anything else |

::right::

### Free here, expensive in metal

- Internal channels and ducts
- Lattices and lightweighting
- Text and labels, printed in
- Assemblies merged into one piece

### Expensive here, free in metal

- Flat, true, parallel faces
- Anything on a **tolerance**
- Thick solid sections: slow, and they warp

::bottom::

<div class="takeaway">
The good print is not the scaled-down milled part. Redraw it for the process, or print the milled shape and accept a mock-up.
</div>

<!--
The clearance figure is the one they will use most and the one that varies most
between machines. Anything sliding wants more; a press fit wants less and some
sanding. Tell them to print a fit-test comb once and keep it on the shelf.

Heat-set inserts are the single biggest upgrade to a printed part that anyone in
the room can adopt this week. A soldering iron and a bag of M3 inserts.
-->

---
layout: two-cols-header
---

# Printing in a lab

::left::

### Where a printed part will betray you

- **Vacuum**: plastics outgas, and layer lines and infill make **virtual leaks** that pump down for days
- **Heat**: PLA goes soft around [60 °C]{.technical}, PETG around [75 °C]{.technical}, ABS/ASA around [95 °C]{.technical} — a sunny lab or a warm enclosure is enough
- **Time**: plastics **creep**. A printed part under a constant load slowly changes shape
- **Chemistry**: solvents, oils and cleaning agents attack most print materials
- **UV**: resin parts and PLA go brittle

::right::

### Where it is fine

- Room temperature, no load, no vacuum
- Anything you can **remeasure or reprint** when it drifts
- **Electrical insulation** and **thermal** breaks
- **Non-magnetic** by default, which optics and NMR people care about

<div class="todo mt-4">Add our vacuum group's rules: which materials are allowed in a chamber at all, and who to ask.</div>

::bottom::

<div class="warning">
"It held in the test" and "it will hold for six months" are different claims. Creep is what separates them.
</div>

<!--
The temperature figures are the glass transition of the bulk polymer, rounded,
and they are where the part starts to soften, not where it fails — a loaded part
gives up well before it, an unloaded one survives past it. They vary with the
blend, so treat them as an ordering, not a spec.

Vacuum is the one to be careful with in the room: I am not saying never print
for vacuum — people do, with the right materials and a lot of care. I am saying
do not do it by accident, and do not do it without asking the person whose
chamber it is.
-->

---

# Take-aways

- Print the thing that **holds** the part, not the part
- A printed mock-up is the **cheapest way to find out you were wrong**
- The layers are a **grain**: choose the orientation, and never load across it
- Print holes **undersize**, drill them after; use **heat-set inserts**, not printed threads
- Nothing precise, warm, loaded for months, or in vacuum
- Redraw for the process — a scaled-down milled part prints badly
