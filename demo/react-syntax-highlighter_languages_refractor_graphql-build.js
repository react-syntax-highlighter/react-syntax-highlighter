(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  {
    622: function(a, e, n) {
      'use strict';
      function t(a) {
        a.languages.graphql = {
          comment: /#.*/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': /[a-z_]\w*(?=\s*:)/i,
          keyword: [
            {
              pattern: /(fragment\s+(?!on)[a-z_]\w*\s+|\.{3}\s*)on\b/,
              lookbehind: !0
            },
            /\b(?:query|fragment|mutation)\b/
          ],
          operator: /!|=|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/
        };
      }
      (a.exports = t), (t.displayName = 'graphql'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_graphql-build.js.map
