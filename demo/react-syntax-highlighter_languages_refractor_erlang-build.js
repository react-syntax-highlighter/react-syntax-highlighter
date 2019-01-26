(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    613: function(n, e, a) {
      'use strict';
      function o(n) {
        n.languages.erlang = {
          comment: /%.+/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          'quoted-function': {
            pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
            alias: 'function'
          },
          'quoted-atom': { pattern: /'(?:\\.|[^\\'\r\n])+'/, alias: 'atom' },
          boolean: /\b(?:true|false)\b/,
          keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
          number: [
            /\$\\?./,
            /\d+#[a-z0-9]+/i,
            /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i
          ],
          function: /\b[a-z][\w@]*(?=\()/,
          variable: {
            pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
            lookbehind: !0
          },
          operator: [
            /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
            { pattern: /(^|[^<])<(?!<)/, lookbehind: !0 },
            { pattern: /(^|[^>])>(?!>)/, lookbehind: !0 }
          ],
          atom: /\b[a-z][\w@]*/,
          punctuation: /[()[\]{}:;,.#|]|<<|>>/
        };
      }
      (n.exports = o), (o.displayName = 'erlang'), (o.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_erlang-build.js.map
