(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_jexl"],{

/***/ "./node_modules/refractor/lang/jexl.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/jexl.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jexl; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
jexl.displayName = 'jexl'
jexl.aliases = []

/** @param {Refractor} Prism */
function jexl(Prism) {
  Prism.languages.jexl = {
    string: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
    transform: {
      pattern:
        /(\|\s*)[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,
      alias: 'function',
      lookbehind: true
    },
    function:
      /[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,
    number: /\b\d+(?:\.\d+)?\b|\B\.\d+\b/,
    operator: /[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,
    boolean: /\b(?:false|true)\b/,
    keyword: /\bin\b/,
    punctuation: /[{}[\](),.]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jexl.js.map