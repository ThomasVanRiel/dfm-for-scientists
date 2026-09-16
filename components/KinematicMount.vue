<!-- Top view of a Kelvin clamp: cone, V-groove pointing at the cone, and flat, each holding one ball. -->
<script setup>
const cone = [160, 85]
const groove = [225, 197.5]
const flat = [95, 197.5]
const grooveAngle = (Math.atan2(cone[1] - groove[1], cone[0] - groove[0]) * 180) / Math.PI
</script>

<template>
  <svg viewBox="0 0 320 300" class="w-full" role="img" aria-label="Kelvin clamp, top view: a cone, a V-groove pointing at the cone, and a flat, each with a ball">
    <circle cx="160" cy="160" r="110" fill="var(--sk-stock)" stroke="var(--sk-rule)" />

    <!-- Cone -->
    <circle :cx="cone[0]" :cy="cone[1]" r="20" fill="var(--sk-paper)" stroke="var(--sk-ink)" stroke-width="1.5" />
    <circle :cx="cone[0]" :cy="cone[1]" r="8" fill="none" stroke="var(--sk-ink)" stroke-width="1.5" />

    <!-- V-groove -->
    <g :transform="`rotate(${grooveAngle} ${groove[0]} ${groove[1]})`">
      <rect :x="groove[0] - 30" :y="groove[1] - 9" width="60" height="18" fill="var(--sk-paper)" stroke="var(--sk-ink)" stroke-width="1.5" />
      <line :x1="groove[0] - 30" :y1="groove[1]" :x2="groove[0] + 30" :y2="groove[1]" stroke="var(--sk-ink)" stroke-width="1.5" />
    </g>

    <!-- Flat -->
    <rect :x="flat[0] - 20" :y="flat[1] - 20" width="40" height="40" fill="var(--sk-paper)" stroke="var(--sk-ink)" stroke-width="1.5" />

    <!-- Balls -->
    <circle v-for="p in [cone, groove, flat]" :key="p.join()" :cx="p[0]" :cy="p[1]" r="12" fill="var(--sk-accent)" fill-opacity="0.35" stroke="var(--sk-accent)" stroke-width="2" />

    <text x="160" y="38" style="font-size: 17px" fill="var(--sk-ink)" text-anchor="middle">cone: 3</text>
    <text x="250" y="290" style="font-size: 17px" fill="var(--sk-ink)" text-anchor="middle">V-groove: 2</text>
    <text x="70" y="290" style="font-size: 17px" fill="var(--sk-ink)" text-anchor="middle">flat: 1</text>
  </svg>
</template>
