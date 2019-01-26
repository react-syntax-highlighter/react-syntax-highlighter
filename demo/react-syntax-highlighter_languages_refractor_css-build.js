(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    553: function(s, a, e) {
      'use strict';
      function n(s) {
        (s.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
            inside: { rule: /@[\w-]+/ }
          },
          url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
          selector: /[^{}\s][^{};]*?(?=\s*\{)/,
          string: {
            pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
          },
          property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
          important: /\B!important\b/i,
          function: /[-a-z0-9]+(?=\()/i,
          punctuation: /[(){};:]/
        }),
          (s.languages.css.atrule.inside.rest = s.languages.css),
          s.languages.markup &&
            (s.languages.insertBefore('markup', 'tag', {
              style: {
                pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                lookbehind: !0,
                inside: s.languages.css,
                alias: 'language-css',
                greedy: !0
              }
            }),
            s.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                  inside: {
                    'attr-name': {
                      pattern: /^\s*style/i,
                      inside: s.languages.markup.tag.inside
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    'attr-value': { pattern: /.+/i, inside: s.languages.css }
                  },
                  alias: 'language-css'
                }
              },
              s.languages.markup.tag
            ));
      }
      (s.exports = n), (n.displayName = 'css'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_css-build.js.map
