(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_gcode"],{

/***/ "./node_modules/refractor/lang/gcode.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/gcode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = gcode
gcode.displayName = 'gcode'
gcode.aliases = []
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