(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_handlebars"],{

/***/ "./node_modules/refractor/lang/handlebars.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/handlebars.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handlebars; });
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
// @ts-nocheck

handlebars.displayName = 'handlebars'
handlebars.aliases = ['hbs', 'mustache']

/** @type {import('../core.js').Syntax} */
function handlebars(Prism) {
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    Prism.languages.handlebars = {
      comment: /\{\{![\s\S]*?\}\}/,
      delimiter: {
        pattern: /^\{\{\{?|\}\}\}?$/,
        alias: 'punctuation'
      },
      string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
      boolean: /\b(?:false|true)\b/,
      block: {
        pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
        lookbehind: true,
        alias: 'keyword'
      },
      brackets: {
        pattern: /\[[^\]]+\]/,
        inside: {
          punctuation: /\[|\]/,
          variable: /[\s\S]+/
        }
      },
      punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
      variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
    }
    Prism.hooks.add('before-tokenize', function (env) {
      var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'handlebars',
        handlebarsPattern
      )
    })
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(
        env,
        'handlebars'
      )
    })
    Prism.languages.hbs = Prism.languages.handlebars
    Prism.languages.mustache = Prism.languages.handlebars
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.js.map