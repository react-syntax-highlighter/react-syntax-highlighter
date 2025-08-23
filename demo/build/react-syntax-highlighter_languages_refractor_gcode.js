(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_gcode"],{

/***/ "./node_modules/refractor/lang/gcode.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/gcode.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gcode; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
gcode.displayName = 'gcode'
gcode.aliases = []

/** @param {Refractor} Prism */
function gcode(Prism) {
  Prism.languages.gcode = {
    comment: /;.*|\B\(.*?\)\B/,
    string: {
      pattern: /"(?:""|[^"])*"/,
      greedy: true
    },
    keyword: /\b[GM]\d+(?:\.\d+)?\b/,
    property: /\b[A-Z]/,
    checksum: {
      pattern: /(\*)\d+/,
      lookbehind: true,
      alias: 'number'
    },
    // T0:0:0
    punctuation: /[:*]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_gcode.js.map