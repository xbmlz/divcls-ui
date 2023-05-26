import type { Rule } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'

const getGutterResponsiveStyles = (
  rawSelector: string,
  span: string,
  theme: Theme,
  size: string
) => {
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

const getColResponsiveStyles = (rawSelector: string, span: string, theme: Theme, size: string) => {
  const styles = `
  .${rawSelector} {
    max-width: ${(Number(span) / 24) * 100}%;
    flex-basis: ${(Number(span) / 24) * 100}%;
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
  [
    /^row-gutter-(\d+)$/,
    ([, d], { rawSelector }) => getGutterResponsiveStyles(rawSelector, d, {}, ''),
  ],
  [
    /^row-gutter-xs-(\d+)$/,
    ([, s], { rawSelector, theme }) => getGutterResponsiveStyles(rawSelector, s, theme, 'xs'),
  ],
  [
    /^row-gutter-sm-(\d+)$/,
    ([, s], { rawSelector, theme }) => getGutterResponsiveStyles(rawSelector, s, theme, 'sm'),
  ],
  [
    /^row-gutter-md-(\d+)$/,
    ([, s], { rawSelector, theme }) => getGutterResponsiveStyles(rawSelector, s, theme, 'md'),
  ],
  [
    /^row-gutter-lg-(\d+)$/,
    ([, s], { rawSelector, theme }) => getGutterResponsiveStyles(rawSelector, s, theme, 'lg'),
  ],
  [
    /^row-gutter-xl-(\d+)$/,
    ([, s], { rawSelector, theme }) => getGutterResponsiveStyles(rawSelector, s, theme, 'xl'),
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
    ([, d], { rawSelector, theme }) => getColResponsiveStyles(rawSelector, d, theme, ''),
  ],
  [
    /^col-offset-(\d+)$/,
    ([, d]) => ({
      'margin-left': `${(Number(d) / 24) * 100}%`,
    }),
  ],
  [
    /^col-order-(\d+)$/,
    ([, d]) => ({
      order: Number(d),
    }),
  ],
  [
    /^col-sm-(\d+)$/,
    ([, d], { rawSelector, theme }) => getColResponsiveStyles(rawSelector, d, theme, 'sm'),
  ],
  [
    /^col-md-(\d+)$/,
    ([, d], { rawSelector, theme }) => getColResponsiveStyles(rawSelector, d, theme, 'md'),
  ],
  [
    /^col-lg-(\d+)$/,
    ([, d], { rawSelector, theme }) => getColResponsiveStyles(rawSelector, d, theme, 'lg'),
  ],
  [
    /^col-xl-(\d+)$/,
    ([, d], { rawSelector, theme }) => getColResponsiveStyles(rawSelector, d, theme, 'xl'),
  ],
] as Rule<Theme>[]
