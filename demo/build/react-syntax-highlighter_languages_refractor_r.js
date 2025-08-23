(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_r"],{

/***/ "./node_modules/refractor/lang/r.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/r.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
r.displayName = 'r'
r.aliases = []

/** @param {Refractor} Prism */
function r(Prism) {
  Prism.languages.r = {
    comment: /#.*/,
    string: {
      pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'percent-operator': {
      // Includes user-defined operators
      // and %%, %*%, %/%, %in%, %o%, %x%
      pattern: /%[^%\s]*%/,
      alias: 'operator'
    },
    boolean: /\b(?:FALSE|TRUE)\b/,
    ellipsis: /\.\.(?:\.|\d+)/,
    number: [
      /\b(?:Inf|NaN)\b/,
      /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
    ],
    keyword:
      /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
    punctuation: /[(){}\[\],;]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_r.js.map