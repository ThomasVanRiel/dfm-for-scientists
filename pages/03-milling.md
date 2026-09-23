---
layout: section
routeAlias: milling
---

# How a milling machine [sees]{.marker} your part

Round tools, flat-bottomed pockets, and reachable faces

---
layout: two-cols-header
cols: 2/3
align: center
---

# Tools are round

A spinning end mill can't cut a sharp internal corner.

::left::

<Sketch name="corner-radius"></Sketch>

::right::


- Every internal vertical corner gets **at least the tool radius**
- Make the radius **slightly larger** than the tool radius,<br/> so the tool doesn't wrap around the corner and chatter
- **Larger radius = larger tool** = stiffer, faster, cheaper

::bottom::

<div class="tip">
<span>If a square part must fit into a pocket: add <strong>dog-bone</strong> relief cuts</span>
<InlineSketch><Sketch name="dogbone" /></InlineSketch>
</div>
<!--
Hold up an end mill. Let them feel that it is round.
-->

---
layout: two-cols-header
---

# Tools are sized

::left::

### What the workshop has

- Common diameters: [**3, 4, 5, 6, 8, 10, 12, 16, 20 mm**]{.technical}
- **[2 mm]{.technical} is the smallest we use reliably**
- Below [2 mm]{.technical}: tools snap, often inside your part. Recovering from that costs a setup, sometimes the part
- Odd sizes exist, but may have to be ordered

::right::

### What that means for your [corners]{.marker}

- Internal radius = **tool radius**, plus a little
- **[R1]{.technical} is the floor**, and only where the function needs it
- **[R3]{.technical} or more** lets a [6 mm]{.technical} tool in: stiffer, faster, cheaper
- A radius below [R1]{.technical} is not "slightly tighter". It is a different class of tooling

::bottom::

<div class="takeaway">
Rounding up every internal corner you don't actually need is the cheapest change you can make to a drawing.
</div>

---
layout: two-cols-header
cols: 1/2
---

# Tools are short

::left::

<Sketch name="pocket-depth" class="h-64"></Sketch>

::right::

- A standard end mill only has flutes over about **2–3 × its diameter**. Deeper than that is a *different tool*, not a deeper cut
- Longer tools **deflect** (stiffness drops with length³) and **chatter**
- They need slow feeds and light cuts, so they take a long time
- A [6 mm]{.technical} slot, [40 mm]{.technical} deep: expensive or impossible
- Narrow **and** deep is the combination to avoid

::bottom::

<div class="takeaway">
Make pockets wider or shallower, or open them to one side. Or build the part from plates.
</div>

---
layout: default
---

# How deep, for a given diameter

Cutting depth divided by tool diameter, **L/D**, decides which tool comes out of the drawer.

| L/D | Tool needed | What it costs you |
|---:|---|---|
| **≤ 3 × D** | Standard end mill | Normal feeds. No problem |
| **3–5 × D** | Long series | Reduced feeds, noticeably slower |
| **5–8 × D** | Extra-long or necked | Light passes only, much slower, chatter marks |
| **> 8 × D** | Special tooling | Consider wire EDM, or redesign the part |


A [**1 mm**]{.technical} corner radius means a [2 mm]{.technical} tool, which means roughly [**6 mm**]{.technical} of depth before it gets slow.

<div class="takeaway">
Divide depth by width before you draw a slot. A groove <strong class="technical">5 mm wide and 40 mm deep</strong> is <span class="technical">8 × D</span><br/> and can cost more than the rest of the part.
</div>

<!--
This is the slide that pays for the whole section. Two numbers off a drawing, divided, and you know whether the workshop will sigh.
-->

---
layout: two-cols-header
cols: 4/3
---

# Thin walls vibrate

::left::

- Cutting forces push thin walls away,<br/> so they end up **thicker at the top**
- The wall **rings** like a tuning fork<br/> and leaves a poor surface
- **Clamping** forces bend them.<br/> They spring back when released
- Removing material on one side releases **stress**<br/> (see <Link to="materials">Materials</Link>)

::right::

### Rules of thumb

- Metals: walls [**≥ 1 mm**]{.technical}, more for tall walls
- Plastics: walls [**≥ 2 mm**]{.technical}
- Keep wall height moderate relative to thickness
- Add **ribs** or a lip at the top for stiffness


---
layout: two-cols-header
---

# Every feature needs a direction

::left::

On a 3-axis mill, the tool only comes **from above**.

- Features on 5 faces → at least **5 setups**
- Every reorientation: re-clamp, re-zero, new alignment error
- Features on different faces are only as well aligned as the setups
- Holes at odd angles need special fixtures or a 5-axis machine

::right::

Design for fewer setups

- Put features on **as few faces as possible**
- Put all features that must align with each other **on the same face**
- Prefer holes parallel to the main axes
- Ask: "From which direction is this cut?"

---

# Holding the part

<Sketch name="vise-clamping" class="h-96" hint="A part clamped in a vise: jaws, parallels underneath, and the zone the tool can't reach" />

---
layout: two-cols-header
---

# The machinist has to hold it

::left::

- A vise needs **two parallel faces** to grip
- The jaws cover a few mm, and **nothing can be cut there**
- Clamping force **distorts** thin or delicate parts
- Round, organic, or fully machined parts have **nothing to grip**

::right::

### Help the machinist

- Keep **flat, parallel reference faces**
- Allow **extra stock** or a clamping tab that is removed at the end
- Provide **holes** that can be used to bolt the part to a fixture
- Don't machine every surface just because you can

::bottom::

<div class="takeaway">
If you can't imagine how the part is clamped, the machinist can't either.
</div>

<!--
This is the ideal moment for a workshop tour: show a vise, soft jaws, a fixture plate, and a part being flipped.
-->

---

# Easy in CAD, hard in metal

| CAD feature | Why it's hard | Alternative |
|---|---|---|
| **Sharp internal corners** | Tools are round | Radius, dog-bone relief |
| **Undercuts** | Need special T-slot or dovetail cutters | Split into two parts |
| **Internal cavities** | No tool can get in | Split, or use a plate with a lid |
| **Deep narrow slots** | Long tools deflect | Wider slot, plates, wire EDM |
| **Tiny radii in deep pockets** | Tiny tools break | Larger radius |
| **3D freeform surfaces** | Ball-nose tools, very slow | Flat faces and chamfers |
| **Engraved text** | Tiny tools, long toolpaths | Label or laser marking |
| **Features on every face** | Many setups | Put features on fewer faces |

---

# Take-aways

- Tools are **round**: internal corners need radii, and [**2 mm**]{.technical} is the smallest tool
- Tools are **short**: flutes run about 2–3 × D, and depth over **3 × D** starts costing money
- Thin walls **vibrate and deflect**
- Every face with features is **another setup**
- The part has to be **clamped** somewhere
- If it looks trivial in CAD, **think** anyway
