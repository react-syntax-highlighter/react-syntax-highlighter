(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_ejs"],{

/***/ "./node_modules/refractor/lang/ejs.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ejs.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ejs; });
/* harmony import */ var _javascript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript.js */ "./node_modules/refractor/lang/javascript.js");
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
// @ts-nocheck


ejs.displayName = 'ejs'
ejs.aliases = ['eta']

/** @type {import('../core.js').Syntax} */
function ejs(Prism) {
  Prism.register(_javascript_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  ;(function (Prism) {
    Prism.languages.ejs = {
      delimiter: {
        pattern: /^<%[-_=]?|[-_]?%>$/,
        alias: 'punctuation'
      },
      comment: /^#[\s\S]*/,
      'language-javascript': {
        pattern: /[\s\S]+/,
        inside: Prism.languages.javascript
      }
    }
    Prism.hooks.add('before-tokenize', function (env) {
      var ejsPattern = /<%(?!%)[\s\S]+?%>/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'ejs',
        ejsPattern
      )
    })
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'ejs')
    })
    Prism.languages.eta = Prism.languages.ejs
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ejs.js.map