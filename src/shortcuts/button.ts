import type { Preset, StaticShortcutMap } from '@unocss/core'

// TODO: padding: only icon, icon and text
export const buttonShortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  ['btn', 'relative inline-flex items-center justify-center box-border font-400 truncate cursor-pointer select-none transition-1 btn-secondary btn-medium'],
  ['btn-primary', 'bg-primary c-primary-text b-1px b-solid b-transparent hover:bg-primary-hover active:bg-primary-active'],
  ['btn-secondary', 'bg-secondary c-secondary-text b-1px b-solid b-transparent hover:bg-secondary-hover active:bg-secondary-active'],
  ['btn-dashed', 'bg-secondary c-secondary-text b-1px b-dashed b-neutral-2 hover:(bg-secondary-hover b-neutral-3) active:(bg-secondary-active b-neutral-4)'],
  ['btn-outline', 'bg-transparent c-primary b-1px b-solid b-primary hover:(!bg-transparent c-primary-hover b-primary-hover) active:(c-primary-active b-primary-active)'],
  ['btn-text', 'bg-transparent c-primary b-1px b-solid b-transparent hover:(c-primary-hover b-transparent) active:(c-primary-active b-secondary-active)'],
  ['btn-mini', 'h-6 text-xs px-3 rd-sm'],
  ['btn-small', 'h-7 text-sm px-4 rd-sm'],
  ['btn-medium', 'h-8 text-sm px-4 rd-sm'],
  ['btn-large', 'h-9 text-sm px-5 rd-sm'],
  ['btn-round', 'rd-2xl'],
  ['btn-circle', 'min-w-8 ps-0 pe-0 rd-50%'],
  ['btn-success', 'bg-success c-success-text b-1px b-solid b-transparent hover:bg-success-hover active:bg-success-active'],
  ['btn-warning', 'bg-warning c-warning-text b-1px b-solid b-transparent hover:bg-warning-hover active:bg-warning-active'],
  ['btn-error', 'bg-error c-error-text b-1px b-solid b-transparent hover:bg-error-hover active:bg-error-active'],
]
