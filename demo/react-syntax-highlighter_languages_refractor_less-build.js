(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    643: function(e, n, s) {
      'use strict';
      function t(e) {
        (e.languages.less = e.languages.extend('css', {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }
          ],
          atrule: {
            pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
            inside: { punctuation: /[:()]/ }
          },
          selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ }
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          punctuation: /[{}();:,]/,
          operator: /[+\-*\/]/
        })),
          e.languages.insertBefore('less', 'punctuation', {
            function: e.languages.less.function
          }),
          e.languages.insertBefore('less', 'property', {
            variable: [
              { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
              /@@?[\w-]+/
            ],
            'mixin-usage': {
              pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
              lookbehind: !0,
              alias: 'function'
            }
          });
      }
      (e.exports = t), (t.displayName = 'less'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_less-build.js.map
