(window.webpackJsonp = window.webpackJsonp || []).push([
  [82],
  {
    651: function(e, n, t) {
      'use strict';
      function a(e) {
        e.languages.matlab = {
          comment: [/%\{[\s\S]*?\}%/, /%.+/],
          string: { pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0 },
          number: /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
          keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
          function: /(?!\d)\w+(?=\s*\()/,
          operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
          punctuation: /\.{3}|[.,;\[\](){}!]/
        };
      }
      (e.exports = a), (a.displayName = 'matlab'), (a.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_matlab-build.js.map
