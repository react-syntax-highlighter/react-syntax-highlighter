(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_stata"],{

/***/ "./node_modules/refractor/lang/mata.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/mata.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mata; });
// @ts-nocheck
mata.displayName = 'mata'
mata.aliases = []

/** @type {import('../core.js').Syntax} */
function mata(Prism) {
  // https://www.stata.com/manuals/m.pdf

  ;(function (Prism) {
    var orgType = /\b(?:(?:col|row)?vector|matrix|scalar)\b/.source
    var type =
      /\bvoid\b|<org>|\b(?:complex|numeric|pointer(?:\s*\([^()]*\))?|real|string|(?:class|struct)\s+\w+|transmorphic)(?:\s*<org>)?/.source.replace(
        /<org>/g,
        orgType
      )
    Prism.languages.mata = {
      comment: {
        pattern:
          /\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//,
        greedy: true
      },
      string: {
        pattern: /"[^"\r\n]*"|[‘`']".*?"[’`']/,
        greedy: true
      },
      'class-name': {
        pattern: /(\b(?:class|extends|struct)\s+)\w+(?=\s*(?:\{|\bextends\b))/,
        lookbehind: true
      },
      type: {
        pattern: RegExp(type),
        alias: 'class-name',
        inside: {
          punctuation: /[()]/,
          keyword: /\b(?:class|function|struct|void)\b/
        }
      },
      keyword:
        /\b(?:break|class|continue|do|else|end|extends|external|final|for|function|goto|if|pragma|private|protected|public|return|static|struct|unset|unused|version|virtual|while)\b/,
      constant: /\bNULL\b/,
      number: {
        pattern:
          /(^|[^\w.])(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|\d[a-f0-9]*(?:\.[a-f0-9]+)?x[+-]?\d+)i?(?![\w.])/i,
        lookbehind: true
      },
      missing: {
        pattern: /(^|[^\w.])(?:\.[a-z]?)(?![\w.])/,
        lookbehind: true,
        alias: 'symbol'
      },
      function: /\b[a-z_]\w*(?=\s*\()/i,
      operator: /\.\.|\+\+|--|&&|\|\||:?(?:[!=<>]=|[+\-*/^<>&|:])|[!?=\\#’`']/,
      punctuation: /[()[\]{},;.]/
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/stata.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/stata.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stata; });
/* harmony import */ var _java_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./java.js */ "./node_modules/refractor/lang/java.js");
/* harmony import */ var _mata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mata.js */ "./node_modules/refractor/lang/mata.js");
/* harmony import */ var _python_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./python.js */ "./node_modules/refractor/lang/python.js");
// @ts-nocheck



stata.displayName = 'stata'
stata.aliases = []

/** @type {import('../core.js').Syntax} */
function stata(Prism) {
  Prism.register(_java_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_mata_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  Prism.register(_python_js__WEBPACK_IMPORTED_MODULE_2__["default"])
  // https://www.stata.com/manuals/u.pdf
  // https://www.stata.com/manuals/p.pdf

  Prism.languages.stata = {
    comment: [
      {
        pattern: /(^[ \t]*)\*.*/m,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|\s)\/\/.*|\/\*[\s\S]*?\*\//,
        lookbehind: true,
        greedy: true
      }
    ],
    'string-literal': {
      pattern: /"[^"\r\n]*"|[‘`']".*?"[’`']/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /\$\{[^{}]*\}|[‘`']\w[^’`'\r\n]*[’`']/,
          inside: {
            punctuation: /^\$\{|\}$/,
            expression: {
              pattern: /[\s\S]+/,
              inside: null // see below
            }
          }
        },

        string: /[\s\S]+/
      }
    },
    mata: {
      pattern: /(^[ \t]*mata[ \t]*:)[\s\S]+?(?=^end\b)/m,
      lookbehind: true,
      greedy: true,
      alias: 'language-mata',
      inside: Prism.languages.mata
    },
    java: {
      pattern: /(^[ \t]*java[ \t]*:)[\s\S]+?(?=^end\b)/m,
      lookbehind: true,
      greedy: true,
      alias: 'language-java',
      inside: Prism.languages.java
    },
    python: {
      pattern: /(^[ \t]*python[ \t]*:)[\s\S]+?(?=^end\b)/m,
      lookbehind: true,
      greedy: true,
      alias: 'language-python',
      inside: Prism.languages.python
    },
    command: {
      pattern:
        /(^[ \t]*(?:\.[ \t]+)?(?:(?:bayes|bootstrap|by|bysort|capture|collect|fmm|fp|frame|jackknife|mfp|mi|nestreg|noisily|permute|quietly|rolling|simulate|statsby|stepwise|svy|version|xi)\b[^:\r\n]*:[ \t]*|(?:capture|noisily|quietly|version)[ \t]+)?)[a-zA-Z]\w*/m,
      lookbehind: true,
      greedy: true,
      alias: 'keyword'
    },
    variable: /\$\w+|[‘`']\w[^’`'\r\n]*[’`']/,
    keyword:
      /\b(?:bayes|bootstrap|by|bysort|capture|clear|collect|fmm|fp|frame|if|in|jackknife|mi[ \t]+estimate|mfp|nestreg|noisily|of|permute|quietly|rolling|simulate|sort|statsby|stepwise|svy|varlist|version|xi)\b/,
    boolean: /\b(?:off|on)\b/,
    number: /\b\d+(?:\.\d+)?\b|\B\.\d+/,
    function: /\b[a-z_]\w*(?=\()/i,
    operator: /\+\+|--|##?|[<>!=~]=?|[+\-*^&|/]/,
    punctuation: /[(){}[\],:]/
  }
  Prism.languages.stata[
    'string-literal'
  ].inside.interpolation.inside.expression.inside = Prism.languages.stata
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_stata.js.map