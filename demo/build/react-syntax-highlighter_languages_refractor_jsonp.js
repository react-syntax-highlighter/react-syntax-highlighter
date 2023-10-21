(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_jsonp"],{

/***/ "./node_modules/refractor/lang/jsonp.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/jsonp.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jsonp; });
/* harmony import */ var _json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json.js */ "./node_modules/refractor/lang/json.js");
// @ts-nocheck

jsonp.displayName = 'jsonp'
jsonp.aliases = []

/** @type {import('../core.js').Syntax} */
function jsonp(Prism) {
  Prism.register(_json_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.jsonp = Prism.languages.extend('json', {
    punctuation: /[{}[\]();,.]/
  })
  Prism.languages.insertBefore('jsonp', 'punctuation', {
    function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsonp.js.map