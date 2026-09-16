---
theme: default
title: DfM for Scientists (Work in progress – draft)
author: Thomas Van Riel
info: |
  ## Design for Manufacturing for Scientists
  A crash course for scientists who design their own test setups:
  what parts really cost, how a workshop makes them, and how to design
  parts that are cheap, fast, and easy to build.
colorSchema: light
fonts:
  sans: IBM Plex Sans
  serif: Newsreader
  mono: IBM Plex Mono
  weights: '300,400,500,600,700'
  italic: true
  # Faces are self-hosted from fonts/ (see scripts/fetch-fonts.mjs); this stops
  # Slidev injecting a <link> to fonts.googleapis.com.
  provider: none
# Inline so the deck pulls nothing from the network; Slidev's default favicon
# is a jsDelivr URL. A drilled-hole centre mark.
favicon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%231e293b'/%3E%3Ccircle cx='16' cy='16' r='7' fill='none' stroke='%23fcd34d' stroke-width='2.5'/%3E%3Cpath d='M16 5v22M5 16h22' stroke='%23fcd34d' stroke-width='1.2'/%3E%3C/svg%3E"
mdc: true
layout: cover
class: text-left
drawings:
  persist: false
---

# Design for Manufacturing

<div class="text-5xl mt-4 font-serif">
for <span class="marker">Scientists</span>
</div>

<div class="mt-14 text-xl opacity-80 max-w-160 leading-relaxed">
You already think in your needs and constraints,<br>
this seminar adds ours.
</div>

<div class="absolute bottom-10 left-14 font-mono text-sm opacity-70">
Thomas Van Riel, KU Leuven
</div>

<TitleDrawing class="absolute right-10 bottom-8 w-110" />

---
layout: two-cols
---

# How we usually design

1. Draw a solid block that fits the bounding box
2. Remove everything you don't need
3. Add ±0.01 mm to be safe
4. Send a STEP file to the workshop
5. Wait. Wonder why it takes so long

::right::

<div class="mt-16 ml-6">

### What the workshop sees

- 90 % of the block turned into chips
- 4–5 setups, each re-clamped and re-zeroed
- 8 different tools, some too long to be stiff
- Sharp internal corners no tool can make
- Tolerances nobody can measure without a CMM
- No drawing, so the machinist has to phone you anyway

</div>

<!--
Most people in the room will recognise themselves in the left column. That's fine: this isn't a lack of intelligence, it's how CAD teaches you to think. Subtractive modeling in CAD is free. Subtractive machining is not.
-->

---
layout: statement
---

# How will this actually be made?

<div class="text-xl opacity-70 mt-6">
Every feature costs machine time, tool changes, setups, and someone's attention.<br>
Ask it <strong>before</strong> you draw anything.
</div>

<!--
This is the one sentence they should remember. Come back to it at the end of every section.
-->

---

# What this seminar is, and isn't

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### It is

- Taking a part that is **already calculated and designed**
- And making it **cheaper, faster, and easier** to build
- Without giving up the function you designed for
- Knowing what to ask the workshop, and when

</div>

<div>

### It isn't

- A course in mechanical design
- How to size a shaft, pick a bearing, or design a stiff frame
- How to make a design elegant

There is a time and place for that, and better channels to learn it.

</div>

</div>

<div class="takeaway mt-8">
Your time is best spent designing experiments, interpreting results, and publishing papers. This seminar is about getting parts off your desk quickly.
</div>

<!--
Set expectations early. Nobody here needs to become a mechanical engineer; we assume the part already works on paper. We only change how it gets made.

If people want to learn real mechanical design: point them to the proper courses / the engineers in the department.

The honest version: your job is to run experiments and pump out a shitload of papers, not to spend weeks on a bracket.
-->

---

# Course outline

<div class="grid grid-cols-2 gap-x-12 gap-y-2 mt-8 text-lg">

<div>

1. What parts actually cost
2. Buy, assemble, or machine?
3. How a milling machine sees your part
4. Holes and threads
5. Tolerances and fits
6. Adjustability instead of precision

</div>

<div>

<ol start="7">
  <li>Materials from a manufacturing perspective</li>
  <li>Design for assembly and use</li>
  <li>Finishing and secondary operations</li>
  <li>Sheet metal covers for safety and demos</li>
  <li>Communicating with the workshop</li>
</ol>

</div>

</div>

<div class="takeaway mt-10">
Closing exercise: redesign a typical "scientist design" and compare the machinist's time estimates.
</div>

<!--
Topics 1–3 change how people think. Topics 4–10 are the practical toolbox. Topic 11 is what actually changes behaviour: talking to the workshop early.

If possible: co-teach with a machinist, and do a workshop tour after section 3 so they see clamping and tool changes in person.
-->

---
src: ./pages/01-cost.md
---

---
src: ./pages/02-buy-assemble-machine.md
---

---
src: ./pages/03-milling.md
---

---
src: ./pages/04-holes-threads.md
---

---
src: ./pages/05-tolerances.md
---

---
src: ./pages/06-adjustability.md
---

---
src: ./pages/07-materials.md
---

---
src: ./pages/08-assembly.md
---

---
src: ./pages/09-finishing.md
---

---
src: ./pages/10-sheet-metal.md
---

---
src: ./pages/11-communication.md
---

---
src: ./pages/12-closing.md
---
