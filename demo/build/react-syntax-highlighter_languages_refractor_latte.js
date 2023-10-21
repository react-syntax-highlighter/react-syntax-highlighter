(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_latte"],{

/***/ "./node_modules/refractor/lang/latte.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/latte.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return latte; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
/* harmony import */ var _php_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./php.js */ "./node_modules/refractor/lang/php.js");
// @ts-nocheck



latte.displayName = 'latte'
latte.aliases = []

/** @type {import('../core.js').Syntax} */
function latte(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  Prism.register(_php_js__WEBPACK_IMPORTED_MODULE_2__["default"])
  ;(function (Prism) {
    Prism.languages.latte = {
      comment: /^\{\*[\s\S]*/,
      'latte-tag': {
        // https://latte.nette.org/en/tags
        pattern: /(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,
        lookbehind: true,
        alias: 'important'
      },
      delimiter: {
        pattern: /^\{\/?|\}$/,
        alias: 'punctuation'
      },
      php: {
        pattern: /\S(?:[\s\S]*\S)?/,
        alias: 'language-php',
        inside: Prism.languages.php
      }
    }
    var markupLatte = Prism.languages.extend('markup', {})
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        'n-attr': {
          pattern: /n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,
          inside: {
            'attr-name': {
              pattern: /^[^\s=]+/,
              alias: 'important'
            },
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                punctuation: [
                  /^=/,
                  {
                    pattern: /^(\s*)["']|["']$/,
                    lookbehind: true
                  }
                ],
                php: {
                  pattern: /\S(?:[\s\S]*\S)?/,
                  inside: Prism.languages.php
                }
              }
            }
          }
        }
      },
      markupLatte.tag
    )
    Prism.hooks.add('before-tokenize', function (env) {
      if (env.language !== 'latte') {
        return
      }
      var lattePattern =
        /\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'latte',
        lattePattern
      )
      env.grammar = markupLatte
    })
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'latte')
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_latte.js.map