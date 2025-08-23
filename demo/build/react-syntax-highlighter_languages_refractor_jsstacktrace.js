(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_jsstacktrace"],{

/***/ "./node_modules/refractor/lang/jsstacktrace.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/jsstacktrace.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jsstacktrace; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
jsstacktrace.displayName = 'jsstacktrace'
jsstacktrace.aliases = []

/** @param {Refractor} Prism */
function jsstacktrace(Prism) {
  Prism.languages.jsstacktrace = {
    'error-message': {
      pattern: /^\S.*/m,
      alias: 'string'
    },
    'stack-frame': {
      pattern: /(^[ \t]+)at[ \t].*/m,
      lookbehind: true,
      inside: {
        'not-my-code': {
          pattern:
            /^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
          alias: 'comment'
        },
        filename: {
          pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
          lookbehind: true,
          alias: 'url'
        },
        function: {
          pattern:
            /(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /[()]/,
        keyword: /\b(?:at|new)\b/,
        alias: {
          pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
          alias: 'variable'
        },
        'line-number': {
          pattern: /:\d+(?::\d+)?\b/,
          alias: 'number',
          inside: {
            punctuation: /:/
          }
        }
      }
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsstacktrace.js.map