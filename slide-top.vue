<!-- Slide number / total in the bottom-right corner of every slide except the cover, at a fixed width so it doesn't shift. -->
<script setup>
import { unref } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'

const { $page, $frontmatter } = useSlideContext()
const { total } = useNav()
</script>

<template>
  <div v-if="unref($frontmatter)?.layout !== 'cover'" class="slide-number">{{ unref($page) }}/{{ total }}</div>
</template>

<style scoped>
/* Right-aligned in a fixed width, with room for "88/88". */
.slide-number {
  position: absolute;
  bottom: 0.75rem;
  right: 1.5rem;
  width: 7ch;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  line-height: 1;
  color: #1e293b;
  text-align: right;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
}
</style>
