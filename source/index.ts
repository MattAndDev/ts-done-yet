import { readFileSync } from 'fs'
import { walk } from './walk'
export * from './percentage'

export type CounterKey = 'ts' | 'js' | 'all'

export type Counter = {
  [key in CounterKey]: { files: number; lines: number }
}

export const tsDoneYet = async (dir = '.'): Promise<Counter> => {
  const files = await walk(dir, /node_modules/, /\.(t|j)sx?$/)

  const counter = {
    ts: { files: 0, lines: 0 },
    js: { files: 0, lines: 0 },
    all: { files: 0, lines: 0 },
  }

  for await (const p of files) {
    const lines = await readFileSync(p).toString().split('\n').length
    const key = p.match(/\.jsx?/) ? 'js' : 'ts'
    counter[key].lines += lines
    counter[key].files += 1
    counter.all.lines += lines
    counter.all.files += 1
  }

  return counter
}
