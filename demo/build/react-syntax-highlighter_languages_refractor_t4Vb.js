(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_t4Vb"],{

/***/ "./node_modules/refractor/lang/t4-templating.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/t4-templating.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t4Templating; });
// @ts-nocheck
t4Templating.displayName = 't4-templating'
t4Templating.aliases = []

/** @type {import('../core.js').Syntax} */
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


/***/ }),

/***/ "./node_modules/refractor/lang/t4-vb.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/t4-vb.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t4Vb; });
/* harmony import */ var _t4_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./t4-templating.js */ "./node_modules/refractor/lang/t4-templating.js");
/* harmony import */ var _vbnet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vbnet.js */ "./node_modules/refractor/lang/vbnet.js");
// @ts-nocheck


t4Vb.displayName = 't4-vb'
t4Vb.aliases = []

/** @type {import('../core.js').Syntax} */
function t4Vb(Prism) {
  Prism.register(_t4_templating_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_vbnet_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  Prism.languages['t4-vb'] = Prism.languages['t4-templating'].createT4('vbnet')
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_t4Vb.js.map