(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_brightscript"],{

/***/ "./node_modules/refractor/lang/brightscript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/brightscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return brightscript; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
brightscript.displayName = 'brightscript'
brightscript.aliases = []

/** @param {Refractor} Prism */
function brightscript(Prism) {
  Prism.languages.brightscript = {
    comment: /(?:\brem|').*/i,
    'directive-statement': {
      pattern: /(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,
      lookbehind: true,
      alias: 'property',
      inside: {
        'error-message': {
          pattern: /(^#error).+/,
          lookbehind: true
        },
        directive: {
          pattern: /^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,
          alias: 'keyword'
        },
        expression: {
          pattern: /[\s\S]+/,
          inside: null // see below
        }
      }
    },
    property: {
      pattern:
        /([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,
      lookbehind: true,
      greedy: true
    },
    string: {
      pattern: /"(?:[^"\r\n]|"")*"(?!")/,
      greedy: true
    },
    'class-name': {
      pattern: /(\bAs[\t ]+)\w+/i,
      lookbehind: true
    },
    keyword:
      /\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,
    boolean: /\b(?:false|true)\b/i,
    function: /\b(?!\d)\w+(?=[\t ]*\()/,
    number: /(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,
    operator:
      /--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,
    punctuation: /[.,;()[\]{}]/,
    constant: /\b(?:LINE_NUM)\b/i
  }
  Prism.languages.brightscript['directive-statement'].inside.expression.inside =
    Prism.languages.brightscript
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_brightscript.js.map