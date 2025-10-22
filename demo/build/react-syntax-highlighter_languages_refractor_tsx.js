(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_tsx"],{

/***/ "./node_modules/refractor/lang/tsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tsx.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tsx; });
/* harmony import */ var _jsx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsx.js */ "./node_modules/refractor/lang/jsx.js");
/* harmony import */ var _typescript_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typescript.js */ "./node_modules/refractor/lang/typescript.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */


tsx.displayName = 'tsx'
tsx.aliases = []

/** @param {Refractor} Prism */
function tsx(Prism) {
  Prism.register(_jsx_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_typescript_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  ;(function (Prism) {
    var typescript = Prism.util.clone(Prism.languages.typescript)
    Prism.languages.tsx = Prism.languages.extend('jsx', typescript)

    // doesn't work with TS because TS is too complex
    delete Prism.languages.tsx['parameter']
    delete Prism.languages.tsx['literal-property']

    // This will prevent collisions between TSX tags and TS generic types.
    // Idea by https://github.com/karlhorky
    // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928
    var tag = Prism.languages.tsx.tag
    tag.pattern = RegExp(
      /(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')',
      tag.pattern.flags
    )
    tag.lookbehind = true
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tsx.js.map