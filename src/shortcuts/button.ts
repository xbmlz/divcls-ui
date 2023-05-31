import type { Preset, StaticShortcutMap } from '@unocss/core'

const getTypeShortcut = (name: string) => {
  const base = `bg-${name} c-${name}-text b-1px b-solid b-transparent border-r-${name}-hover`
  const hover = `hover:bg-${name}-hover`
  const active = `active:bg-${name}-active`
  const disabled = `bd:(bg-${name}-disabled border-transparent cursor-not-allowed hover:(bg-${name}-disabled border-transparent) active:(bg-${name}-disabled border-transparent))`
  let outline = `bo:(bg-transparent border-${name} c-${name} hover:(bg-transparent border-${name}-hover c-${name}-hover) active:(bg-transparent border-${name}-active c-${name}-active))`
  let link = `bl:(bg-transparent c-${name} b-1px b-solid b-transparent hover:(bg-secondary c-${name}-hover b-transparent) active:(bg-secondary c-${name}-active))`
  if (name === 'secondary') {
    outline = 'bo:(bg-transparent border-secondary c-secondary-text hover:(bg-transparent border-secondary) active:(bg-transparent border-secondary-active c-secondary-text))'
    link = 'bl:(bg-transparent c-secondary-text b-1px b-solid b-transparent hover:(bg-secondary b-transparent) active:(bg-secondary c-secondary-text))'
  }
  return `${base} ${hover} ${active} ${disabled} ${outline} ${link}`
}

export const buttonShortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  ['btn', 'relative inline-flex items-center justify-center box-border font-400  cursor-pointer select-none transition-1 btn-secondary btn-medium'],
  ['btn-primary', getTypeShortcut('primary')],
  ['btn-secondary', getTypeShortcut('secondary')],
  ['btn-success', getTypeShortcut('success')],
  ['btn-warning', getTypeShortcut('warning')],
  ['btn-error', getTypeShortcut('error')],
  ['btn-mini', 'h-6 text-xs px-3 rd-sm gap-1 bs:(ps-0 pe-0 w-6 h-6)'],
  ['btn-small', 'h-7 text-sm px-4 rd-sm gap-1 bs:(ps-0 pe-0 w-7 h-7)'],
  ['btn-medium', 'h-8 text-sm px-4 rd-sm gap-2 bs:(ps-0 pe-0 w-8 h-8)'],
  ['btn-large', 'h-9 text-sm px-5 rd-sm gap-3 bs:(ps-0 pe-0 w-9 h-9)'],
  ['btn-round', 'rd-2xl'],
  ['btn-circle', 'min-w-8 ps-0 pe-0 rd-50%'],
  ['btn-group', 'inline-flex items-center cfc:(border-rd-tr-0 border-rd-br-0) clc:(border-rd-tl-0 border-rd-bl-0) cnfnl:(rd-0)'],
  ['btn-loading', 'pointer-events-none !relative before:(mr-1 content-empty w-4 h-4 border-2 animate-spin rd-9999 border-t-transparent border-l-transparent) after:(content-empty absolute -top-1px -left-1px -right-1px -bottom-1px bg-white op-40 block z-1)'],
]
