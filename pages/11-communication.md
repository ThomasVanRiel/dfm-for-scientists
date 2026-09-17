---
layout: section
routeAlias: communication
---

# Communicating with the workshop

Talk to the machinist [before]{.marker} the design is finished

---
layout: two-cols-header
---

# Why a STEP file is not enough

::left::

### A STEP file contains

- Geometry

::right::

### A STEP file does not tell the workshop

- **Tolerances**: which dimensions matter, and how much
- **Material**: the exact grade and form
- **Threads**: often just plain holes in the model
- **Finish**: coating, Ra, edge breaks, cleaning
- **Quantity**, and whether spares are needed
- **What the part does**, and what's critical

::bottom::

<div class="takeaway">
Send the STEP file <strong>and</strong> a PDF drawing. The drawing is the specification.
</div>

---
layout: two-cols-header
cols: 3/4
---

# What a drawing needs

::left::

- Views with **datums** (A, B, C)
- **Units** (mm)
- **Material**: grade and form,<br/> e.g. "[EN AW-6082 T6, plate]{.technical}"
- **General tolerance**<br/> e.g. "[ISO 2768-mK]{.technical}"
- **Critical features** with explicit tolerances,<br/> clearly marked

::right::

- **Threads** with depth: "[M6 ↧ 12]{.technical}"
- **Finish**: coating, masking, Ra, edge breaks, cleaning
- **Quantity**
- **Revision**, date, and **contact person**
- A note on **function**, if it helps

::bottom::

<div class="takeaway">
The drawing has to be right the first time. It is the one document the workshop builds from, and nobody checks your intent against it.
</div>

<div class="aside mt-4">
In CAD, undo is your most-used command. A workshop only has redo.
</div>

---
layout: two-cols-header
---

# Dimension from datums

::left::

### Chain dimensioning

Each hole dimensioned from the previous one.

- Tolerances **add up** along the chain
- Hole 5 can be off by 4 × the tolerance
- The machinist has to add up numbers

::right::

### Baseline dimensioning

Each hole dimensioned from **one datum**.

- Every feature has **its own** tolerance relative to the reference
- Matches how the part is **clamped and measured**
- Easy to program

::bottom::

<div class="takeaway">
Dimension the way the part <strong>functions</strong>: from the faces and holes it's aligned by.
</div>

---
layout: two-cols-header
---

# Chain vs. baseline

::left::

<Sketch name="chain-dimensioning" class="h-88" hint="A plate with five holes, each dimensioned from the previous hole" />

::right::

<Sketch name="baseline-dimensioning" class="h-88" hint="The same plate, every hole dimensioned from datum edges A and B" />

---
layout: two-cols-header
cols: 2/3
align: center
---

# Hole tables

A plate with forty holes, dimensioned the normal way, is **eighty dimensions** stacked on top of the geometry. Nobody can read it, and one misplaced arrow is a scrapped part.

::left::

**label** the holes on the view, and put the numbers in a table.

- Every hole located from **one origin**
- Diameter, depth and thread in the same row
- The view stays readable, and a revision is **one number**, not an arrow in a thicket

::right::

<div class="warning">
  Not always the right tool, for the same reason as chain dimensioning: if what matters is the distance <strong>between</strong> two holes — a dowel pair, a bearing spacing — dimension that pair <strong>directly</strong>, and let the table carry the rest.
</div>


<div class="takeaway mt-4">
Put the origin where the part is <strong>located and clamped</strong> — a dowel hole, or a pair of machined datum edges. Then the table reads the same way the machinist zeroes the machine.
</div>

---
layout: two-cols-header
---

# One origin, one table

::left::

<Sketch name="hole-table" class="h-88" hint="A plate with labelled holes A1, A2, B1-B3, C1: no dimension arrows, the origin at dowel hole A1 on the datum edges" />

::right::

| Hole | X | Y | Ø / thread |
|---|---:|---:|---|
| A1 | [0]{.technical} | [0]{.technical} | [⌀6 H7 ↧ 10]{.technical} |
| A2 | [150.0]{.technical} | [0]{.technical} | [⌀6 H7 ↧ 10]{.technical} |
| B1 | [25.0]{.technical} | [15.0]{.technical} | [M6 ↧ 12]{.technical} |
| B2 | [75.0]{.technical} | [15.0]{.technical} | [M6 ↧ 12]{.technical} |
| B3 | [125.0]{.technical} | [15.0]{.technical} | [M6 ↧ 12]{.technical} |
| C1 | [40.0]{.technical} | [60.0]{.technical} | [⌀4.2 through]{.technical} |


<div class="hint mt-4">
<span class="technical">A1</span> is the origin, so it reads <span class="technical">0, 0</span> – the dowel hole the part is located by, on the datum edges it is clamped against.
</div>

---
layout: two-cols-header
---

# Talk to the machinist early

<div class="mt-6">

```mermaid
flowchart LR
  A[Idea] --> B[Sketch] --> C((Talk)) --> D[CAD] --> E((Review)) --> F[Drawing] --> G[Make]
  style C fill:#dbeafe,stroke:#2563eb
  style E fill:#dbeafe,stroke:#2563eb
```

</div>

::left::

- Changes on a **sketch** cost minutes
- Changes in a **finished drawing** cost hours
- Changes to a **made part** cost the part

::right::

### Questions to ask

- "How would you make this?"
- "Which feature makes this expensive?"
- "Which tolerances can you hold easily?"
- "Do we have this material in stock?"
- "Could this be bought, or laser cut?"

---

# Take-aways

- A STEP file is **geometry**, not a specification
- A drawing needs **material, tolerances, finish, quantity**, and marked critical features
- Dimension from **datums**
- **Talk to the machinist before the design is finished**

