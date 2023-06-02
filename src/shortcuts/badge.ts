import type { Preset, StaticShortcutMap } from '@unocss/core'

export const badgeShortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  ['badge', 'relative inline-block lh-[1] '],
  ['badge-base', 'absolute top-2px right-2px z-2 rd-20px box-border overflow-hidden text-center translate-x-50% -translate-y-50%'],
  ['badge-number', 'badge-base h-20px w-20px rd-20px min-w-20px bg-red-6 text-12px lh-20px c-white shadow-sm shadow-white fl:(relative top-unset right-unset inline-block translate-x-0 translate-y-0)'],
  ['badge-dot', 'badge-base bg-red-6 w-10px h-10px rd-10px shadow-sm shadow-white'],
  ['badge-custom', 'badge-base w-16px h-16px text-14px bg-white v-mid c-secondary children:(inline-block v-mid)'],
  ['badge-status', 'inline-flex items-center children:(text-12px lh-[1.5715] ml-8px)'],
  [/^badge-status-(primary|success|warning|error|info)$/, ([, c]) => `inline-block w-6px h-6px rd-50% c-${c} bg-${c} border-${c}`],
  ['badge-ping', 'relative after:(content-empty absolute top-0 start-0 w-full h-full border border-solid box-border border-color-inherit rd-50% animate-ping)'],
  ['badge-color', 'inline-block w-6px h-6px rd-6px children:(text-12px lh-[1.5715] ml-8px)'],
]
