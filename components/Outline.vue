<!--
  The course outline, shown once before every section so the next one can be
  picked from the list instead of walked into.

  `next` names the section that follows this instance *in the deck*. Everything
  before it is drawn as passed (dimmed), the rest read plain. The state is
  positional, not a record of what was actually presented: a section skipped
  over still dims, because the deck is past it.

  The wrapper class is deliberately not `outline`: UnoCSS ships `.outline` as a
  utility (`outline-style: solid`), so that name draws a solid box around the
  whole slide. Same for any other bare utility word.

  Four groups, two to a column, each under its own heading, and the appendix
  as a fifth cell of the same grid, under the right column, without one. The
  lists below are the single source of truth for the running order. Adding or
  moving a section means editing them here and moving the matching `src:` block
  (and its <Outline> interlude) in slides.md.

  A section that is not in the deck is not in the list either, and what is left
  renumbers from 1 — so a talk built with SECTIONS (see setup/preparser.ts) gets
  an outline of the talk being given rather than of the course it was cut from.
  The test is the deck itself and not any setting: whatever dropped a section, a
  flag or a `disabled: true` written by hand, the outline follows.
-->
<script setup>
import { computed } from 'vue'
// @ts-expect-error - virtual module, resolved by Slidev's Vite plugin
import { slides } from '#slidev/slides'

const props = defineProps({
  next: { type: String, required: true },
  title: { type: String, default: 'Course outline' },
})

const groups = [
  {
    title: 'What it costs',
    items: [
      { to: 'cost', label: 'What parts actually cost' },
      { to: 'buy-assemble-machine', label: 'Buy, assemble, or machine?' },
    ],
  },
  {
    title: 'Manufacturing',
    items: [
      { to: 'milling', label: 'How a milling machine sees your part' },
      { to: 'turning', label: 'How a lathe sees your part' },
      { to: 'holes-threads', label: 'Holes and threads' },
      { to: 'tolerances', label: 'Tolerances and fits' },
      { to: 'adjustability', label: 'Adjustability instead of precision' },
      { to: 'materials', label: 'Materials' },
      { to: 'printing', label: '3D printing' },
    ],
  },
  {
    title: 'Assembly and finish',
    items: [
      { to: 'assembly', label: 'Design for assembly and use' },
      { to: 'finishing', label: 'Finishing and secondary operations' },
      { to: 'sheet-metal', label: 'Sheet metal covers' },
    ],
  },
  {
    title: 'Putting it in practice',
    items: [
      { to: 'communication', label: 'Communicating with the workshop' },
      { to: 'prototyping', label: 'Prototyping' },
      { to: 'workshop-tricks', label: 'Guild secrets' },
    ],
  },
]

// The appendix is not a chapter of the course, it is where the deck points once
// the course is over. Same numbering and same passed/next states, so it behaves
// like everything else in the list, and it sits in the same grid as the four
// groups — it just carries no group heading of its own.
const appendix = {
  items: [{ to: 'references', label: 'Further reading and watching' }],
}

/*
  A section is in the course if its title slide is in the deck. The ones
  SECTIONS left out are not, so they fall off the list here, and a group that
  loses all of its sections falls out of the grid rather than standing as an
  empty heading.
*/
const present = new Set(
  slides.value
    .map((s) => s.meta?.slide?.frontmatter?.routeAlias)
    .filter(Boolean),
)

const shownGroups = groups
  .map((g) => ({ ...g, items: g.items.filter((i) => present.has(i.to)) }))
  .filter((g) => g.items.length)
const shownAppendix = appendix.items.filter((i) => present.has(i.to))

const order = [...shownGroups, { items: shownAppendix }].flatMap((g) => g.items.map((i) => i.to))
const nextIndex = computed(() => order.indexOf(props.next))

// Chapter number: position in the running order, counted across the groups.
const number = (to) => order.indexOf(to) + 1

// Everything the deck has gone past is dimmed, the chapter that follows is
// marked on its number, the rest read plain.
function state(to) {
  if (nextIndex.value < 0) return 'ahead'
  const i = order.indexOf(to)
  if (i < nextIndex.value) return 'passed'
  return i === nextIndex.value ? 'next' : 'ahead'
}
</script>

<template>
  <div class="chapter-list">
    <h1>{{ title }}</h1>

    <div class="stack">
      <div class="groups">
        <section v-for="g in shownGroups" :key="g.title" class="group">
          <h2>{{ g.title }}</h2>
          <ul>
            <li v-for="item in g.items" :key="item.to" :class="state(item.to)">
              <span class="num">
                <span :class="{ marker: state(item.to) === 'next' }">{{ number(item.to) }}</span>
              </span>
              <Link :to="item.to">{{ item.label }}</Link>
            </li>
          </ul>
        </section>

        <section v-if="shownAppendix.length" class="group untitled">
          <ul>
            <li v-for="item in shownAppendix" :key="item.to" :class="state(item.to)">
              <span class="num">
                <span :class="{ marker: state(item.to) === 'next' }">{{ number(item.to) }}</span>
              </span>
              <Link :to="item.to">{{ item.label }}</Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*
  Two groups to a column, placed by hand rather than flowed: the appendix is a
  third cell of the right column, and `grid-auto-flow: column` would have sent
  it to the top of a third one instead. The shared rows keep the second group of
  each column starting on the same line.
*/
.groups {
  display: grid;
  grid-template-rows: max-content max-content max-content;
  grid-template-columns: max-content max-content;
  align-items: start;
  column-gap: 3.5rem;
  row-gap: 1.5rem;
}

.group:nth-child(1) { grid-area: 1 / 1; }
.group:nth-child(2) { grid-area: 2 / 1; }
.group:nth-child(3) { grid-area: 1 / 2; }
.group:nth-child(4) { grid-area: 2 / 2; }
.group.untitled { grid-area: 3 / 2; }

.stack {
  width: max-content;
  margin: 1.5rem auto 0;
}

/*
  The headed groups are separated by their own headings; the untitled one has
  none, so it gets the gap instead — enough to read as a group of its own and
  not as a stray last line of the one above it.
*/
.group.untitled {
  margin-top: 0.6rem;
}

.group h2 {
  font-family: 'IBM Plex Sans Condensed', ui-sans-serif, system-ui, sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sk-label);
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
  line-height: 1.45;
  font-size: 1.05rem;
}

/*
  Right-aligned in a fixed width so the titles line up past ten, and centred on
  the line rather than sitting on its baseline — at this size a baseline-aligned
  digit reads as having dropped. Condensed, like every other number in the deck.
*/
.num {
  flex: none;
  align-self: center;
  width: 1.7ch;
  text-align: right;
  font-family: 'IBM Plex Sans Condensed', ui-sans-serif, system-ui, sans-serif;
  font-size: 0.8em;
  color: var(--sk-label);
}

/*
  The highlight's own horizontal padding would otherwise shift the marked
  digits left of the right-aligned column. Pull it back out so the number sits
  in the same place marked or not; the ::before still overhangs on its own.
*/
.num .marker {
  margin: 0 -0.12em;
}

li.passed .num {
  opacity: 0.5;
}

/* Dark enough to read through the highlighter, which is a light amber. */
li.next .num {
  color: var(--sk-ink);
  font-weight: 500;
}

li :deep(a) {
  color: var(--sk-ink);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s ease, color 0.15s ease;
}

li :deep(a:hover) {
  color: var(--sk-accent);
  border-bottom-color: var(--sk-accent);
}

li.passed :deep(a) {
  color: var(--sk-label);
  opacity: 0.55;
}
</style>
