(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_firestoreSecurityRules"],{

/***/ "./node_modules/refractor/lang/firestore-security-rules.js":
/*!*****************************************************************!*\
  !*** ./node_modules/refractor/lang/firestore-security-rules.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return firestoreSecurityRules; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

firestoreSecurityRules.displayName = 'firestore-security-rules'
firestoreSecurityRules.aliases = []

/** @type {import('../core.js').Syntax} */
function firestoreSecurityRules(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages['firestore-security-rules'] = Prism.languages.extend(
    'clike',
    {
      comment: /\/\/.*/,
      keyword:
        /\b(?:allow|function|if|match|null|return|rules_version|service)\b/,
      operator: /&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/
    }
  )
  delete Prism.languages['firestore-security-rules']['class-name']
  Prism.languages.insertBefore('firestore-security-rules', 'keyword', {
    path: {
      pattern:
        /(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,
      lookbehind: true,
      greedy: true,
      inside: {
        variable: {
          pattern: /\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,
          inside: {
            operator: /=/,
            keyword: /\*\*/,
            punctuation: /[.$(){}]/
          }
        },
        punctuation: /\//
      }
    },
    method: {
      // to make the pattern shorter, the actual method names are omitted
      pattern: /(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,
      lookbehind: true,
      alias: 'builtin',
      inside: {
        punctuation: /,/
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_firestoreSecurityRules.js.map