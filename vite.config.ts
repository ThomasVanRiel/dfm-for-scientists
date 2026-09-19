import { execFileSync } from 'node:child_process'

/*
  The revision tag on the title slide, read from git when the dev server starts
  or the deck is built. It is not live: a commit made while `slidev` is running
  shows up after a restart. Outside a git checkout it falls back to `unknown`
  rather than failing the build.

  A plain object, not `defineConfig(...)`: `vite` is not a direct dependency
  under pnpm, so it can't be imported from here (same reason as setup/mermaid.ts).
*/
function git(...args: string[]) {
  try {
    return execFileSync('git', args, { encoding: 'utf8' }).trim()
  } catch {
    return 'unknown'
  }
}

export default {
  define: {
    __DECK_REV__: JSON.stringify(git('rev-parse', '--short', 'HEAD')),
    __DECK_DATE__: JSON.stringify(git('log', '-1', '--format=%cs')),
  },
}
