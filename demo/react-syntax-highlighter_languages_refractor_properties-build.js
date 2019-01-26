(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    674: function(n, t, s) {
      'use strict';
      function e(n) {
        n.languages.properties = {
          comment: /^[ \t]*[#!].*$/m,
          'attr-value': {
            pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
            lookbehind: !0
          },
          'attr-name': /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[=:] *| )/m,
          punctuation: /[=:]/
        };
      }
      (n.exports = e), (e.displayName = 'properties'), (e.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_properties-build.js.map
