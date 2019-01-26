(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    554: function(e, a, t) {
      'use strict';
      function n(e) {
        (e.languages.javascript = e.languages.extend('clike', {
          keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
          number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
          function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
          operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
        })),
          e.languages.insertBefore('javascript', 'keyword', {
            regex: {
              pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
              lookbehind: !0,
              greedy: !0
            },
            'function-variable': {
              pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
              alias: 'function'
            },
            constant: /\b[A-Z][A-Z\d_]*\b/
          }),
          e.languages.insertBefore('javascript', 'string', {
            'template-string': {
              pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
              greedy: !0,
              inside: {
                interpolation: {
                  pattern: /\${[^}]+}/,
                  inside: {
                    'interpolation-punctuation': {
                      pattern: /^\${|}$/,
                      alias: 'punctuation'
                    },
                    rest: null
                  }
                },
                string: /[\s\S]+/
              }
            }
          }),
          (e.languages.javascript[
            'template-string'
          ].inside.interpolation.inside.rest = e.languages.javascript),
          e.languages.markup &&
            e.languages.insertBefore('markup', 'tag', {
              script: {
                pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                lookbehind: !0,
                inside: e.languages.javascript,
                alias: 'language-javascript',
                greedy: !0
              }
            }),
          (e.languages.js = e.languages.javascript);
      }
      (e.exports = n), (n.displayName = 'javascript'), (n.aliases = ['js']);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_javascript-build.js.map
