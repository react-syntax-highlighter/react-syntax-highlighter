"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_tap"],{

/***/ "./node_modules/highlight.js/es/languages/tap.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/tap.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tap)
/* harmony export */ });
/*
Language: Test Anything Protocol
Description: TAP, the Test Anything Protocol, is a simple text-based interface between testing modules in a test harness.
Requires: yaml.js
Author: Sergey Bronnikov <sergeyb@bronevichok.ru>
Website: https://testanything.org
*/

function tap(hljs) {
  return {
    name: 'Test Anything Protocol',
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      // version of format and total amount of testcases
      {
        className: 'meta',
        variants: [
          { begin: '^TAP version (\\d+)$' },
          { begin: '^1\\.\\.(\\d+)$' }
        ]
      },
      // YAML block
      {
        begin: /---$/,
        end: '\\.\\.\\.$',
        subLanguage: 'yaml',
        relevance: 0
      },
      // testcase number
      {
        className: 'number',
        begin: ' (\\d+) '
      },
      // testcase status and description
      {
        className: 'symbol',
        variants: [
          { begin: '^ok' },
          { begin: '^not ok' }
        ]
      }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_tap.js.map