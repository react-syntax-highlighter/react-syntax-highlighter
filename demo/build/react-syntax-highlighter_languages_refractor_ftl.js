(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_ftl"],{

/***/ "./node_modules/refractor/lang/ftl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ftl.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = ftl
ftl.displayName = 'ftl'
ftl.aliases = []
function ftl(Prism) {
  Prism.register(refractorMarkupTemplating)
  ;(function (Prism) {
    // https://freemarker.apache.org/docs/dgui_template_exp.html
    // FTL expression with 4 levels of nesting supported
    var FTL_EXPR =
      /[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/
        .source
    for (var i = 0; i < 2; i++) {
      FTL_EXPR = FTL_EXPR.replace(/<expr>/g, function () {
        return FTL_EXPR
      })
    }
    FTL_EXPR = FTL_EXPR.replace(/<expr>/g, /[^\s\S]/.source)
    var ftl = {
      comment: /<#--[\s\S]*?-->/,
      string: [
        {
          // raw string
          pattern: /\br("|')(?:(?!\1)[^\\]|\\.)*\1/,
          greedy: true
        },
        {
          pattern: RegExp(
            /("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:(?!\})(?:<expr>))*\})*\1/.source.replace(
              /<expr>/g,
              function () {
                return FTL_EXPR
              }
            )
          ),
          greedy: true,
          inside: {
            interpolation: {
              pattern: RegExp(
                /((?:^|[^\\])(?:\\\\)*)\$\{(?:(?!\})(?:<expr>))*\}/.source.replace(
                  /<expr>/g,
                  function () {
                    return FTL_EXPR
                  }
                )
              ),
              lookbehind: true,
              inside: {
                'interpolation-punctuation': {
                  pattern: /^\$\{|\}$/,
                  alias: 'punctuation'
                },
                rest: null
              }
            }
          }
        }
      ],
      keyword: /\b(?:as)\b/,
      boolean: /\b(?:false|true)\b/,
      'builtin-function': {
        pattern: /((?:^|[^?])\?\s*)\w+/,
        lookbehind: true,
        alias: 'function'
      },
      function: /\b\w+(?=\s*\()/,
      number: /\b\d+(?:\.\d+)?\b/,
      operator:
        /\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,
      punctuation: /[,;.:()[\]{}]/
    }
    ftl.string[1].inside.interpolation.inside.rest = ftl
    Prism.languages.ftl = {
      'ftl-comment': {
        // the pattern is shortened to be more efficient
        pattern: /^<#--[\s\S]*/,
        alias: 'comment'
      },
      'ftl-directive': {
        pattern: /^<[\s\S]+>$/,
        inside: {
          directive: {
            pattern: /(^<\/?)[#@][a-z]\w*/i,
            lookbehind: true,
            alias: 'keyword'
          },
          punctuation: /^<\/?|\/?>$/,
          content: {
            pattern: /\s*\S[\s\S]*/,
            alias: 'ftl',
            inside: ftl
          }
        }
      },
      'ftl-interpolation': {
        pattern: /^\$\{[\s\S]*\}$/,
        inside: {
          punctuation: /^\$\{|\}$/,
          content: {
            pattern: /\s*\S[\s\S]*/,
            alias: 'ftl',
            inside: ftl
          }
        }
      }
    }
    Prism.hooks.add('before-tokenize', function (env) {
      // eslint-disable-next-line regexp/no-useless-lazy
      var pattern = RegExp(
        /<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(
          /<expr>/g,
          function () {
            return FTL_EXPR
          }
        ),
        'gi'
      )
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'ftl',
        pattern
      )
    })
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'ftl')
    })
  })(Prism)
}


/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ftl.js.map