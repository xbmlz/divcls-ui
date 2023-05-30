import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { dividerShortcuts } from './divider'
import { gridShortcuts } from './grid'
import { spaceShortcuts } from './space'
import { layoutShortcuts } from './layout'

export default [
  // layout
  ...dividerShortcuts,
  ...gridShortcuts,
  ...layoutShortcuts,
  ...spaceShortcuts,
] as UserShortcuts<Theme>
