(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_gettext"],{

/***/ "./node_modules/refractor/lang/gettext.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/gettext.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gettext; });
// @ts-nocheck
gettext.displayName = 'gettext'
gettext.aliases = ['po']

/** @type {import('../core.js').Syntax} */
function gettext(Prism) {
  Prism.languages.gettext = {
    comment: [
      {
        pattern: /# .*/,
        greedy: true,
        alias: 'translator-comment'
      },
      {
        pattern: /#\..*/,
        greedy: true,
        alias: 'extracted-comment'
      },
      {
        pattern: /#:.*/,
        greedy: true,
        alias: 'reference-comment'
      },
      {
        pattern: /#,.*/,
        greedy: true,
        alias: 'flag-comment'
      },
      {
        pattern: /#\|.*/,
        greedy: true,
        alias: 'previously-untranslated-comment'
      },
      {
        pattern: /#.*/,
        greedy: true
      }
    ],
    string: {
      pattern: /(^|[^\\])"(?:[^"\\]|\\.)*"/,
      lookbehind: true,
      greedy: true
    },
    keyword: /^msg(?:ctxt|id|id_plural|str)\b/m,
    number: /\b\d+\b/,
    punctuation: /[\[\]]/
  }
  Prism.languages.po = Prism.languages.gettext
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_gettext.js.map