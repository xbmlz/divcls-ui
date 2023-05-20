/* eslint-disable prettier/prettier */

import type { UserShortcuts } from "@unocss/core";
import type {Theme} from '@unocss/preset-uno'

export default [
  {
    // border radius
    'rd-none': 'rd-0',
    'rd-small': 'rd-0.6',
    'rd-medium': 'rd-0.8',
    'rd-large': 'rd-4',
    'rd-circle': 'rd-50%',
    // layout
    // divider
    'divider': 'divider-h',
    'divider-h': 'relative clear-both w-full min-w-full max-w-full border-b-1px border-solid border-neutral-3 my-5',
    'divider-v': 'inline-block min-w-px max-w-px h-1em mx-3 v-mid border-l-1px border-solid border-neutral-3',
    'divider-dashed': 'border-b-1px !border-dashed border-neutral-3',
    'divider-text': 'absolute top-50% box-border px-4 c-neutral-9 lh-2 bg-white translate-y--50% divider-text-center',
    'divider-text-left': 'divider-text left-5%',
    'divider-text-right': 'divider-text right-5% left-auto translate-x-0',
    'divider-text-center': 'divider-text translate-x--50% left-50%',
    // grid
    'row': 'flex flex-row flex-wrap relative box-border',
    'col': 'flex-grow-0 flex-shrink-0 flex-basis-full max-w-full',
    // space
    'space': 'space-h',
    'space-h': 'inline-flex space-small',
    'space-v': 'flex flex-col space-small',
    'space-mini': 'gap-1',
    'space-small': 'gap-2',
    'space-medium': 'gap-4',
    'space-large': 'gap-6',
    // button
    'btn': 'relative inline-flex items-center justify-center box-border font-400 truncate cursor-pointer select-none transition-1 btn-default btn-medium',
    'btn-primary': 'bg-blue-6 c-white b-1px b-solid b-transparent hover:bg-blue-5 active:bg-blue-7',
    'btn-default': 'bg-neutral-2 c-neutral-8 b-1px b-solid b-transparent hover:bg-neutral-3 active:bg-neutral-4',
    'btn-danger': 'bg-red-6 c-white b-1px b-solid b-transparent hover:bg-red-5 active:bg-red-7',
    'btn-success': 'bg-green-6 c-white b-1px b-solid b-transparent hover:bg-green-5 active:bg-green-7',
    'btn-warning': 'bg-orange-6 c-white b-1px b-solid b-transparent hover:bg-orange-5 active:bg-orange-7',
    'btn-dashed': 'bg-neutral-2 c-neutral-8 b-1px b-dashed b-neutral-3 hover:bg-neutral-3 hover:b-neutral-4 active:bg-neutral-4 active:b-neutral-5',
    'btn-outline': 'bg-transparent c-blue-6 b-1px b-solid b-blue-6 !hover:bg-transparent hover:c-blue-5 hover:b-blue-5 active:c-blue-7 active:b-blue-7',
    'btn-text': 'bg-transparent c-blue-6 b-1px b-solid b-transparent hover:c-blue-5 hover:b-transparent active:c-blue-7 active:b-neutral-3',
    'btn-mini': 'h-6 text-xs px-3 rd-small',
    'btn-small': 'h-7 text-sm px-4 rd-small',
    'btn-medium': 'h-8 text-sm px-4 rd-small',
    'btn-large': 'h-9 text-sm px-5 rd-small',
    'btn-round': 'rd-large',
    'btn-circle': 'min-w-8 rd-circle ps-0 pe-0',
  },
  // sm md lg xl
  [/^col-(sm|md|lg|xl)-(\d+)$/, ([, s, t]) => {
    console.log(s)
    console.log(t)
    return ''
  }],
] as UserShortcuts<Theme>

