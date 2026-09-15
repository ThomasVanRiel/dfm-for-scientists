<!--
  A hand-drawn sketch from sketches/<name>.svg (or .png/.jpg/.webp).
  Until the file exists, the default slot is shown, or a placeholder describing what to draw.
-->
<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  hint: { type: String, default: '' },
})

const files = import.meta.glob('../sketches/*.{svg,png,jpg,jpeg,webp}', { import: 'default', eager: true })

const src = computed(() => Object.entries(files).find(([path]) => path.replace(/^.*\/|\.\w+$/g, '') === props.name)?.[1])
const slots = useSlots()
</script>

<template>
  <div v-if="src" class="sketch">
    <img :src="src" :alt="hint || name">
  </div>
  <slot v-else-if="slots.default" />
  <div v-else class="sketch-placeholder">
    <div class="font-bold">✎ sketches/{{ name }}.svg</div>
    <div v-if="hint" class="mt-1 opacity-80">{{ hint }}</div>
  </div>
</template>

<style scoped>
.sketch {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sketch img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Let a white background disappear into the slide. */
  mix-blend-mode: multiply;
}

.sketch-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 10rem;
  padding: 1rem;
  border: 2px dashed #d97706;
  border-radius: 8px;
  color: #92400e;
  font-size: 0.85em;
}
</style>
