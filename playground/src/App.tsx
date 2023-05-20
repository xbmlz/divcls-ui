import { A, useRoutes } from '@solidjs/router'
import { lazy } from 'solid-js'

const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/layout',
    component: lazy(() => import('./pages/layout')),
  },
]
export default function App() {
  const Routes = useRoutes(routes)
  return (
    <div class="p-4">
      <h1 class="text-4xl mb-2">Divcls</h1>
      <A href="/">Home</A>|
      <A href="/layout">Layout</A>|
      <Routes />
    </div>
  )
}
