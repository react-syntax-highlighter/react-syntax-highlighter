(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_cilkc"],{

/***/ "./node_modules/refractor/lang/cilkc.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/cilkc.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cilkc; });
/* harmony import */ var _c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js");
// @ts-nocheck

cilkc.displayName = 'cilkc'
cilkc.aliases = ['cilk-c']

/** @type {import('../core.js').Syntax} */
function cilkc(Prism) {
  Prism.register(_c_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.cilkc = Prism.languages.insertBefore('c', 'function', {
    'parallel-keyword': {
      pattern: /\bcilk_(?:for|reducer|s(?:cope|pawn|ync))\b/,
      alias: 'keyword'
    }
  })
  Prism.languages['cilk-c'] = Prism.languages['cilkc']
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_cilkc.js.map