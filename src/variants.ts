import type { Preset } from '@unocss/core'

export default [
  // (matcher) => {
  //   // oi is only icon, icon and text is not supported
  //   if (!matcher.startsWith('oi:')) { return matcher }
  //   // console.warn(matcher.slice(3))
  //   return {
  //     // slice `hover:` prefix and passed to the next variants and rules
  //     matcher: matcher.slice(3),
  //     selector: s => {
  //       console.log(s)
  //       return `${s}:has(> span:only-child)`
  //     },
  //   }
  // },
] as Preset['variants']
