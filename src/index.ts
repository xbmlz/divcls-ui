import type { Preset } from '@unocss/core'
import shortcuts from './shortcuts'
import rules from './rules'
import theme from './theme'

export function presetDivcls(): Preset {
  return {
    name: 'divcls-ui',
    theme,
    rules,
    shortcuts,
  }
}
