(window.webpackJsonp = window.webpackJsonp || []).push([
  [138],
  {
    704: function(n, t, e) {
      'use strict';
      function a(n) {
        n.languages.twig = {
          comment: /\{#[\s\S]*?#\}/,
          tag: {
            pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
            inside: {
              ld: {
                pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
                inside: { punctuation: /^(?:\{\{|\{%)-?/, keyword: /\w+/ }
              },
              rd: { pattern: /-?(?:%\}|\}\})$/, inside: { punctuation: /.*/ } },
              string: {
                pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                inside: { punctuation: /^['"]|['"]$/ }
              },
              keyword: /\b(?:even|if|odd)\b/,
              boolean: /\b(?:true|false|null)\b/,
              number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
              operator: [
                {
                  pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
                  lookbehind: !0
                },
                /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
              ],
              property: /\b[a-zA-Z_]\w*\b/,
              punctuation: /[()\[\]{}:.,]/
            }
          },
          other: { pattern: /\S(?:[\s\S]*\S)?/, inside: n.languages.markup }
        };
      }
      (n.exports = a), (a.displayName = 'twig'), (a.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_twig-build.js.map
