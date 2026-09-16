<!-- Section of a tapped blind hole (M6 ↧ 12, drill Ø5 ↧ 16) at 10 px/mm, showing the drill point cone. -->
<script setup>
const top = 40
const threadBottom = top + 120
const teeth = Array.from({ length: 12 }, (_, i) => top + i * 10)
</script>

<template>
  <svg viewBox="0 0 350 300" class="w-full" role="img" aria-label="Section of a blind tapped hole: the thread stops short of the drilled depth, which ends in a 118 degree cone">
    <rect x="20" y="40" width="280" height="250" fill="var(--sk-stock)" stroke="var(--sk-rule)" />

    <!-- Drilled hole with cone -->
    <polygon points="185,40 185,200 210,215 235,200 235,40" fill="var(--sk-paper)" stroke="var(--sk-ink)" stroke-width="2" />

    <!-- Thread flanks -->
    <g stroke="var(--sk-accent)" stroke-width="1.5" fill="none">
      <polyline v-for="y in teeth" :key="`l${y}`" :points="`185,${y} 180,${y + 5} 185,${y + 10}`" />
      <polyline v-for="y in teeth" :key="`r${y}`" :points="`235,${y} 240,${y + 5} 235,${y + 10}`" />
    </g>
    <line x1="210" y1="30" x2="210" y2="225" stroke="var(--sk-rule)" stroke-dasharray="8 3 2 3" />

    <!-- Thread depth -->
    <g stroke="var(--sk-ink)" stroke-width="1">
      <line x1="140" :y1="top" x2="140" :y2="threadBottom" />
      <line x1="134" :y1="top" x2="146" :y2="top" />
      <line x1="134" :y1="threadBottom" x2="176" :y2="threadBottom" stroke-dasharray="3 3" />
    </g>
    <text x="132" y="100" style="font-size: 16px" fill="var(--sk-ink)" text-anchor="middle" transform="rotate(-90 132 100)">thread 12</text>

    <!-- Drill depth -->
    <g stroke="var(--sk-ink)" stroke-width="1">
      <line x1="80" :y1="top" x2="80" y2="200" />
      <line x1="74" :y1="top" x2="86" :y2="top" />
      <line x1="74" y1="200" x2="180" y2="200" stroke-dasharray="3 3" />
    </g>
    <text x="72" y="120" style="font-size: 16px" fill="var(--sk-ink)" text-anchor="middle" transform="rotate(-90 72 120)">drill 16</text>

    <text x="248" y="236" style="font-size: 16px" fill="var(--sk-ink)">118° point</text>
    <text x="210" y="24" style="font-size: 15px" fill="var(--sk-label)" text-anchor="middle">M6</text>
  </svg>
</template>
