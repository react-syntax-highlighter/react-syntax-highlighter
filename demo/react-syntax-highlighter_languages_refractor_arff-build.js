(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    587: function(n, a, e) {
      'use strict';
      function t(n) {
        n.languages.arff = {
          comment: /%.*/,
          string: { pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          keyword: /@(?:attribute|data|end|relation)\b/i,
          number: /\b\d+(?:\.\d+)?\b/,
          punctuation: /[{},]/
        };
      }
      (n.exports = t), (t.displayName = 'arff'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_arff-build.js.map
