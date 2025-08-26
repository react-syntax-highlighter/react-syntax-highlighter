(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_bicep"],{

/***/ "./node_modules/refractor/lang/bicep.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/bicep.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bicep; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
bicep.displayName = 'bicep'
bicep.aliases = []

/** @param {Refractor} Prism */
function bicep(Prism) {
  // based loosely upon: https://github.com/Azure/bicep/blob/main/src/textmate/bicep.tmlanguage
  Prism.languages.bicep = {
    comment: [
      {
        // multiline comments eg /* ASDF */
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        // singleline comments eg // ASDF
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    property: [
      {
        pattern: /([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i,
        lookbehind: true
      },
      {
        pattern: /([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: [
      {
        pattern: /'''[^'][\s\S]*?'''/,
        greedy: true
      },
      {
        pattern: /(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/,
        lookbehind: true,
        greedy: true
      }
    ],
    'interpolated-string': {
      pattern: /(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/,
      lookbehind: true,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /\$\{[^{}\r\n]*\}/,
          inside: {
            expression: {
              pattern: /(^\$\{)[\s\S]+(?=\}$)/,
              lookbehind: true
            },
            punctuation: /^\$\{|\}$/
          }
        },
        string: /[\s\S]+/
      }
    },
    datatype: {
      pattern: /(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/,
      lookbehind: true,
      alias: 'class-name'
    },
    boolean: /\b(?:false|true)\b/,
    // https://github.com/Azure/bicep/blob/114a3251b4e6e30082a58729f19a8cc4e374ffa6/src/textmate/bicep.tmlanguage#L184
    keyword:
      /\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/,
    decorator: /@\w+\b/,
    function: /\b[a-z_]\w*(?=[ \t]*\()/i,
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
    punctuation: /[{}[\];(),.:]/
  }
  Prism.languages.bicep['interpolated-string'].inside['interpolation'].inside[
    'expression'
  ].inside = Prism.languages.bicep
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_bicep.js.map