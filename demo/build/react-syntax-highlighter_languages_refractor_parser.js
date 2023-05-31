(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_parser"],{

/***/ "./node_modules/refractor/lang/parser.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/parser.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parser; });
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck

parser.displayName = 'parser'
parser.aliases = []

/** @type {import('../core.js').Syntax} */
function parser(Prism) {
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var parser = (Prism.languages.parser = Prism.languages.extend('markup', {
      keyword: {
        pattern:
          /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
        lookbehind: true
      },
      variable: {
        pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
        lookbehind: true,
        inside: {
          punctuation: /\.|:+/
        }
      },
      function: {
        pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
        lookbehind: true,
        inside: {
          keyword: {
            pattern: /(^@)(?:GET_|SET_)/,
            lookbehind: true
          },
          punctuation: /\.|:+/
        }
      },
      escape: {
        pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
        alias: 'builtin'
      },
      punctuation: /[\[\](){};]/
    }))
    parser = Prism.languages.insertBefore('parser', 'keyword', {
      'parser-comment': {
        pattern: /(\s)#.*/,
        lookbehind: true,
        alias: 'comment'
      },
      expression: {
        // Allow for 3 levels of depth
        pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
        greedy: true,
        lookbehind: true,
        inside: {
          string: {
            pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
            lookbehind: true
          },
          keyword: parser.keyword,
          variable: parser.variable,
          function: parser.function,
          boolean: /\b(?:false|true)\b/,
          number: /\b(?:0x[a-f\d]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?)\b/i,
          escape: parser.escape,
          operator:
            /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
          punctuation: parser.punctuation
        }
      }
    })
    Prism.languages.insertBefore(
      'inside',
      'punctuation',
      {
        expression: parser.expression,
        keyword: parser.keyword,
        variable: parser.variable,
        function: parser.function,
        escape: parser.escape,
        'parser-punctuation': {
          pattern: parser.punctuation,
          alias: 'punctuation'
        }
      },
      parser['tag'].inside['attr-value']
    )
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_parser.js.map