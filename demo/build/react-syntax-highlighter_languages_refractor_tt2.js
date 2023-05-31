(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_tt2"],{

/***/ "./node_modules/refractor/lang/tt2.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tt2.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tt2; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
// @ts-nocheck


tt2.displayName = 'tt2'
tt2.aliases = []

/** @type {import('../core.js').Syntax} */
function tt2(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  ;(function (Prism) {
    Prism.languages.tt2 = Prism.languages.extend('clike', {
      comment: /#.*|\[%#[\s\S]*?%\]/,
      keyword:
        /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,
      punctuation: /[[\]{},()]/
    })
    Prism.languages.insertBefore('tt2', 'number', {
      operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,
      variable: {
        pattern: /\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i
      }
    })
    Prism.languages.insertBefore('tt2', 'keyword', {
      delimiter: {
        pattern: /^(?:\[%|%%)-?|-?%\]$/,
        alias: 'punctuation'
      }
    })
    Prism.languages.insertBefore('tt2', 'string', {
      'single-quoted-string': {
        pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
        greedy: true,
        alias: 'string'
      },
      'double-quoted-string': {
        pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
        greedy: true,
        alias: 'string',
        inside: {
          variable: {
            pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i
          }
        }
      }
    })

    // The different types of TT2 strings "replace" the C-like standard string
    delete Prism.languages.tt2.string
    Prism.hooks.add('before-tokenize', function (env) {
      var tt2Pattern = /\[%[\s\S]+?%\]/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'tt2',
        tt2Pattern
      )
    })
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'tt2')
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tt2.js.map