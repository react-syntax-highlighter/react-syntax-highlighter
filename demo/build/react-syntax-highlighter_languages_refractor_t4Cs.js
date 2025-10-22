(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_t4Cs"],{

/***/ "./node_modules/refractor/lang/t4-cs.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/t4-cs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorT4Templating = __webpack_require__(/*! ./t4-templating.js */ "./node_modules/refractor/lang/t4-templating.js")
var refractorCsharp = __webpack_require__(/*! ./csharp.js */ "./node_modules/refractor/lang/csharp.js")
module.exports = t4Cs
t4Cs.displayName = 't4Cs'
t4Cs.aliases = []
function t4Cs(Prism) {
  Prism.register(refractorT4Templating)
  Prism.register(refractorCsharp)
  Prism.languages.t4 = Prism.languages['t4-cs'] =
    Prism.languages['t4-templating'].createT4('csharp')
}


/***/ }),

/***/ "./node_modules/refractor/lang/t4-templating.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/t4-templating.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = t4Templating
t4Templating.displayName = 't4Templating'
t4Templating.aliases = []
function t4Templating(Prism) {
  ;(function (Prism) {
    function createBlock(prefix, inside, contentAlias) {
      return {
        pattern: RegExp('<#' + prefix + '[\\s\\S]*?#>'),
        alias: 'block',
        inside: {
          delimiter: {
            pattern: RegExp('^<#' + prefix + '|#>$'),
            alias: 'important'
          },
          content: {
            pattern: /[\s\S]+/,
            inside: inside,
            alias: contentAlias
          }
        }
      }
    }
    function createT4(insideLang) {
      var grammar = Prism.languages[insideLang]
      var className = 'language-' + insideLang
      return {
        block: {
          pattern: /<#[\s\S]+?#>/,
          inside: {
            directive: createBlock('@', {
              'attr-value': {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
                inside: {
                  punctuation: /^=|^["']|["']$/
                }
              },
              keyword: /\b\w+(?=\s)/,
              'attr-name': /\b\w+/
            }),
            expression: createBlock('=', grammar, className),
            'class-feature': createBlock('\\+', grammar, className),
            standard: createBlock('', grammar, className)
          }
        }
      }
    }
    Prism.languages['t4-templating'] = Object.defineProperty({}, 'createT4', {
      value: createT4
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_t4Cs.js.map