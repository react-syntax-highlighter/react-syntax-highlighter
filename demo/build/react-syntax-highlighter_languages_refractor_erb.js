(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_erb"],{

/***/ "./node_modules/refractor/lang/clike.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clike; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
clike.displayName = 'clike'
clike.aliases = []

/** @param {Refractor} Prism */
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/erb.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/erb.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return erb; });
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
/* harmony import */ var _ruby_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruby.js */ "./node_modules/refractor/lang/ruby.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */


erb.displayName = 'erb'
erb.aliases = []

/** @param {Refractor} Prism */
function erb(Prism) {
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_ruby_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  ;(function (Prism) {
    Prism.languages.erb = {
      delimiter: {
        pattern: /^(\s*)<%=?|%>(?=\s*$)/,
        lookbehind: true,
        alias: 'punctuation'
      },
      ruby: {
        pattern: /\s*\S[\s\S]*/,
        alias: 'language-ruby',
        inside: Prism.languages.ruby
      }
    }
    Prism.hooks.add('before-tokenize', function (env) {
      var erbPattern =
        /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'erb',
        erbPattern
      )
    })
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'erb')
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/ruby.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/ruby.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ruby; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

ruby.displayName = 'ruby'
ruby.aliases = ['rb']

/** @param {Refractor} Prism */
function ruby(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  /**
   * Original by Samuel Flores
   *
   * Adds the following new token classes:
   *     constant, builtin, variable, symbol, regex
   */
  ;(function (Prism) {
    Prism.languages.ruby = Prism.languages.extend('clike', {
      comment: {
        pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
        greedy: true
      },
      'class-name': {
        pattern:
          /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
        lookbehind: true,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword:
        /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
      operator:
        /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
      punctuation: /[(){}[\].,;]/
    })
    Prism.languages.insertBefore('ruby', 'operator', {
      'double-colon': {
        pattern: /::/,
        alias: 'punctuation'
      }
    })
    var interpolation = {
      pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
      lookbehind: true,
      inside: {
        content: {
          pattern: /^(#\{)[\s\S]+(?=\}$)/,
          lookbehind: true,
          inside: Prism.languages.ruby
        },
        delimiter: {
          pattern: /^#\{|\}$/,
          alias: 'punctuation'
        }
      }
    }
    delete Prism.languages.ruby.function
    var percentExpression =
      '(?:' +
      [
        /([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
        /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
        /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
        /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,
        /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source
      ].join('|') +
      ')'
    var symbolName =
      /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/
        .source
    Prism.languages.insertBefore('ruby', 'keyword', {
      'regex-literal': [
        {
          pattern: RegExp(
            /%r/.source + percentExpression + /[egimnosux]{0,6}/.source
          ),
          greedy: true,
          inside: {
            interpolation: interpolation,
            regex: /[\s\S]+/
          }
        },
        {
          pattern:
            /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
          lookbehind: true,
          greedy: true,
          inside: {
            interpolation: interpolation,
            regex: /[\s\S]+/
          }
        }
      ],
      variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
      symbol: [
        {
          pattern: RegExp(/(^|[^:]):/.source + symbolName),
          lookbehind: true,
          greedy: true
        },
        {
          pattern: RegExp(
            /([\r\n{(,][ \t]*)/.source + symbolName + /(?=:(?!:))/.source
          ),
          lookbehind: true,
          greedy: true
        }
      ],
      'method-definition': {
        pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
        lookbehind: true,
        inside: {
          function: /\b\w+$/,
          keyword: /^self\b/,
          'class-name': /^\w+/,
          punctuation: /\./
        }
      }
    })
    Prism.languages.insertBefore('ruby', 'string', {
      'string-literal': [
        {
          pattern: RegExp(/%[qQiIwWs]?/.source + percentExpression),
          greedy: true,
          inside: {
            interpolation: interpolation,
            string: /[\s\S]+/
          }
        },
        {
          pattern:
            /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
          greedy: true,
          inside: {
            interpolation: interpolation,
            string: /[\s\S]+/
          }
        },
        {
          pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: 'heredoc-string',
          greedy: true,
          inside: {
            delimiter: {
              pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
              inside: {
                symbol: /\b\w+/,
                punctuation: /^<<[-~]?/
              }
            },
            interpolation: interpolation,
            string: /[\s\S]+/
          }
        },
        {
          pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: 'heredoc-string',
          greedy: true,
          inside: {
            delimiter: {
              pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
              inside: {
                symbol: /\b\w+/,
                punctuation: /^<<[-~]?'|'$/
              }
            },
            string: /[\s\S]+/
          }
        }
      ],
      'command-literal': [
        {
          pattern: RegExp(/%x/.source + percentExpression),
          greedy: true,
          inside: {
            interpolation: interpolation,
            command: {
              pattern: /[\s\S]+/,
              alias: 'string'
            }
          }
        },
        {
          pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
          greedy: true,
          inside: {
            interpolation: interpolation,
            command: {
              pattern: /[\s\S]+/,
              alias: 'string'
            }
          }
        }
      ]
    })
    delete Prism.languages.ruby.string
    Prism.languages.insertBefore('ruby', 'number', {
      builtin:
        /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
      constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
    })
    Prism.languages.rb = Prism.languages.ruby
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_erb.js.map