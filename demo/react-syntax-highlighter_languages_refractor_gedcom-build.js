(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    617: function(e, a, n) {
      'use strict';
      function i(e) {
        e.languages.gedcom = {
          'line-value': {
            pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-.\/:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ +).+/m,
            lookbehind: !0,
            inside: {
              pointer: {
                pattern: /^@\w[\w!"$%&'()*+,\-.\/:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
                alias: 'variable'
              }
            }
          },
          tag: {
            pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-.\/:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
            lookbehind: !0,
            alias: 'string'
          },
          level: { pattern: /(^\s*)\d+/m, lookbehind: !0, alias: 'number' },
          pointer: {
            pattern: /@\w[\w!"$%&'()*+,\-.\/:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
            alias: 'variable'
          }
        };
      }
      (e.exports = i), (i.displayName = 'gedcom'), (i.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_gedcom-build.js.map
