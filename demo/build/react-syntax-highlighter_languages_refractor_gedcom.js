(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_gedcom"],{

/***/ "./node_modules/refractor/lang/gedcom.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/gedcom.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gedcom; });
// @ts-nocheck
gedcom.displayName = 'gedcom'
gedcom.aliases = []

/** @type {import('../core.js').Syntax} */
function gedcom(Prism) {
  Prism.languages.gedcom = {
    'line-value': {
      // Preceded by level, optional pointer, and tag
      pattern:
        /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
      lookbehind: true,
      inside: {
        pointer: {
          pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
          alias: 'variable'
        }
      }
    },
    record: {
      // Preceded by level and optional pointer
      pattern:
        /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
      lookbehind: true,
      alias: 'tag'
    },
    level: {
      pattern: /(^[\t ]*)\d+/m,
      lookbehind: true,
      alias: 'number'
    },
    pointer: {
      pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
      alias: 'variable'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_gedcom.js.map