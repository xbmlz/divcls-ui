import type { Preset, StaticShortcutMap } from '@unocss/core'

export const cardShortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  ['card', 'relative bg-white transition-shadow rd-0 card-bordered card-medium'],
  ['card-bordered', 'border border-solid border-nuetral-3 rm-sm'],
  ['card-medium', 'text-md'],
  ['card-small', 'text-sm'],
  ['card-header', 'h-46px px-10px py-16px relative flex items-center justify-between box-border overflow-hidden border-b border-solid border-nuetral-3 cs:(h-40px px-8px py-16px text-md)'],
  ['card-header-title', 'text-md flex-1 c-nuetral-9 font-500 lh-[1.5715] truncate'],
  ['card-header-extra', 'c-primary truncate'],
  ['card-body', 'p-16px cs:(px-12px py-16px)'],
  ['card-hoverable', 'hover:(shadow-md)'],
  ['card-cover', 'rd-tr-sm rd-tl-sm rd-br-0 rd-bl-0 overflow-hidden'],
  ['card-actions', 'mt-0 flex items-center justify-between'],
  ['card-meta', ''],
  ['card-meta-content', ''],
  ['card-meta-title', 'text-md font-500 truncate'],
  ['card-meta-desc', 'text-sm nfc:(mt-4px)'],
  ['card-meta-footer', 'flex items-center mt-20px justify-between'],
]
