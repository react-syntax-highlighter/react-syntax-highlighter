(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_editorconfig"],{

/***/ "./node_modules/refractor/lang/editorconfig.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/editorconfig.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = editorconfig
editorconfig.displayName = 'editorconfig'
editorconfig.aliases = []
function editorconfig(Prism) {
  Prism.languages.editorconfig = {
    // https://editorconfig-specification.readthedocs.io
    comment: /[;#].*/,
    section: {
      pattern: /(^[ \t]*)\[.+\]/m,
      lookbehind: true,
      alias: 'selector',
      inside: {
        regex: /\\\\[\[\]{},!?.*]/,
        // Escape special characters with '\\'
        operator: /[!?]|\.\.|\*{1,2}/,
        punctuation: /[\[\]{},]/
      }
    },
    key: {
      pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
      lookbehind: true,
      alias: 'attr-name'
    },
    value: {
      pattern: /=.*/,
      alias: 'attr-value',
      inside: {
        punctuation: /^=/
      }
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_editorconfig.js.map