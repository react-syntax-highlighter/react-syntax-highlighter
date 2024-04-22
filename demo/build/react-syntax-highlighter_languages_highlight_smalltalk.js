"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_smalltalk"],{

/***/ "./node_modules/highlight.js/es/languages/smalltalk.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/smalltalk.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ smalltalk)
/* harmony export */ });
/*
Language: Smalltalk
Description: Smalltalk is an object-oriented, dynamically typed reflective programming language.
Author: Vladimir Gubarkov <xonixx@gmail.com>
Website: https://en.wikipedia.org/wiki/Smalltalk
*/

function smalltalk(hljs) {
  const VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
  const CHAR = {
    className: 'string',
    begin: '\\$.{1}'
  };
  const SYMBOL = {
    className: 'symbol',
    begin: '#' + hljs.UNDERSCORE_IDENT_RE
  };
  return {
    name: 'Smalltalk',
    aliases: [ 'st' ],
    keywords: [
      "self",
      "super",
      "nil",
      "true",
      "false",
      "thisContext"
    ],
    contains: [
      hljs.COMMENT('"', '"'),
      hljs.APOS_STRING_MODE,
      {
        className: 'type',
        begin: '\\b[A-Z][A-Za-z0-9_]*',
        relevance: 0
      },
      {
        begin: VAR_IDENT_RE + ':',
        relevance: 0
      },
      hljs.C_NUMBER_MODE,
      SYMBOL,
      CHAR,
      {
        // This looks more complicated than needed to avoid combinatorial
        // explosion under V8. It effectively means `| var1 var2 ... |` with
        // whitespace adjacent to `|` being optional.
        begin: '\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\|',
        returnBegin: true,
        end: /\|/,
        illegal: /\S/,
        contains: [ { begin: '(\\|[ ]*)?' + VAR_IDENT_RE } ]
      },
      {
        begin: '#\\(',
        end: '\\)',
        contains: [
          hljs.APOS_STRING_MODE,
          CHAR,
          hljs.C_NUMBER_MODE,
          SYMBOL
        ]
      }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_smalltalk.js.map