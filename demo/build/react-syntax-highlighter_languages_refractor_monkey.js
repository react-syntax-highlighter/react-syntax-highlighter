(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_monkey"],{

/***/ "./node_modules/refractor/lang/monkey.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/monkey.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return monkey; });
// @ts-nocheck
monkey.displayName = 'monkey'
monkey.aliases = []

/** @type {import('../core.js').Syntax} */
function monkey(Prism) {
  Prism.languages.monkey = {
    comment: {
      pattern: /^#Rem\s[\s\S]*?^#End|'.+/im,
      greedy: true
    },
    string: {
      pattern: /"[^"\r\n]*"/,
      greedy: true
    },
    preprocessor: {
      pattern: /(^[ \t]*)#.+/m,
      lookbehind: true,
      greedy: true,
      alias: 'property'
    },
    function: /\b\w+(?=\()/,
    'type-char': {
      pattern: /\b[?%#$]/,
      alias: 'class-name'
    },
    number: {
      pattern:
        /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
      lookbehind: true
    },
    keyword:
      /\b(?:Abstract|Array|Bool|Case|Catch|Class|Const|Continue|Default|Eachin|Else|ElseIf|End|EndIf|Exit|Extends|Extern|False|Field|Final|Float|For|Forever|Function|Global|If|Implements|Import|Inline|Int|Interface|Local|Method|Module|New|Next|Null|Object|Private|Property|Public|Repeat|Return|Select|Self|Step|Strict|String|Super|Then|Throw|To|True|Try|Until|Void|Wend|While)\b/i,
    operator:
      /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
    punctuation: /[.,:;()\[\]]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_monkey.js.map