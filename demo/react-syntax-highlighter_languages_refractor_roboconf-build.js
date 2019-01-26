(window.webpackJsonp = window.webpackJsonp || []).push([
  [119],
  {
    687: function(t, a, o) {
      'use strict';
      function n(t) {
        t.languages.roboconf = {
          comment: /#.*/,
          keyword: {
            pattern: /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
            lookbehind: !0
          },
          component: { pattern: /[\w-]+(?=[ \t]*\{)/, alias: 'variable' },
          property: /[\w.-]+(?=[ \t]*:)/,
          value: {
            pattern: /(=[ \t]*)[^,;]+/,
            lookbehind: !0,
            alias: 'attr-value'
          },
          optional: { pattern: /\(optional\)/, alias: 'builtin' },
          wildcard: { pattern: /(\.)\*/, lookbehind: !0, alias: 'operator' },
          punctuation: /[{},.;:=]/
        };
      }
      (t.exports = n), (n.displayName = 'roboconf'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_roboconf-build.js.map
