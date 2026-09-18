# Design for Manufacturing for Scientists

A [Slidev](https://sli.dev) deck: a crash course for scientists who design their own
test setups — what parts really cost, how a workshop makes them, and how to design
parts that are cheap, fast, and easy to build.

Thomas Van Riel, KU Leuven.

## Running it

```sh
pnpm install
pnpm dev        # opens localhost:3030
```

| Script | What it does |
| --- | --- |
| `pnpm dev` | Dev server with hot reload, opens a browser |
| `pnpm dev:lan` | Same, but reachable from the LAN so a phone can drive the slides |
| `pnpm build` | Static site into `dist/` |
| `pnpm export` | PDF export |
| `pnpm fonts` | Re-download the self-hosted webfonts into `fonts/` |

Presenter mode is at `/presenter`; press `o` for the slide overview and `g` to jump to a
slide number. Drawings made during a talk are not persisted (`drawings.persist: false`).

The deck is designed to need **no network at all** while presenting: fonts and favicon
are self-hosted or inlined, and nothing is fetched from a CDN.

## Layout

```
slides.md          Headmatter, cover, and the intro slides; pulls in pages/ via `src:`
pages/01-*.md ..   One file per numbered section, in presentation order
components/*.vue   Diagram components used by the slides (<BlindHole />, <Sketch />, ...)
layouts/*.vue      Slide layouts that override Slidev's built-ins of the same name
sketches/          Hand-drawn SVGs shown by <Sketch name="..." /> — see sketches/README.md
fonts/             Committed webfonts — see fonts/README.md
style.css          Typography and the shared callout classes
slide-top.vue      Slide number in the corner of every slide except the cover
```

Adding a section means a new `pages/NN-name.md` starting with a `layout: section` title
slide carrying a `routeAlias`, plus a `src:` block in `slides.md`. Slides within a file
are separated by `---`; a trailing HTML comment on a slide is the speaker note.

### The outline between sections

Every section is preceded by an `<Outline next="alias" />` slide: the full course
outline, each line a `<Link>`, so the next section is picked from the list rather than
walked into. `next` names the section that follows *that instance in the deck* —
everything before it is drawn dimmed, and it gets a caret in the gutter. The state is
positional: a section skipped over still dims, because the deck is past it.

`components/Outline.vue` holds the running order, grouped into parts, and is the single
source of truth for it. Moving a section means editing that list and moving both its
`src:` block and its `<Outline>` interlude in `slides.md`.

### Slide shapes

For the common title / subtitle / two columns / full-width closing line shape,
use Slidev's `two-cols-header` layout rather than nesting divs: the default slot
is the full-width header, then `::left::`, `::right::`, and `::bottom::`. The
column and row gaps are set once in `style.css`.

`layouts/two-cols-header.vue` overrides the built-in layout to take the column
split from the frontmatter, so an uneven split doesn't need a utility-class
incantation:

```yaml
---
layout: two-cols-header
cols: 2/3         # a ratio, or CSS track sizes: `2fr 3fr`, `40% 60%`, `300px 1fr`
align: center     # center, top, bottom, or stretch
---
```

`align: stretch` spreads each column over the full row: the first block stays
at the top and the last one drops to the bottom, so two columns that both end
in a callout have their callouts on one line while their headings still start
together.

Both keys are optional and default to the built-in behaviour: equal columns,
aligned to the top. `layoutClass` still works for anything else, and still wins.

### Shared classes

Defined in `style.css`, used across the deck:

- `.takeaway` — blue callout for the one thing to remember from a slide
- `.warning` — amber callout for a trap
- `.tip` — green callout for something small and practical to apply
- `.todo` — dashed placeholder for content that still needs real workshop data
- `.marker` — hand-drawn highlighter stroke behind a word. Write it as an MDC
  span, `[function]{.marker}`; it falls back to bold when printed or exported

`grep -rn 'class="todo"' slides.md pages` lists what's still missing.

### Colours

Everything the deck draws with, for picking in Inkscape's RGBA field. The
sketch roles exist as CSS variables so the inline SVG components in
`components/` re-tint themselves in dark mode; a hand-drawn file from
`sketches/` carries literal colours instead, so use the light column there.

| Role | Variable | Light | Dark |
| --- | --- | --- | --- |
| Part outline | `--sk-ink` | `#1f2937` | `#dfe5ec` |
| Secondary outline | `--sk-ink-soft` | `#475569` | `#aab6c5` |
| Construction and dimension lines | `--sk-rule` | `#9ca3af` | `#7c8899` |
| Labels | `--sk-label` | `#6b7280` | `#9aa7b8` |
| Void inside a part | `--sk-paper` | `#ffffff` | `#1b2230` |
| Stock a part is cut from | `--sk-stock` | `#e5e7eb` | `#323c4b` |
| Tool, and anything correct | `--sk-accent` | `#2563eb` | `#60a5fa` |
| Caution | `--sk-warn` | `#d97706` | `#f59e0b` |
| Wrong, or impossible | `--sk-alert` | `#dc2626` | `#f87171` |
| Highlighter | `--sk-highlight` | `#fcd34d` | — |

The callouts, and the fill that matches each one when drawn at **25 % alpha on
white** — Inkscape composites the same way the slide does, so a 25 % wash of
the third column lands exactly on the second:

| Callout | Bar | Fill | Fill at 25 % |
| --- | --- | --- | --- |
| `.takeaway` | `#2563eb` | `#eff6ff` | `#bfdbff` |
| `.warning` | `#d97706` | `#fffbeb` | `#ffefaf` |
| `.tip` | `#059669` | `#ecfdf5` | `#b3f7d7` |

Drawing for both themes: a hand-drawn sketch is dark ink on white, blended
with `mix-blend-mode: multiply` so its paper disappears into a light slide.
Dark mode inverts the image and switches to `screen`, which keeps hues but
flips lightness — so near-black ink and saturated accents both survive the
trip, while a pale wash does not.

## License

The deck — slides, sketches, diagrams and the code that renders them — is
licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): share and
adapt it for any purpose, with credit.

Third-party material keeps its own terms, notably the *Team Fortress 2* clip in
`public/` and the fonts in `fonts/`. See `LICENSE` for the details.

## Deploying

Pushing to `main` builds the deck and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`), served under the repository name as base path.
