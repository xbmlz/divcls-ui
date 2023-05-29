/* eslint-disable prettier/prettier */

import type { UserShortcuts } from "@unocss/core";
import type {Theme} from '@unocss/preset-uno'

export default [
  {
    // layout
    // divider
    'divider': 'divider-horizontal',
    'divider-horizontal': 'relative clear-both w-full min-w-full max-w-full border-b-1px border-solid border-neutral-3 my-5',
    'divider-vertical': 'inline-block min-w-px max-w-px h-1em mx-3 v-mid border-l-1px border-solid border-neutral-3',
    'divider-dashed': 'border-b-1px !border-dashed border-neutral-3',
    'divider-dotted': 'border-b-1px !border-dotted border-neutral-3',
    'divider-text': 'absolute top-50% box-border px-4 c-neutral-9 lh-2 bg-white translate-y--50% translate-x--50% left-50%',
    'divider-text-left': 'divider-text left-5% right-auto translate-x-0',
    'divider-text-right': 'divider-text right-5% left-auto translate-x-0',
    // grid
    'row': 'flex flex-row flex-wrap relative box-border row-js row-is',
    'row-js': 'justify-start',
    'row-jc': 'justify-center',
    'row-je': 'justify-end',
    'row-jsb': 'justify-between',
    'row-jsa': 'justify-around',
    'row-is': 'items-start',
    'row-ic': 'items-center',
    'row-ie': 'items-end',
    'col': 'flex-grow-0 flex-shrink-0 flex-basis-full max-w-full',
    // space
    'space': 'space-h',
    'space-h': 'inline-flex space-small',
    'space-v': 'flex flex-col space-small',
    'space-mini': 'gap-1',
    'space-small': 'gap-2',
    'space-medium': 'gap-4',
    'space-large': 'gap-6',
    // layout
    'layout': 'flex flex-grow-1 flex-shrink-1 flex-basis-auto flex-col m-0 p-0',
    'layout-header': 'flex-grow-0 flex-shrink-0 flex-basis-auto box-border m-0',
    'layout-footer': 'flex-grow-0 flex-shrink-0 flex-basis-auto m-0',
    'layout-content': 'flex-grow-1 flex-shrink-1 flex-basis-auto',
    'layout-sider': 'relative flex-grow-0 flex-shrink-0 flex-basis-auto m-0 p-0 transition-width-2',
    'layout-has-sider': 'flex-row',
    // button
    'btn': 'relative inline-flex items-center justify-center box-border font-400 truncate cursor-pointer select-none transition-1 btn-secondary btn-medium',
    'btn-primary': 'bg-primary c-primary-text b-1px b-solid b-transparent hover:bg-primary-hover active:bg-primary-active',
    'btn-secondary': 'bg-secondary c-secondary-text b-1px b-solid b-transparent hover:bg-secondary-hover active:bg-secondary-active',
    'btn-dashed': 'bg-secondary c-secondary-text b-1px b-dashed b-neutral-2 hover:bg-secondary-hover hover:b-neutral-3 active:bg-secondary-active active:b-neutral-4',
    'btn-outline': 'bg-transparent c-primary b-1px b-solid b-primary !hover:bg-transparent hover:c-primary-hover hover:b-primary-hover active:c-primary-active active:b-primary-active',
    'btn-text': 'bg-transparent c-primary b-1px b-solid b-transparent hover:c-primary-hover hover:b-transparent active:c-primary-active active:b-secondary-active',
    'btn-danger': 'bg-red-6 c-white b-1px b-solid b-transparent hover:bg-red-5 active:bg-red-7',
    'btn-success': 'bg-green-6 c-white b-1px b-solid b-transparent hover:bg-green-5 active:bg-green-7',
    'btn-warning': 'bg-orange-6 c-white b-1px b-solid b-transparent hover:bg-orange-5 active:bg-orange-7',
    'btn-mini': 'h-6 text-xs px-3 rd-sm',
    'btn-small': 'h-7 text-sm px-4 rd-sm',
    'btn-medium': 'h-8 text-sm px-4 rd-sm',
    'btn-large': 'h-9 text-sm px-5 rd-sm',
    'btn-round': 'rd-lg',
    'btn-circle': 'min-w-8 rd-circle ps-0 pe-0 rd-50%',
  },
] as UserShortcuts<Theme>

