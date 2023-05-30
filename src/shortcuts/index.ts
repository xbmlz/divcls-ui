import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { dividerShortcuts } from './divider'
import { gridShortcuts } from './grid'
import { spaceShortcuts } from './space'
import { layoutShortcuts } from './layout'
import { buttonShortcuts } from './button'

export default [
  // common
  ...buttonShortcuts,
  // layout
  ...dividerShortcuts,
  ...gridShortcuts,
  ...layoutShortcuts,
  ...spaceShortcuts,
] as UserShortcuts<Theme>
