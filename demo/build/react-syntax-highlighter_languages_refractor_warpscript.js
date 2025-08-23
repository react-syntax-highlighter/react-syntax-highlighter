(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_warpscript"],{

/***/ "./node_modules/refractor/lang/warpscript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/warpscript.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warpscript; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
warpscript.displayName = 'warpscript'
warpscript.aliases = []

/** @param {Refractor} Prism */
function warpscript(Prism) {
  Prism.languages.warpscript = {
    comment: /#.*|\/\/.*|\/\*[\s\S]*?\*\//,
    string: {
      pattern:
        /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,
      greedy: true
    },
    variable: /\$\S+/,
    macro: {
      pattern: /@\S+/,
      alias: 'property'
    },
    // WarpScript doesn't have any keywords, these are all functions under the control category
    // https://www.warp10.io/tags/control
    keyword:
      /\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,
    number:
      /[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,
    boolean: /\b(?:F|T|false|true)\b/,
    punctuation: /<%|%>|[{}[\]()]/,
    // Some operators from the "operators" category
    // https://www.warp10.io/tags/operators
    operator:
      /==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_warpscript.js.map