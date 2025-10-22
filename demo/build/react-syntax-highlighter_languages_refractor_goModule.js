(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_goModule"],{

/***/ "./node_modules/refractor/lang/go-module.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/go-module.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return goModule; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
goModule.displayName = 'go-module'
goModule.aliases = ['go-mod']

/** @param {Refractor} Prism */
function goModule(Prism) {
  // https://go.dev/ref/mod#go-mod-file-module

  Prism.languages['go-mod'] = Prism.languages['go-module'] = {
    comment: {
      pattern: /\/\/.*/,
      greedy: true
    },
    version: {
      pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
      lookbehind: true,
      alias: 'number'
    },
    'go-version': {
      pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
      lookbehind: true,
      alias: 'number'
    },
    keyword: {
      pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
      lookbehind: true
    },
    operator: /=>/,
    punctuation: /[()[\],]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_goModule.js.map