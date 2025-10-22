(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_yang"],{

/***/ "./node_modules/refractor/lang/yang.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/yang.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = yang
yang.displayName = 'yang'
yang.aliases = []
function yang(Prism) {
  Prism.languages.yang = {
    // https://tools.ietf.org/html/rfc6020#page-34
    // http://www.yang-central.org/twiki/bin/view/Main/YangExamples
    comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
    string: {
      pattern: /"(?:[^\\"]|\\.)*"|'[^']*'/,
      greedy: true
    },
    keyword: {
      pattern: /(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,
      lookbehind: true
    },
    namespace: {
      pattern: /(\s)[a-z_][\w.-]*(?=:)/i,
      lookbehind: true
    },
    boolean: /\b(?:false|true)\b/,
    operator: /\+/,
    punctuation: /[{};:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_yang.js.map