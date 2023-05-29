import { defineConfig } from 'vitepress'
import { markdownPlugin } from './plugins/markdown-plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Divcls UI',
  description: 'Use Uno CSS, but write fewer class names',
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    config: (md) => markdownPlugin(md),
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Guide', link: '/guide/install' },
      { text: 'Components', link: '/components/button' },
    ],
    editLink: {
      pattern: 'https://github.com/xbmlz/divcls-ui/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/xbmlz/divcls-ui' }],
    sidebar: {
      '/guide/': [
        {
          text: '🚀&nbsp;&nbsp; Getting Started',
          items: [
            { text: 'Installation', link: '/guide/install' },
            { text: 'Usage', link: '/guide/usage' },
            { text: 'Colors', link: '/guide/colors' },
            { text: 'Size', link: '/guide/size' },
          ],
        },
      ],
      '/components': [
        {
          text: 'General',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Icon', link: '/components/icon' },
          ],
        },
        {
          text: 'Layout',
          items: [{ text: 'Divide', link: '/components/divider' }],
        },
      ],
    },
  },
})
