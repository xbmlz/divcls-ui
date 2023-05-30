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
  configDeps: [
    '../src/shortcuts/index.ts',
    '../src/shortcuts/divider.ts',
    '../src/shortcuts/grid.ts',
    '../src/shortcuts/space.ts',
    '../src/rules.ts',
    '../src/theme.ts',
    '../src/index.ts',
  ],
})
