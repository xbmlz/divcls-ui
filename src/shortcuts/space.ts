import type { Preset, StaticShortcutMap } from '@unocss/core'

export const spaceShortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  {
    'space': 'space-horizontal',
    'space-horizontal': 'inline-flex space-small',
    'space-vertical': 'flex flex-col space-small',
    'space-small': 'gap-2',
    'space-medium': 'gap-4',
    'space-large': 'gap-8',
  },
]
