/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'

import App from './App'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const root = document.querySelector('#root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Root element not found!')
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root!
)
