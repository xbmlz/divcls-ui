import type { Preset, StaticShortcutMap } from '@unocss/core'

export const gridShortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  ['row', 'flex flex-row flex-wrap justify-start items-start'],
  [/^row-gutter-(\d+)$/, ([, c]) => `-mx-${Number(c) / 2}px children:px-${Number(c) / 2}px`],
  [/^row-gutter-(sm|md|lg|xl)-(\d+)$/, ([, s, c]) => `${s}:-mx-${Number(c) / 2}px ${s}:children:px-${Number(c) / 2}px`],
  [/^row-gutter-(\d+)-(\d+)$/, ([, s, c]) => `-mx-${Number(s) / 2}px -my-${Number(c) / 2}px children:px-${Number(s) / 2}px children:py-${Number(c) / 2}px`],
  ['col', 'border-box'],
  [/^col-(\d+)$/, ([, c]) => `flex-grow-0 flex-shrink-0 flex-basis-${c}/24 w-${c}/24`],
  [/^col-offset-(\d+)$/, ([, c]) => `ml-${c}/24`],
  [/^col-(sm|md|lg|xl)-(\d+)$/, ([, s, c]) => `${s}:flex-grow-0 flex-shrink-0 flex-basis-${c}/24 w-${c}/24`],
  [/^col-(sm|md|lg|xl)-(\d+)-offset-(\d+)$/, ([, s, c, n]) => `flex-grow-0 flex-shrink-0 flex-basis-${c}/24 w-${s}/24 ${s}:ml-${n}/24`],
]
