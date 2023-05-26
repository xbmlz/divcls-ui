import path from 'node:path'
import fs from 'node:fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
import tag from './tag'

const localMd = MarkdownIt().use(tag)

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(tokens: Token[], index: number, options: any, env: any, self: Renderer): string
}

export function markdownPlugin(md: MarkdownIt) {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(path.resolve('examples', `${sourceFile}.vue`), 'utf-8')
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        // <template>xxx</template> -> xxx
        source = source.replace(/<template>([\S\s]*)<\/template>/, '$1')
        const highlightedCode = md.options.highlight!(source, 'vue', '')
        const componentCode = `
        <Demo :demos="demos" source="${encodeURIComponent(
          highlightedCode
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source
        )}" description="${encodeURIComponent(localMd.render(description))}">`
        return componentCode
      } else {
        return '</Demo>'
      }
    },
  } as ContainerOpts)
}
