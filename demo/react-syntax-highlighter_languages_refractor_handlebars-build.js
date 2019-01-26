(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    625: function(a, e, n) {
      'use strict';
      function s(a) {
        !(function(a) {
          (a.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
              pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
              lookbehind: !0,
              alias: 'keyword'
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ }
            },
            punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
          }),
            a.hooks.add('before-tokenize', function(e) {
              a.languages['markup-templating'].buildPlaceholders(
                e,
                'handlebars',
                /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
              );
            }),
            a.hooks.add('after-tokenize', function(e) {
              a.languages['markup-templating'].tokenizePlaceholders(
                e,
                'handlebars'
              );
            });
        })(a);
      }
      (a.exports = s), (s.displayName = 'handlebars'), (s.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars-build.js.map
