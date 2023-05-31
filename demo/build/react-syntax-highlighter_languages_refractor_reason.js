(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_reason"],{

/***/ "./node_modules/refractor/lang/reason.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/reason.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reason; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

reason.displayName = 'reason'
reason.aliases = []

/** @type {import('../core.js').Syntax} */
function reason(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.reason = Prism.languages.extend('clike', {
    string: {
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
      greedy: true
    },
    // 'class-name' must be matched *after* 'constructor' defined below
    'class-name': /\b[A-Z]\w*/,
    keyword:
      /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
    operator:
      /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
  })
  Prism.languages.insertBefore('reason', 'class-name', {
    char: {
      pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
      greedy: true
    },
    // Negative look-ahead prevents from matching things like String.capitalize
    constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
    label: {
      pattern: /\b[a-z]\w*(?=::)/,
      alias: 'symbol'
    }
  })

  // We can't match functions property, so let's not even try.
  delete Prism.languages.reason.function
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_reason.js.map