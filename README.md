# Design for Manufacturing for Scientists

A [Slidev](https://sli.dev) deck: a crash course for scientists who design their own
test setups — what parts really cost, how a workshop makes them, and how to design
parts that are cheap, fast, and easy to build.

Thomas Van Riel, KU Leuven.

## Running it

```sh
npm install
npm run dev        # opens localhost:3030
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload, opens a browser |
| `npm run dev:lan` | Same, but reachable from the LAN so a phone can drive the slides |
| `npm run build` | Static site into `dist/` |
| `npm run export` | PDF export |
| `npm run fonts` | Re-download the self-hosted webfonts into `fonts/` |

Presenter mode is at `/presenter`; press `o` for the slide overview and `g` to jump to a
slide number. Drawings made during a talk are not persisted (`drawings.persist: false`).

The deck is designed to need **no network at all** while presenting: fonts and favicon
are self-hosted or inlined, and nothing is fetched from a CDN.

## Layout

```
slides.md          Headmatter, cover, and the intro slides; pulls in pages/ via `src:`
pages/01-*.md ..   One file per numbered section, in presentation order
components/*.vue   Diagram components used by the slides (<BlindHole />, <Sketch />, ...)
sketches/          Hand-drawn SVGs shown by <Sketch name="..." /> — see sketches/README.md
fonts/             Committed webfonts — see fonts/README.md
style.css          Typography and the shared callout classes
slide-top.vue      Slide number in the corner of every slide except the cover
```

Adding a section means a new `pages/NN-name.md` starting with a `layout: section` title
slide, plus a `src:` block at the bottom of `slides.md`. Slides within a file are
separated by `---`; a trailing HTML comment on a slide is the speaker note.

### Slide shapes

For the common title / subtitle / two columns / full-width closing line shape,
use Slidev's `two-cols-header` layout rather than nesting divs: the default slot
is the full-width header, then `::left::`, `::right::`, and `::bottom::`. The
column and row gaps are set once in `style.css`.

### Shared classes

Defined in `style.css`, used across the deck:

- `.takeaway` — blue callout for the one thing to remember from a slide
- `.warning` — amber callout for a trap
- `.tip` — green callout for something small and practical to apply
- `.todo` — dashed placeholder for content that still needs real workshop data
- `.marker` — hand-drawn highlighter stroke behind a word. Write it as an MDC
  span, `[function]{.marker}`; it falls back to bold when printed or exported

`grep -rn 'class="todo"' slides.md pages` lists what's still missing.

## Deploying

Pushing to `main` builds the deck and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`), served under the repository name as base path.
