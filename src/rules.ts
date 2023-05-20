/* eslint-disable prettier/prettier */
import type { Rule } from '@unocss/core'

export default [
  // grid
  [
    /^grid-(\d+)$/,
    ([, d]) => ({
      'display': 'grid',
      'grid-template-columns': `repeat(${d}, minmax(0, 1fr))`,
    })
  ],
  [
    /^grid-gap-x-(\d+)$/,
    ([, d]) => ({
      'row-gap': `${d}px`,
    })
  ],
  [
    /^grid-col-offset-(\d+)$/,
    ([, d]) => ({
      'grid-column-start': `${Number(d) + 1}`,
    })
  ],
  [
    /^grid-gap-y-(\d+)$/,
    ([, d]) => ({
      'column-gap': `${d}px`,
    })
  ],
  // row
  [
    /^row-gutter-(\d+)$/,
    ([, d], { rawSelector }) => {
      return `
        .${rawSelector} {
          margin-left: -${Number(d) / 2}px;
          margin-right: -${Number(d) / 2}px;
        }
        .${rawSelector} > * {
          padding-left: ${Number(d) / 2}px;
          padding-right: ${Number(d) / 2}px;
        }
      `
    }
  ],
  // col
  [
    /^col-(\d+)$/,
    ([, d]) => ({
      'max-width': `${(Number(d) / 24) * 100}%`,
      'flex-basis': `${(Number(d) / 24) * 100}%`,
    }),
  ],
  [
    /^col-offset-(\d+)$/,
    ([, d]) => ({
      'margin-left': `${(Number(d) / 24) * 100}%`,
    }),
  ]
] as Rule[]
