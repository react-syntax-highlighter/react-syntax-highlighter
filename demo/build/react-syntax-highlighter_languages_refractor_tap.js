(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_tap"],{

/***/ "./node_modules/refractor/lang/tap.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tap.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tap; });
/* harmony import */ var _yaml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yaml.js */ "./node_modules/refractor/lang/yaml.js");
// @ts-nocheck

tap.displayName = 'tap'
tap.aliases = []

/** @type {import('../core.js').Syntax} */
function tap(Prism) {
  Prism.register(_yaml_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  // https://en.wikipedia.org/wiki/Test_Anything_Protocol

  Prism.languages.tap = {
    fail: /not ok[^#{\n\r]*/,
    pass: /ok[^#{\n\r]*/,
    pragma: /pragma [+-][a-z]+/,
    bailout: /bail out!.*/i,
    version: /TAP version \d+/i,
    plan: /\b\d+\.\.\d+(?: +#.*)?/,
    subtest: {
      pattern: /# Subtest(?:: .*)?/,
      greedy: true
    },
    punctuation: /[{}]/,
    directive: /#.*/,
    yamlish: {
      pattern: /(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,
      lookbehind: true,
      inside: Prism.languages.yaml,
      alias: 'language-yaml'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tap.js.map