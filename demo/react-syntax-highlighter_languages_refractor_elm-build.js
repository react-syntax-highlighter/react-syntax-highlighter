(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    611: function(e, a, n) {
      'use strict';
      function t(e) {
        e.languages.elm = {
          comment: /--.*|{-[\s\S]*?-}/,
          char: {
            pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
            greedy: !0
          },
          string: [
            { pattern: /"""[\s\S]*?"""/, greedy: !0 },
            {
              pattern: /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/,
              greedy: !0
            }
          ],
          import_statement: {
            pattern: /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+([A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
            inside: { keyword: /\b(?:import|as|exposing)\b/ }
          },
          keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
          builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
          number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
          operator: /\s\.\s|[+\-\/*=.$<>:&|^?%#@~!]{2,}|[+\-\/*=$<>:&|^?%#@~!]/,
          hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
          constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
          punctuation: /[{}[\]|(),.:]/
        };
      }
      (e.exports = t), (t.displayName = 'elm'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_elm-build.js.map
