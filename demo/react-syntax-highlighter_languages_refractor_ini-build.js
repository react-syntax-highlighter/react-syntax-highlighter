(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    634: function(t, n, i) {
      'use strict';
      function s(t) {
        t.languages.ini = {
          comment: /^[ \t]*;.*$/m,
          selector: /^[ \t]*\[.*?\]/m,
          constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
          'attr-value': { pattern: /=.*/, inside: { punctuation: /^[=]/ } }
        };
      }
      (t.exports = s), (s.displayName = 'ini'), (s.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ini-build.js.map
