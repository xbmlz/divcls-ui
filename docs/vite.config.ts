import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'

export default defineConfig({
  plugins: [
    UnoCSS(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
    MarkdownTransform(),
  ],
})
