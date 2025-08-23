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
/**
 * @import {Refractor} from '../lib/core.js'
 */


etlua.displayName = 'etlua'
etlua.aliases = []

/** @param {Refractor} Prism */
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


/***/ }),

/***/ "./node_modules/refractor/lang/lua.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/lua.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lua; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
lua.displayName = 'lua'
lua.aliases = []

/** @param {Refractor} Prism */
function lua(Prism) {
  Prism.languages.lua = {
    comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
    // \z may be used to skip the following space
    string: {
      pattern:
        /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
      greedy: true
    },
    number:
      /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
    keyword:
      /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
    function: /(?!\d)\w+(?=\s*(?:[({]))/,
    operator: [
      /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
      {
        // Match ".." but don't break "..."
        pattern: /(^|[^.])\.\.(?!\.)/,
        lookbehind: true
      }
    ],
    punctuation: /[\[\](){},;]|\.+|:+/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_etlua.js.map