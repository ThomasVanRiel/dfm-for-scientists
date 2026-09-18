<!--
  The course outline, shown once before every section so the next one can be
  picked from the list instead of walked into.

  `next` names the section that follows this instance *in the deck*. Everything
  before it is drawn as passed (dimmed), the section itself gets a caret, the
  rest stay plain. The state is positional, not a record of what was actually
  presented: a section skipped over still dims, because the deck is past it.

  The wrapper class is deliberately not `outline`: UnoCSS ships `.outline` as a
  utility (`outline-style: solid`), so that name draws a solid box around the
  whole slide. Same for any other bare utility word.

  The list below is the single source of truth for the running order. Adding or
  moving a section means editing it here and moving the matching `src:` block
  (and its <Outline> interlude) in slides.md.
-->
<script setup>
import { computed } from 'vue'

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
    title: 'Working with the workshop',
    items: [
      { to: 'communication', label: 'Communicating with the workshop' },
      { to: 'exercise', label: 'Exercise: redesign a scientist design' },
      { to: 'workshop-tricks', label: 'Workshop tricks' },
    ],
  },
]

const order = groups.flatMap((g) => g.items.map((i) => i.to))
const nextIndex = computed(() => order.indexOf(props.next))

// Chapter number: position in the running order, counted across the groups.
const number = (to) => order.indexOf(to) + 1

function state(to) {
  const i = order.indexOf(to)
  if (nextIndex.value < 0) return 'ahead'
  if (i < nextIndex.value) return 'passed'
  if (i === nextIndex.value) return 'next'
  return 'ahead'
}
</script>

<template>
  <div class="chapter-list">
    <h1>{{ title }}</h1>

    <div class="groups">
      <template v-for="g in groups" :key="g.title">
        <ul>
          <li v-for="item in g.items" :key="item.to" :class="state(item.to)">
            <span class="caret" aria-hidden="true">&#9656;</span>
            <span class="num">{{ number(item.to) }}</span>
            <Link :to="item.to">{{ item.label }}</Link>
          </li>
        </ul>
        <div class="rail">
          <span class="line" aria-hidden="true" />
          <span class="label">{{ g.title }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
/*
  One column of chapters, and a rail to the right of each group: a hairline
  spanning the group's rows with its name beside it. The grid is two columns
  wide and each group fills one row of it, so the rail is exactly as tall as
  the chapters it brackets.
*/
.groups {
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 1.1rem;
  row-gap: 0.55rem;
  width: max-content;
  margin: 1.4rem auto 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  line-height: 1.4;
  font-size: 1.05rem;
}

/*
  The caret is the only thing marking the next chapter: a full .marker
  highlighter here would claim to know which one is actually coming, and on
  this deck that is a decision made out loud while the slide is up.
*/
.caret {
  flex: none;
  width: 0.7em;
  color: var(--sk-accent);
  font-size: 0.8em;
  visibility: hidden;
}

li.next .caret {
  visibility: visible;
}

/* Right-aligned in a fixed width so the titles line up past ten. */
.num {
  flex: none;
  width: 1.7ch;
  text-align: right;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 0.8em;
  color: var(--sk-label);
}

li.passed .num {
  opacity: 0.5;
}

li.next .num {
  color: var(--sk-accent);
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

li.next :deep(a) {
  font-weight: 500;
}

.rail {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.line {
  width: 1px;
  align-self: stretch;
  background: var(--sk-rule);
}

.label {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--sk-label);
  white-space: nowrap;
}
</style>
