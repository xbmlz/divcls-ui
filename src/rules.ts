import type { Rule } from '@unocss/core'

export default [
  // col
  [
    /^col-(\d+)$/,
    ([, d]) => ({
      'max-width': `${(Number(d) / 24) * 100}%`,
      'flex-grow:': 0,
      'flex-shrink': 0,
      'flex-basis': `${(Number(d) / 24) * 100}%`,
    }),
  ],
  [
    /^col-offset-(\d+)$/,
    ([, d]) => ({
      'margin-left': `${(Number(d) / 24) * 100}%`,
    }),
  ],
] as Rule[]
