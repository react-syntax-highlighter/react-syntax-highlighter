(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_squirrel"],{

/***/ "./node_modules/refractor/lang/squirrel.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/squirrel.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return squirrel; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

squirrel.displayName = 'squirrel'
squirrel.aliases = []

/** @type {import('../core.js').Syntax} */
function squirrel(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.squirrel = Prism.languages.extend('clike', {
    comment: [
      Prism.languages.clike['comment'][0],
      {
        pattern: /(^|[^\\:])(?:\/\/|#).*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(^|[^\\"'@])(?:@"(?:[^"]|"")*"(?!")|"(?:[^\\\r\n"]|\\.)*")/,
      lookbehind: true,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:class|enum|extends|instanceof)\s+)\w+(?:\.\w+)*/,
      lookbehind: true,
      inside: {
        punctuation: /\./
      }
    },
    keyword:
      /\b(?:__FILE__|__LINE__|base|break|case|catch|class|clone|const|constructor|continue|default|delete|else|enum|extends|for|foreach|function|if|in|instanceof|local|null|resume|return|static|switch|this|throw|try|typeof|while|yield)\b/,
    number: /\b(?:0x[0-9a-fA-F]+|\d+(?:\.(?:\d+|[eE][+-]?\d+))?)\b/,
    operator: /\+\+|--|<=>|<[-<]|>>>?|&&?|\|\|?|[-+*/%!=<>]=?|[~^]|::?/,
    punctuation: /[(){}\[\],;.]/
  })
  Prism.languages.insertBefore('squirrel', 'string', {
    char: {
      pattern: /(^|[^\\"'])'(?:[^\\']|\\(?:[xuU][0-9a-fA-F]{0,8}|[\s\S]))'/,
      lookbehind: true,
      greedy: true
    }
  })
  Prism.languages.insertBefore('squirrel', 'operator', {
    'attribute-punctuation': {
      pattern: /<\/|\/>/,
      alias: 'important'
    },
    lambda: {
      pattern: /@(?=\()/,
      alias: 'operator'
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_squirrel.js.map