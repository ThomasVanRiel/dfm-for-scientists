---
layout: section
routeAlias: assembly
---

# Design for assembly and [use]{.marker}

Someone has to put it together, and change it next month

---

# Part count vs. part complexity

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### Fewer parts

- Less assembly and fewer interfaces
- Fewer tolerances in the chain
- But: each part is more **complex** to machine

</div>

<div>

### Simpler parts

- Each part is **fast** to make, and easy to change
- But: more screws, dowels, and **alignment**

</div>

</div>

<div class="takeaway mt-8">
Combine parts where the function allows it. Split them where machining demands it.
</div>

<div class="mt-4">
Ask for each part: <em>does this need to be separate?</em> It should move relative to the rest, be a different material, or be replaceable.
</div>

---

# Access for tools and hands

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

- Can a **hex key** reach every screw? Straight, or only with a ball end?
- Can you **see** what you're doing?
- Is there room for **fingers**, a torque wrench, a pair of tweezers?
- Does the **assembly order** work? Can the last screw still be reached?
- Can you **remove one part** without disassembling everything?

</div>

<div>

### Try it in CAD

- Put a model of the **hex key** in the assembly
- Check the **assembly sequence**, not just the final state
- Leave room around screw heads

</div>

</div>

---

# Only one way to assemble it

Poka-yoke: make mistakes **impossible**, not just unlikely.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

- **Asymmetric** hole patterns: the part fits one way only
- **One offset dowel pin** instead of a symmetric pair
- **Different connectors** for different signals
- **Shoulders and steps** that prevent upside-down mounting

</div>

<div>

### Alignment features

- **Dowel pins** for position (see <Link to="adjustability">Adjustability</Link>)
- **Spigots and recesses** for centering round parts
- **Shoulders** to push a part against
- **Chamfers** as a lead-in for pins and shafts
- **Labels** and engraved arrows where orientation matters

</div>

</div>

---

# Cables and connectors

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

- Cables are **part of the design**, not an afterthought
- Plan **routing channels**, clips, and tie-down points
- Respect the **minimum bend radius**, especially for fibers and coax
- Add **strain relief** so connectors don't carry the load

</div>

<div>

### Also

- Can you **plug and unplug** connectors with the setup assembled?
- Keep cables away from **moving parts** and sharp edges
- Plan **grounding** paths (watch out for anodizing)
- **Label** cables and connectors

</div>

</div>

---

# Test setups always change

<div class="grid grid-cols-2 gap-10 mt-4">

<div>

### Design for modification

- **Hole grids** (e.g. M6 on 25 mm, like an optical table)
- **Spare holes** and mounting points
- **Modular** plates instead of one integrated block
- **Screws**, not glue or welds, where possible

</div>

<div>

### Design for maintenance

- Wear parts and sensors **easy to replace**
- **Access** to what needs cleaning or calibration
- Keep the **CAD and drawings** with the setup
- Document **adjustments** and how to realign

</div>

</div>

---

# Take-aways

- Balance **part count** against **part complexity**
- Check **tool and hand access** and the **assembly order**
- Make wrong assembly **impossible**
- Plan **cables** from the start
- Test setups change: design for **modification**

