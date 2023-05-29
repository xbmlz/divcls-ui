import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { spaceShortcuts } from './space'
import { dividerShortcuts } from './divider'

export default [
  ...dividerShortcuts,
  ...spaceShortcuts,
] as UserShortcuts<Theme>
