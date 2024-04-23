"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_prolog"],{

/***/ "./node_modules/highlight.js/es/languages/prolog.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/prolog.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prolog)
/* harmony export */ });
/*
Language: Prolog
Description: Prolog is a general purpose logic programming language associated with artificial intelligence and computational linguistics.
Author: Raivo Laanemets <raivo@infdot.com>
Website: https://en.wikipedia.org/wiki/Prolog
*/

function prolog(hljs) {
  const ATOM = {

    begin: /[a-z][A-Za-z0-9_]*/,
    relevance: 0
  };

  const VAR = {

    className: 'symbol',
    variants: [
      { begin: /[A-Z][a-zA-Z0-9_]*/ },
      { begin: /_[A-Za-z0-9_]*/ }
    ],
    relevance: 0
  };

  const PARENTED = {

    begin: /\(/,
    end: /\)/,
    relevance: 0
  };

  const LIST = {

    begin: /\[/,
    end: /\]/
  };

  const LINE_COMMENT = {

    className: 'comment',
    begin: /%/,
    end: /$/,
    contains: [ hljs.PHRASAL_WORDS_MODE ]
  };

  const BACKTICK_STRING = {

    className: 'string',
    begin: /`/,
    end: /`/,
    contains: [ hljs.BACKSLASH_ESCAPE ]
  };

  const CHAR_CODE = {
    className: 'string', // 0'a etc.
    begin: /0'(\\'|.)/
  };

  const SPACE_CODE = {
    className: 'string',
    begin: /0'\\s/ // 0'\s
  };

  const PRED_OP = { // relevance booster
    begin: /:-/ };

  const inner = [

    ATOM,
    VAR,
    PARENTED,
    PRED_OP,
    LIST,
    LINE_COMMENT,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.APOS_STRING_MODE,
    BACKTICK_STRING,
    CHAR_CODE,
    SPACE_CODE,
    hljs.C_NUMBER_MODE
  ];

  PARENTED.contains = inner;
  LIST.contains = inner;

  return {
    name: 'Prolog',
    contains: inner.concat([
      { // relevance booster
        begin: /\.$/ }
    ])
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_prolog.js.map