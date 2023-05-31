(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_roboconf"],{

/***/ "./node_modules/refractor/lang/roboconf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/roboconf.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return roboconf; });
// @ts-nocheck
roboconf.displayName = 'roboconf'
roboconf.aliases = []

/** @type {import('../core.js').Syntax} */
function roboconf(Prism) {
  Prism.languages.roboconf = {
    comment: /#.*/,
    keyword: {
      pattern:
        /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,
      lookbehind: true
    },
    component: {
      pattern: /[\w-]+(?=[ \t]*\{)/,
      alias: 'variable'
    },
    property: /[\w.-]+(?=[ \t]*:)/,
    value: {
      pattern: /(=[ \t]*(?![ \t]))[^,;]+/,
      lookbehind: true,
      alias: 'attr-value'
    },
    optional: {
      pattern: /\(optional\)/,
      alias: 'builtin'
    },
    wildcard: {
      pattern: /(\.)\*/,
      lookbehind: true,
      alias: 'operator'
    },
    punctuation: /[{},.;:=]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_roboconf.js.map