"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_dust"],{

/***/ "./node_modules/highlight.js/es/languages/dust.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/dust.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dust)
/* harmony export */ });
/*
Language: Dust
Requires: xml.js
Author: Michael Allen <michael.allen@benefitfocus.com>
Description: Matcher for dust.js templates.
Website: https://www.dustjs.com
Category: template
*/

/** @type LanguageFn */
function dust(hljs) {
  const EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
  return {
    name: 'Dust',
    aliases: [ 'dst' ],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      {
        className: 'template-tag',
        begin: /\{[#\/]/,
        end: /\}/,
        illegal: /;/,
        contains: [
          {
            className: 'name',
            begin: /[a-zA-Z\.-]+/,
            starts: {
              endsWithParent: true,
              relevance: 0,
              contains: [ hljs.QUOTE_STRING_MODE ]
            }
          }
        ]
      },
      {
        className: 'template-variable',
        begin: /\{/,
        end: /\}/,
        illegal: /;/,
        keywords: EXPRESSION_KEYWORDS
      }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_dust.js.map