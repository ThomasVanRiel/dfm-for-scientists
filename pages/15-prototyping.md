---
layout: section
routeAlias: prototyping
---

# [Prototyping]{.marker}

When you need your parts yesterday

---
layout: two-cols-header
---

# What prototyping is actually for

::left::

### Where it wins

- **Size and fit**: does it fit the bench, the rack, the other part
- **Reach and ergonomics**: can a hand actually get in there
- **Cable and hose routing**, before you commit to a real enclosure
- **A frame to test a mechanism on**, today
- **Cheap enough to get wrong twice**

::right::

### Where it loses

- Anything **load-bearing** past a bench test
- Anything that has to survive **weather or moisture**
- Anything you need to **leave installed**
- Anything **precise**: fits and tolerances come later, in the real material

::bottom::

<div class="takeaway">
A prototype answers one question. Once it has, it's done its job — don't polish it into the final part.
</div>

<div class="aside">
CAD — Cardboard Aided Design.
</div>

<!--
Same honest framing as the printing chapter, one step earlier: this is the
fast, cheap way to find out you're wrong, before you've cut anything that
matters. The audience for this slide is whoever is about to skip straight to
CAD and a quote for a part nobody has held yet.
-->

---

# Pick the cheapest thing that answers the question

<div class="ladder">
<div class="rung" v-click="1">
<div class="q"><span class="step">1</span>Just checking <strong>size or reach</strong>?</div>
<div class="edge"><span class="word">yes</span>→</div>
<div class="tip">Cardboard and tape</div>
</div>
<div class="edge down" v-click="2">no ↓</div>
<div class="rung" v-click="2">
<div class="q"><span class="step">2</span>Needs to <strong>survive handling</strong>?</div>
<div class="edge"><span class="word">yes</span>→</div>
<div class="tip">Foam board or MDF</div>
</div>
<div class="edge down" v-click="3">no ↓</div>
<div class="rung" v-click="3">
<div class="q"><span class="step">3</span>Needs to be <strong>seen through</strong>?</div>
<div class="edge"><span class="word">yes</span>→</div>
<div class="tip">PMMA, laser cut</div>
</div>
<div class="edge down" v-click="4">no ↓</div>
<div class="rung" v-click="4">
<div class="nothing"><span class="step"></span>Small, precise, or curved</div>
<div class="edge"><span class="word"></span>→</div>
<div class="tip final"><Link to="printing">3D print it</Link></div>
</div>
</div>


<style>
.ladder {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.rung {
  display: grid;
  grid-template-columns: 26rem 4rem 1fr;
  align-items: center;
  column-gap: 1rem;
}

.q {
  border: 1px solid var(--sk-rule);
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
}

.step {
  display: inline-block;
  width: 1.1rem;
  font-family: 'IBM Plex Sans Condensed', ui-sans-serif, system-ui, sans-serif;
  color: var(--sk-label);
}

.edge {
  font-family: 'IBM Plex Sans Condensed', ui-sans-serif, system-ui, sans-serif;
  font-size: 0.85em;
  color: var(--sk-label);
}

.edge .word {
  display: inline-block;
  width: 2.2rem;
}

.down {
  padding-left: 1.4rem;
}

.nothing {
  border: 1px dashed var(--sk-rule);
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
  color: var(--sk-label);
}

.final {
  font-weight: 500;
}
</style>

<!--
Same ladder device as "Buy, assemble, or machine?" in section 2, reused
rather than reinvented — the deck already taught this reading pattern once.

The last rung hands off to the printing chapter instead of repeating it:
printing is the small-and-precise end of the same instinct, don't cut real
material until a cheaper step has answered the question.
-->

---
class: text-sm
---

# Which material?

| Material | Strength | Weather / moisture | Cuts with | Reach for it when |
|---|:---:|:---:|:---:|---|
| **Cardboard** | <Rating :value="1" tone="green" label="Weak" /> | <Rating :value="1" tone="blue" label="Poor" /> | Scissors, a knife | You just need to see the size, today |
| **Foam board** | <Rating :value="1" tone="green" label="Weak" /> | <Rating :value="1" tone="blue" label="Poor" /> | A knife | A light mock-up that has to stand on its own |
| **MDF** | <Rating :value="2" tone="green" label="Fair" /> | <Rating :value="1" tone="blue" label="Poor" /> | Laser, or a saw | A frame or enclosure that gets handled and reused |
| **PMMA (acrylic)** | <Rating :value="2" tone="green" label="Fair" /> | <Rating :value="3" tone="blue" label="Good" /> | Laser | You need to see through it, or a cleaner finish |

<div class="text-xs opacity-70 mt-2">
<Rating :value="3" tone="green" /> more circles = tougher in service &nbsp;·&nbsp;
<Rating :value="3" tone="blue" /> more circles = shrugs off damp and sun for longer
</div>

<div class="warning mt-4">
Kerf — how much material the laser removes — is your machine's number, not this deck's: it moves with material, thickness, and settings. Cut a test line, measure it, and compensate from that.
</div>

<!--
The circles are the same convention as the plastics table in the printing
chapter: an ordering, not a measurement. MDF drinks water and swells at a cut
edge — say that out loud if anyone's prototyping for outdoors, and point them
at PMMA or the real materials chapter instead.

Don't go deep on cutting technique here. Most of this table is scissors and a
knife before it's ever laser time — the laser only matters for the bottom two
rows.
-->

---
layout: two-cols-header
---

# Design rules

::left::

### Joining without a fastener

- **Tab and slot**: cut the joint into the parts, not a separate bracket
- **Kerf-compensate the slot**, or the tab won't seat
- Hot glue or tape for anything that doesn't need to come apart
- Score, don't cut, where cardboard needs to fold

::right::

### Limits worth knowing

- No threads: through-bolt, or a nut trapped in a pocket
- Thin MDF and acrylic **snap**, they don't bend
- A laser cuts **flat**: curves and 3D shapes still want a printer
- Edges are sharp. Sand or chamfer what hands will touch

::bottom::

<div class="tip">
A prototype built from tabs and slots goes together without you, and comes apart the same way when you need to change it.
</div>

---

# Take-aways

- Reach for **cardboard before CAD**: most questions don't need a machine to answer them
- Climb the ladder only as far as the question needs: **cardboard → foam board/MDF → PMMA → print**
- **Tab and slot** beats a separate bracket — kerf-compensate it
- A prototype is **done once it's answered its question** — don't polish it into the final part
- Laser **kerf is your machine's number**: measure it, don't assume it
