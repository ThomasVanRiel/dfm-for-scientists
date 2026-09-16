<!--
  A relative rating on a 1-4 scale, drawn as filled circles.
  Used in the materials tables: blue for machinability (more is better),
  amber for cost (more is more expensive). Values are indicative, not measured.
-->
<script setup>
const props = defineProps({
  value: { type: Number, required: true },
  max: { type: Number, default: 4 },
  tone: { type: String, default: 'blue' },
  label: { type: String, default: '' },
})
</script>

<template>
  <span class="rating" :class="`rating-${props.tone}`" role="img" :aria-label="label || `${value} out of ${max}`" :title="label">
    <span v-for="n in max" :key="n" class="dot" :class="{ filled: n <= value }" />
  </span>
</template>

<style scoped>
.rating {
  display: inline-flex;
  gap: 0.22em;
  align-items: center;
  vertical-align: middle;
  line-height: 1;
}

.dot {
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  border: 1px solid currentColor;
  opacity: 0.35;
}

.dot.filled {
  background: currentColor;
  opacity: 1;
}

.rating-blue {
  color: #2563eb;
}

.rating-amber {
  color: #d97706;
}
</style>
