(window.webpackJsonp = window.webpackJsonp || []).push([
  [76],
  {
    645: function(e, n, a) {
      'use strict';
      function t(e) {
        !(function(e) {
          function n(e) {
            return new RegExp('(\\()' + e + '(?=[\\s\\)])');
          }
          function a(e) {
            return new RegExp('([\\s([])' + e + '(?=[\\s)])');
          }
          var t = '[-+*/_~!@$%^=<>{}\\w]+',
            s = '(\\()',
            i = {
              heading: { pattern: /;;;.*/, alias: ['comment', 'title'] },
              comment: /;.*/,
              string: {
                pattern: /"(?:[^"\\]*|\\.)*"/,
                greedy: !0,
                inside: {
                  argument: /[-A-Z]+(?=[.,\s])/,
                  symbol: new RegExp('`' + t + "'")
                }
              },
              'quoted-symbol': {
                pattern: new RegExp("#?'" + t),
                alias: ['variable', 'symbol']
              },
              'lisp-property': {
                pattern: new RegExp(':' + t),
                alias: 'property'
              },
              splice: {
                pattern: new RegExp(',@?' + t),
                alias: ['symbol', 'variable']
              },
              keyword: [
                {
                  pattern: new RegExp(
                    s +
                      '(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)(?=\\s)'
                  ),
                  lookbehind: !0
                },
                {
                  pattern: new RegExp(
                    s +
                      '(?:for|do|collect|return|finally|append|concat|in|by)(?=\\s)'
                  ),
                  lookbehind: !0
                }
              ],
              declare: {
                pattern: n('declare'),
                lookbehind: !0,
                alias: 'keyword'
              },
              interactive: {
                pattern: n('interactive'),
                lookbehind: !0,
                alias: 'keyword'
              },
              boolean: { pattern: a('(?:t|nil)'), lookbehind: !0 },
              number: { pattern: a('[-+]?\\d+(?:\\.\\d*)?'), lookbehind: !0 },
              defvar: {
                pattern: new RegExp(
                  s + 'def(?:var|const|custom|group)\\s+' + t
                ),
                lookbehind: !0,
                inside: { keyword: /^def[a-z]+/, variable: new RegExp(t) }
              },
              defun: {
                pattern: new RegExp(
                  s +
                    '(?:cl-)?(?:defun\\*?|defmacro)\\s+' +
                    t +
                    '\\s+\\([\\s\\S]*?\\)'
                ),
                lookbehind: !0,
                inside: {
                  keyword: /^(?:cl-)?def\S+/,
                  arguments: null,
                  function: {
                    pattern: new RegExp('(^\\s)' + t),
                    lookbehind: !0
                  },
                  punctuation: /[()]/
                }
              },
              lambda: {
                pattern: new RegExp(s + 'lambda\\s+\\((?:&?' + t + '\\s*)*\\)'),
                lookbehind: !0,
                inside: {
                  keyword: /^lambda/,
                  arguments: null,
                  punctuation: /[()]/
                }
              },
              car: { pattern: new RegExp(s + t), lookbehind: !0 },
              punctuation: [
                /(['`,]?\(|[)\[\]])/,
                { pattern: /(\s)\.(?=\s)/, lookbehind: !0 }
              ]
            },
            r = {
              'lisp-marker': new RegExp('&[-+*/_~!@$%^=<>{}\\w]+'),
              rest: {
                argument: { pattern: new RegExp(t), alias: 'variable' },
                varform: {
                  pattern: new RegExp(s + t + '\\s+\\S[\\s\\S]*(?=\\))'),
                  lookbehind: !0,
                  inside: {
                    string: i.string,
                    boolean: i.boolean,
                    number: i.number,
                    symbol: i.symbol,
                    punctuation: /[()]/
                  }
                }
              }
            },
            o = '\\S+(?:\\s+\\S+)*',
            l = {
              pattern: new RegExp(s + '[\\s\\S]*(?=\\))'),
              lookbehind: !0,
              inside: {
                'rest-vars': {
                  pattern: new RegExp('&(?:rest|body)\\s+' + o),
                  inside: r
                },
                'other-marker-vars': {
                  pattern: new RegExp('&(?:optional|aux)\\s+' + o),
                  inside: r
                },
                keys: {
                  pattern: new RegExp(
                    '&key\\s+' + o + '(?:\\s+&allow-other-keys)?'
                  ),
                  inside: r
                },
                argument: { pattern: new RegExp(t), alias: 'variable' },
                punctuation: /[()]/
              }
            };
          (i.lambda.inside.arguments = l),
            (i.defun.inside.arguments = e.util.clone(l)),
            (i.defun.inside.arguments.inside.sublist = l),
            (e.languages.lisp = i),
            (e.languages.elisp = i),
            (e.languages.emacs = i),
            (e.languages['emacs-lisp'] = i);
        })(e);
      }
      (e.exports = t), (t.displayName = 'lisp'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_lisp-build.js.map
