(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_gherkin"],{

/***/ "./node_modules/highlight.js/lib/languages/gherkin.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/gherkin.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  return {
    aliases: ['feature'],
    keywords: 'Feature Background Ability Business\ Need Scenario Scenarios Scenario\ Outline Scenario\ Template Examples Given And Then But When',
    contains: [
      {
        className: 'symbol',
        begin: '\\*',
        relevance: 0
      },
      {
        className: 'meta',
        begin: '@[^@\\s]+'
      },
      {
        begin: '\\|', end: '\\|\\w*$',
        contains: [
          {
            className: 'string',
            begin: '[^|]+'
          }
        ]
      },
      {
        className: 'variable',
        begin: '<', end: '>'
      },
      hljs.HASH_COMMENT_MODE,
      {
        className: 'string',
        begin: '"""', end: '"""'
      },
      hljs.QUOTE_STRING_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_gherkin.js.map