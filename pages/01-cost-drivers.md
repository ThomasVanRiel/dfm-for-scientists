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

A part with features on 5 faces needs *at least* 5 setups — unless it goes on a 5-axis machine, which reaches them in one or two.


<div class="todo mt-8">
  Add sketch of a part with features on 5 axes.
</div>

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
- Batch size 1 means setup is the whole cost

<div class="takeaway mt-8">
Every feature costs machine time, tool changes, setups, and someone's attention.
</div>
