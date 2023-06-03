import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { dividerShortcuts } from './divider'
import { gridShortcuts } from './grid'
import { spaceShortcuts } from './space'
import { layoutShortcuts } from './layout'
import { buttonShortcuts } from './button'
import { typographyShortcuts } from './typography'
import { avatarShortcuts } from './avatar'
import { badgeShortcuts } from './badge'
import { cardShortcuts } from './card'
import { iconShortcuts } from './icon'

export default [
  // data display
  ...avatarShortcuts,
  ...badgeShortcuts,
  ...cardShortcuts,
  // common
  ...buttonShortcuts,
  ...typographyShortcuts,
  ...iconShortcuts,
  // layout
  ...dividerShortcuts,
  ...gridShortcuts,
  ...layoutShortcuts,
  ...spaceShortcuts,
] as UserShortcuts<Theme>
