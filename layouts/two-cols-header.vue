<!--
  Slidev's built-in two-cols-header, with the column split moved into the
  frontmatter. Instead of

    layoutClass: '!grid-cols-[2fr_3fr] items-center'

  write

    ---
    layout: two-cols-header
    cols: 2/3
    align: center
    ---

  `cols` takes a bare ratio (2/3, 2:3, 2 3), or any pair of CSS track sizes
  (2fr 3fr, 40% 60%, 300px 1fr) when the split isn't a simple ratio.
  `align` is the vertical alignment of the two columns: center, top, bottom.

  Everything else is the built-in, class names included, so the gap rules in
  style.css still apply: the default slot is the full-width header, then
  ::left::, ::right::, and a full-width ::bottom:: pinned to the bottom.
  `layoutClass` still works, and still wins — it lands on the same element.
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  class: { type: String },
  layoutClass: { type: String },
  cols: { type: [String, Number], default: null },
  align: { type: String, default: null },
})

const RATIO = /^[\d.]+\s*[/:\s]\s*[\d.]+$/

const columns = computed(() => {
  const cols = props.cols == null ? '' : String(props.cols).trim()
  if (!cols)
    return undefined
  // A bare ratio is the common case, and `fr` is what it always meant.
  return RATIO.test(cols) ? cols.split(/[/:\s]+/).map(n => `${n}fr`).join(' ') : cols
})

const ALIGN = { center: 'center', middle: 'center', top: 'start', bottom: 'end' }

const alignItems = computed(() => props.align ? ALIGN[props.align] ?? props.align : undefined)
</script>

<template>
  <div
    class="slidev-layout two-cols-header w-full h-full" :class="layoutClass"
    :style="{ gridTemplateColumns: columns, alignItems }"
  >
    <div class="col-header">
      <slot />
    </div>
    <div class="col-left" :class="props.class">
      <slot name="left" />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
    <div class="col-bottom" :class="props.class">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped>
.two-cols-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;
}

.col-header {
  grid-area: 1 / 1 / 2 / 3;
}
.col-left {
  grid-area: 2 / 1 / 3 / 2;
}
.col-right {
  grid-area: 2 / 2 / 3 / 3;
}
.col-bottom {
  /* Pinned to the bottom of the slide even when `align` moves the columns. */
  align-self: end;
  grid-area: 3 / 1 / 3 / 3;
}
</style>
