export const percentage = (amount: number, total: number): string =>
  ((amount / total) * 100).toFixed(2)
