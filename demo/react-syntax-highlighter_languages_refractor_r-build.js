(window.webpackJsonp = window.webpackJsonp || []).push([
  [114],
  {
    682: function(e, n, r) {
      'use strict';
      function a(e) {
        e.languages.r = {
          comment: /#.*/,
          string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'percent-operator': { pattern: /%[^%\s]*%/, alias: 'operator' },
          boolean: /\b(?:TRUE|FALSE)\b/,
          ellipsis: /\.\.(?:\.|\d+)/,
          number: [
            /\b(?:NaN|Inf)\b/,
            /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
          ],
          keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
          operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
          punctuation: /[(){}\[\],;]/
        };
      }
      (e.exports = a), (a.displayName = 'r'), (a.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_r-build.js.map
