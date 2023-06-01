import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { dividerShortcuts } from './divider'
import { gridShortcuts } from './grid'
import { spaceShortcuts } from './space'
import { layoutShortcuts } from './layout'
import { buttonShortcuts } from './button'
import { typographyShortcuts } from './typography'

export default [
  // common
  ...buttonShortcuts,
  ...typographyShortcuts,
  // layout
  ...dividerShortcuts,
  ...gridShortcuts,
  ...layoutShortcuts,
  ...spaceShortcuts,
] as UserShortcuts<Theme>
