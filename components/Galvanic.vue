<!--
  Where a metal sits in the galvanic series, drawn as a diverging icon scale.
  Negative values are anodic (waves, amber: this is the metal that dissolves),
  positive are cathodic (shields, blue: this is the metal that survives). The
  two ends of the series therefore mirror each other rather than running one
  continuous ramp: icon and colour say which end you are on, length says how
  far out.

  Same idea as <Rating>, but signed, and only the icons a metal earns are
  drawn, the rest of the track being held by dots. Both sides share one track
  `max` icons wide: the waves fill it from the right, the shields from the
  left, so the columns line up and the widget stays narrow. Values are a rank on a 1-4 scale, not a measurement: the
  series is far wider at the anodic end than the noble end.
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  max: { type: Number, default: 4 },
  label: { type: String, default: '' },
})

const anodic = computed(() => props.value < 0)
const filled = computed(() => Math.min(Math.abs(props.value), props.max))

const description = computed(() =>
  props.label || `${filled.value} of ${props.max}, ${anodic.value ? 'dissolves' : 'protected'}`)

// Counts rather than a v-if inside the loop: v-if and v-for on one element
// is a lint error, and only one of the two is ever non-zero anyway.
const waves = computed(() => anodic.value ? filled.value : 0)
const shields = computed(() => anodic.value ? 0 : filled.value)

// Dots mark the slots this metal doesn't reach, so the track reads as a scale
// rather than as loose icons. They sit on the outer side of the ink.
const blank = computed(() => props.max - filled.value)
const leading = computed(() => anodic.value ? blank.value : 0)
const trailing = computed(() => anodic.value ? 0 : blank.value)
</script>

<template>
  <span class="galvanic" :class="anodic ? 'galvanic-anodic' : 'galvanic-cathodic'"
    :style="{ '--slots': max }" role="img" :aria-label="description" :title="description">
    <!-- Waves grow leftward from the right edge, shields rightward from the
         left edge, both inside the one track. -->
    <span v-for="n in leading" :key="`l${n}`" class="slot" aria-hidden="true" />
    <svg v-for="n in waves" :key="n" class="icon" viewBox="0 0 16 16" aria-hidden="true">
      <!-- A wave, for the metal going into solution. Symmetric: direction
           comes from where the ink sits, not from the glyph. -->
      <path d="M1.5 9.5q2.9-4.5 5.8 0t5.8 0"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-for="n in shields" :key="n" class="icon" viewBox="0 0 16 16" aria-hidden="true">
      <!-- A shield, for the metal the couple protects. -->
      <path d="M8 1.2 14.2 3.6v5.1c0 3.6-3.4 5.6-6.2 6.7-2.8-1.1-6.2-3.1-6.2-6.7V3.6Z"
        fill="currentColor" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
    </svg>
    <span v-for="n in trailing" :key="`t${n}`" class="slot" aria-hidden="true" />
  </span>
</template>

<style scoped>
.galvanic {
  --icon: 0.85em;
  --gap: 0.18em;

  display: inline-flex;
  gap: var(--gap);
  align-items: center;
  vertical-align: middle;
  line-height: 1;

  /* Held open to a full row of icons whether or not the metal earns them, so
     every row's track starts and ends on the same two edges. */
  width: calc(var(--slots) * var(--icon) + (var(--slots) - 1) * var(--gap));
}

.galvanic-anodic {
  color: var(--sk-warn);
  justify-content: flex-end;
}

.galvanic-cathodic {
  color: var(--sk-accent);
  justify-content: flex-start;
}

.icon {
  width: var(--icon);
  height: var(--icon);
  flex: none;
}

/* An empty slot: same footprint as an icon, a dot in the middle of it. Kept
   neutral rather than a faded amber or blue, so it reads as "nothing here"
   instead of as a weaker version of the metal's own colour. */
.slot {
  width: var(--icon);
  height: var(--icon);
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--sk-rule);
}

.slot::before {
  content: '';
  width: 0.2em;
  height: 0.2em;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.55;
}
</style>
