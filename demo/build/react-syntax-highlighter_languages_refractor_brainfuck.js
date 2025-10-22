(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_brainfuck"],{

/***/ "./node_modules/refractor/lang/brainfuck.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/brainfuck.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return brainfuck; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
brainfuck.displayName = 'brainfuck'
brainfuck.aliases = []

/** @param {Refractor} Prism */
function brainfuck(Prism) {
  Prism.languages.brainfuck = {
    pointer: {
      pattern: /<|>/,
      alias: 'keyword'
    },
    increment: {
      pattern: /\+/,
      alias: 'inserted'
    },
    decrement: {
      pattern: /-/,
      alias: 'deleted'
    },
    branching: {
      pattern: /\[|\]/,
      alias: 'important'
    },
    operator: /[.,]/,
    comment: /\S+/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_brainfuck.js.map