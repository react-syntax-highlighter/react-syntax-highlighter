(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_matlab"],{

/***/ "./node_modules/refractor/lang/matlab.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/matlab.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return matlab; });
// @ts-nocheck
matlab.displayName = 'matlab'
matlab.aliases = []

/** @type {import('../core.js').Syntax} */
function matlab(Prism) {
  Prism.languages.matlab = {
    comment: [/%\{[\s\S]*?\}%/, /%.+/],
    string: {
      pattern: /\B'(?:''|[^'\r\n])*'/,
      greedy: true
    },
    // FIXME We could handle imaginary numbers as a whole
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
    keyword:
      /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
    function: /\b(?!\d)\w+(?=\s*\()/,
    operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
    punctuation: /\.{3}|[.,;\[\](){}!]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_matlab.js.map