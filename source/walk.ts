import { readdirSync, lstatSync } from 'fs'
import { join, resolve } from 'path'

export const walk = async function* (
  dir = '.',
  skipDir?: RegExp,
  matchFile?: RegExp
): AsyncIterable<string> {
  for await (const f of readdirSync(resolve(dir))) {
    const target = join(dir, f)
    if (lstatSync(target).isDirectory()) {
      const shouldSkip = skipDir && skipDir.test(target)
      if (!shouldSkip) yield* walk(target, skipDir, matchFile)
    } else {
      if ((matchFile && matchFile.test(target)) || !matchFile) yield target
    }
  }
}
