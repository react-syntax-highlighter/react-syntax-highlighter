(window.webpackJsonp = window.webpackJsonp || []).push([
  [137],
  {
    703: function(e, t, a) {
      'use strict';
      function n(e) {
        !(function(e) {
          (e.languages.tt2 = e.languages.extend('clike', {
            comment: { pattern: /#.*|\[%#[\s\S]*?%\]/, lookbehind: !0 },
            keyword: /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,
            punctuation: /[[\]{},()]/
          })),
            delete e.languages.tt2.operator,
            delete e.languages.tt2.variable,
            e.languages.insertBefore('tt2', 'number', {
              operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,
              variable: { pattern: /[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*/i }
            }),
            delete e.languages.tt2.delimiter,
            e.languages.insertBefore('tt2', 'keyword', {
              delimiter: {
                pattern: /^(?:\[%|%%)-?|-?%]$/,
                alias: 'punctuation'
              }
            }),
            e.languages.insertBefore('tt2', 'string', {
              'single-quoted-string': {
                pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
                greedy: !0,
                alias: 'string'
              },
              'double-quoted-string': {
                pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
                greedy: !0,
                alias: 'string',
                inside: {
                  variable: {
                    pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i
                  }
                }
              }
            }),
            delete e.languages.tt2.string,
            e.hooks.add('before-tokenize', function(t) {
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'tt2',
                /\[%[\s\S]+?%\]/g
              );
            }),
            e.hooks.add('after-tokenize', function(t) {
              e.languages['markup-templating'].tokenizePlaceholders(t, 'tt2');
            });
        })(e);
      }
      (e.exports = n), (n.displayName = 'tt2'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tt2-build.js.map
