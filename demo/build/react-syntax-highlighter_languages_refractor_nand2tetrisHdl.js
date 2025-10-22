(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_nand2tetrisHdl"],{

/***/ "./node_modules/refractor/lang/nand2tetris-hdl.js":
/*!********************************************************!*\
  !*** ./node_modules/refractor/lang/nand2tetris-hdl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = nand2tetrisHdl
nand2tetrisHdl.displayName = 'nand2tetrisHdl'
nand2tetrisHdl.aliases = []
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