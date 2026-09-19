---
layout: section
routeAlias: turning
---

# How a lathe [sees]{.marker} your part

The part spins, the tool doesn't

<!--
This chapter assumes milling's framing already landed: tools cost setups and
time, round tools leave radii, short tools deflect. Here we only cover what's
different on a lathe, so it can follow milling without repeating it.
-->

---
layout: two-cols-header
cols: 2/3
align: center
---

# Shoulders and thread run-outs need relief

::left::

<Sketch name="undercut-groove" hint="A stepped shaft: a shoulder where a larger diameter meets a smaller one, with a small rectangular relief groove cut into the corner right before the step. A second detail shows a thread running out into the same kind of groove instead of stopping at a shoulder."></Sketch>

::right::

- Where the diameter **steps down**, the tool's nose leaves a small radius in the corner — same reason milling's round tools leave one
- A **sharp** square shoulder, for a bearing or seal to seat against, needs an explicit **undercut**, or the tool decides the radius for you
- Threading up to a shoulder is worse: the tool needs somewhere to **decelerate and retract**, or it crashes into the corner
- The fix in both cases: a relief groove cut into the corner before the shoulder — the turning equivalent of milling's dog-bone

::bottom::

<div class="tip">
Standard thread undercuts (DIN 76) are sized off the pitch. Ask for the standard one rather than drawing a custom width.
</div>

---
layout: two-cols-header
cols: 4/3
---

# Slender work whips

::left::

- Cutting force pushes a long, thin diameter **away from the tool**, not into it
- The part flexes, so the cut comes out **tapered or oversized**, and **chatters**
- Unlike milling, the weak link here is the **workpiece**: turning tools are short and stiff by comparison
- Held in a chuck alone, unsupported, a part whips once it gets long relative to its diameter

::right::

### Rules of thumb

- Chuck alone: keep unsupported length under roughly [**3–4 × diameter**]{.technical}
- Beyond that: support the far end with the **tailstock**, or use a **steady** or **follower rest**
- **Between centers** reaches much further, because both ends are held

::bottom::

<div class="aside">
The ratio is a shop rule of thumb, not a hard limit — it moves with material, tool sharpness, and how light the cut is.
</div>

---
layout: two-cols-header
---

# How the part is held

::left::

### Chucks

- **Three-jaw**: self-centering, fast. The everyday choice for round stock
- **Four-jaw**: each jaw set independently, indicated in by hand. Slower, but handles odd or off-center shapes, and holds more precisely
- **Collet**: fastest to change, best concentricity, but only over a narrow range of stock diameters

::right::

### Between centers

- The headstock drives the part through a **dog**, the tailstock's **centre** steadies the other end
- Needed for **long, slender** parts a chuck alone can't support
- Lets you **flip the part end-for-end** and keep turning true to the same axis
- Needs a **centre-drilled** hole at each end

::bottom::

<div class="tip">
<span>Most drawings call for the centre holes to be <strong>faced off</strong> once the part is done. Leaving them on costs nothing extra, and gives you a precise way to re-find the axis if the part comes back for a rework — see <Link to="workshop-tricks">Guild secrets</Link>.</span>
</div>

---

# Easy in CAD, hard on a lathe

| CAD feature | Why it's hard | Alternative |
|---|---|---|
| **Sharp shoulder or thread run-out** | Tool nose leaves a radius, or crashes into the corner | Undercut / relief groove |
| **Flat-bottom blind bore** | A turning tool leaves a point or an angle, not a flat | Accept a corner radius, or finish it on a mill |
| **Features off the spin axis** (flats, cross-holes, keyways) | Nothing on a lathe moves off-axis | Mill them in a second setup, or use a turn-mill |
| **Very long, slender diameters** | Cutting force pushes the work away from the tool | Support between centers, or a steady rest |
| **Odd diameters** | Cut down from the next standard bar size up | Design to a standard bar diameter |

---

# Take-aways

- **Shoulders and thread run-outs** need a relief groove, or the tool leaves a radius it wasn't asked for
- Long, slender work **whips**: support it between centers or with a steady rest
- **Three-jaw, four-jaw, collet, or between centers** — pick the one that matches the part, not just what's already in the chuck
- Leftover **centre holes** are a free, precise way to re-find the axis later
- Nothing on a lathe leaves the **spin axis**: off-axis features need a mill
