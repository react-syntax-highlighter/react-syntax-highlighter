(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    630: function(e, a, t) {
      'use strict';
      function n(e) {
        e.languages.http = {
          'request-line': {
            pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
            inside: {
              property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
              'attr-name': /:\w+/
            }
          },
          'response-status': {
            pattern: /^HTTP\/1.[01] \d+.*/m,
            inside: {
              property: { pattern: /(^HTTP\/1.[01] )\d+.*/i, lookbehind: !0 }
            }
          },
          'header-name': { pattern: /^[\w-]+:(?=.)/m, alias: 'keyword' }
        };
        var a = {
          'application/json': e.languages.javascript,
          'application/xml': e.languages.markup,
          'text/xml': e.languages.markup,
          'text/html': e.languages.markup
        };
        for (var t in a)
          if (a[t]) {
            var n = {};
            (n[t] = {
              pattern: new RegExp(
                '(content-type:\\s*' +
                  t +
                  '[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*',
                'i'
              ),
              lookbehind: !0,
              inside: { rest: a[t] }
            }),
              e.languages.insertBefore('http', 'header-name', n);
          }
      }
      (e.exports = n), (n.displayName = 'http'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_http-build.js.map
