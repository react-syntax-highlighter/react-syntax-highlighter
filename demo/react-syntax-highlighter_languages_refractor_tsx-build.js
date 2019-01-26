(window.webpackJsonp = window.webpackJsonp || []).push([
  [136, 69, 139],
  {
    522: function(t, e, n) {
      'use strict';
      function a(t) {
        !(function(t) {
          var e = t.util.clone(t.languages.javascript);
          (t.languages.jsx = t.languages.extend('markup', e)),
            (t.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i),
            (t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
            (t.languages.jsx.tag.inside[
              'attr-value'
            ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
            t.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, 'attr-value': /\w+/ }
                }
              },
              t.languages.jsx.tag
            ),
            t.languages.insertBefore(
              'inside',
              'attr-value',
              {
                script: {
                  pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                  inside: {
                    'script-punctuation': {
                      pattern: /^=(?={)/,
                      alias: 'punctuation'
                    },
                    rest: t.languages.jsx
                  },
                  alias: 'language-javascript'
                }
              },
              t.languages.jsx.tag
            );
          var n = function(t) {
              return t
                ? 'string' == typeof t
                  ? t
                  : 'string' == typeof t.content
                  ? t.content
                  : t.content.map(n).join('')
                : '';
            },
            a = function(e) {
              for (var s = [], i = 0; i < e.length; i++) {
                var o = e[i],
                  r = !1;
                if (
                  ('string' != typeof o &&
                    ('tag' === o.type &&
                    o.content[0] &&
                    'tag' === o.content[0].type
                      ? '</' === o.content[0].content[0].content
                        ? s.length > 0 &&
                          s[s.length - 1].tagName ===
                            n(o.content[0].content[1]) &&
                          s.pop()
                        : '/>' === o.content[o.content.length - 1].content ||
                          s.push({
                            tagName: n(o.content[0].content[1]),
                            openedBraces: 0
                          })
                      : s.length > 0 &&
                        'punctuation' === o.type &&
                        '{' === o.content
                      ? s[s.length - 1].openedBraces++
                      : s.length > 0 &&
                        s[s.length - 1].openedBraces > 0 &&
                        'punctuation' === o.type &&
                        '}' === o.content
                      ? s[s.length - 1].openedBraces--
                      : (r = !0)),
                  (r || 'string' == typeof o) &&
                    s.length > 0 &&
                    0 === s[s.length - 1].openedBraces)
                ) {
                  var c = n(o);
                  i < e.length - 1 &&
                    ('string' == typeof e[i + 1] ||
                      'plain-text' === e[i + 1].type) &&
                    ((c += n(e[i + 1])), e.splice(i + 1, 1)),
                    i > 0 &&
                      ('string' == typeof e[i - 1] ||
                        'plain-text' === e[i - 1].type) &&
                      ((c = n(e[i - 1]) + c), e.splice(i - 1, 1), i--),
                    (e[i] = new t.Token('plain-text', c, null, c));
                }
                o.content && 'string' != typeof o.content && a(o.content);
              }
            };
          t.hooks.add('after-tokenize', function(t) {
            ('jsx' !== t.language && 'tsx' !== t.language) || a(t.tokens);
          });
        })(t);
      }
      (t.exports = a), (a.displayName = 'jsx'), (a.aliases = []);
    },
    525: function(t, e, n) {
      'use strict';
      function a(t) {
        (t.languages.typescript = t.languages.extend('javascript', {
          keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
          builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
        })),
          (t.languages.ts = t.languages.typescript);
      }
      (t.exports = a), (a.displayName = 'typescript'), (a.aliases = ['ts']);
    },
    702: function(t, e, n) {
      'use strict';
      var a = n(522),
        s = n(525);
      function i(t) {
        t.register(a), t.register(s);
        var e = t.util.clone(t.languages.typescript);
        t.languages.tsx = t.languages.extend('jsx', e);
      }
      (t.exports = i), (i.displayName = 'tsx'), (i.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tsx-build.js.map
