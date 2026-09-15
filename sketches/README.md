# Sketches

Hand-drawn sketches for the slides. A slide shows `sketches/<name>.svg` wherever it uses
`<Sketch name="<name>" />`; until the file exists it shows a placeholder saying what to draw.

List the sketches the slides expect:

```sh
grep -rno '<Sketch name="[^"]*"' pages
```

## From the reMarkable, via Inkscape

1. Draw each sketch on its own page, using the **Blank** template.
2. Export the page as **SVG** and open it in Inkscape.
3. Delete the white background rectangle, if there is one, and clean up strokes.
4. **Edit → Resize Page to Selection** (Shift+Ctrl+R) with everything selected, so the page fits the drawing.
5. **Save As → Plain SVG** under the exact name, e.g. `sketches/corner-radius.svg`.

The sketch is scaled to fit the space on the slide. Leave a small margin around the strokes,
and draw all sketches at a similar size so line widths look consistent across slides.

PNG, JPG, and WebP also work (e.g. a phone photo of paper). Crop them and boost the contrast
so the paper is white; white is blended into the slide background.
