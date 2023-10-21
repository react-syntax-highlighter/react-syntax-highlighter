(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_django"],{

/***/ "./node_modules/refractor/lang/django.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/django.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return django; });
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
// @ts-nocheck

django.displayName = 'django'
django.aliases = ['jinja2']

/** @type {import('../core.js').Syntax} */
function django(Prism) {
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  // Django/Jinja2 syntax definition for Prism.js <http://prismjs.com> syntax highlighter.
  // Mostly it works OK but can paint code incorrectly on complex html/template tag combinations.

  ;(function (Prism) {
    Prism.languages.django = {
      comment: /^\{#[\s\S]*?#\}$/,
      tag: {
        pattern: /(^\{%[+-]?\s*)\w+/,
        lookbehind: true,
        alias: 'keyword'
      },
      delimiter: {
        pattern: /^\{[{%][+-]?|[+-]?[}%]\}$/,
        alias: 'punctuation'
      },
      string: {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      filter: {
        pattern: /(\|)\w+/,
        lookbehind: true,
        alias: 'function'
      },
      test: {
        pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
        lookbehind: true,
        alias: 'function'
      },
      function: /\b[a-z_]\w+(?=\s*\()/i,
      keyword:
        /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
      operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
      number: /\b\d+(?:\.\d+)?\b/,
      boolean: /[Ff]alse|[Nn]one|[Tt]rue/,
      variable: /\b\w+\b/,
      punctuation: /[{}[\](),.:;]/
    }
    var pattern = /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g
    var markupTemplating = Prism.languages['markup-templating']
    Prism.hooks.add('before-tokenize', function (env) {
      markupTemplating.buildPlaceholders(env, 'django', pattern)
    })
    Prism.hooks.add('after-tokenize', function (env) {
      markupTemplating.tokenizePlaceholders(env, 'django')
    })

    // Add an Jinja2 alias
    Prism.languages.jinja2 = Prism.languages.django
    Prism.hooks.add('before-tokenize', function (env) {
      markupTemplating.buildPlaceholders(env, 'jinja2', pattern)
    })
    Prism.hooks.add('after-tokenize', function (env) {
      markupTemplating.tokenizePlaceholders(env, 'jinja2')
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_django.js.map