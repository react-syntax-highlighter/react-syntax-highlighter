(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    602: function(e, s, a) {
      'use strict';
      function n(e) {
        e.languages.csp = {
          directive: {
            pattern: /\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,
            alias: 'keyword'
          },
          safe: {
            pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\d+=\/]+)'/,
            alias: 'selector'
          },
          unsafe: {
            pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\*)/,
            alias: 'function'
          }
        };
      }
      (e.exports = n), (n.displayName = 'csp'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_csp-build.js.map
