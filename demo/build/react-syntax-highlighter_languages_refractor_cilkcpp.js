(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_cilkcpp"],{

/***/ "./node_modules/refractor/lang/cilkcpp.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/cilkcpp.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cilkcpp; });
/* harmony import */ var _cpp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cpp.js */ "./node_modules/refractor/lang/cpp.js");
// @ts-nocheck

cilkcpp.displayName = 'cilkcpp'
cilkcpp.aliases = ['cilk', 'cilk-cpp']

/** @type {import('../core.js').Syntax} */
function cilkcpp(Prism) {
  Prism.register(_cpp_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.cilkcpp = Prism.languages.insertBefore('cpp', 'function', {
    'parallel-keyword': {
      pattern: /\bcilk_(?:for|reducer|s(?:cope|pawn|ync))\b/,
      alias: 'keyword'
    }
  })
  Prism.languages['cilk-cpp'] = Prism.languages['cilkcpp']
  Prism.languages['cilk'] = Prism.languages['cilkcpp']
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_cilkcpp.js.map