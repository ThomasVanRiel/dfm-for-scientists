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

## Layers: two views of one drawing

A drawing can carry several versions of itself, and a slide can ask for one of them:

```html
<Sketch name="dimensioning-chain-baseline" layer="chain" />
<Sketch name="dimensioning-chain-baseline" layer="baseline" />
```

That is for the pairs where the point is what *changed*: the same plate dimensioned two
ways, or a view before and after the dimensions come off it. Drawing them as layers of one
file means the geometry is the same geometry, not two exports that have to be nudged into
agreement — so a cross-fade between them moves only what differs.

Each layer is a **top-level group**: a direct child of `<svg>`, nothing nested. Everything
shared — the outline, the holes — is drawn into **every** layer, so each one stands on its
own. Set the page once, with all layers visible, and never per layer: the layers have to
share a canvas, and a `Resize Page to Selection` with one of them hidden shifts it.

In Inkscape, **Layer → Add Layer** for each, then give the layer the name the slide will
use. **Plain SVG strips `inkscape:label`**, so the name that survives the export is the
**ID**: select the layer's group, open **Object Properties** (Ctrl+Shift+O), and set *ID*
to `chain`, `baseline`, `thicket` — whatever the slide asks for. (`Sketch` matches either,
so an `inkscape:label` works too, but only if the file was saved as Inkscape SVG.)

A `layer` that matches nothing renders the dashed placeholder naming the layer it wanted,
rather than quietly showing the whole overlaid drawing.

To cross-fade two layers on a click, stack them and let the canvas size the box — the
inlined SVG has no intrinsic size to fall back on:

```html
<div class="sketch-stack" style="--mm: 0.179rem; --canvas-w: 196.33; --canvas-h: 131.18">
  <Sketch name="hole-thicket-table" layer="thicket" v-click.hide="1" />
  <Sketch name="hole-thicket-table" layer="table" v-click="1" />
</div>
```

`--canvas-w` and `--canvas-h` are the file's `width` and `height` in millimetres, straight
off the `<svg>` tag; `--mm` is rem per millimetre, and it is the one number to turn when
the drawing wants to be bigger or smaller on the slide.

A layered sketch is **inlined** into the slide rather than loaded as an image: it is in the
DOM, so CSS and `v-click` reach inside it, and it carries no white background to blend away.
An ordinary `<Sketch>` with no `layer` is still an `<img>`, exactly as before.

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
