---
theme: default
addons:
  - fancy-arrow
title: DfM for Scientists (Work in progress – draft)
author: Dr. Ing. Thomas Van Riel
info: |
  ## Design for Manufacturing for Scientists
  A crash course for scientists who design their own test setups:
  what parts really cost, how a workshop makes them, and how to design
  parts that are cheap, fast, and easy to build.

  Licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/),
  except third-party material — see LICENSE.
# `both` puts the dark-mode toggle in the nav bar. The deck is designed light
# and presents light; dark is for reading it in bed. The overrides the callouts
# need for it live at the bottom of style.css.
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
transition: slide-left | slide-right
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
this seminar adds the workshop's.
</div>

<div class="absolute bottom-10 left-14 font-mono text-sm opacity-70">
Dr. Ing. Thomas Van Riel, KU Leuven
<div class="text-xs opacity-80 mt-1">CC BY 4.0 — share and adapt, with credit</div>
</div>

<div class="absolute bottom-10 right-14 font-mono text-xs opacity-50">
rev 760cc8f · 2026-09-19
</div>

<!-- <Sketch name="title" class="absolute right-10 bottom-8 w-110" /> -->

---
layout: two-cols-header
class: text-left
---

# Why this seminar exists

You and the workshop want the same thing: a part that works, soon.
You just describe it in different languages.

::left::

### The conflict

- You think in **function**: stiffness, alignment, vacuum, budget
- The workshop thinks in **process**: setups, tools, time on the machine
- The drawing in between is where money and weeks quietly disappear

::right::

### What you get out of the next hour

- A feel for **what a part actually costs**,<br/> and which of your choices drive it
- A handful of rules that make parts cheaper without touching the function
- The vocabulary to have a five-minute conversation with a machinist instead of a five-email thread

::bottom::

<div class="takeaway">
Nothing here asks you to compromise your experiment. It asks you to get it built sooner.
</div>

<!--
Set the tone: this is not engineers lecturing scientists. Most bad-to-make parts come from people who were being careful, not careless.

Ask for a show of hands: who has waited more than a month for a part? Who has had a part come back with a phone call asking what a dimension meant? That's the whole seminar in two questions.

Introduce yourself here: who you are, what you make, how many "simple" parts came back with questions.

Keep this short, three minutes. The next slide is where they recognise themselves.
-->

---

# How to read these slides

Three callouts come back throughout the deck. They are also the fastest way to
skim it afterwards.

<div class="grid grid-cols-2 gap-x-10 gap-y-5 mt-8 items-center">

<div class="takeaway">

Time on the machine costs far more than the metal you cut away.

</div>

<div>

**Takeaway** – the one thing worth keeping from the slide. If you remember nothing else, remember these.

</div>

<div class="warning">

A sharp internal corner cannot be milled.<br/>
Every tool is round.

</div>

<div>

**Warning** – a trap that turns up in real drawings, and what it costs you when you walk into it.

</div>

<div class="tip">

Ask the workshop which drill sizes they stock.<br/>
It is a two-minute email.

</div>

<div>

**Tip** – something small and practical you can use on the next part you draw.

</div>

</div>

<!--
Thirty seconds, no more. The point is that they can skim the PDF afterwards and still get the substance out of it.

The examples are real ones from later in the deck, so this doubles as a trailer.
-->

---
layout: two-cols-header
---

# How we usually design

::left::

### What you do

1. Draw a solid that fits the bounding box
2. Remove everything you don't need
3. Add ±0.01 mm to be safe
4. Send a STEP file to the workshop
5. Wait. Wonder why it takes so long

::right::

### What the workshop sees

- 90 % of the stock turned into chips
- 4–5 setups, each re-clamped and re-zeroed
- 8 different tools, some too long to be stiff
- Sharp internal corners no tool can make
- Tolerances nobody can measure without a CMM
- No drawing, so the machinist has to phone you anyway


<!--
I know this list because I wrote it from memory, not from research.

Most people in the room will recognise themselves in the left column. That's fine: this isn't a lack of intelligence, it's how CAD teaches you to think. Subtractive modeling in CAD is free. Subtractive machining is not.
-->

---
layout: section
---

# How will this part be made?

Every feature costs machine time, tool changes, setups, and someone's attention.<br>
Ask it [before]{.marker} you draw anything.

<!--
This is the one sentence they should remember. Come back to it at the end of every section.
-->

---
layout: two-cols-header
cols: 3/2
---

# What this seminar is, and isn't

We change how a part gets made, not what it does

::left::

### It is ...

- ... taking a part that is **already calculated and designed**,
- and making it **cheaper, faster, and easier** to build.
- Without giving up the function you designed for.
- Knowing what to ask the workshop, and when.

::right::

<v-click>

### It isn't ...

- ... a course in mechanical design.
- How to size a shaft, pick a bearing,<br/> or design a stiff frame.
- How to make a design elegant.

</v-click>

::bottom::

<div class="takeaway mt-8" v-click>
Your time is best spent designing experiments, interpreting results, and publishing papers.<br/>
This seminar is about getting parts off your desk and in your lab quickly.
</div>

<!--
Set expectations early. Nobody here needs to become a mechanical engineer; we assume the part already works on paper. We only change how it gets made.

If people want to learn real mechanical design: point them to the proper courses / the engineers in the department.

The honest version: your job is to run experiments and pump out a shitload of papers, not to spend weeks on a shaft.
-->
---

<Outline next="cost" />

<!--
The first sections change how people think. Assembly is the practical toolbox. Communication is what actually changes behaviour: talking to the workshop early.

This slide comes back before every section, with the next one carrying a caret. Pick from it out loud: everything here is optional except cost, the ladder, and milling, and the list is the place to say what we are skipping and why.

If possible: co-teach with a machinist, and do a workshop tour after the milling section so they see clamping and tool changes in person.
-->

---
src: ./pages/01-cost.md
---

<!--
  Section 1's worked example comes in two flavours. Include exactly one:
  01-cost-milling.md for an audience that mills, 01-cost-turning.md for one
  that turns. Everything else in section 1 is shared.
-->

---
src: ./pages/01-cost-milling.md
---

---
src: ./pages/01-cost-drivers.md
---

---

<Outline next="buy-assemble-machine" />

---
src: ./pages/02-buy-assemble-machine.md
---

---

<Outline next="milling" />

---
src: ./pages/03-milling.md
---

---

<Outline next="holes-threads" />

---
src: ./pages/04-holes-threads.md
---

---

<Outline next="tolerances" />

---
src: ./pages/05-tolerances.md
---

---

<Outline next="adjustability" />

---
src: ./pages/06-adjustability.md
---

---

<Outline next="materials" />

---
src: ./pages/07-materials.md
---

---

<Outline next="printing" />

---
src: ./pages/14-3d-printing.md
---

---

<Outline next="assembly" />

---
src: ./pages/08-assembly.md
---

---

<Outline next="finishing" />

---
src: ./pages/09-finishing.md
---

---

<Outline next="sheet-metal" />

---
src: ./pages/10-sheet-metal.md
---

---

<Outline next="communication" />

---
src: ./pages/11-communication.md
---

---

<Outline next="prototyping" />

---
src: ./pages/15-prototyping.md
---

---

<Outline next="workshop-tricks" />

---
src: ./pages/13-workshop-tricks.md
---

---
src: ./pages/12-closing.md
---
