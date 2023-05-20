import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetDivcls } from '../src/index'

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetIcons(), presetDivcls()],
  transformers: [transformerCompileClass(), transformerVariantGroup(), transformerDirectives()],
  configDeps: ['../src/rules.ts', '../src/shortcuts.ts', '../src/theme.ts', '../src/index.ts'],
})
