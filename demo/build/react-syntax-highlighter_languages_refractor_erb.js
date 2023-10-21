(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_erb"],{

/***/ "./node_modules/refractor/lang/erb.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/erb.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return erb; });
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
/* harmony import */ var _ruby_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruby.js */ "./node_modules/refractor/lang/ruby.js");
// @ts-nocheck


erb.displayName = 'erb'
erb.aliases = []

/** @type {import('../core.js').Syntax} */
function erb(Prism) {
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_ruby_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  ;(function (Prism) {
    Prism.languages.erb = {
      delimiter: {
        pattern: /^(\s*)<%=?|%>(?=\s*$)/,
        lookbehind: true,
        alias: 'punctuation'
      },
      ruby: {
        pattern: /\s*\S[\s\S]*/,
        alias: 'language-ruby',
        inside: Prism.languages.ruby
      }
    }
    Prism.hooks.add('before-tokenize', function (env) {
      var erbPattern =
        /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'erb',
        erbPattern
      )
    })
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'erb')
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_erb.js.map