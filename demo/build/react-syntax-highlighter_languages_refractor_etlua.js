(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_etlua"],{

/***/ "./node_modules/refractor/lang/etlua.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/etlua.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return etlua; });
/* harmony import */ var _lua_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lua.js */ "./node_modules/refractor/lang/lua.js");
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
// @ts-nocheck


etlua.displayName = 'etlua'
etlua.aliases = []

/** @type {import('../core.js').Syntax} */
function etlua(Prism) {
  Prism.register(_lua_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  ;(function (Prism) {
    Prism.languages.etlua = {
      delimiter: {
        pattern: /^<%[-=]?|-?%>$/,
        alias: 'punctuation'
      },
      'language-lua': {
        pattern: /[\s\S]+/,
        inside: Prism.languages.lua
      }
    }
    Prism.hooks.add('before-tokenize', function (env) {
      var pattern = /<%[\s\S]+?%>/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'etlua',
        pattern
      )
    })
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'etlua')
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_etlua.js.map