(window.webpackJsonp = window.webpackJsonp || []).push([
  [115],
  {
    683: function(e, n, a) {
      'use strict';
      function t(e) {
        (e.languages.reason = e.languages.extend('clike', {
          comment: { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0
          },
          'class-name': /\b[A-Z]\w*/,
          keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator: /\.{3}|:[:=]|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
        })),
          e.languages.insertBefore('reason', 'class-name', {
            character: {
              pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
              alias: 'string'
            },
            constructor: {
              pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
              alias: 'variable'
            },
            label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' }
          }),
          delete e.languages.reason.function;
      }
      (e.exports = t), (t.displayName = 'reason'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_reason-build.js.map
