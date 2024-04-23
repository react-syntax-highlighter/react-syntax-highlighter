"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_awk"],{

/***/ "./node_modules/highlight.js/es/languages/awk.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/awk.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ awk)
/* harmony export */ });
/*
Language: Awk
Author: Matthew Daly <matthewbdaly@gmail.com>
Website: https://www.gnu.org/software/gawk/manual/gawk.html
Description: language definition for Awk scripts
*/

/** @type LanguageFn */
function awk(hljs) {
  const VARIABLE = {
    className: 'variable',
    variants: [
      { begin: /\$[\w\d#@][\w\d_]*/ },
      { begin: /\$\{(.*?)\}/ }
    ]
  };
  const KEYWORDS = 'BEGIN END if else while do for in break continue delete next nextfile function func exit|10';
  const STRING = {
    className: 'string',
    contains: [ hljs.BACKSLASH_ESCAPE ],
    variants: [
      {
        begin: /(u|b)?r?'''/,
        end: /'''/,
        relevance: 10
      },
      {
        begin: /(u|b)?r?"""/,
        end: /"""/,
        relevance: 10
      },
      {
        begin: /(u|r|ur)'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /(u|r|ur)"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /(b|br)'/,
        end: /'/
      },
      {
        begin: /(b|br)"/,
        end: /"/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
  return {
    name: 'Awk',
    keywords: { keyword: KEYWORDS },
    contains: [
      VARIABLE,
      STRING,
      hljs.REGEXP_MODE,
      hljs.HASH_COMMENT_MODE,
      hljs.NUMBER_MODE
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_awk.js.map