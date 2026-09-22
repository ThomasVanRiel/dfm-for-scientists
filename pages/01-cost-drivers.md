---
layout: two-cols-header
---
# Setups and tolerances drive the price

::left::

### Every setup means

- Un-clamping and re-clamping the part
- Finding the zero again
- A new alignment error between faces
- Checking the first cut before continuing

A part with features on 5 faces usually means 5 setups — unless it goes on a 5-axis machine, which reaches them in one or two.

<Sketch name="5-ax-part" class="h-32" />

::right::

### Every tight tolerance means

- Slower finishing passes
- Possibly a different machine or process
- Measuring, sometimes on a CMM
- A higher chance of scrapping the part

[±0.01 mm]{.technical} on a non-functional face buys you nothing.

<!--
If someone asks about 5-axis: it trades setups for machine rate and programming time. One clamping, no alignment error between faces, but a higher hourly rate and more programming, and not every shop has one. Ask what the shop actually has before you design for it.
-->

---

# Take-aways

- A quote is mostly **time**: programming, setups, cutting, measuring
- **Setups** and **tolerances** often cost more than the material
- Removing 90 % of your stock is slow, expensive, and wasteful
- At **batch size 1**, one part carries all programming and setup costs

<div class="takeaway mt-8">
Every feature costs machine time, tool changes, setups, and someone's attention.
</div>
