(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    629: function(a, s, e) {
      'use strict';
      function n(a) {
        a.languages.hsts = {
          directive: {
            pattern: /\b(?:max-age=|includeSubDomains|preload)/,
            alias: 'keyword'
          },
          safe: { pattern: /\d{8,}/, alias: 'selector' },
          unsafe: { pattern: /\d{0,7}/, alias: 'function' }
        };
      }
      (a.exports = n), (n.displayName = 'hsts'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_hsts-build.js.map
