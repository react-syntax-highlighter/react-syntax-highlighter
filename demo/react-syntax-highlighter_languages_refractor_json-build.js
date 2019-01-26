(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    638: function(n, s, e) {
      'use strict';
      function a(n) {
        (n.languages.json = {
          property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
          punctuation: /[{}[\]);,]/,
          operator: /:/g,
          boolean: /\b(?:true|false)\b/i,
          null: /\bnull\b/i
        }),
          (n.languages.jsonp = n.languages.json);
      }
      (n.exports = a), (a.displayName = 'json'), (a.aliases = ['jsonp']);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_json-build.js.map
