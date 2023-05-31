(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_turtle"],{

/***/ "./node_modules/refractor/lang/turtle.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/turtle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return turtle; });
// @ts-nocheck
turtle.displayName = 'turtle'
turtle.aliases = ['trig']

/** @type {import('../core.js').Syntax} */
function turtle(Prism) {
  Prism.languages.turtle = {
    comment: {
      pattern: /#.*/,
      greedy: true
    },
    'multiline-string': {
      pattern:
        /"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,
      greedy: true,
      alias: 'string',
      inside: {
        comment: /#.*/
      }
    },
    string: {
      pattern: /"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/,
      greedy: true
    },
    url: {
      pattern:
        /<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,
      greedy: true,
      inside: {
        punctuation: /[<>]/
      }
    },
    function: {
      pattern:
        /(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,
      inside: {
        'local-name': {
          pattern: /([^:]*:)[\s\S]+/,
          lookbehind: true
        },
        prefix: {
          pattern: /[\s\S]+/,
          inside: {
            punctuation: /:/
          }
        }
      }
    },
    number: /[+-]?\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
    punctuation: /[{}.,;()[\]]|\^\^/,
    boolean: /\b(?:false|true)\b/,
    keyword: [/(?:\ba|@prefix|@base)\b|=/, /\b(?:base|graph|prefix)\b/i],
    tag: {
      pattern: /@[a-z]+(?:-[a-z\d]+)*/i,
      inside: {
        punctuation: /@/
      }
    }
  }
  Prism.languages.trig = Prism.languages['turtle']
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_turtle.js.map