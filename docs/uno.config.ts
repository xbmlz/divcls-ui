import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetDivcls } from '../src/index'

export default defineConfig({
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetDivcls(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  configDeps: ['../src/rules.ts', '../src/shortcuts.ts', '../src/theme.ts', '../src/index.ts'],
})
