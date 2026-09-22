# Design for Manufacturing for Scientists

A crash course for scientists who design their own test setups — what parts really
cost, how a workshop makes them, and how to design parts that are cheap, fast, and
easy to build.

Thomas Van Riel, KU Leuven. Built with [Slidev](https://sli.dev), and licensed
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — see [License](#license).

The deck has two jobs, and both matter:

- it is the material for a seminar I give in person, and
- it is meant to stand on its own afterwards, for students and for anyone who
  finds it — so the slides carry their own explanation rather than leaning on
  what I say out loud.

## Reading it on your own

The built deck is published from `main`:
**<https://thomasvanriel.github.io/dfm-for-scientists/>**

Things worth knowing before you click through it:

- **Arrow keys** move slide to slide. Press `o` for an overview of every slide
  and `g` to jump to a number.
- **The course outline comes back before every section**, with the next chapter
  marked and everything already covered dimmed. Every line on it is a link, so
  it doubles as a table of contents you can jump from.
- **Three callouts carry the substance**, and the third slide explains them:
  a blue *takeaway* is the one thing to keep from a slide, an amber *warning*
  is a trap that turns up in real drawings, a green *tip* is something small you
  can apply to the next part you draw. Skimming only the callouts is a
  legitimate way to read the deck.
- **Speaker notes** hold the argument behind the slides — the examples, the
  asides, and why a rule is a rule. They are the trailing HTML comments in the
  `pages/*.md` sources, and they show in presenter mode at `/presenter`.

### What it covers

The running order, in four parts:

| | Part | Chapters |
| --- | --- | --- |
| 1–2 | What it costs | What parts actually cost · Buy, assemble, or machine? |
| 3–8 | Manufacturing | How a milling machine sees your part · Holes and threads · Tolerances and fits · Adjustability instead of precision · Materials · 3D printing |
| 9–11 | Assembly and finish | Design for assembly and use · Finishing and secondary operations · Sheet metal covers |
| 12–14 | Putting it in practice | Communicating with the workshop · Prototyping · Guild secrets |

`components/Outline.vue` holds this list and is the single source of truth for it;
if the table above and that file disagree, the file is right.

## Giving the talk yourself

The licence covers this: take the deck, cut it down, put your own workshop's
numbers in it, and present it. A few things that make that easier.

- **The deck is longer than one seminar.** Sections are picked live off the
  outline slide, which is why the outline is a list of links rather than a
  progress bar.
- **Section 1 has two worked examples**, one milling and one turning
  (`pages/01-cost-milling.md`, `pages/01-cost-turning.md`). Include exactly one,
  whichever matches what your audience has made for them — `slides.md` pulls in
  the milling one by default.
- **The numbers are not yours.** Rates, lead times and stock prices are the ones
  I quote for my own workshop; check them against yours before you say them out
  loud in a room.
- **`grep -rn 'class="todo"' slides.md pages`** lists the dashed placeholders
  that still need real workshop data.
- **Ask a machinist to co-teach**, and do a workshop tour after the milling
  section if you can. It is worth more than any slide here.

## Running it locally

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

`pnpm export` renders through the system Chromium (`/usr/bin/chromium`), because
Playwright's own build wants Ubuntu packages that Arch cannot supply. Point `CHROMIUM`
at another binary elsewhere, or set it to Playwright's own if that one works for you.

Presenter mode is at `/presenter`, with the speaker notes and a timer. Drawings made
during a talk are not persisted (`drawings.persist: false`).

The deck is designed to need **no network at all** while presenting: fonts and favicon
are self-hosted or inlined, and nothing is fetched from a CDN. A seminar room with a
dead WiFi is the normal case, not the bad case — and `pnpm export` gives you a PDF to
fall back to.

## Working on the deck

### Layout

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

#### The outline between sections

Every section is preceded by an `<Outline next="alias" />` slide: the full course
outline as numbered chapters in two columns, four groups under their own headings, each
line a `<Link>`, so the next section is picked from the list rather than walked into. `next` names the section that follows *that instance in the deck* —
everything before it is drawn dimmed, that chapter's number carries the `.marker`
highlighter, the rest read plain. The state is positional: a
section skipped over still dims, because the deck is past it.

`components/Outline.vue` holds the running order, grouped into parts, and is the single
source of truth for it. Moving a section means editing that list and moving both its
`src:` block and its `<Outline>` interlude in `slides.md`.

#### Slide shapes

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

#### Shared classes

Defined in `style.css`, used across the deck:

- `.takeaway` — blue callout for the one thing to remember from a slide
- `.warning` — amber callout for a trap
- `.tip` — green callout for something small and practical to apply
- `.todo` — dashed placeholder for content that still needs real workshop data
- `.marker` — hand-drawn highlighter stroke behind a word. Write it as an MDC
  span, `[function]{.marker}`; it falls back to bold when printed or exported

`grep -rn 'class="todo"' slides.md pages` lists what's still missing.

#### Colours

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
adapt it for any purpose, including commercially and including teaching it
yourself, as long as you give credit and say what you changed. Something like:

> Adapted from *Design for Manufacturing for Scientists* by Thomas Van Riel
> (KU Leuven), CC BY 4.0 — <https://github.com/ThomasVanRiel/dfm-for-scientists>

Third-party material keeps its own terms, notably the *Team Fortress 2* clip in
`public/` and the fonts in `fonts/`. See `LICENSE` for the details.

## Deploying

Pushing to `main` builds the deck and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`), served under the repository name as base path.
