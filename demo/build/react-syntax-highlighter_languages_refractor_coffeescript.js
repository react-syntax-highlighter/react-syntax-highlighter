(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_coffeescript"],{

/***/ "./node_modules/refractor/lang/coffeescript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/coffeescript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return coffeescript; });
/* harmony import */ var _javascript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript.js */ "./node_modules/refractor/lang/javascript.js");
// @ts-nocheck

coffeescript.displayName = 'coffeescript'
coffeescript.aliases = ['coffee']

/** @type {import('../core.js').Syntax} */
function coffeescript(Prism) {
  Prism.register(_javascript_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    // Ignore comments starting with { to privilege string interpolation highlighting
    var comment = /#(?!\{).+/
    var interpolation = {
      pattern: /#\{[^}]+\}/,
      alias: 'variable'
    }
    Prism.languages.coffeescript = Prism.languages.extend('javascript', {
      comment: comment,
      string: [
        // Strings are multiline
        {
          pattern: /'(?:\\[\s\S]|[^\\'])*'/,
          greedy: true
        },
        {
          // Strings are multiline
          pattern: /"(?:\\[\s\S]|[^\\"])*"/,
          greedy: true,
          inside: {
            interpolation: interpolation
          }
        }
      ],
      keyword:
        /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
      'class-member': {
        pattern: /@(?!\d)\w+/,
        alias: 'variable'
      }
    })
    Prism.languages.insertBefore('coffeescript', 'comment', {
      'multiline-comment': {
        pattern: /###[\s\S]+?###/,
        alias: 'comment'
      },
      // Block regexp can contain comments and interpolation
      'block-regex': {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: 'regex',
        inside: {
          comment: comment,
          interpolation: interpolation
        }
      }
    })
    Prism.languages.insertBefore('coffeescript', 'string', {
      'inline-javascript': {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: {
          delimiter: {
            pattern: /^`|`$/,
            alias: 'punctuation'
          },
          script: {
            pattern: /[\s\S]+/,
            alias: 'language-javascript',
            inside: Prism.languages.javascript
          }
        }
      },
      // Block strings
      'multiline-string': [
        {
          pattern: /'''[\s\S]*?'''/,
          greedy: true,
          alias: 'string'
        },
        {
          pattern: /"""[\s\S]*?"""/,
          greedy: true,
          alias: 'string',
          inside: {
            interpolation: interpolation
          }
        }
      ]
    })
    Prism.languages.insertBefore('coffeescript', 'keyword', {
      // Object property
      property: /(?!\d)\w+(?=\s*:(?!:))/
    })
    delete Prism.languages.coffeescript['template-string']
    Prism.languages.coffee = Prism.languages.coffeescript
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_coffeescript.js.map