(window.webpackJsonp = window.webpackJsonp || []).push([
  [127],
  {
    694: function(a, e, n) {
      'use strict';
      function t(a) {
        a.languages.smalltalk = {
          comment: /"(?:""|[^"])+"/,
          string: /'(?:''|[^'])+'/,
          symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
          'block-arguments': {
            pattern: /(\[\s*):[^\[|]*\|/,
            lookbehind: !0,
            inside: { variable: /:[\da-z]+/i, punctuation: /\|/ }
          },
          'temporary-variables': {
            pattern: /\|[^|]+\|/,
            inside: { variable: /[\da-z]+/i, punctuation: /\|/ }
          },
          keyword: /\b(?:nil|true|false|self|super|new)\b/,
          character: { pattern: /\$./, alias: 'string' },
          number: [
            /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
            /\b\d+(?:\.\d+)?(?:e-?\d+)?/
          ],
          operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
          punctuation: /[.;:?\[\](){}]/
        };
      }
      (a.exports = t), (t.displayName = 'smalltalk'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_smalltalk-build.js.map
