(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_hsts"],{

/***/ "./node_modules/refractor/lang/hsts.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/hsts.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hsts; });
// @ts-nocheck
hsts.displayName = 'hsts'
hsts.aliases = []

/** @type {import('../core.js').Syntax} */
function hsts(Prism) {
  /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/hsts-cheat-sheet/
   */

  Prism.languages.hsts = {
    directive: {
      pattern: /\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i,
      alias: 'property'
    },
    operator: /=/,
    punctuation: /;/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_hsts.js.map