(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_d"],{

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

/***/ "./node_modules/refractor/lang/d.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/d.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return d; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

d.displayName = 'd'
d.aliases = []

/** @param {Refractor} Prism */
function d(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.d = Prism.languages.extend('clike', {
    comment: [
      {
        // Shebang
        pattern: /^\s*#!.+/,
        greedy: true
      },
      {
        pattern: RegExp(
          /(^|[^\\])/.source +
            '(?:' +
            [
              // /+ comment +/
              // Allow one level of nesting
              /\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source,
              // // comment
              /\/\/.*/.source,
              // /* comment */
              /\/\*[\s\S]*?\*\//.source
            ].join('|') +
            ')'
        ),
        lookbehind: true,
        greedy: true
      }
    ],
    string: [
      {
        pattern: RegExp(
          [
            // r"", x""
            /\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source,
            // q"[]", q"()", q"<>", q"{}"
            /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source,
            // q"IDENT
            // ...
            // IDENT"
            /\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source,
            // q"//", q"||", etc.
            // eslint-disable-next-line regexp/strict
            /\bq"(.)[\s\S]*?\2"/.source,
            // eslint-disable-next-line regexp/strict
            /(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source
          ].join('|'),
          'm'
        ),
        greedy: true
      },
      {
        pattern: /\bq\{(?:\{[^{}]*\}|[^{}])*\}/,
        greedy: true,
        alias: 'token-string'
      }
    ],
    // In order: $, keywords and special tokens, globally defined symbols
    keyword:
      /\$|\b(?:__(?:(?:DATE|EOF|FILE|FUNCTION|LINE|MODULE|PRETTY_FUNCTION|TIMESTAMP|TIME|VENDOR|VERSION)__|gshared|parameters|traits|vector)|abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|dstring|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|ptrdiff_t|public|pure|real|ref|return|scope|shared|short|size_t|static|string|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|wstring)\b/,
    number: [
      // The lookbehind and the negative look-ahead try to prevent bad highlighting of the .. operator
      // Hexadecimal numbers must be handled separately to avoid problems with exponent "e"
      /\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i,
      {
        pattern:
          /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,
        lookbehind: true
      }
    ],
    operator:
      /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
  })
  Prism.languages.insertBefore('d', 'string', {
    // Characters
    // 'a', '\\', '\n', '\xFF', '\377', '\uFFFF', '\U0010FFFF', '\quot'
    char: /'(?:\\(?:\W|\w+)|[^\\])'/
  })
  Prism.languages.insertBefore('d', 'keyword', {
    property: /\B@\w*/
  })
  Prism.languages.insertBefore('d', 'function', {
    register: {
      // Iasm registers
      pattern:
        /\b(?:[ABCD][LHX]|E?(?:BP|DI|SI|SP)|[BS]PL|[ECSDGF]S|CR[0234]|[DS]IL|DR[012367]|E[ABCD]X|X?MM[0-7]|R(?:1[0-5]|[89])[BWD]?|R[ABCD]X|R[BS]P|R[DS]I|TR[3-7]|XMM(?:1[0-5]|[89])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
      alias: 'variable'
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_d.js.map