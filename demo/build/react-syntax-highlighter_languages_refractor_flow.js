(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_flow"],{

/***/ "./node_modules/refractor/lang/flow.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/flow.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flow; });
/* harmony import */ var _javascript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript.js */ "./node_modules/refractor/lang/javascript.js");
// @ts-nocheck

flow.displayName = 'flow'
flow.aliases = []

/** @type {import('../core.js').Syntax} */
function flow(Prism) {
  Prism.register(_javascript_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    Prism.languages.flow = Prism.languages.extend('javascript', {})
    Prism.languages.insertBefore('flow', 'keyword', {
      type: [
        {
          pattern:
            /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
          alias: 'class-name'
        }
      ]
    })
    Prism.languages.flow['function-variable'].pattern =
      /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i
    delete Prism.languages.flow['parameter']
    Prism.languages.insertBefore('flow', 'operator', {
      'flow-punctuation': {
        pattern: /\{\||\|\}/,
        alias: 'punctuation'
      }
    })
    if (!Array.isArray(Prism.languages.flow.keyword)) {
      Prism.languages.flow.keyword = [Prism.languages.flow.keyword]
    }
    Prism.languages.flow.keyword.unshift(
      {
        pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
        lookbehind: true
      },
      {
        pattern:
          /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
        lookbehind: true
      }
    )
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_flow.js.map