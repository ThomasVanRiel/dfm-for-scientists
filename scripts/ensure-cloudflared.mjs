// `slidev --tunnel` delegates to untun, which downloads cloudflared into
// os.tmpdir()/node-untun and chmods it afterwards. Two things go wrong with that:
// an interrupted download leaves a non-executable file behind that untun then
// happily spawns (EACCES, forever, because it only checks existence), and /tmp is
// a tmpfs here so the 39 MB download repeats after every reboot — exactly what you
// don't want on a venue network.
//
// This keeps its own copy under ~/.cache/cloudflared and stages it where untun
// expects, so the tunnel starts offline-of-GitHub and can't get stuck unexecutable.
import { chmodSync, copyFileSync, existsSync, mkdirSync, renameSync, statSync, writeFileSync } from 'node:fs'
import { homedir, tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const RELEASE = 'https://github.com/cloudflare/cloudflared/releases/download'

const ASSETS = {
  'linux-x64': 'cloudflared-linux-amd64',
  'linux-arm64': 'cloudflared-linux-arm64',
}

// Ask untun where it will look, so the pinned version stays in sync with it.
async function untunBinPath() {
  const indexUrl = import.meta.resolve('untun')
  const chunk = join(dirname(fileURLToPath(indexUrl)), '_chunks', 'cloudflared.mjs')
  const { cloudflaredBinPath } = await import(`file://${chunk}`)
  return cloudflaredBinPath
}

const isExecutable = p => existsSync(p) && (statSync(p).mode & 0o111) !== 0

async function main() {
  const target = await untunBinPath()

  if (isExecutable(target)) {
    console.log(`cloudflared ready at ${target}`)
    return
  }

  const version = target.match(/cloudflared\.(.+)$/)[1]
  const asset = ASSETS[`${process.platform}-${process.arch}`]
  if (!asset)
    throw new Error(`No cloudflared asset mapped for ${process.platform}-${process.arch}`)

  const cache = join(homedir(), '.cache', 'cloudflared', `cloudflared.${version}`)

  if (!isExecutable(cache)) {
    const url = `${RELEASE}/${version}/${asset}`
    console.log(`Downloading ${url}`)
    const res = await fetch(url) // fetch follows the release redirect for us
    if (!res.ok)
      throw new Error(`${res.status} ${res.statusText} for ${url}`)

    mkdirSync(dirname(cache), { recursive: true })
    // Write to a temp name first so an interrupted run can't poison the cache
    // the same way it poisons untun's.
    const partial = `${cache}.partial`
    writeFileSync(partial, Buffer.from(await res.arrayBuffer()))
    chmodSync(partial, 0o755)
    renameSync(partial, cache)
  }

  mkdirSync(dirname(target), { recursive: true })
  copyFileSync(cache, target)
  chmodSync(target, 0o755)
  console.log(`Staged cloudflared ${version} at ${target}`)
}

main()
