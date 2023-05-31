(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_chaiscript"],{

/***/ "./node_modules/refractor/lang/chaiscript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/chaiscript.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chaiscript; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
/* harmony import */ var _cpp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cpp.js */ "./node_modules/refractor/lang/cpp.js");
// @ts-nocheck


chaiscript.displayName = 'chaiscript'
chaiscript.aliases = []

/** @type {import('../core.js').Syntax} */
function chaiscript(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_cpp_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  Prism.languages.chaiscript = Prism.languages.extend('clike', {
    string: {
      pattern: /(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,
      lookbehind: true,
      greedy: true
    },
    'class-name': [
      {
        // e.g. class Rectangle { ... }
        pattern: /(\bclass\s+)\w+/,
        lookbehind: true
      },
      {
        // e.g. attr Rectangle::height, def Rectangle::area() { ... }
        pattern: /(\b(?:attr|def)\s+)\w+(?=\s*::)/,
        lookbehind: true
      }
    ],
    keyword:
      /\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,
    number: [Prism.languages.cpp.number, /\b(?:Infinity|NaN)\b/],
    operator:
      />>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/
  })
  Prism.languages.insertBefore('chaiscript', 'operator', {
    'parameter-type': {
      // e.g. def foo(int x, Vector y) {...}
      pattern: /([,(]\s*)\w+(?=\s+\w)/,
      lookbehind: true,
      alias: 'class-name'
    }
  })
  Prism.languages.insertBefore('chaiscript', 'string', {
    'string-interpolation': {
      pattern:
        /(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,
      lookbehind: true,
      greedy: true,
      inside: {
        interpolation: {
          pattern:
            /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,
          lookbehind: true,
          inside: {
            'interpolation-expression': {
              pattern: /(^\$\{)[\s\S]+(?=\}$)/,
              lookbehind: true,
              inside: Prism.languages.chaiscript
            },
            'interpolation-punctuation': {
              pattern: /^\$\{|\}$/,
              alias: 'punctuation'
            }
          }
        },
        string: /[\s\S]+/
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_chaiscript.js.map