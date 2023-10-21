(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_linkerScript"],{

/***/ "./node_modules/refractor/lang/linker-script.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/linker-script.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linkerScript; });
// @ts-nocheck
linkerScript.displayName = 'linker-script'
linkerScript.aliases = ['ld']

/** @type {import('../core.js').Syntax} */
function linkerScript(Prism) {
  Prism.languages['linker-script'] = {
    comment: {
      pattern: /(^|\s)\/\*[\s\S]*?(?:$|\*\/)/,
      lookbehind: true,
      greedy: true
    },
    identifier: {
      pattern: /"[^"\r\n]*"/,
      greedy: true
    },
    'location-counter': {
      pattern: /\B\.\B/,
      alias: 'important'
    },
    section: {
      pattern: /(^|[^\w*])\.\w+\b/,
      lookbehind: true,
      alias: 'keyword'
    },
    function: /\b[A-Z][A-Z_]*(?=\s*\()/,
    number: /\b(?:0[xX][a-fA-F0-9]+|\d+)[KM]?\b/,
    operator: />>=?|<<=?|->|\+\+|--|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?/,
    punctuation: /[(){},;]/
  }
  Prism.languages['ld'] = Prism.languages['linker-script']
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_linkerScript.js.map