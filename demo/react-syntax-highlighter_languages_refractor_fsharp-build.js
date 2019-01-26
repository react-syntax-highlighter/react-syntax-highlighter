(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    616: function(e, t, n) {
      'use strict';
      function a(e) {
        (e.languages.fsharp = e.languages.extend('clike', {
          comment: [
            { pattern: /(^|[^\\])\(\*[\s\S]*?\*\)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }
          ],
          keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
          string: {
            pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1)B?/,
            greedy: !0
          },
          number: [
            /\b0x[\da-fA-F]+(?:un|lf|LF)?\b/,
            /\b0b[01]+(?:y|uy)?\b/,
            /(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
            /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/
          ]
        })),
          e.languages.insertBefore('fsharp', 'keyword', {
            preprocessor: {
              pattern: /^[^\r\n\S]*#.*/m,
              alias: 'property',
              inside: {
                directive: {
                  pattern: /(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/,
                  lookbehind: !0,
                  alias: 'keyword'
                }
              }
            }
          });
      }
      (e.exports = a), (a.displayName = 'fsharp'), (a.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_fsharp-build.js.map
