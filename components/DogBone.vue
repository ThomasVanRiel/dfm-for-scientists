<!--
  Top view: relief cuts on the pocket corners, so a square part drops in
  despite the tool radius.

  Drawn for `InlineSketch`, so it is read at about two lines of type: heavy
  strokes, no lettering, and only the two shapes the point needs.
-->
<template>
  <svg viewBox="0 0 200 140" class="w-full" role="img" aria-label="Top view of a pocket with dog-bone relief cuts: a circle of tool diameter is cut into each corner, so a square part still fits">
    <rect x="5" y="5" width="190" height="130" fill="var(--sk-stock)" stroke="var(--sk-rule)" stroke-width="2" />

    <!--
      The pocket outline, corners included. Each dog-bone is a half circle of
      the tool diameter bulging past the corner: with r = 18 the arc's two ends
      sit r/√2 ≈ 12.7 along each edge, which puts them diametrically opposite,
      so every corner is exactly a semicircle.
    -->
    <path
      d="M 42.7 25 L 157.3 25 A 18 18 0 0 1 170 37.7 L 170 102.3 A 18 18 0 0 1 157.3 115
         L 42.7 115 A 18 18 0 0 1 30 102.3 L 30 37.7 A 18 18 0 0 1 42.7 25 Z"
      fill="var(--sk-paper)" stroke="var(--sk-ink)" stroke-width="4" />

    <!-- The square part, dropped in: its corners sit inside the reliefs. -->
    <rect x="30" y="25" width="140" height="90" fill="none"
          stroke="var(--sk-accent)" stroke-width="3.5" stroke-dasharray="8 6" />
  </svg>
</template>
