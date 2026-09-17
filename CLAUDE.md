# Working on this deck

A Slidev deck. `pages/*.md` are the chapters, stitched together by `slides.md`;
`components/` holds the Vue components the slides use, `style.css` the shared
callouts and the sketch colour roles documented in `README.md`.

## I test and preview, you don't

Never start a dev server, never drive a browser, never take a screenshot of a
slide. No Playwright, no Puppeteer, no headless anything. I have the deck open
while you work and I look at every change myself.

This means you cannot see your own output, so say what you are unsure about
instead of claiming it looks right. Anything that depends on how it renders —
whether a column overflows, whether an icon reads from the back of the room,
whether a table fits — is a thing to flag for me to check, not to assert.

## Discuss before adding content

The deck is a talk I have to give. Do not add, cut or reword slide content on
your own initiative. Propose it first, in the chat, and wait: what goes on a
slide is my call, and I need to be able to check your work.

Fixing what I asked for is not "adding content". Writing a new bullet because
the slide looked thin is. When in doubt, describe the change and ask.

Same for the numbers: everything on a slide is something I may be challenged on
in the room. Say where a figure comes from, and flag it when a value is a
convention, a rule of thumb, or your own simplification rather than a measured
quantity.

## Commit to main

Commit to `main` directly. Do not create a branch unless I ask for one, and do
not push — this sandbox has no keys.

## House style

- Match the surrounding slides: sentence-case headings, bold for the term being
  defined, `[…]{.technical}` for numbers in body text.
- Markdown is not parsed inside a raw `<div>`. Use `<strong>` and
  `<span class="technical">` there, as the existing callouts do.
- Reuse what exists before inventing: the `.takeaway` / `.warning` / `.tip`
  callouts, the `::bottom::` slot, `<Link to="routeAlias">` for cross-references,
  and the `--sk-*` colour roles rather than literal hex.
