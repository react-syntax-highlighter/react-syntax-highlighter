(window.webpackJsonp = window.webpackJsonp || []).push([
  [101, 100],
  {
    523: function(e, n, t) {
      'use strict';
      function i(e) {
        !(function(e) {
          (e.languages.php = e.languages.extend('clike', {
            keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
            constant: /\b[A-Z0-9_]{2,}\b/,
            comment: {
              pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
              lookbehind: !0
            }
          })),
            e.languages.insertBefore('php', 'string', {
              'shell-comment': {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: 'comment'
              }
            }),
            e.languages.insertBefore('php', 'keyword', {
              delimiter: { pattern: /\?>|<\?(?:php|=)?/i, alias: 'important' },
              variable: /\$+(?:\w+\b|(?={))/i,
              package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: { punctuation: /\\/ }
              }
            }),
            e.languages.insertBefore('php', 'operator', {
              property: { pattern: /(->)[\w]+/, lookbehind: !0 }
            }),
            e.languages.insertBefore('php', 'string', {
              'nowdoc-string': {
                pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                greedy: !0,
                alias: 'string',
                inside: {
                  delimiter: {
                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                    alias: 'symbol',
                    inside: { punctuation: /^<<<'?|[';]$/ }
                  }
                }
              },
              'heredoc-string': {
                pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                greedy: !0,
                alias: 'string',
                inside: {
                  delimiter: {
                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                    alias: 'symbol',
                    inside: { punctuation: /^<<<"?|[";]$/ }
                  },
                  interpolation: null
                }
              },
              'single-quoted-string': {
                pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                greedy: !0,
                alias: 'string'
              },
              'double-quoted-string': {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                alias: 'string',
                inside: { interpolation: null }
              }
            }),
            delete e.languages.php.string;
          var n = {
            pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: { rest: e.languages.php }
          };
          (e.languages.php['heredoc-string'].inside.interpolation = n),
            (e.languages.php['double-quoted-string'].inside.interpolation = n),
            e.hooks.add('before-tokenize', function(n) {
              if (/(?:<\?php|<\?)/gi.test(n.code)) {
                e.languages['markup-templating'].buildPlaceholders(
                  n,
                  'php',
                  /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi
                );
              }
            }),
            e.hooks.add('after-tokenize', function(n) {
              e.languages['markup-templating'].tokenizePlaceholders(n, 'php');
            });
        })(e);
      }
      (e.exports = i), (i.displayName = 'php'), (i.aliases = []);
    },
    669: function(e, n, t) {
      'use strict';
      var i = t(523);
      function a(e) {
        e.register(i),
          e.languages.insertBefore('php', 'variable', {
            this: /\$this\b/,
            global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
            scope: {
              pattern: /\b[\w\\]+::/,
              inside: { keyword: /static|self|parent/, punctuation: /::|\\/ }
            }
          });
      }
      (e.exports = a), (a.displayName = 'phpExtras'), (a.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_phpExtras-build.js.map
