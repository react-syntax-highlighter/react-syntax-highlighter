(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_dart"],{

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

/***/ "./node_modules/refractor/lang/dart.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/dart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dart; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

dart.displayName = 'dart'
dart.aliases = []

/** @param {Refractor} Prism */
function dart(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var keywords = [
      /\b(?:async|sync|yield)\*/,
      /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/
    ]

    // Handles named imports, such as http.Client
    var packagePrefix = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/
      .source

    // based on the dart naming conventions
    var className = {
      pattern: RegExp(packagePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
      lookbehind: true,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            punctuation: /\./
          }
        }
      }
    }
    Prism.languages.dart = Prism.languages.extend('clike', {
      'class-name': [
        className,
        {
          // variables and parameters
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(
            packagePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source
          ),
          lookbehind: true,
          inside: className.inside
        }
      ],
      keyword: keywords,
      operator:
        /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
    })
    Prism.languages.insertBefore('dart', 'string', {
      'string-literal': {
        pattern:
          /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,
        greedy: true,
        inside: {
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
            lookbehind: true,
            inside: {
              punctuation: /^\$\{?|\}$/,
              expression: {
                pattern: /[\s\S]+/,
                inside: Prism.languages.dart
              }
            }
          },
          string: /[\s\S]+/
        }
      },
      string: undefined
    })
    Prism.languages.insertBefore('dart', 'class-name', {
      metadata: {
        pattern: /@\w+/,
        alias: 'function'
      }
    })
    Prism.languages.insertBefore('dart', 'class-name', {
      generics: {
        pattern:
          /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
        inside: {
          'class-name': className,
          keyword: keywords,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      }
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_dart.js.map