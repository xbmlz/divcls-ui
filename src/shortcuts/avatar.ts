import type { Preset, StaticShortcutMap } from '@unocss/core'

export const avatarShortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  ['avatar', 'relative inline-flex items-center box-border w-10 h-10 c-white bg-secondary v-mid truncate avatar-text rd-full ag:(nfc:(-ml-3 animate-ease-in-out duration-400))'],
  ['avatar-text', 'at:(absolute left-50% font-500 lh-[1] -translate-x-50%)'],
  ['avatar-img', 'ai:(inline-block m-w-full w-full h-full)'],
  ['avatar-group', 'inline-block lh-0 children:(ml-0 z-5 border-2 border-solid border-white hover:(!ml-0 animate-ease-in-out duration-400))'],
]
