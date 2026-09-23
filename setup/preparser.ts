/*
  SECTIONS: give part of the course instead of all of it.

      pnpm dev                                    the whole deck
      SECTIONS=core pnpm dev                      a premade plan, from plans.ts
      SECTIONS=cost,milling,communication pnpm dev
      SECTIONS=1-4,13 pnpm dev                    chapter numbers, and ranges

  The deck is longer than one seminar, and sixteen chapters listed before every
  section is more than most audiences want to read. This drops the sections you
  leave out of the deck as it is parsed: their slides are gone, not hidden, so
  space and the arrows simply carry on in the order you asked for, and `pnpm
  export` gives you a PDF of that talk. The outline slides follow on their own —
  components/Outline.vue lists the sections that are in the deck, whatever put
  them there.

  With SECTIONS unset nothing here runs, so the published deck is always the
  whole course.

  Slidev's preparser hook, which runs in Node before the markdown is parsed and
  hands each file's raw lines over to be rewritten. The edit is the smallest one
  that does the job: `disabled: true` in a slide's frontmatter, which the parser
  honours before it even follows a `src:`, so one line drops a whole chapter
  file. `definePreparserSetup` is a typing helper from `@slidev/types`, which is
  not a direct dependency under pnpm, so export the plain function it would have
  wrapped — as setup/mermaid.ts does.
*/
import { plans } from './plans.ts'

/*
  slides.md is the only file with these in it, which is how the extension knows
  not to touch the chapter files it is also handed.

  The running order is read off the interludes: `<Outline next="X" />` opens
  chapter X, and every `src:` block after it belongs to X until the next one.
  That makes slides.md the single source of truth for the order, with nothing to
  keep in step with it — except for the one block that is not a chapter at all,
  which says so with `always: true`.
*/
const RE_INTERLUDE = /^<Outline\s+next="([\w-]+)"/
const RE_SRC = /^src:\s*\.\/pages\//
const RE_ALWAYS = /^always:\s*true\s*$/

const tokenize = (raw: string) => raw.split(/[,\s]+/).filter(Boolean)

/*
  Which chapters to keep. Returns null for "all of them", which is also what an
  empty or unintelligible SECTIONS gives you: the failure mode in front of a
  room should be the whole course, not an empty deck.

  A plan name expands into its own tokens, once only, so a plan that names
  itself or rings round to itself is ignored rather than followed. A chapter's
  own alias wins over a plan sharing its name.
*/
function resolve(raw: string, order: string[]): Set<string> | null {
  const keep = new Set<string>()
  const expanded = new Set<string>()
  const queue = tokenize(raw)

  while (queue.length) {
    const token = queue.shift()!
    if (token.toLowerCase() === 'all')
      return null

    const range = token.match(/^(\d+)-(\d+)$/)
    if (range) {
      const [from, to] = [Number(range[1]), Number(range[2])].sort((a, b) => a - b)
      for (let n = from; n <= to; n++)
        if (order[n - 1]) keep.add(order[n - 1])
      continue
    }

    if (/^\d+$/.test(token)) {
      if (order[Number(token) - 1]) keep.add(order[Number(token) - 1])
      continue
    }

    if (order.includes(token)) {
      keep.add(token)
      continue
    }

    if (plans[token] && !expanded.has(token)) {
      expanded.add(token)
      queue.push(...tokenize(plans[token]))
      continue
    }

    console.warn(`[sections] ignoring "${token}": not a chapter, a number, or a plan in setup/plans.ts`)
  }

  if (!keep.size) {
    console.warn(`[sections] nothing understood in SECTIONS="${raw}" — giving the whole course`)
    return null
  }
  return keep
}

// Is this `src:` block marked as belonging to no chapter? Scans its own
// frontmatter, which runs from the line after `---` to the next `---`.
function markedAlways(lines: string[], at: number): boolean {
  for (let i = at; i < lines.length && lines[i].trimEnd() !== '---'; i++) {
    if (RE_ALWAYS.test(lines[i].trim())) return true
  }
  return false
}

export default function () {
  const raw = process.env.SECTIONS
  if (!raw?.trim()) return []

  return [{
    transformRawLines(lines: string[]) {
      if (!lines.some(line => RE_INTERLUDE.test(line.trim()))) return

      const order = lines
        .map(line => line.trim().match(RE_INTERLUDE)?.[1])
        .filter((alias): alias is string => !!alias)

      const keep = resolve(raw, order)
      if (!keep) return

      // Collected first and applied bottom-up, so an insertion never moves a
      // line this loop has yet to look at.
      const edits: { at: number, insert: string[] }[] = []
      let chapter: string | null = null

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()

        const interlude = line.match(RE_INTERLUDE)
        if (interlude) {
          chapter = interlude[1]
          if (keep.has(chapter)) continue
          /*
            An interlude has no frontmatter of its own — it is a bare `---`, a
            blank line, and the component — so it needs a block, not a line. A
            `---` only opens frontmatter when the line after it is not blank,
            which is exactly what this makes true.
          */
          let open = i
          while (open > 0 && lines[open].trimEnd() !== '---') open--
          edits.push({ at: open + 1, insert: ['disabled: true', '---'] })
          continue
        }

        if (RE_SRC.test(line) && chapter && !keep.has(chapter) && !markedAlways(lines, i))
          edits.push({ at: i + 1, insert: ['disabled: true'] })
      }

      for (const edit of edits.reverse())
        lines.splice(edit.at, 0, ...edit.insert)

      console.log(`[sections] giving ${keep.size} of ${order.length} chapters: ${order.filter(a => keep.has(a)).join(', ')}`)
    },
  }]
}
