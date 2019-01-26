(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    590: function(e, a, s) {
      'use strict';
      function t(e) {
        (e.languages.aspnet = e.languages.extend('markup', {
          'page-directive tag': {
            pattern: /<%\s*@.*%>/i,
            inside: {
              'page-directive tag': /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
              rest: e.languages.markup.tag.inside
            }
          },
          'directive tag': {
            pattern: /<%.*%>/i,
            inside: {
              'directive tag': /<%\s*?[$=%#:]{0,2}|%>/i,
              rest: e.languages.csharp
            }
          }
        })),
          (e.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i),
          e.languages.insertBefore(
            'inside',
            'punctuation',
            { 'directive tag': e.languages.aspnet['directive tag'] },
            e.languages.aspnet.tag.inside['attr-value']
          ),
          e.languages.insertBefore('aspnet', 'comment', {
            'asp comment': /<%--[\s\S]*?--%>/
          }),
          e.languages.insertBefore(
            'aspnet',
            e.languages.javascript ? 'script' : 'tag',
            {
              'asp script': {
                pattern: /(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                lookbehind: !0,
                inside: e.languages.csharp || {}
              }
            }
          );
      }
      (e.exports = t), (t.displayName = 'aspnet'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_aspnet-build.js.map
