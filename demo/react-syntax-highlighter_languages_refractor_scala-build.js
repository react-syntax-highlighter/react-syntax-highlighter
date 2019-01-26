(window.webpackJsonp = window.webpackJsonp || []).push([
  [124, 65],
  {
    521: function(e, a, t) {
      'use strict';
      function n(e) {
        (e.languages.java = e.languages.extend('clike', {
          keyword: /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
          number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
          operator: {
            pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
            lookbehind: !0
          }
        })),
          e.languages.insertBefore('java', 'function', {
            annotation: {
              alias: 'punctuation',
              pattern: /(^|[^.])@\w+/,
              lookbehind: !0
            }
          }),
          e.languages.insertBefore('java', 'class-name', {
            generics: {
              pattern: /<\s*\w+(?:\.\w+)?(?:\s*,\s*\w+(?:\.\w+)?)*>/i,
              alias: 'function',
              inside: {
                keyword: e.languages.java.keyword,
                punctuation: /[<>(),.:]/
              }
            }
          });
      }
      (e.exports = n), (n.displayName = 'java'), (n.aliases = []);
    },
    691: function(e, a, t) {
      'use strict';
      var n = t(521);
      function s(e) {
        e.register(n),
          (e.languages.scala = e.languages.extend('java', {
            keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
            string: [
              { pattern: /"""[\s\S]*?"""/, greedy: !0 },
              { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 }
            ],
            builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
            number: /\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,
            symbol: /'[^\d\s\\]\w*/
          })),
          delete e.languages.scala['class-name'],
          delete e.languages.scala.function;
      }
      (e.exports = s), (s.displayName = 'scala'), (s.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_scala-build.js.map
