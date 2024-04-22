"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_clean"],{

/***/ "./node_modules/highlight.js/es/languages/clean.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/clean.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clean)
/* harmony export */ });
/*
Language: Clean
Author: Camil Staps <info@camilstaps.nl>
Category: functional
Website: http://clean.cs.ru.nl
*/

/** @type LanguageFn */
function clean(hljs) {
  const KEYWORDS = [
    "if",
    "let",
    "in",
    "with",
    "where",
    "case",
    "of",
    "class",
    "instance",
    "otherwise",
    "implementation",
    "definition",
    "system",
    "module",
    "from",
    "import",
    "qualified",
    "as",
    "special",
    "code",
    "inline",
    "foreign",
    "export",
    "ccall",
    "stdcall",
    "generic",
    "derive",
    "infix",
    "infixl",
    "infixr"
  ];
  return {
    name: 'Clean',
    aliases: [
      'icl',
      'dcl'
    ],
    keywords: {
      keyword: KEYWORDS,
      built_in:
        'Int Real Char Bool',
      literal:
        'True False'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      { // relevance booster
        begin: '->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>' }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_clean.js.map