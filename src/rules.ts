import type { Rule } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'

const getGutterStyles = (rawSelector: string, span: string, theme: Theme, size: string) => {
  const styles = `
  .${rawSelector} {
    margin-left: -${Number(span) / 2}px;
    margin-right: -${Number(span) / 2}px;
  }
  .${rawSelector} > * {
    padding-left: ${Number(span) / 2}px;
    padding-right: ${Number(span) / 2}px;
  }
  `
  if (size) {
    return `
    @media (min-width: ${theme.breakpoints?.[size]}) {
          ${styles}
    }
    `
  }
  return styles
}

export default [
  // grid
  [
    /^grid-(\d+)$/,
    ([, d]) => ({
      display: 'grid',
      'grid-template-columns': `repeat(${d}, minmax(0, 1fr))`,
    }),
  ],
  [
    /^grid-gap-x-(\d+)$/,
    ([, d]) => ({
      'row-gap': `${d}px`,
    }),
  ],
  [
    /^grid-col-offset-(\d+)$/,
    ([, d]) => ({
      'grid-column-start': `${Number(d) + 1}`,
    }),
  ],
  [
    /^grid-gap-y-(\d+)$/,
    ([, d]) => ({
      'column-gap': `${d}px`,
    }),
  ],
  // row
  [/^row-gutter-(\d+)$/, ([, d], { rawSelector }) => getGutterStyles(rawSelector, d, {}, '')],
  [
    /^row-gutter-xs-(\d+)$/,
    ([, s], { rawSelector, theme }) => getGutterStyles(rawSelector, s, theme, 'xs'),
  ],
  [
    /^row-gutter-sm-(\d+)$/,
    ([, s], { rawSelector, theme }) => getGutterStyles(rawSelector, s, theme, 'sm'),
  ],
  [
    /^row-gutter-md-(\d+)$/,
    ([, s], { rawSelector, theme }) => getGutterStyles(rawSelector, s, theme, 'md'),
  ],
  [
    /^row-gutter-lg-(\d+)$/,
    ([, s], { rawSelector, theme }) => getGutterStyles(rawSelector, s, theme, 'lg'),
  ],
  [
    /^row-gutter-xl-(\d+)$/,
    ([, s], { rawSelector, theme }) => getGutterStyles(rawSelector, s, theme, 'xl'),
  ],
  [
    /^row-gutter-(\d+)-(\d+)$/,
    ([, h, v], { rawSelector }) => `
      .${rawSelector} {
        margin: -${Number(v) / 2}px -${Number(h) / 2}px;
      }
      .${rawSelector} > * {
        padding: ${Number(v) / 2}px ${Number(h) / 2}px;
      }
    `,
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
  ],
] as Rule<Theme>[]
