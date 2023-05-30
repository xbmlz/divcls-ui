import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { dividerShortcuts } from './divider'
import { gridShortcuts } from './grid'
import { spaceShortcuts } from './space'

export default [
  // layout
  ...dividerShortcuts,
  ...gridShortcuts,
  ...spaceShortcuts,
] as UserShortcuts<Theme>
