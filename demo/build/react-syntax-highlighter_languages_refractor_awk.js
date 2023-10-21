(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_awk"],{

/***/ "./node_modules/refractor/lang/awk.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/awk.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return awk; });
// @ts-nocheck
awk.displayName = 'awk'
awk.aliases = ['gawk']

/** @type {import('../core.js').Syntax} */
function awk(Prism) {
  Prism.languages.awk = {
    hashbang: {
      pattern: /^#!.*/,
      greedy: true,
      alias: 'comment'
    },
    comment: {
      pattern: /#.*/,
      greedy: true
    },
    string: {
      pattern: /(^|[^\\])"(?:[^\\"\r\n]|\\.)*"/,
      lookbehind: true,
      greedy: true
    },
    regex: {
      pattern: /((?:^|[^\w\s)])\s*)\/(?:[^\/\\\r\n]|\\.)*\//,
      lookbehind: true,
      greedy: true
    },
    variable: /\$\w+/,
    keyword:
      /\b(?:BEGIN|BEGINFILE|END|ENDFILE|break|case|continue|default|delete|do|else|exit|for|function|getline|if|in|next|nextfile|printf?|return|switch|while)\b|@(?:include|load)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[a-fA-F0-9]+)\b/,
    operator: /--|\+\+|!?~|>&|>>|<<|(?:\*\*|[<>!=+\-*/%^])=?|&&|\|[|&]|[?:]/,
    punctuation: /[()[\]{},;]/
  }
  Prism.languages.gawk = Prism.languages.awk
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_awk.js.map