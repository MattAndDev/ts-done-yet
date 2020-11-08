import { tsDoneYet } from './index'
import { percentage } from './percentage'

const dir = process.argv[2]

;(async function () {
  const counter = await tsDoneYet(dir)
  console.info(
    `${percentage(
      counter.ts.files,
      counter.all.files
    )}% of files migrated to typescript`
  )
  console.info(
    `${percentage(
      counter.ts.lines,
      counter.all.lines
    )}% of lines migrated to typescript`
  )
})()
