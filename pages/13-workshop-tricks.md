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

# Some threads are easier than others

::left::

<Sketch name="half-nut" class="h-80" hint="The two halves of a split nut closed around the lathe's leadscrew, with the thread dial beside it: the carriage can only be picked up again where the dial says the nut will drop into the same groove." />

::right::

Cutting a thread takes several passes, and between them the **half-nut** lets
go of the leadscrew. Re-engage a fraction of a turn out and the tool starts a
**second thread** beside the first.

The thread dial says where it may go back in: **leadscrew pitch divided by the
pitch you asked for**. A whole number means any mark on the dial; anything else
means counting, or never letting go at all.

::bottom::

<div class="takeaway">
A <span class="technical">6 mm</span> leadscrew divides out whole on <span class="technical">0.5</span> (M3), <span class="technical">1</span> (M6), <span class="technical">1.5</span> (M10), <span class="technical">2</span> (M14, M16) and <span class="technical">3</span> (M24).
</div>

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

---
layout: two-cols-header
---

# The centre remembers where the axis was

::left::

<Sketch name="centre-hole" class="h-40" hint="A turned shaft seen from the side, a short 60° cone drilled in the centre of each end face, the tailstock centre seated in one of them." />

<Sketch name="spotted-centre" class="h-40" hint="A milled block seen from above, a small spotted centre mark at the origin the part was programmed from, an indicator swung around it on the next setup." />

::right::

Milling leaves nothing of the kind. A **spotted mark** at the origin the part
was programmed from does the same job — but nobody puts one there unless it was
**asked for**.

Either way the part comes back months later and goes **straight back** between
centers, or gets **indicated** off its own mark. No datum to re-establish, no
touching off a round surface and hoping it's still true.

::bottom::

<div class="takeaway">
A <strong>centre hole</strong> in each end, or a <strong>spotted mark</strong> at the origin — asked for on purpose. Seconds of machining that give a part its own way back to the axis it was cut on, months later, on a machine that never saw it.
</div>

<!--
This is the same idea as the tip on the turning chapter's holding slide, told
as the guild-secret version: a real habit worth knowing, not just a design
rule. If both land in the deck and feel redundant once drawn, the turning
chapter's version can shrink to a one-line pointer here instead.

Worth asking our own workshop whether this is something they already do by
habit, or something that has to be requested every time — that changes how
confidently this can be presented as "ask for it."
-->
