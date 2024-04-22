"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_nodeRepl"],{

/***/ "./node_modules/highlight.js/es/languages/node-repl.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/node-repl.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nodeRepl)
/* harmony export */ });
/*
Language: Node REPL
Requires: javascript.js
Author: Marat Nagayev <nagaevmt@yandex.ru>
Category: scripting
*/

/** @type LanguageFn */
function nodeRepl(hljs) {
  return {
    name: 'Node REPL',
    contains: [
      {
        className: 'meta.prompt',
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: '$',
            subLanguage: 'javascript'
          }
        },
        variants: [
          { begin: /^>(?=[ ]|$)/ },
          { begin: /^\.\.\.(?=[ ]|$)/ }
        ]
      }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_nodeRepl.js.map