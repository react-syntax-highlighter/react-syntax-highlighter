(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_phpExtras"],{

/***/ "./node_modules/refractor/lang/php-extras.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/php-extras.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return phpExtras; });
/* harmony import */ var _php_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./php.js */ "./node_modules/refractor/lang/php.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

phpExtras.displayName = 'php-extras'
phpExtras.aliases = []

/** @param {Refractor} Prism */
function phpExtras(Prism) {
  Prism.register(_php_js__WEBPACK_IMPORTED_MODULE_0__["default"])
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