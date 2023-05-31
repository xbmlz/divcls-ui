import type { Preset } from '@unocss/core'

export default [
  // b[x] is `btn-[x]`
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
    // `cfc:` is `child first child`
    if (!matcher.startsWith('cfc:')) { return matcher }
    return {
      matcher: matcher.slice(4),
      selector: s => {
        return `${s} .btn:first-child`
      },
    }
  },
  (matcher) => {
    // `cnlc:` is `child not last child`
    if (!matcher.startsWith('cnlc:')) { return matcher }
    return {
      matcher: matcher.slice(5),
      selector: s => {
        return `${s} .btn:not(:last-child)`
      },
    }
  },
  (matcher) => {
    // `clc:` is `child last child`
    if (!matcher.startsWith('clc:')) { return matcher }
    return {
      matcher: matcher.slice(4),
      selector: s => {
        return `${s} .btn:last-child`
      },
    }
  },
  (matcher) => {
    // `cnfnl:` is `child not first not last`
    if (!matcher.startsWith('cnfnl:')) { return matcher }
    return {
      matcher: matcher.slice(6),
      selector: s => {
        return `${s} .btn:not(:first-child):not(:last-child)`
      },
    }
  },
] as Preset['variants']
