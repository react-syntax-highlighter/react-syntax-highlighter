(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    606: function(e, i, a) {
      'use strict';
      function n(e) {
        e.languages.diff = {
          coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
          deleted: /^[-<].*$/m,
          inserted: /^[+>].*$/m,
          diff: { pattern: /^!(?!!).+$/m, alias: 'important' }
        };
      }
      (e.exports = n), (n.displayName = 'diff'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_diff-build.js.map
