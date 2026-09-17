/*
  Mermaid ships a lavender-on-purple default theme in its own font, which is
  the one place the deck looks like a generic markdown export. Restate it in
  the deck's colours: the `base` theme is the one meant to be overridden, and
  every variable below is a value already used elsewhere in style.css.

  `edgeLabelBackground` is the chip behind the yes/no labels. Mermaid draws
  that rect either way and picks the label's text colour to contrast with it,
  so `transparent` gets read as dark and the labels come out reversed out of
  a grey box. White is the way to hide it on a white slide.

  Light values only. The deck presents light; in dark mode the diagram keeps
  these colours rather than following the theme, which is one more reason a
  drawing in sketches/ eventually beats a mermaid block here.
*/
/*
  Slidev's `defineMermaidSetup` is a typing helper and nothing more, and
  `@slidev/types` is not a direct dependency under pnpm, so export the plain
  function it would have wrapped.
*/
export default () => ({
  theme: 'base',
  themeVariables: {
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif",
    fontSize: '15px',

    // Nodes: the takeaway callout's tint and bar.
    primaryColor: '#eff6ff',
    primaryBorderColor: '#2563eb',
    primaryTextColor: '#1f2937',

    // Arrows and their labels: the sketch palette's rule and label roles.
    lineColor: '#9ca3af',
    edgeLabelBackground: '#ffffff',
    tertiaryTextColor: '#6b7280',
  },
})
