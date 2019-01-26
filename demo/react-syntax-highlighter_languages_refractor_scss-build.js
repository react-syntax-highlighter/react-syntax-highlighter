(window.webpackJsonp = window.webpackJsonp || []).push([
  [126],
  {
    693: function(e, s, a) {
      'use strict';
      function n(e) {
        (e.languages.scss = e.languages.extend('css', {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
          },
          atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ }
          },
          url: /(?:[-a-z]+-)*url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: 'important' },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
          }
        })),
          e.languages.insertBefore('scss', 'atrule', {
            keyword: [
              /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
              { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }
            ]
          }),
          (e.languages.scss.property = {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }
          }),
          e.languages.insertBefore('scss', 'important', {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
          }),
          e.languages.insertBefore('scss', 'function', {
            placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
            statement: {
              pattern: /\B!(?:default|optional)\b/i,
              alias: 'keyword'
            },
            boolean: /\b(?:true|false)\b/,
            null: /\bnull\b/,
            operator: {
              pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
              lookbehind: !0
            }
          }),
          (e.languages.scss.atrule.inside.rest = e.languages.scss);
      }
      (e.exports = n), (n.displayName = 'scss'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_scss-build.js.map
