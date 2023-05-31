(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_birb"],{

/***/ "./node_modules/refractor/lang/birb.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/birb.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return birb; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

birb.displayName = 'birb'
birb.aliases = []

/** @type {import('../core.js').Syntax} */
function birb(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.birb = Prism.languages.extend('clike', {
    string: {
      pattern: /r?("|')(?:\\.|(?!\1)[^\\])*\1/,
      greedy: true
    },
    'class-name': [
      /\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,
      // matches variable and function return types (parameters as well).
      /\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/
    ],
    keyword:
      /\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,
    operator: /\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,
    variable: /\b[a-z_]\w*\b/
  })
  Prism.languages.insertBefore('birb', 'function', {
    metadata: {
      pattern: /<\w+>/,
      greedy: true,
      alias: 'symbol'
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_birb.js.map