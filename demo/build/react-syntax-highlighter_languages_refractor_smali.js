(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_smali"],{

/***/ "./node_modules/refractor/lang/smali.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/smali.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return smali; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
smali.displayName = 'smali'
smali.aliases = []

/** @param {Refractor} Prism */
function smali(Prism) {
  // Test files for the parser itself:
  // https://github.com/JesusFreke/smali/tree/master/smali/src/test/resources/LexerTest

  Prism.languages.smali = {
    comment: /#.*/,
    string: {
      pattern: /"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\(?:.|u[\da-fA-F]{4}))'/,
      greedy: true
    },
    'class-name': {
      pattern:
        /(^|[^L])L(?:(?:\w+|`[^`\r\n]*`)\/)*(?:[\w$]+|`[^`\r\n]*`)(?=\s*;)/,
      lookbehind: true,
      inside: {
        'class-name': {
          pattern: /(^L|\/)(?:[\w$]+|`[^`\r\n]*`)$/,
          lookbehind: true
        },
        namespace: {
          pattern: /^(L)(?:(?:\w+|`[^`\r\n]*`)\/)+/,
          lookbehind: true,
          inside: {
            punctuation: /\//
          }
        },
        builtin: /^L/
      }
    },
    builtin: [
      {
        // Reference: https://github.com/JesusFreke/smali/wiki/TypesMethodsAndFields#types
        pattern: /([();\[])[BCDFIJSVZ]+/,
        lookbehind: true
      },
      {
        // e.g. .field mWifiOnUid:I
        pattern: /([\w$>]:)[BCDFIJSVZ]/,
        lookbehind: true
      }
    ],
    keyword: [
      {
        pattern: /(\.end\s+)[\w-]+/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\w.-])\.(?!\d)[\w-]+/,
        lookbehind: true
      },
      {
        pattern:
          /(^|[^\w.-])(?:abstract|annotation|bridge|constructor|enum|final|interface|private|protected|public|runtime|static|synthetic|system|transient)(?![\w.-])/,
        lookbehind: true
      }
    ],
    function: {
      pattern: /(^|[^\w.-])(?:\w+|<[\w$-]+>)(?=\()/,
      lookbehind: true
    },
    field: {
      pattern: /[\w$]+(?=:)/,
      alias: 'variable'
    },
    register: {
      pattern: /(^|[^\w.-])[vp]\d(?![\w.-])/,
      lookbehind: true,
      alias: 'variable'
    },
    boolean: {
      pattern: /(^|[^\w.-])(?:false|true)(?![\w.-])/,
      lookbehind: true
    },
    number: {
      pattern:
        /(^|[^/\w.-])-?(?:NAN|INFINITY|0x(?:[\dA-F]+(?:\.[\dA-F]*)?|\.[\dA-F]+)(?:p[+-]?[\dA-F]+)?|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)[dflst]?(?![\w.-])/i,
      lookbehind: true
    },
    label: {
      pattern: /(:)\w+/,
      lookbehind: true,
      alias: 'property'
    },
    operator: /->|\.\.|[\[=]/,
    punctuation: /[{}(),;:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_smali.js.map