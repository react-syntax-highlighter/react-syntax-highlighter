(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_twig"],{

/***/ "./node_modules/refractor/lang/twig.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/twig.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return twig; });
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
// @ts-nocheck

twig.displayName = 'twig'
twig.aliases = []

/** @type {import('../core.js').Syntax} */
function twig(Prism) {
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.twig = {
    comment: /^\{#[\s\S]*?#\}$/,
    'tag-name': {
      pattern: /(^\{%-?\s*)\w+/,
      lookbehind: true,
      alias: 'keyword'
    },
    delimiter: {
      pattern: /^\{[{%]-?|-?[%}]\}$/,
      alias: 'punctuation'
    },
    string: {
      pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
      inside: {
        punctuation: /^['"]|['"]$/
      }
    },
    keyword: /\b(?:even|if|odd)\b/,
    boolean: /\b(?:false|null|true)\b/,
    number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
    operator: [
      {
        pattern:
          /(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
        lookbehind: true
      },
      /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
    ],
    punctuation: /[()\[\]{}:.,]/
  }
  Prism.hooks.add('before-tokenize', function (env) {
    if (env.language !== 'twig') {
      return
    }
    var pattern = /\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g
    Prism.languages['markup-templating'].buildPlaceholders(env, 'twig', pattern)
  })
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'twig')
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_twig.js.map