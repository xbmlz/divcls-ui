import theme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import DemoBlock from '../components/demo-block.vue'
import { define } from '../utils/types'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import './style.css'

export default define<Theme>({
  ...theme,
  enhanceApp({ app }) {
    app.component('Demo', DemoBlock)
  },
})
