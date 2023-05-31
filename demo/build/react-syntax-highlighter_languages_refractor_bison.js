(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_bison"],{

/***/ "./node_modules/refractor/lang/bison.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/bison.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bison; });
/* harmony import */ var _c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js");
// @ts-nocheck

bison.displayName = 'bison'
bison.aliases = []

/** @type {import('../core.js').Syntax} */
function bison(Prism) {
  Prism.register(_c_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.bison = Prism.languages.extend('c', {})
  Prism.languages.insertBefore('bison', 'comment', {
    bison: {
      // This should match all the beginning of the file
      // including the prologue(s), the bison declarations and
      // the grammar rules.
      pattern: /^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,
      inside: {
        c: {
          // Allow for one level of nested braces
          pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
          inside: {
            delimiter: {
              pattern: /^%?\{|%?\}$/,
              alias: 'punctuation'
            },
            'bison-variable': {
              pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
              alias: 'variable',
              inside: {
                punctuation: /<|>/
              }
            },
            rest: Prism.languages.c
          }
        },
        comment: Prism.languages.c.comment,
        string: Prism.languages.c.string,
        property: /\S+(?=:)/,
        keyword: /%\w+/,
        number: {
          pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
          lookbehind: true
        },
        punctuation: /%[%?]|[|:;\[\]<>]/
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_bison.js.map