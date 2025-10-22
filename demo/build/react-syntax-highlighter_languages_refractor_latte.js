(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_latte"],{

/***/ "./node_modules/refractor/lang/latte.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/latte.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
var refractorPhp = __webpack_require__(/*! ./php.js */ "./node_modules/refractor/lang/php.js")
module.exports = latte
latte.displayName = 'latte'
latte.aliases = []
function latte(Prism) {
  Prism.register(refractorMarkupTemplating)
  Prism.register(refractorPhp)
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