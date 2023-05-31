(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_processing"],{

/***/ "./node_modules/refractor/lang/processing.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/processing.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processing; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

processing.displayName = 'processing'
processing.aliases = []

/** @type {import('../core.js').Syntax} */
function processing(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.processing = Prism.languages.extend('clike', {
    keyword:
      /\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
    // Spaces are allowed between function name and parenthesis
    function: /\b\w+(?=\s*\()/,
    operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
  })
  Prism.languages.insertBefore('processing', 'number', {
    // Special case: XML is a type
    constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
    type: {
      pattern: /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,
      alias: 'class-name'
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_processing.js.map