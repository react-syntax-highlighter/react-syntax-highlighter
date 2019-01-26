(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    610: function(e, n, r) {
      'use strict';
      function t(e) {
        (e.languages.elixir = {
          comment: { pattern: /#.*/m, lookbehind: !0 },
          regex: {
            pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
            greedy: !0
          },
          string: [
            {
              pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
              greedy: !0,
              inside: {}
            },
            { pattern: /("""|''')[\s\S]*?\1/, greedy: !0, inside: {} },
            {
              pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0,
              inside: {}
            }
          ],
          atom: { pattern: /(^|[^:]):\w+/, lookbehind: !0, alias: 'symbol' },
          'attr-name': /\w+:(?!:)/,
          capture: {
            pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
            lookbehind: !0,
            alias: 'function'
          },
          argument: {
            pattern: /(^|[^&])&\d+/,
            lookbehind: !0,
            alias: 'variable'
          },
          attribute: { pattern: /@\w+/, alias: 'variable' },
          number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
          keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
          boolean: /\b(?:true|false|nil)\b/,
          operator: [
            /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
            { pattern: /([^<])<(?!<)/, lookbehind: !0 },
            { pattern: /([^>])>(?!>)/, lookbehind: !0 }
          ],
          punctuation: /<<|>>|[.,%\[\]{}()]/
        }),
          e.languages.elixir.string.forEach(function(n) {
            n.inside = {
              interpolation: {
                pattern: /#\{[^}]+\}/,
                inside: {
                  delimiter: { pattern: /^#\{|\}$/, alias: 'punctuation' },
                  rest: e.languages.elixir
                }
              }
            };
          });
      }
      (e.exports = t), (t.displayName = 'elixir'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_elixir-build.js.map
