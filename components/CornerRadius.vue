<!-- Top view of a milled pocket: the round tool leaves a radius where CAD drew a sharp corner. -->
<template>
  <svg viewBox="0 0 360 260" class="w-full" role="img" aria-label="Top view of a pocket: a round end mill leaves a radius in the corner instead of the sharp corner drawn in CAD">
    <rect x="10" y="10" width="340" height="240" fill="var(--sk-stock)" stroke="var(--sk-rule)" />
    <rect x="60" y="60" width="240" height="160" rx="40" fill="var(--sk-paper)" stroke="var(--sk-ink)" stroke-width="2" />

    <!-- The sharp corner drawn in CAD -->
    <polyline points="60,120 60,60 120,60" fill="none" stroke="var(--sk-alert)" stroke-width="2" stroke-dasharray="6 4" />
    <text x="60" y="48" style="font-size: 16px" fill="#b91c1c">✗ CAD: sharp corner</text>

    <!-- The tool sitting in the corner -->
    <circle cx="100" cy="100" r="40" fill="var(--sk-accent)" fill-opacity="0.15" stroke="var(--sk-accent)" stroke-width="2" />
    <circle cx="100" cy="100" r="3" fill="var(--sk-accent)" />
    <line x1="100" y1="100" x2="128.3" y2="71.7" stroke="var(--sk-accent)" stroke-width="2" />
    <text x="110" y="100" style="font-size: 16px" fill="var(--sk-ink)">R</text>

    <text x="190" y="170" style="font-size: 17px" fill="var(--sk-ink)" text-anchor="middle">✓ Real: radius ≥ tool radius</text>
    <text x="180" y="240" style="font-size: 15px" fill="var(--sk-label)" text-anchor="middle">pocket, top view</text>
  </svg>
</template>
