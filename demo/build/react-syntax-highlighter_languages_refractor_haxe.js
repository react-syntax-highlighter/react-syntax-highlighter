(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_haxe"],{

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

/***/ "./node_modules/refractor/lang/haxe.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/haxe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return haxe; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

haxe.displayName = 'haxe'
haxe.aliases = []

/** @param {Refractor} Prism */
function haxe(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.haxe = Prism.languages.extend('clike', {
    string: {
      // Strings can be multi-line
      pattern: /"(?:[^"\\]|\\[\s\S])*"/,
      greedy: true
    },
    'class-name': [
      {
        pattern:
          /(\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\s+)[A-Z_]\w*/,
        lookbehind: true
      },
      // based on naming convention
      /\b[A-Z]\w*/
    ],
    // The final look-ahead prevents highlighting of keywords if expressions such as "haxe.macro.Expr"
    keyword:
      /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\.)\b/,
    function: {
      pattern: /\b[a-z_]\w*(?=\s*(?:<[^<>]*>\s*)?\()/i,
      greedy: true
    },
    operator: /\.{3}|\+\+|--|&&|\|\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/
  })
  Prism.languages.insertBefore('haxe', 'string', {
    'string-interpolation': {
      pattern: /'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /(^|[^\\])\$(?:\w+|\{[^{}]+\})/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\$\{?|\}$/,
              alias: 'punctuation'
            },
            expression: {
              pattern: /[\s\S]+/,
              inside: Prism.languages.haxe
            }
          }
        },
        string: /[\s\S]+/
      }
    }
  })
  Prism.languages.insertBefore('haxe', 'class-name', {
    regex: {
      pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[a-z]*/,
      greedy: true,
      inside: {
        'regex-flags': /\b[a-z]+$/,
        'regex-source': {
          pattern: /^(~\/)[\s\S]+(?=\/$)/,
          lookbehind: true,
          alias: 'language-regex',
          inside: Prism.languages.regex
        },
        'regex-delimiter': /^~\/|\/$/
      }
    }
  })
  Prism.languages.insertBefore('haxe', 'keyword', {
    preprocessor: {
      pattern: /#(?:else|elseif|end|if)\b.*/,
      alias: 'property'
    },
    metadata: {
      pattern: /@:?[\w.]+/,
      alias: 'symbol'
    },
    reification: {
      pattern: /\$(?:\w+|(?=\{))/,
      alias: 'important'
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_haxe.js.map