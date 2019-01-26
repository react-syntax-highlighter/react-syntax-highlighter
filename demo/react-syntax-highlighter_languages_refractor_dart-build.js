(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    605: function(e, t, a) {
      'use strict';
      function r(e) {
        (e.languages.dart = e.languages.extend('clike', {
          string: [
            { pattern: /r?("""|''')[\s\S]*?\1/, greedy: !0 },
            { pattern: /r?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 }
          ],
          keyword: [
            /\b(?:async|sync|yield)\*/,
            /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/
          ],
          operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
        })),
          e.languages.insertBefore('dart', 'function', {
            metadata: { pattern: /@\w+/, alias: 'symbol' }
          });
      }
      (e.exports = r), (r.displayName = 'dart'), (r.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_dart-build.js.map
