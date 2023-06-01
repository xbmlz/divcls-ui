import type { Preset, StaticShortcutMap } from '@unocss/core'

export const spaceShortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  ['space', 'space-horizontal'],
  ['space-horizontal', 'inline-flex space-small flex-wrap items-center'],
  ['space-vertical', 'inline-flex flex-col space-small'],
  ['space-fill', '!flex'],
  ['space-small', 'gap-2'],
  ['space-medium', 'gap-4'],
  ['space-large', 'gap-8'],
]
