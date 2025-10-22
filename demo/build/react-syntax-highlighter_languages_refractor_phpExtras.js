(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_phpExtras"],{

/***/ "./node_modules/refractor/lang/php-extras.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/php-extras.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorPhp = __webpack_require__(/*! ./php.js */ "./node_modules/refractor/lang/php.js")
module.exports = phpExtras
phpExtras.displayName = 'phpExtras'
phpExtras.aliases = []
function phpExtras(Prism) {
  Prism.register(refractorPhp)
  Prism.languages.insertBefore('php', 'variable', {
    this: {
      pattern: /\$this\b/,
      alias: 'keyword'
    },
    global:
      /\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,
    scope: {
      pattern: /\b[\w\\]+::/,
      inside: {
        keyword: /\b(?:parent|self|static)\b/,
        punctuation: /::|\\/
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_phpExtras.js.map