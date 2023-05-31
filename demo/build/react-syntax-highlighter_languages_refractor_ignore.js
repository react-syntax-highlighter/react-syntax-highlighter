(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_ignore"],{

/***/ "./node_modules/refractor/lang/ignore.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/ignore.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ignore; });
// @ts-nocheck
ignore.displayName = 'ignore'
ignore.aliases = ['gitignore', 'hgignore', 'npmignore']

/** @type {import('../core.js').Syntax} */
function ignore(Prism) {
  ;(function (Prism) {
    Prism.languages.ignore = {
      // https://git-scm.com/docs/gitignore
      comment: /^#.*/m,
      entry: {
        pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
        alias: 'string',
        inside: {
          operator: /^!|\*\*?|\?/,
          regex: {
            pattern: /(^|[^\\])\[[^\[\]]*\]/,
            lookbehind: true
          },
          punctuation: /\//
        }
      }
    }
    Prism.languages.gitignore = Prism.languages.ignore
    Prism.languages.hgignore = Prism.languages.ignore
    Prism.languages.npmignore = Prism.languages.ignore
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ignore.js.map