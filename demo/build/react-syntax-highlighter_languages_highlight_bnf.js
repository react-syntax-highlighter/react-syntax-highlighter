"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_bnf"],{

/***/ "./node_modules/highlight.js/es/languages/bnf.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/bnf.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bnf)
/* harmony export */ });
/*
Language: Backus–Naur Form
Website: https://en.wikipedia.org/wiki/Backus–Naur_form
Author: Oleg Efimov <efimovov@gmail.com>
*/

/** @type LanguageFn */
function bnf(hljs) {
  return {
    name: 'Backus–Naur Form',
    contains: [
      // Attribute
      {
        className: 'attribute',
        begin: /</,
        end: />/
      },
      // Specific
      {
        begin: /::=/,
        end: /$/,
        contains: [
          {
            begin: /</,
            end: />/
          },
          // Common
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_bnf.js.map