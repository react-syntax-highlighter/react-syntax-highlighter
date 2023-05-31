(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_csv"],{

/***/ "./node_modules/refractor/lang/csv.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/csv.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return csv; });
// @ts-nocheck
csv.displayName = 'csv'
csv.aliases = []

/** @type {import('../core.js').Syntax} */
function csv(Prism) {
  // https://tools.ietf.org/html/rfc4180

  Prism.languages.csv = {
    value: /[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,
    punctuation: /,/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_csv.js.map