<!--
  A drawing that is printed where it sits in the text: the SVG in the default
  slot, at the scale of the surrounding type.

  This is the counterpart to `Sketch`, which looks a drawing up in sketches/
  and shows a placeholder until the file is there. Use `InlineSketch` for the
  SVG components in components/, which are the drawing itself and need no
  lookup, no fallback, and no blend mode.

  The height is capped at twice the font size and the width follows from the
  aspect ratio, so the drawing sets into a line rather than breaking it. That
  is a pictogram's worth of space: a drawing meant for this needs heavy strokes
  and no lettering. For a taller one, set the variable on the tag:
  <InlineSketch style="--inline-sketch-height: 4em">.
-->
<template>
  <span class="inline-sketch"><slot /></span>
</template>

<style scoped>
.inline-sketch {
  display: inline-block;
  height: var(--inline-sketch-height, 2em);
  /*
    Centres the box on the middle of the lowercase letters rather than on the
    baseline, which is as close to optically centred as CSS gets without
    hard-coding an offset for one font size.
  */
  vertical-align: middle;
  /* No leading of its own, so the box is exactly the height asked for. */
  line-height: 0;
}

/*
  Whatever is slotted in is sized by its height, and keeps its aspect ratio:
  a component that is itself an <svg>, or the <div class="sketch"> that
  `Sketch` wraps around a drawing from sketches/. That wrapper needs the
  height passed down to it, because `.sketch img` in style.css is written
  `height: 100%` — against an auto-height parent that resolves to the file's
  own height, which is what makes a drawing hang out of the line.
*/
.inline-sketch :deep(.sketch) {
  height: 100%;
}

.inline-sketch :deep(svg),
.inline-sketch :deep(img) {
  display: block;
  height: 100%;
  /* Width follows the height; `max-width` would cap it against the line box. */
  width: auto;
  max-width: none;
}
</style>
