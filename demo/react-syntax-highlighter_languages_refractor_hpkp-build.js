(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    628: function(a, e, s) {
      'use strict';
      function t(a) {
        a.languages.hpkp = {
          directive: {
            pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=\/]+"|(?:max-age|report-uri)=|report-to )/,
            alias: 'keyword'
          },
          safe: { pattern: /\d{7,}/, alias: 'selector' },
          unsafe: { pattern: /\d{0,6}/, alias: 'function' }
        };
      }
      (a.exports = t), (t.displayName = 'hpkp'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_hpkp-build.js.map
