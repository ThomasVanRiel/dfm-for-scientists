<!--
  The course outline, shown once before every section so the next one can be
  picked from the list instead of walked into.

  `next` names the section that follows this instance *in the deck*. Everything
  before it is drawn as passed (dimmed), the section itself gets a caret, the
  rest stay plain. The state is positional, not a record of what was actually
  presented: a section skipped over still dims, because the deck is past it.

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
    items: [{ to: 'cost', label: 'What parts actually cost' }],
  },
  {
    title: 'Choosing how to make it',
    items: [
      { to: 'buy-assemble-machine', label: 'Buy, assemble, or machine?' },
      { to: 'printing', label: '3D printing' },
    ],
  },
  {
    title: 'Machining',
    items: [
      { to: 'milling', label: 'How a milling machine sees your part' },
      { to: 'holes-threads', label: 'Holes and threads' },
      { to: 'tolerances', label: 'Tolerances and fits' },
      { to: 'adjustability', label: 'Adjustability instead of precision' },
      { to: 'materials', label: 'Materials' },
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

function state(to) {
  const i = order.indexOf(to)
  if (nextIndex.value < 0) return 'ahead'
  if (i < nextIndex.value) return 'passed'
  if (i === nextIndex.value) return 'next'
  return 'ahead'
}
</script>

<template>
  <div class="outline">
    <h1>{{ title }}</h1>

    <div class="groups">
      <section v-for="g in groups" :key="g.title" class="group">
        <h2>{{ g.title }}</h2>
        <ul>
          <li v-for="item in g.items" :key="item.to" :class="state(item.to)">
            <span class="caret" aria-hidden="true">▸</span>
            <Link :to="item.to">{{ item.label }}</Link>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.groups {
  columns: 2;
  column-gap: 3rem;
  margin-top: 1.6rem;
}

.group {
  break-inside: avoid;
  margin-bottom: 1.4rem;
}

.group h2 {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sk-label);
  margin: 0 0 0.35rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  line-height: 1.55;
  font-size: 1.05rem;
}

/*
  The caret is the only thing marking the next section: a full .marker
  highlighter here would claim to know which section is actually coming, and on
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
</style>
