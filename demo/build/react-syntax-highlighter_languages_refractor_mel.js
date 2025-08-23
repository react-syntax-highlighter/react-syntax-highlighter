(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_mel"],{

/***/ "./node_modules/refractor/lang/mel.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/mel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mel; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
mel.displayName = 'mel'
mel.aliases = []

/** @param {Refractor} Prism */
function mel(Prism) {
  Prism.languages.mel = {
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
      greedy: true
    },
    code: {
      pattern: /`(?:\\.|[^\\`])*`/,
      greedy: true,
      alias: 'italic',
      inside: {
        delimiter: {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        statement: {
          pattern: /[\s\S]+/,
          inside: null // see below
        }
      }
    },
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    variable: /\$\w+/,
    number: /\b0x[\da-fA-F]+\b|\b\d+(?:\.\d*)?|\B\.\d+/,
    flag: {
      pattern: /-[^\d\W]\w*/,
      alias: 'operator'
    },
    keyword:
      /\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,
    function: {
      pattern:
        /((?:^|[{;])[ \t]*)[a-z_]\w*\b(?!\s*(?:\.(?!\.)|[[{=]))|\b[a-z_]\w*(?=[ \t]*\()/im,
      lookbehind: true,
      greedy: true
    },
    'tensor-punctuation': {
      pattern: /<<|>>/,
      alias: 'punctuation'
    },
    operator: /\+[+=]?|-[-=]?|&&|\|\||[<>]=?|[*\/!=]=?|[%^]/,
    punctuation: /[.,:;?\[\](){}]/
  }
  Prism.languages.mel['code'].inside['statement'].inside = Prism.languages.mel
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_mel.js.map