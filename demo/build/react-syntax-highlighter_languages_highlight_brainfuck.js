(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_brainfuck"],{

/***/ "./node_modules/highlight.js/lib/languages/brainfuck.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/brainfuck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs){
  var LITERAL = {
    className: 'literal',
    begin: '[\\+\\-]',
    relevance: 0
  };
  return {
    aliases: ['bf'],
    contains: [
      hljs.COMMENT(
        '[^\\[\\]\\.,\\+\\-<> \r\n]',
        '[\\[\\]\\.,\\+\\-<> \r\n]',
        {
          returnEnd: true,
          relevance: 0
        }
      ),
      {
        className: 'title',
        begin: '[\\[\\]]',
        relevance: 0
      },
      {
        className: 'string',
        begin: '[\\.,]',
        relevance: 0
      },
      {
        // this mode works as the only relevance counter
        begin: /(?:\+\+|\-\-)/,
        contains: [LITERAL]
      },
      LITERAL
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_brainfuck.js.map