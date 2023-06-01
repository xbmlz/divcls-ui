import type { Preset } from '@unocss/core'

export default [
  // button
  (matcher) => {
    // bs: is `btn-square`
    if (!matcher.startsWith('bs:')) { return matcher }
    return {
      matcher: matcher.slice(3),
      selector: s => {
        return `${s}.btn-square`
      },
    }
  },
  (matcher) => {
    // bo: is `btn-outline`
    if (!matcher.startsWith('bo:')) { return matcher }
    return {
      matcher: matcher.slice(3),
      selector: s => {
        return `${s}.btn-outline`
      },
    }
  },
  (matcher) => {
    // bd: is `btn-disabled`
    if (!matcher.startsWith('bd:')) { return matcher }
    return {
      matcher: matcher.slice(3),
      selector: s => {
        return `${s}.btn-disabled`
      },
    }
  },
  (matcher) => {
    // bl: is `btn-link`
    if (!matcher.startsWith('bl:')) { return matcher }
    return {
      matcher: matcher.slice(3),
      selector: s => {
        return `${s}.btn-link`
      },
    }
  },
  (matcher) => {
    // bg: is `btn-group`
    if (!matcher.startsWith('bg:')) { return matcher }
    return {
      matcher: matcher.slice(3),
      selector: s => {
        return `.btn-group ${s}`
      },
    }
  },
  // common
  (matcher) => {
    // `fc:` is `first child`
    if (!matcher.startsWith('fc:')) { return matcher }
    return {
      matcher: matcher.slice(3),
      selector: s => {
        return `${s}:first-child`
      },
    }
  },
  (matcher) => {
    // `nlc:` is `not last child`
    if (!matcher.startsWith('nlc:')) { return matcher }
    return {
      matcher: matcher.slice(4),
      selector: s => {
        return `${s}:not(:last-child)`
      },
    }
  },
  (matcher) => {
    // `lc:` is `last child`
    if (!matcher.startsWith('lc:')) { return matcher }
    return {
      matcher: matcher.slice(3),
      selector: s => {
        return `${s}:last-child`
      },
    }
  },
  (matcher) => {
    // `nfnl:` is `not first not last`
    if (!matcher.startsWith('nfnl:')) { return matcher }
    return {
      matcher: matcher.slice(5),
      selector: s => {
        return `${s}:not(:first-child):not(:last-child)`
      },
    }
  },
] as Preset['variants']
