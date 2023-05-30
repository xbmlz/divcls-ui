import type { Preset, StaticShortcutMap } from '@unocss/core'

export const layoutShortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  ['layout', 'flex flex-1 flex-col m-0 p-0'],
  ['layout-header', 'flex-grow-0 flex-shrink-0 flex-basis-auto box-border m-0'],
  ['layout-content', 'flex-1'],
  ['layout-footer', 'flex-grow-0 flex-shrink-0 flex-basis-auto m-0'],
]
