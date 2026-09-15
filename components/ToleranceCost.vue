<!-- Qualitative tolerance vs. cost curve. Costs are illustrative, not measured data. -->
<script setup>
const points = [
  { tol: 0.5, label: '±0.5', process: 'saw / laser', cost: 1 },
  { tol: 0.1, label: '±0.1', process: 'milling', cost: 1.4 },
  { tol: 0.02, label: '±0.02', process: 'fine milling', cost: 2.5 },
  { tol: 0.005, label: '±0.005', process: 'grinding', cost: 5 },
  { tol: 0.001, label: '±0.001', process: 'lapping', cost: 12 },
]

const left = 80
const right = 420
const bottom = 230
const plotTop = 30
const x = (tol) => left + ((-Math.log10(tol) - 0.3) / 2.7) * (right - left)
const y = (cost) => bottom - (cost / 12) * (bottom - plotTop)

const xy = points.map((p) => [x(p.tol), y(p.cost)])

// Catmull-Rom spline through the points, converted to cubic Béziers.
const path = xy.reduce((d, [px, py], i) => {
  if (i === 0) return `M${px},${py}`
  const p0 = xy[i - 2] ?? xy[i - 1]
  const p1 = xy[i - 1]
  const p3 = xy[i + 1] ?? [px, py]
  const c1 = [p1[0] + (px - p0[0]) / 6, p1[1] + (py - p0[1]) / 6]
  const c2 = [px - (p3[0] - p1[0]) / 6, py - (p3[1] - p1[1]) / 6]
  return `${d} C${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${px},${py}`
}, '')
</script>

<template>
  <svg viewBox="0 0 460 290" class="w-full" role="img" aria-label="Relative cost rises steeply as the tolerance tightens from ±0.5 mm to ±0.001 mm">
    <!-- Axes -->
    <line x1="50" :y1="bottom" x2="440" :y2="bottom" stroke="#d1d5db" />
    <line x1="50" y1="20" x2="50" :y2="bottom" stroke="#d1d5db" />
    <text x="40" y="125" style="font-size: 14px" fill="#6b7280" text-anchor="middle" transform="rotate(-90 40 125)">relative cost</text>

    <path :d="path" fill="none" stroke="#2563eb" stroke-width="2" />

    <g v-for="(p, i) in points" :key="p.tol">
      <circle :cx="xy[i][0]" :cy="xy[i][1]" r="4" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
      <text :x="xy[i][0]" :y="bottom + 18" style="font-size: 14px" fill="#1f2937" text-anchor="middle">{{ p.label }}</text>
      <text :x="xy[i][0]" :y="bottom + 33" style="font-size: 13px" fill="#6b7280" text-anchor="middle">{{ p.process }}</text>
    </g>

    <text x="440" :y="bottom + 52" style="font-size: 14px" fill="#6b7280" text-anchor="end">tolerance in mm, tighter →</text>
  </svg>
</template>
