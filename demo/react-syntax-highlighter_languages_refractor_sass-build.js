(window.webpackJsonp = window.webpackJsonp || []).push([
  [123],
  {
    690: function(e, s, a) {
      'use strict';
      function t(e) {
        !(function(e) {
          (e.languages.sass = e.languages.extend('css', {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
              lookbehind: !0
            }
          })),
            e.languages.insertBefore('sass', 'atrule', {
              'atrule-line': {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m }
              }
            }),
            delete e.languages.sass.atrule;
          var s = /\$[-\w]+|#\{\$[-\w]+\}/,
            a = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 }
            ];
          e.languages.insertBefore('sass', 'property', {
            'variable-line': {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: s, operator: a }
            },
            'property-line': {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 }
                ],
                punctuation: /:/,
                variable: s,
                operator: a,
                important: e.languages.sass.important
              }
            }
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            delete e.languages.sass.selector,
            e.languages.insertBefore('sass', 'punctuation', {
              selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0
              }
            });
        })(e);
      }
      (e.exports = t), (t.displayName = 'sass'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_sass-build.js.map
