(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
  {
    650: function(n, a, t) {
      'use strict';
      function i(n) {
        (n.languages.markdown = n.languages.extend('markup', {})),
          n.languages.insertBefore('markdown', 'prolog', {
            blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
            code: [
              { pattern: /^(?: {4}|\t).+/m, alias: 'keyword' },
              { pattern: /``.+?``|`[^`\n]+`/, alias: 'keyword' }
            ],
            title: [
              {
                pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
                alias: 'important',
                inside: { punctuation: /==+$|--+$/ }
              },
              {
                pattern: /(^\s*)#+.+/m,
                lookbehind: !0,
                alias: 'important',
                inside: { punctuation: /^#+|#+$/ }
              }
            ],
            hr: {
              pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
              lookbehind: !0,
              alias: 'punctuation'
            },
            list: {
              pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
              lookbehind: !0,
              alias: 'punctuation'
            },
            'url-reference': {
              pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
              inside: {
                variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
              },
              alias: 'url'
            },
            bold: {
              pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
              lookbehind: !0,
              inside: { punctuation: /^\*\*|^__|\*\*$|__$/ }
            },
            italic: {
              pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
              lookbehind: !0,
              inside: { punctuation: /^[*_]|[*_]$/ }
            },
            url: {
              pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
              inside: {
                variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ }
              }
            }
          }),
          (n.languages.markdown.bold.inside.url = n.languages.markdown.url),
          (n.languages.markdown.italic.inside.url = n.languages.markdown.url),
          (n.languages.markdown.bold.inside.italic =
            n.languages.markdown.italic),
          (n.languages.markdown.italic.inside.bold = n.languages.markdown.bold);
      }
      (n.exports = i), (i.displayName = 'markdown'), (i.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markdown-build.js.map
