(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_smarty"],{

/***/ "./node_modules/refractor/lang/markup-templating.js":
/*!**********************************************************!*\
  !*** ./node_modules/refractor/lang/markup-templating.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = markupTemplating
markupTemplating.displayName = 'markupTemplating'
markupTemplating.aliases = []
function markupTemplating(Prism) {
  ;(function (Prism) {
    /**
     * Returns the placeholder for the given language id and index.
     *
     * @param {string} language
     * @param {string|number} index
     * @returns {string}
     */
    function getPlaceholder(language, index) {
      return '___' + language.toUpperCase() + index + '___'
    }
    Object.defineProperties((Prism.languages['markup-templating'] = {}), {
      buildPlaceholders: {
        /**
         * Tokenize all inline templating expressions matching `placeholderPattern`.
         *
         * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
         * `true` will be replaced.
         *
         * @param {object} env The environment of the `before-tokenize` hook.
         * @param {string} language The language id.
         * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
         * @param {(match: string) => boolean} [replaceFilter]
         */
        value: function (env, language, placeholderPattern, replaceFilter) {
          if (env.language !== language) {
            return
          }
          var tokenStack = (env.tokenStack = [])
          env.code = env.code.replace(placeholderPattern, function (match) {
            if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
              return match
            }
            var i = tokenStack.length
            var placeholder // Check for existing strings
            while (
              env.code.indexOf((placeholder = getPlaceholder(language, i))) !==
              -1
            ) {
              ++i
            } // Create a sparse array
            tokenStack[i] = match
            return placeholder
          }) // Switch the grammar to markup
          env.grammar = Prism.languages.markup
        }
      },
      tokenizePlaceholders: {
        /**
         * Replace placeholders with proper tokens after tokenizing.
         *
         * @param {object} env The environment of the `after-tokenize` hook.
         * @param {string} language The language id.
         */
        value: function (env, language) {
          if (env.language !== language || !env.tokenStack) {
            return
          } // Switch the grammar back
          env.grammar = Prism.languages[language]
          var j = 0
          var keys = Object.keys(env.tokenStack)
          function walkTokens(tokens) {
            for (var i = 0; i < tokens.length; i++) {
              // all placeholders are replaced already
              if (j >= keys.length) {
                break
              }
              var token = tokens[i]
              if (
                typeof token === 'string' ||
                (token.content && typeof token.content === 'string')
              ) {
                var k = keys[j]
                var t = env.tokenStack[k]
                var s = typeof token === 'string' ? token : token.content
                var placeholder = getPlaceholder(language, k)
                var index = s.indexOf(placeholder)
                if (index > -1) {
                  ++j
                  var before = s.substring(0, index)
                  var middle = new Prism.Token(
                    language,
                    Prism.tokenize(t, env.grammar),
                    'language-' + language,
                    t
                  )
                  var after = s.substring(index + placeholder.length)
                  var replacement = []
                  if (before) {
                    replacement.push.apply(replacement, walkTokens([before]))
                  }
                  replacement.push(middle)
                  if (after) {
                    replacement.push.apply(replacement, walkTokens([after]))
                  }
                  if (typeof token === 'string') {
                    tokens.splice.apply(tokens, [i, 1].concat(replacement))
                  } else {
                    token.content = replacement
                  }
                }
              } else if (
                token.content
                /* && typeof token.content !== 'string' */
              ) {
                walkTokens(token.content)
              }
            }
            return tokens
          }
          walkTokens(env.tokens)
        }
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/smarty.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/smarty.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = smarty
smarty.displayName = 'smarty'
smarty.aliases = []
function smarty(Prism) {
  Prism.register(refractorMarkupTemplating)
  ;(function (Prism) {
    Prism.languages.smarty = {
      comment: {
        pattern: /^\{\*[\s\S]*?\*\}/,
        greedy: true
      },
      'embedded-php': {
        pattern: /^\{php\}[\s\S]*?\{\/php\}/,
        greedy: true,
        inside: {
          smarty: {
            pattern: /^\{php\}|\{\/php\}$/,
            inside: null // see below
          },
          php: {
            pattern: /[\s\S]+/,
            alias: 'language-php',
            inside: Prism.languages.php
          }
        }
      },
      string: [
        {
          pattern: /"(?:\\.|[^"\\\r\n])*"/,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /\{[^{}]*\}|`[^`]*`/,
              inside: {
                'interpolation-punctuation': {
                  pattern: /^[{`]|[`}]$/,
                  alias: 'punctuation'
                },
                expression: {
                  pattern: /[\s\S]+/,
                  inside: null // see below
                }
              }
            },
            variable: /\$\w+/
          }
        },
        {
          pattern: /'(?:\\.|[^'\\\r\n])*'/,
          greedy: true
        }
      ],
      keyword: {
        pattern: /(^\{\/?)[a-z_]\w*\b(?!\()/i,
        lookbehind: true,
        greedy: true
      },
      delimiter: {
        pattern: /^\{\/?|\}$/,
        greedy: true,
        alias: 'punctuation'
      },
      number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
      variable: [
        /\$(?!\d)\w+/,
        /#(?!\d)\w+#/,
        {
          pattern: /(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/,
          lookbehind: true
        },
        {
          pattern: /(\[)(?!\d)\w+(?=\])/,
          lookbehind: true
        }
      ],
      function: {
        pattern: /(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i,
        lookbehind: true
      },
      'attr-name': /\b[a-z_]\w*(?=\s*=)/i,
      boolean: /\b(?:false|no|off|on|true|yes)\b/,
      punctuation: /[\[\](){}.,:`]|->/,
      operator: [
        /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
        /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
        /\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/
      ]
    }
    Prism.languages.smarty['embedded-php'].inside.smarty.inside =
      Prism.languages.smarty
    Prism.languages.smarty.string[0].inside.interpolation.inside.expression.inside =
      Prism.languages.smarty
    var string = /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/
    var smartyPattern = RegExp(
      // comments
      /\{\*[\s\S]*?\*\}/.source +
        '|' + // php tags
        /\{php\}[\s\S]*?\{\/php\}/.source +
        '|' + // smarty blocks
        /\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>)*\})*\})*\}/.source.replace(
          /<str>/g,
          function () {
            return string.source
          }
        ),
      'g'
    ) // Tokenize all inline Smarty expressions
    Prism.hooks.add('before-tokenize', function (env) {
      var smartyLiteralStart = '{literal}'
      var smartyLiteralEnd = '{/literal}'
      var smartyLiteralMode = false
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'smarty',
        smartyPattern,
        function (match) {
          // Smarty tags inside {literal} block are ignored
          if (match === smartyLiteralEnd) {
            smartyLiteralMode = false
          }
          if (!smartyLiteralMode) {
            if (match === smartyLiteralStart) {
              smartyLiteralMode = true
            }
            return true
          }
          return false
        }
      )
    }) // Re-insert the tokens after tokenizing
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'smarty')
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_smarty.js.map