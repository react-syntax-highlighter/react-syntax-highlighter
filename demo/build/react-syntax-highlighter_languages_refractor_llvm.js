(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_llvm"],{

/***/ "./node_modules/refractor/lang/llvm.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/llvm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return llvm; });
// @ts-nocheck
llvm.displayName = 'llvm'
llvm.aliases = []

/** @type {import('../core.js').Syntax} */
function llvm(Prism) {
  ;(function (Prism) {
    Prism.languages.llvm = {
      comment: /;.*/,
      string: {
        pattern: /"[^"]*"/,
        greedy: true
      },
      boolean: /\b(?:false|true)\b/,
      variable: /[%@!#](?:(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+|\d+)/i,
      label: /(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+:/i,
      type: {
        pattern:
          /\b(?:double|float|fp128|half|i[1-9]\d*|label|metadata|ppc_fp128|token|void|x86_fp80|x86_mmx)\b/,
        alias: 'class-name'
      },
      keyword: /\b[a-z_][a-z_0-9]*\b/,
      number:
        /[+-]?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-Fa-f]+\b|\b0xK[\dA-Fa-f]{20}\b|\b0x[ML][\dA-Fa-f]{32}\b|\b0xH[\dA-Fa-f]{4}\b/,
      punctuation: /[{}[\];(),.!*=<>]/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_llvm.js.map