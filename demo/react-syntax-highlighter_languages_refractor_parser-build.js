(window.webpackJsonp = window.webpackJsonp || []).push([
  [97],
  {
    666: function(e, a, n) {
      'use strict';
      function r(e) {
        (e.languages.parser = e.languages.extend('markup', {
          keyword: {
            pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
            lookbehind: !0
          },
          variable: {
            pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
            lookbehind: !0,
            inside: { punctuation: /\.|:+/ }
          },
          function: {
            pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
            lookbehind: !0,
            inside: {
              keyword: { pattern: /(^@)(?:GET_|SET_)/, lookbehind: !0 },
              punctuation: /\.|:+/
            }
          },
          escape: {
            pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
            alias: 'builtin'
          },
          punctuation: /[\[\](){};]/
        })),
          e.languages.insertBefore('parser', 'keyword', {
            'parser-comment': {
              pattern: /(\s)#.*/,
              lookbehind: !0,
              alias: 'comment'
            },
            expression: {
              pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
              greedy: !0,
              lookbehind: !0,
              inside: {
                string: {
                  pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
                  lookbehind: !0
                },
                keyword: e.languages.parser.keyword,
                variable: e.languages.parser.variable,
                function: e.languages.parser.function,
                boolean: /\b(?:true|false)\b/,
                number: /\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,
                escape: e.languages.parser.escape,
                operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
                punctuation: e.languages.parser.punctuation
              }
            }
          }),
          e.languages.insertBefore(
            'inside',
            'punctuation',
            {
              expression: e.languages.parser.expression,
              keyword: e.languages.parser.keyword,
              variable: e.languages.parser.variable,
              function: e.languages.parser.function,
              escape: e.languages.parser.escape,
              'parser-punctuation': {
                pattern: e.languages.parser.punctuation,
                alias: 'punctuation'
              }
            },
            e.languages.parser.tag.inside['attr-value']
          );
      }
      (e.exports = r), (r.displayName = 'parser'), (r.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_parser-build.js.map
