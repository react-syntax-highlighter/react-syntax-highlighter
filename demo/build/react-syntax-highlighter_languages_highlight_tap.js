(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_tap"],{

/***/ "./node_modules/highlight.js/lib/languages/tap.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/tap.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      // version of format and total amount of testcases
      {
        className: 'meta',
        variants: [
          { begin: '^TAP version (\\d+)$' },
          { begin: '^1\\.\\.(\\d+)$' }
        ],
      },
      // YAML block
      {
        begin: '(\s+)?---$', end: '\\.\\.\\.$',
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
        ],
      },
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_tap.js.map