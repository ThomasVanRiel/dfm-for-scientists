---
theme: default
title: DfM for Scientists (Work in progress – draft)
info: |
  ## Design for Manufacturing for Scientists
  A crash course for scientists who design their own test setups:
  what parts really cost, how a workshop makes them, and how to design
  parts that are cheap, fast, and easy to build.
colorSchema: light
transition: slide-left
mdc: true
layout: cover
class: text-left
drawings:
  persist: false
---

# Design for Manufacturing

## for scientists who build test setups

<div class="mt-12 text-xl opacity-80 max-w-160">
Every feature costs machine time, tool changes, setups, and someone's attention.
</div>

---
layout: two-cols
---

# How we usually design

<v-clicks>

1. Draw a solid block that fits the bounding box
2. Remove everything you don't need
3. Add ±0.01 mm to be safe
4. Send a STEP file to the workshop
5. Wait. Wonder why it takes so long

</v-clicks>

::right::

<div v-click class="mt-16 ml-6">

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
Ask it <strong>before</strong> you draw anything.
</div>

<!--
This is the one sentence they should remember. Come back to it at the end of every section.
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

</div>

<div>

6. Adjustability instead of precision
7. Materials from a manufacturing perspective
8. Design for assembly and use
9. Finishing and secondary operations
10. Communicating with the workshop

</div>

</div>

<div class="takeaway mt-10">
Closing exercise: redesign a typical "scientist design" and compare the machinist's time estimates.
</div>

<!--
Topics 1–3 change how people think. Topics 4–9 are the practical toolbox. Topic 10 is what actually changes behaviour: talking to the workshop early.

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
src: ./pages/10-communication.md
---

---
src: ./pages/11-closing.md
---
