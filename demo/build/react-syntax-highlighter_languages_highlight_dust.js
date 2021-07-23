(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_dust"],{

/***/ "./node_modules/highlight.js/lib/languages/dust.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dust.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
  return {
    aliases: ['dst'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      {
        className: 'template-tag',
        begin: /\{[#\/]/, end: /\}/, illegal: /;/,
        contains: [
          {
            className: 'name',
            begin: /[a-zA-Z\.-]+/,
            starts: {
              endsWithParent: true, relevance: 0,
              contains: [
                hljs.QUOTE_STRING_MODE
              ]
            }
          }
        ]
      },
      {
        className: 'template-variable',
        begin: /\{/, end: /\}/, illegal: /;/,
        keywords: EXPRESSION_KEYWORDS
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_dust.js.map