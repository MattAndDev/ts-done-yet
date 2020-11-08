# ts-done-yet

How far is your typescript migration?

## usage

### cli

```
npm i -g ts-done-yet
ts-done-yet ./my-project/src
```

### code

```ts
import { tsDoneYet, percentage } from 'tsc-done-yet'
;(async function () {
  const { ts, all } = await tsDoneYet('./my-project/src')
  const filesPercentage = percentage(ts.files, all.files)
  const linesPercentage = percentage(ts.lines, all.lines)
})()
```

## why

When incrementally adopting typescript it's important to keep track of your progress.

Also, [do NOT use any](https://twitter.com/iamdevloper/status/1260565469012152321).
