/*
  Premade plans: a name for a talk you give more than once.

      SECTIONS=short pnpm dev

  A value is a list of sections, in the same syntax SECTIONS takes on the
  command line — route aliases, chapter numbers, ranges, and the names of other
  plans, so a longer talk can be written as a shorter one plus what it adds.

  Prefer aliases to numbers: a number is a position in the running order, so a
  numbered plan quietly means something else once a section moves.

  This is the only file you should need to touch to add a talk.
*/
export const plans: Record<string, string> = {
  /*
    The three the outline slide's own speaker note calls non-optional —
    "everything here is optional except cost, the ladder, and milling" — and
    nothing else. The floor of a talk rather than a talk in itself.
  */
  core: 'cost, buy-assemble-machine, milling',
}
