<!--
  A hand-drawn sketch from sketches/<name>.svg (or .png/.jpg/.webp).
  Until the file exists, the default slot is shown, or a placeholder describing what to draw.

  With `layer`, one drawing can carry several versions of itself: the SVG is
  inlined instead of loaded as an image, and only the top-level group whose
  Inkscape label (or id) matches is shown. Two `<Sketch>` tags on the same file
  with different layers are then two views of one drawing, registered on one
  canvas by construction — stack them with `.sketch-stack` to cross-fade.
-->
<script setup>
import { computed, ref, useSlots, watchEffect } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  hint: { type: String, default: '' },
  layer: { type: String, default: '' },
})

const nameOf = path => path.replace(/^.*\/|\.\w+$/g, '')

const files = import.meta.glob('../sketches/*.{svg,png,jpg,jpeg,webp}', { import: 'default', eager: true })

// Lazy on purpose: the SVG text is only pulled into the bundle for a sketch
// that is actually asked for by layer.
const sources = import.meta.glob('../sketches/*.svg', { query: '?raw', import: 'default' })

const src = computed(() => Object.entries(files).find(([path]) => nameOf(path) === props.name)?.[1])
const source = computed(() => Object.entries(sources).find(([path]) => nameOf(path) === props.name)?.[1])

const raw = ref('')
watchEffect(async () => {
  raw.value = props.layer && source.value ? await source.value() : ''
})

/*
  Hides every top-level group but the one asked for. The drawing is left
  otherwise untouched: same viewBox, same transforms, so each layer lands where
  it was drawn.

  DOMParser is a browser API, and the deck is a client-rendered SPA, so this
  only ever runs where it exists — the guard is there so a build step that
  evaluates the component in Node renders the untouched drawing rather than
  throwing.
*/
const layered = computed(() => {
  if (!raw.value || typeof DOMParser === 'undefined') return raw.value

  const svg = new DOMParser().parseFromString(raw.value, 'image/svg+xml').documentElement
  const groups = [...svg.children].filter(el => el.tagName === 'g')
  const wanted = groups.filter(el => (el.getAttribute('inkscape:label') || el.id) === props.layer)

  if (!wanted.length) return ''

  groups.filter(el => !wanted.includes(el)).forEach(el => el.remove())
  // `XMLSerializer` rather than `outerHTML`: the latter serializes as HTML,
  // which lowercases `viewBox` and loses the drawing's scaling.
  return new XMLSerializer().serializeToString(svg)
})

const missingLayer = computed(() => props.layer && raw.value && !layered.value)

const slots = useSlots()
</script>

<template>
  <div v-if="missingLayer" class="sketch-placeholder">
    <div class="font-bold">✎ sketches/{{ name }}.svg</div>
    <div class="mt-1 opacity-80">has no layer “{{ layer }}”</div>
  </div>
  <div v-else-if="layer && source" class="sketch sketch-inline" v-html="layered" />
  <div v-else-if="src" class="sketch">
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

/*
  `:deep`, because the drawing arrives through `v-html` and so carries none of
  this component's scoping attributes. An inlined SVG has no white background
  to blend away — it is the ink and nothing else — and the default
  `preserveAspectRatio` already fits it the way `object-fit: contain` fits an
  image.
*/
.sketch-inline :deep(svg) {
  width: 100%;
  height: 100%;
}

.sketch-placeholder {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
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
