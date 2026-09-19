---
layout: section
routeAlias: workshop-tricks
class: font-fantasy
---

# Guild secrets

Lore from the other side of the door

---

# What is this bar?

<Sketch name="spark-test" class="h-96" hint="A bar held against a grinding wheel on the left. The sparks fly out to the right and fork into labelled boxes, one per material: the bushier the spark, the more carbon. A dotted line leaves the wheel to a separate box for everything that throws no sparks at all." />

<div class="takeaway">
The wheel tells you which <strong>family</strong> you are holding. It never tells you the <strong>alloy</strong> — and the alloy is what your vacuum chamber cares about. <Link to="materials">Label your stock.</Link>
</div>

<!--
The shape of the spark is the measurement, not decoration. Low-carbon steel
throws long, straight, straw-coloured lines that fork only near the end; the
more carbon, the more each line bursts and re-bursts along its whole length,
until tool steel is almost solid starburst. Cast iron is short and red.
Stainless is shorter and duller than mild steel.

The dotted branch is the honest half of the slide. A spark test only works on
ferrous metals: aluminium, brass, bronze and copper throw nothing at all — and
aluminium-versus-stainless is the question people actually have in the
storeroom. That branch is answered by heft and colour, not by the wheel.
Aluminium is 2.7 against stainless at about 8.0, which the hand settles
instantly.

Titanium is the exception worth naming: it is not ferrous but it sparks
brilliantly white. It is also a fire risk on a grinder.

If the magnet comes up: 304 is nominally non-magnetic but goes magnetic after
machining or cold work — it is on the "Lab-specific concerns" slide in the
materials section. The bar in the rack and the part on the bench can answer the
magnet differently.
-->

---
layout: two-cols-header
---

# The half-nut has to find the same groove

::left::

Cutting a thread on a manual lathe takes several passes. Between them the tool
comes out, the carriage runs back, and the **half-nut** re-engages the
leadscrew.

Re-engage a fraction of a turn out, and the tool starts a **second thread**
beside the first. The part is scrap.

So the machinist is not free to re-engage wherever they like. The thread dial
tells them where they may.

::right::

### The arithmetic

Leadscrew pitch divided by the pitch you asked for:

- A **whole number**: re-engage at any mark on the dial. Easy, quick, no thought
- A **simple fraction**: only some marks work, and the machinist counts
- **No common measure** — a metric thread on an imperial leadscrew — the half-nut **never comes out**. Every pass is backed out by reversing the spindle

::bottom::

<div class="takeaway">
Ask for a <strong>standard coarse pitch</strong>. <span class="technical">M6×1</span>, <span class="technical">M8×1.25</span>, <span class="technical">M10×1.5</span> are threads the shop cuts daily. An exotic pitch can turn a ten-minute job into a careful one.
</div>

<div class="todo mt-4">Check our lathe's leadscrew pitch and thread dial, and put its real numbers on this slide.</div>

<!--
The divisor rule is the shop heuristic, not the full geometry: what actually
has to come out even is the carriage travel between two marks on the dial
divided by the pitch being cut, and that depends on how many teeth the dial
has. The simplification is the version machinists teach each other, and it is
right often enough to be useful. Say that, rather than presenting it as a
theorem, if there is a machinist in the room.

On a CNC lathe none of this applies: the spindle is encoded and the Z axis is
synchronised to it in software, so it picks the groove up every pass. This is
manual-lathe lore. Worth saying out loud, or someone will say it for you.

The design point survives either way, and it is the only reason this slide is
in a DfM deck: a non-standard pitch can mean swapping change gears, and on the
wrong combination it means a job the machinist cannot walk away from.
-->
