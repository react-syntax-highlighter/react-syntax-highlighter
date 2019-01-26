(window.webpackJsonp = window.webpackJsonp || []).push([
  [84],
  {
    653: function(e, t, i) {
      'use strict';
      function s(e) {
        e.languages.mizar = {
          comment: /::.+/,
          keyword: /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
          parameter: { pattern: /\$(?:10|\d)/, alias: 'variable' },
          variable: /\w+(?=:)/,
          number: /(?:\b|-)\d+\b/,
          operator: /\.\.\.|->|&|\.?=/,
          punctuation: /\(#|#\)|[,:;\[\](){}]/
        };
      }
      (e.exports = s), (s.displayName = 'mizar'), (s.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_mizar-build.js.map
