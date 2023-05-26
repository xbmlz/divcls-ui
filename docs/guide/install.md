---
title: Install
description: Install divclsUI
---

# Install divclsUI

How to install divclsUI ?

## Use Vite

You need [Node.js](https://nodejs.org/en/download/) and [UnoCSS](https://unocss.dev/) installed.

1. Install divclsUI:

::: code-group
  ```bash [pnpm]
  pnpm add divcls-ui
  ```
  ```bash [yarn]
  yarn add divcls-ui
  ```
  ```bash [npm]
  npm install divcls-ui
  ```
:::

2. Then add divclsUI to your uno.config.ts files:

```ts
// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { presetDivcls } from 'divcls-ui'

export default defineConfig({
  presets: [
    // ...
    presetUno(),
    presetAttributify(),
    presetDivcls(),
  ],
})
```

## Use CDN

Add the following line to your `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
<script src="https://cdn.jsdelivr.net/npm/divcls-ui"></script>
```

To configure UnoCSS (optional):

```html
<script>
// pass unocss options
window.__unocss = {
  rules: [
    // custom rules...
  ],
  presets: [
    // ...
    presetDivcls(),
  ],
  // ...
}
</script>
```
