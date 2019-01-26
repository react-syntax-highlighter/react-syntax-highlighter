(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    584: function(a, t, n) {
      'use strict';
      function e(a) {
        a.languages.apl = {
          comment: /(?:⍝|#[! ]).*$/m,
          string: { pattern: /'(?:[^'\r\n]|'')*'/, greedy: !0 },
          number: /¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i,
          statement: /:[A-Z][a-z][A-Za-z]*\b/,
          'system-function': { pattern: /⎕[A-Z]+/i, alias: 'function' },
          constant: /[⍬⌾#⎕⍞]/,
          function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
          'monadic-operator': { pattern: /[\\\/⌿⍀¨⍨⌶&∥]/, alias: 'operator' },
          'dyadic-operator': { pattern: /[.⍣⍠⍤∘⌸@⌺]/, alias: 'operator' },
          assignment: { pattern: /←/, alias: 'keyword' },
          punctuation: /[\[;\]()◇⋄]/,
          dfn: { pattern: /[{}⍺⍵⍶⍹∇⍫:]/, alias: 'builtin' }
        };
      }
      (a.exports = e), (e.displayName = 'apl'), (e.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_apl-build.js.map
