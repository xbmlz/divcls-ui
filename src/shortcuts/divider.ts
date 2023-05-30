import type { Preset, StaticShortcutMap } from '@unocss/core'

export const dividerShortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  ['divider', 'divider-horizontal'],
  ['divider-horizontal', 'relative clear-both w-full min-w-full max-w-full my-4 border-b border-solid border-base-border'],
  ['divider-vertical', 'inline-block min-w-px max-w-px h-1em mx-3 v-mid border-l border-solid border-base-border'],
  ['divider-dashed', 'divider !border-dashed'],
  ['divider-dotted', 'divider !border-dotted'],
  ['divider-text', 'absolute top-50% box-border px-4 c-neutral-9 text-sm bg-white translate-y--50% translate-x--50% left-50%'],
  ['divider-text-left', 'divider-text left-5% right-auto translate-x-0'],
  ['divider-text-right', 'divider-text right-5% left-auto translate-x-0'],
]
