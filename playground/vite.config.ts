import { defineConfig } from 'vite'
import Solid from 'vite-plugin-solid'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [Solid(), Unocss()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
