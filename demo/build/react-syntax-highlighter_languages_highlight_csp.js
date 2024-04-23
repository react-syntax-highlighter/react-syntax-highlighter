"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_csp"],{

/***/ "./node_modules/highlight.js/es/languages/csp.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/csp.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ csp)
/* harmony export */ });
/*
Language: CSP
Description: Content Security Policy definition highlighting
Author: Taras <oxdef@oxdef.info>
Website: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

vim: ts=2 sw=2 st=2
*/

/** @type LanguageFn */
function csp(hljs) {
  const KEYWORDS = [
    "base-uri",
    "child-src",
    "connect-src",
    "default-src",
    "font-src",
    "form-action",
    "frame-ancestors",
    "frame-src",
    "img-src",
    "manifest-src",
    "media-src",
    "object-src",
    "plugin-types",
    "report-uri",
    "sandbox",
    "script-src",
    "style-src",
    "trusted-types",
    "unsafe-hashes",
    "worker-src"
  ];
  return {
    name: 'CSP',
    case_insensitive: false,
    keywords: {
      $pattern: '[a-zA-Z][a-zA-Z0-9_-]*',
      keyword: KEYWORDS
    },
    contains: [
      {
        className: 'string',
        begin: "'",
        end: "'"
      },
      {
        className: 'attribute',
        begin: '^Content',
        end: ':',
        excludeEnd: true
      }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_csp.js.map