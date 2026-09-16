<!--
  Decorative engineering drawing for the title slide: an L-bracket (80 × 50 mm base, 60 mm upright,
  10 mm thick) in front and top view at 3 px/mm, first-angle projection, with a title block.
-->
<template>
  <svg viewBox="0 0 630 450" role="img" aria-label="Engineering drawing of an L-bracket in front and top view, with a title block where ±0.01 is crossed out and replaced by ISO 2768-mK">
    <defs>
      <marker id="td-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,1.5 L10,5 L0,8.5 Z" fill="var(--sk-ink-soft)" />
      </marker>
    </defs>

    <g fill="none" stroke-linecap="round">
      <!-- Front view -->
      <path d="M80,40 L110,40 L110,190 L320,190 L320,220 L80,220 Z" stroke="var(--sk-ink)" stroke-width="2" />
      <g stroke="var(--sk-label)" stroke-width="1.2" stroke-dasharray="5 3">
        <line x1="205" y1="190" x2="205" y2="220" />
        <line x1="225" y1="190" x2="225" y2="220" />
      </g>
      <line x1="215" y1="178" x2="215" y2="232" stroke="var(--sk-rule)" stroke-dasharray="12 3 2 3" />

      <!-- Top view -->
      <rect x="80" y="260" width="240" height="150" stroke="var(--sk-ink)" stroke-width="2" />
      <line x1="110" y1="260" x2="110" y2="410" stroke="var(--sk-ink)" stroke-width="2" />
      <circle cx="215" cy="305" r="10" stroke="var(--sk-ink)" stroke-width="2" />
      <rect x="205" y="352" width="20" height="26" rx="10" stroke="var(--sk-ink)" stroke-width="2" />
      <g stroke="var(--sk-rule)" stroke-dasharray="12 3 2 3">
        <line x1="198" y1="305" x2="232" y2="305" />
        <line x1="215" y1="245" x2="215" y2="392" />
        <line x1="198" y1="365" x2="232" y2="365" />
      </g>

      <!-- Dimensions -->
      <g stroke="var(--sk-ink-soft)" stroke-width="1">
        <line x1="76" y1="40" x2="44" y2="40" />
        <line x1="76" y1="220" x2="44" y2="220" />
        <line x1="50" y1="40" x2="50" y2="220" marker-start="url(#td-arrow)" marker-end="url(#td-arrow)" />

        <line x1="324" y1="190" x2="352" y2="190" />
        <line x1="324" y1="220" x2="352" y2="220" />
        <line x1="346" y1="190" x2="346" y2="220" marker-start="url(#td-arrow)" marker-end="url(#td-arrow)" />

        <line x1="80" y1="414" x2="80" y2="438" />
        <line x1="320" y1="414" x2="320" y2="438" />
        <line x1="80" y1="432" x2="320" y2="432" marker-start="url(#td-arrow)" marker-end="url(#td-arrow)" />

        <polyline points="222,298 300,282 372,282" />
      </g>

      <!-- Title block -->
      <g stroke="var(--sk-ink)">
        <rect x="380" y="300" width="230" height="120" stroke-width="2" />
        <line x1="380" y1="340" x2="610" y2="340" />
        <line x1="380" y1="380" x2="610" y2="380" />
        <line x1="440" y1="300" x2="440" y2="420" />
      </g>
    </g>

    <!-- Marker highlight and strike-through in the tolerance row -->
    <path d="M503,388 C530,385 570,387 606,385 C608,393 607,404 605,413 C570,415 532,412 502,414 C500,405 502,396 503,388 Z" fill="var(--sk-highlight)" />
    <line x1="449" y1="403" x2="497" y2="394" stroke="var(--sk-alert)" stroke-width="2.5" stroke-linecap="round" />

    <g style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 14px" fill="var(--sk-ink)">
      <text x="42" y="130" text-anchor="middle" transform="rotate(-90 42 130)">60</text>
      <text x="356" y="210">10</text>
      <text x="200" y="426" text-anchor="middle">80</text>
      <text x="302" y="277">Ø6 H7</text>

      <g style="font-size: 12px" fill="var(--sk-label)">
        <text x="390" y="325">PART</text>
        <text x="390" y="365">MATL</text>
        <text x="390" y="405">TOL</text>
      </g>
      <g style="font-size: 13px">
        <text x="450" y="325">L-bracket</text>
        <text x="450" y="365">EN AW-6082</text>
        <text x="450" y="405" fill="var(--sk-label)">±0.01</text>
        <text x="507" y="405">ISO 2768-mK</text>
      </g>
    </g>
  </svg>
</template>
