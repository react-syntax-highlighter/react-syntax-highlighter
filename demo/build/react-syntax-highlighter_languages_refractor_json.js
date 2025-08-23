(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_json"],{

/***/ "./node_modules/refractor/lang/json.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/json.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return json; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
json.displayName = 'json'
json.aliases = ['webmanifest']

/** @param {Refractor} Prism */
function json(Prism) {
  // https://www.json.org/json-en.html
  Prism.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: true,
      greedy: true
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true
    },
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: 'keyword'
    }
  }
  Prism.languages.webmanifest = Prism.languages.json
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_json.js.map