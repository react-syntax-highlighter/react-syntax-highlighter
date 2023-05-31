(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_bbcode"],{

/***/ "./node_modules/refractor/lang/bbcode.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/bbcode.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bbcode; });
// @ts-nocheck
bbcode.displayName = 'bbcode'
bbcode.aliases = ['shortcode']

/** @type {import('../core.js').Syntax} */
function bbcode(Prism) {
  Prism.languages.bbcode = {
    tag: {
      pattern:
        /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
      inside: {
        tag: {
          pattern: /^\[\/?[^\s=\]]+/,
          inside: {
            punctuation: /^\[\/?/
          }
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,
          inside: {
            punctuation: [
              /^=/,
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        punctuation: /\]/,
        'attr-name': /[^\s=\]]+/
      }
    }
  }
  Prism.languages.shortcode = Prism.languages.bbcode
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_bbcode.js.map