(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_mata"],{

/***/ "./node_modules/refractor/lang/mata.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/mata.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mata; });
// @ts-nocheck
mata.displayName = 'mata'
mata.aliases = []

/** @type {import('../core.js').Syntax} */
function mata(Prism) {
  // https://www.stata.com/manuals/m.pdf

  ;(function (Prism) {
    var orgType = /\b(?:(?:col|row)?vector|matrix|scalar)\b/.source
    var type =
      /\bvoid\b|<org>|\b(?:complex|numeric|pointer(?:\s*\([^()]*\))?|real|string|(?:class|struct)\s+\w+|transmorphic)(?:\s*<org>)?/.source.replace(
        /<org>/g,
        orgType
      )
    Prism.languages.mata = {
      comment: {
        pattern:
          /\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//,
        greedy: true
      },
      string: {
        pattern: /"[^"\r\n]*"|[‘`']".*?"[’`']/,
        greedy: true
      },
      'class-name': {
        pattern: /(\b(?:class|extends|struct)\s+)\w+(?=\s*(?:\{|\bextends\b))/,
        lookbehind: true
      },
      type: {
        pattern: RegExp(type),
        alias: 'class-name',
        inside: {
          punctuation: /[()]/,
          keyword: /\b(?:class|function|struct|void)\b/
        }
      },
      keyword:
        /\b(?:break|class|continue|do|else|end|extends|external|final|for|function|goto|if|pragma|private|protected|public|return|static|struct|unset|unused|version|virtual|while)\b/,
      constant: /\bNULL\b/,
      number: {
        pattern:
          /(^|[^\w.])(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|\d[a-f0-9]*(?:\.[a-f0-9]+)?x[+-]?\d+)i?(?![\w.])/i,
        lookbehind: true
      },
      missing: {
        pattern: /(^|[^\w.])(?:\.[a-z]?)(?![\w.])/,
        lookbehind: true,
        alias: 'symbol'
      },
      function: /\b[a-z_]\w*(?=\s*\()/i,
      operator: /\.\.|\+\+|--|&&|\|\||:?(?:[!=<>]=|[+\-*/^<>&|:])|[!?=\\#’`']/,
      punctuation: /[()[\]{},;.]/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_mata.js.map