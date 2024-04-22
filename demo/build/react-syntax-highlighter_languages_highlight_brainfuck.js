"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_brainfuck"],{

/***/ "./node_modules/highlight.js/es/languages/brainfuck.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/brainfuck.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ brainfuck)
/* harmony export */ });
/*
Language: Brainfuck
Author: Evgeny Stepanischev <imbolk@gmail.com>
Website: https://esolangs.org/wiki/Brainfuck
*/

/** @type LanguageFn */
function brainfuck(hljs) {
  const LITERAL = {
    className: 'literal',
    begin: /[+-]+/,
    relevance: 0
  };
  return {
    name: 'Brainfuck',
    aliases: [ 'bf' ],
    contains: [
      hljs.COMMENT(
        /[^\[\]\.,\+\-<> \r\n]/,
        /[\[\]\.,\+\-<> \r\n]/,
        {
          contains: [
            {
              match: /[ ]+[^\[\]\.,\+\-<> \r\n]/,
              relevance: 0
            }
          ],
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
        // it looks ahead to find the start of a run of literals
        // so only the runs are counted as relevant
        begin: /(?=\+\+|--)/,
        contains: [ LITERAL ]
      },
      LITERAL
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_brainfuck.js.map