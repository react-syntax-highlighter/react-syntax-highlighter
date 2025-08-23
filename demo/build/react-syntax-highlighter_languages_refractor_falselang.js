(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_falselang"],{

/***/ "./node_modules/refractor/lang/false.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/false.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return $false; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
$false.displayName = 'false'
$false.aliases = []

/** @param {Refractor} Prism */
function $false(Prism) {
  ;(function (Prism) {
    /**
     * Based on the manual by Wouter van Oortmerssen.
     *
     * @see {@link https://github.com/PrismJS/prism/issues/2801#issue-829717504}
     */
    Prism.languages['false'] = {
      comment: {
        pattern: /\{[^}]*\}/
      },
      string: {
        pattern: /"[^"]*"/,
        greedy: true
      },
      'character-code': {
        pattern: /'(?:[^\r]|\r\n?)/,
        alias: 'number'
      },
      'assembler-code': {
        pattern: /\d+`/,
        alias: 'important'
      },
      number: /\d+/,
      operator: /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
      punctuation: /\[|\]/,
      variable: /[a-z]/,
      'non-standard': {
        pattern: /[()<BDO®]/,
        alias: 'bold'
      }
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_falselang.js.map