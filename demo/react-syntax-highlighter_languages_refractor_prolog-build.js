(window.webpackJsonp = window.webpackJsonp || []).push([
  [105],
  {
    673: function(n, o, t) {
      'use strict';
      function a(n) {
        n.languages.prolog = {
          comment: [/%.+/, /\/\*[\s\S]*?\*\//],
          string: {
            pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
          },
          builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
          variable: /\b[A-Z_]\w*/,
          function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
          number: /\b\d+\.?\d*/,
          operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
          punctuation: /[(){}\[\],]/
        };
      }
      (n.exports = a), (a.displayName = 'prolog'), (a.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_prolog-build.js.map
