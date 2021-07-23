(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_ldif"],{

/***/ "./node_modules/highlight.js/lib/languages/ldif.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ldif.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    contains: [
      {
        className: 'attribute',
        begin: '^dn', end: ': ', excludeEnd: true,
        starts: {end: '$', relevance: 0},
        relevance: 10
      },
      {
        className: 'attribute',
        begin: '^\\w', end: ': ', excludeEnd: true,
        starts: {end: '$', relevance: 0}
      },
      {
        className: 'literal',
        begin: '^-', end: '$'
      },
      hljs.HASH_COMMENT_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_ldif.js.map