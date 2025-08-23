(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_arff"],{

/***/ "./node_modules/refractor/lang/arff.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/arff.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arff; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
arff.displayName = 'arff'
arff.aliases = []

/** @param {Refractor} Prism */
function arff(Prism) {
  Prism.languages.arff = {
    comment: /%.*/,
    string: {
      pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    keyword: /@(?:attribute|data|end|relation)\b/i,
    number: /\b\d+(?:\.\d+)?\b/,
    punctuation: /[{},]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_arff.js.map