(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_tap"],{

/***/ "./node_modules/highlight.js/lib/languages/tap.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/tap.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
          {
            begin: '^TAP version (\\d+)$'
          },
          {
            begin: '^1\\.\\.(\\d+)$'
          }
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
          {
            begin: '^ok'
          },
          {
            begin: '^not ok'
          }
        ]
      }
    ]
  };
}

module.exports = tap;


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_tap.js.map