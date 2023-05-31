(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_openqasm"],{

/***/ "./node_modules/refractor/lang/openqasm.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/openqasm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return openqasm; });
// @ts-nocheck
openqasm.displayName = 'openqasm'
openqasm.aliases = ['qasm']

/** @type {import('../core.js').Syntax} */
function openqasm(Prism) {
  // https://qiskit.github.io/openqasm/grammar/index.html

  Prism.languages.openqasm = {
    comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
    string: {
      pattern: /"[^"\r\n\t]*"|'[^'\r\n\t]*'/,
      greedy: true
    },
    keyword:
      /\b(?:CX|OPENQASM|U|barrier|boxas|boxto|break|const|continue|ctrl|def|defcal|defcalgrammar|delay|else|end|for|gate|gphase|if|in|include|inv|kernel|lengthof|let|measure|pow|reset|return|rotary|stretchinf|while)\b|#pragma\b/,
    'class-name':
      /\b(?:angle|bit|bool|creg|fixed|float|int|length|qreg|qubit|stretch|uint)\b/,
    function: /\b(?:cos|exp|ln|popcount|rotl|rotr|sin|sqrt|tan)\b(?=\s*\()/,
    constant: /\b(?:euler|pi|tau)\b|π|𝜏|ℇ/,
    number: {
      pattern:
        /(^|[^.\w$])(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:dt|ns|us|µs|ms|s)?/i,
      lookbehind: true
    },
    operator: /->|>>=?|<<=?|&&|\|\||\+\+|--|[!=<>&|~^+\-*/%]=?|@/,
    punctuation: /[(){}\[\];,:.]/
  }
  Prism.languages.qasm = Prism.languages.openqasm
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_openqasm.js.map