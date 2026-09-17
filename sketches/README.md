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

## The palette in Inkscape

Two files here carry the deck's colours, so you never type a hex by hand:

- `dfm-sketch.gpl` — a palette for Inkscape's palette bar.
- `dfm-sketch-template.svg` — a document whose swatches are the sketch roles,
  with a labelled reference strip sitting just below the page.

Install the palette (Linux):

```sh
mkdir -p ~/.config/inkscape/palettes ~/.config/inkscape/templates
ln -sf "$PWD/dfm-sketch.gpl" ~/.config/inkscape/palettes/
cp dfm-sketch-template.svg ~/.config/inkscape/templates/
```

On Windows the same two folders live under `%APPDATA%\inkscape\`.

Restart Inkscape, then pick **DFM Sketch** from the ▸ menu at the right end of
the palette bar at the bottom of the window (**Object → Swatches**, Shift+Ctrl+W,
lists the same set). Left-click a swatch sets fill, Shift+click sets stroke.

The template shows up under **File → New from Template**. Its colours are
*document swatches*: the Fill & Stroke dialog lists them by role name, and
editing one swatch re-tints everything painted with it. Draw on the **Sketch**
layer; the **Swatches** layer sits below the page, so it stays out of an export
and out of **Resize Page to Selection**.

A drawing that came off the reMarkable has literal black strokes — select the
ink and click `#1f2937` to bring it onto the palette.
