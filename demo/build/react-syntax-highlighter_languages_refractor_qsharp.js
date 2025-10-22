(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_qsharp"],{

/***/ "./node_modules/refractor/lang/clike.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clike; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
clike.displayName = 'clike'
clike.aliases = []

/** @param {Refractor} Prism */
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/qsharp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/qsharp.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return qsharp; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

qsharp.displayName = 'qsharp'
qsharp.aliases = ['qs']

/** @param {Refractor} Prism */
function qsharp(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    /**
     * Replaces all placeholders "<<n>>" of given pattern with the n-th replacement (zero based).
     *
     * Note: This is a simple text based replacement. Be careful when using backreferences!
     *
     * @param {string} pattern the given pattern.
     * @param {string[]} replacements a list of replacement which can be inserted into the given pattern.
     * @returns {string} the pattern with all placeholders replaced with their corresponding replacements.
     * @example replace(/a<<0>>a/.source, [/b+/.source]) === /a(?:b+)a/.source
     */
    function replace(pattern, replacements) {
      return pattern.replace(/<<(\d+)>>/g, function (m, index) {
        return '(?:' + replacements[+index] + ')'
      })
    }
    /**
     * @param {string} pattern
     * @param {string[]} replacements
     * @param {string} [flags]
     * @returns {RegExp}
     */
    function re(pattern, replacements, flags) {
      return RegExp(replace(pattern, replacements), flags || '')
    }

    /**
     * Creates a nested pattern where all occurrences of the string `<<self>>` are replaced with the pattern itself.
     *
     * @param {string} pattern
     * @param {number} depthLog2
     * @returns {string}
     */
    function nested(pattern, depthLog2) {
      for (var i = 0; i < depthLog2; i++) {
        pattern = pattern.replace(/<<self>>/g, function () {
          return '(?:' + pattern + ')'
        })
      }
      return pattern.replace(/<<self>>/g, '[^\\s\\S]')
    }

    // https://docs.microsoft.com/en-us/azure/quantum/user-guide/language/typesystem/
    // https://github.com/microsoft/qsharp-language/tree/main/Specifications/Language/5_Grammar
    var keywordKinds = {
      // keywords which represent a return or variable type
      type: 'Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero',
      // all other keywords
      other:
        'Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within'
    }
    // keywords
    function keywordsToPattern(words) {
      return '\\b(?:' + words.trim().replace(/ /g, '|') + ')\\b'
    }
    var keywords = RegExp(
      keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.other)
    )

    // types
    var identifier = /\b[A-Za-z_]\w*\b/.source
    var qualifiedName = replace(/<<0>>(?:\s*\.\s*<<0>>)*/.source, [identifier])
    var typeInside = {
      keyword: keywords,
      punctuation: /[<>()?,.:[\]]/
    }

    // strings
    var regularString = /"(?:\\.|[^\\"])*"/.source
    Prism.languages.qsharp = Prism.languages.extend('clike', {
      comment: /\/\/.*/,
      string: [
        {
          pattern: re(/(^|[^$\\])<<0>>/.source, [regularString]),
          lookbehind: true,
          greedy: true
        }
      ],
      'class-name': [
        {
          // open Microsoft.Quantum.Canon;
          // open Microsoft.Quantum.Canon as CN;
          pattern: re(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source, [
            qualifiedName
          ]),
          lookbehind: true,
          inside: typeInside
        },
        {
          // namespace Quantum.App1;
          pattern: re(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source, [qualifiedName]),
          lookbehind: true,
          inside: typeInside
        }
      ],
      keyword: keywords,
      number:
        /(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,
      operator:
        /\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,
      punctuation: /::|[{}[\];(),.:]/
    })
    Prism.languages.insertBefore('qsharp', 'number', {
      range: {
        pattern: /\.\./,
        alias: 'operator'
      }
    })

    // single line
    var interpolationExpr = nested(
      replace(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source, [regularString]),
      2
    )
    Prism.languages.insertBefore('qsharp', 'string', {
      'interpolation-string': {
        pattern: re(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source, [interpolationExpr]),
        greedy: true,
        inside: {
          interpolation: {
            pattern: re(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source, [
              interpolationExpr
            ]),
            lookbehind: true,
            inside: {
              punctuation: /^\{|\}$/,
              expression: {
                pattern: /[\s\S]+/,
                alias: 'language-qsharp',
                inside: Prism.languages.qsharp
              }
            }
          },
          string: /[\s\S]+/
        }
      }
    })
  })(Prism)
  Prism.languages.qs = Prism.languages.qsharp
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_qsharp.js.map