(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_ftl"],{

/***/ "./node_modules/refractor/lang/ftl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ftl.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ftl; });
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
// @ts-nocheck

ftl.displayName = 'ftl'
ftl.aliases = []

/** @type {import('../core.js').Syntax} */
function ftl(Prism) {
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__["default"])
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


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ftl.js.map