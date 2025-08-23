(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_rego"],{

/***/ "./node_modules/refractor/lang/rego.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/rego.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rego; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
rego.displayName = 'rego'
rego.aliases = []

/** @param {Refractor} Prism */
function rego(Prism) {
  // https://www.openpolicyagent.org/docs/latest/policy-reference/

  Prism.languages.rego = {
    comment: /#.*/,
    property: {
      pattern:
        /(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,
      lookbehind: true,
      greedy: true
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,
      lookbehind: true,
      greedy: true
    },
    keyword:
      /\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,
    boolean: /\b(?:false|true)\b/,
    function: {
      pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,
      inside: {
        namespace: /\b\w+\b(?=\s*\.)/,
        punctuation: /\./
      }
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    operator: /[-+*/%|&]|[<>:=]=?|!=|\b_\b/,
    punctuation: /[,;.\[\]{}()]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_rego.js.map