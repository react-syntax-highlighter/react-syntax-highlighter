(window.webpackJsonp = window.webpackJsonp || []).push([
  [20, 23],
  {
    207: function(e, n, i) {
      'use strict';
      function a(e) {
        (e.languages.c = e.languages.extend('clike', {
          keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          operator: /-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/]/,
          number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
        })),
          e.languages.insertBefore('c', 'string', {
            macro: {
              pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
              lookbehind: !0,
              alias: 'property',
              inside: {
                string: {
                  pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
                  lookbehind: !0
                },
                directive: {
                  pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                  lookbehind: !0,
                  alias: 'keyword'
                }
              }
            },
            constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
          }),
          delete e.languages.c['class-name'],
          delete e.languages.c.boolean;
      }
      (e.exports = a), (a.displayName = 'c'), (a.aliases = []);
    },
    595: function(e, n, i) {
      'use strict';
      var a = i(207);
      function t(e) {
        e.register(a),
          (e.languages.bison = e.languages.extend('c', {})),
          e.languages.insertBefore('bison', 'comment', {
            bison: {
              pattern: /^[\s\S]*?%%[\s\S]*?%%/,
              inside: {
                c: {
                  pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
                  inside: {
                    delimiter: { pattern: /^%?\{|%?\}$/, alias: 'punctuation' },
                    'bison-variable': {
                      pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
                      alias: 'variable',
                      inside: { punctuation: /<|>/ }
                    },
                    rest: e.languages.c
                  }
                },
                comment: e.languages.c.comment,
                string: e.languages.c.string,
                property: /\S+(?=:)/,
                keyword: /%\w+/,
                number: {
                  pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
                  lookbehind: !0
                },
                punctuation: /%[%?]|[|:;\[\]<>]/
              }
            }
          });
      }
      (e.exports = t), (t.displayName = 'bison'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_bison-build.js.map
