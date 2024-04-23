"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_pythonRepl"],{

/***/ "./node_modules/highlight.js/es/languages/python-repl.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/python-repl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pythonRepl)
/* harmony export */ });
/*
Language: Python REPL
Requires: python.js
Author: Josh Goebel <hello@joshgoebel.com>
Category: common
*/

function pythonRepl(hljs) {
  return {
    aliases: [ 'pycon' ],
    contains: [
      {
        className: 'meta.prompt',
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: '$',
            subLanguage: 'python'
          }
        },
        variants: [
          { begin: /^>>>(?=[ ]|$)/ },
          { begin: /^\.\.\.(?=[ ]|$)/ }
        ]
      }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_pythonRepl.js.map