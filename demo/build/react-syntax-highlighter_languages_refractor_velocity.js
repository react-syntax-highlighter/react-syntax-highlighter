(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_velocity"],{

/***/ "./node_modules/refractor/lang/velocity.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/velocity.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return velocity; });
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck

velocity.displayName = 'velocity'
velocity.aliases = []

/** @type {import('../core.js').Syntax} */
function velocity(Prism) {
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    Prism.languages.velocity = Prism.languages.extend('markup', {})
    var velocity = {
      variable: {
        pattern:
          /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,
        lookbehind: true,
        inside: {} // See below
      },

      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      number: /\b\d+\b/,
      boolean: /\b(?:false|true)\b/,
      operator:
        /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
      punctuation: /[(){}[\]:,.]/
    }
    velocity.variable.inside = {
      string: velocity['string'],
      function: {
        pattern: /([^\w-])[a-z][\w-]*(?=\()/,
        lookbehind: true
      },
      number: velocity['number'],
      boolean: velocity['boolean'],
      punctuation: velocity['punctuation']
    }
    Prism.languages.insertBefore('velocity', 'comment', {
      unparsed: {
        pattern: /(^|[^\\])#\[\[[\s\S]*?\]\]#/,
        lookbehind: true,
        greedy: true,
        inside: {
          punctuation: /^#\[\[|\]\]#$/
        }
      },
      'velocity-comment': [
        {
          pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
          lookbehind: true,
          greedy: true,
          alias: 'comment'
        },
        {
          pattern: /(^|[^\\])##.*/,
          lookbehind: true,
          greedy: true,
          alias: 'comment'
        }
      ],
      directive: {
        pattern:
          /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
        lookbehind: true,
        inside: {
          keyword: {
            pattern: /^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,
            inside: {
              punctuation: /[{}]/
            }
          },
          rest: velocity
        }
      },
      variable: velocity['variable']
    })
    Prism.languages.velocity['tag'].inside['attr-value'].inside.rest =
      Prism.languages.velocity
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_velocity.js.map