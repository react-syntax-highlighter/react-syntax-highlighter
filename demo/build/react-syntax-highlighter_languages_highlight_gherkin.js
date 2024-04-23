"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_gherkin"],{

/***/ "./node_modules/highlight.js/es/languages/gherkin.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/gherkin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gherkin)
/* harmony export */ });
/*
 Language: Gherkin
 Author: Sam Pikesley (@pikesley) <sam.pikesley@theodi.org>
 Description: Gherkin is the format for cucumber specifications. It is a domain specific language which helps you to describe business behavior without the need to go into detail of implementation.
 Website: https://cucumber.io/docs/gherkin/
 */

function gherkin(hljs) {
  return {
    name: 'Gherkin',
    aliases: [ 'feature' ],
    keywords: 'Feature Background Ability Business\ Need Scenario Scenarios Scenario\ Outline Scenario\ Template Examples Given And Then But When',
    contains: [
      {
        className: 'symbol',
        begin: '\\*',
        relevance: 0
      },
      {
        className: 'meta',
        begin: '@[^@\\s]+'
      },
      {
        begin: '\\|',
        end: '\\|\\w*$',
        contains: [
          {
            className: 'string',
            begin: '[^|]+'
          }
        ]
      },
      {
        className: 'variable',
        begin: '<',
        end: '>'
      },
      hljs.HASH_COMMENT_MODE,
      {
        className: 'string',
        begin: '"""',
        end: '"""'
      },
      hljs.QUOTE_STRING_MODE
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_gherkin.js.map