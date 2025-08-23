(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_dataweave"],{

/***/ "./node_modules/refractor/lang/dataweave.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/dataweave.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dataweave; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
dataweave.displayName = 'dataweave'
dataweave.aliases = []

/** @param {Refractor} Prism */
function dataweave(Prism) {
  ;(function (Prism) {
    Prism.languages.dataweave = {
      url: /\b[A-Za-z]+:\/\/[\w/:.?=&-]+|\burn:[\w:.?=&-]+/,
      property: {
        pattern: /(?:\b\w+#)?(?:"(?:\\.|[^\\"\r\n])*"|\b\w+)(?=\s*[:@])/,
        greedy: true
      },
      string: {
        pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
        greedy: true
      },
      'mime-type':
        /\b(?:application|audio|image|multipart|text|video)\/[\w+-]+/,
      date: {
        pattern: /\|[\w:+-]+\|/,
        greedy: true
      },
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      regex: {
        pattern: /\/(?:[^\\\/\r\n]|\\[^\r\n])+\//,
        greedy: true
      },
      keyword:
        /\b(?:and|as|at|case|do|else|fun|if|input|is|match|not|ns|null|or|output|type|unless|update|using|var)\b/,
      function: /\b[A-Z_]\w*(?=\s*\()/i,
      number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      punctuation: /[{}[\];(),.:@]/,
      operator: /<<|>>|->|[<>~=]=?|!=|--?-?|\+\+?|!|\?/,
      boolean: /\b(?:false|true)\b/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_dataweave.js.map