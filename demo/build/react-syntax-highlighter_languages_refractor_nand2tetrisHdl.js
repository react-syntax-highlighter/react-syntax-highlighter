(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_nand2tetrisHdl"],{

/***/ "./node_modules/refractor/lang/nand2tetris-hdl.js":
/*!********************************************************!*\
  !*** ./node_modules/refractor/lang/nand2tetris-hdl.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nand2tetrisHdl; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
nand2tetrisHdl.displayName = 'nand2tetris-hdl'
nand2tetrisHdl.aliases = []

/** @param {Refractor} Prism */
function nand2tetrisHdl(Prism) {
  Prism.languages['nand2tetris-hdl'] = {
    comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    keyword: /\b(?:BUILTIN|CHIP|CLOCKED|IN|OUT|PARTS)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b[A-Za-z][A-Za-z0-9]*(?=\()/,
    number: /\b\d+\b/,
    operator: /=|\.\./,
    punctuation: /[{}[\];(),:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_nand2tetrisHdl.js.map