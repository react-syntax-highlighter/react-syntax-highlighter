(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_jsdoc"],{

/***/ "./node_modules/refractor/lang/javadoclike.js":
/*!****************************************************!*\
  !*** ./node_modules/refractor/lang/javadoclike.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return javadoclike; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
javadoclike.displayName = 'javadoclike'
javadoclike.aliases = []

/** @param {Refractor} Prism */
function javadoclike(Prism) {
  ;(function (Prism) {
    var javaDocLike = (Prism.languages.javadoclike = {
      parameter: {
        pattern:
          /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
        lookbehind: true
      },
      keyword: {
        // keywords are the first word in a line preceded be an `@` or surrounded by curly braces.
        // @word, {@word}
        pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
        lookbehind: true
      },
      punctuation: /[{}]/
    })

    /**
     * Adds doc comment support to the given language and calls a given callback on each doc comment pattern.
     *
     * @param {string} lang the language add doc comment support to.
     * @param {(pattern: {inside: {rest: undefined}}) => void} callback the function called with each doc comment pattern as argument.
     */
    function docCommentSupport(lang, callback) {
      var tokenName = 'doc-comment'
      var grammar = Prism.languages[lang]
      if (!grammar) {
        return
      }
      var token = grammar[tokenName]
      if (!token) {
        // add doc comment: /** */
        var definition = {}
        definition[tokenName] = {
          pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          alias: 'comment'
        }
        grammar = Prism.languages.insertBefore(lang, 'comment', definition)
        token = grammar[tokenName]
      }
      if (token instanceof RegExp) {
        // convert regex to object
        token = grammar[tokenName] = {
          pattern: token
        }
      }
      if (Array.isArray(token)) {
        for (var i = 0, l = token.length; i < l; i++) {
          if (token[i] instanceof RegExp) {
            token[i] = {
              pattern: token[i]
            }
          }
          callback(token[i])
        }
      } else {
        callback(token)
      }
    }

    /**
     * Adds doc-comment support to the given languages for the given documentation language.
     *
     * @param {string[]|string} languages
     * @param {Object} docLanguage
     */
    function addSupport(languages, docLanguage) {
      if (typeof languages === 'string') {
        languages = [languages]
      }
      languages.forEach(function (lang) {
        docCommentSupport(lang, function (pattern) {
          if (!pattern.inside) {
            pattern.inside = {}
          }
          pattern.inside.rest = docLanguage
        })
      })
    }
    Object.defineProperty(javaDocLike, 'addSupport', {
      value: addSupport
    })
    javaDocLike.addSupport(['java', 'javascript', 'php'], javaDocLike)
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/jsdoc.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/jsdoc.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jsdoc; });
/* harmony import */ var _javadoclike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javadoclike.js */ "./node_modules/refractor/lang/javadoclike.js");
/* harmony import */ var _javascript_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript.js */ "./node_modules/refractor/lang/javascript.js");
/* harmony import */ var _typescript_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typescript.js */ "./node_modules/refractor/lang/typescript.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */



jsdoc.displayName = 'jsdoc'
jsdoc.aliases = []

/** @param {Refractor} Prism */
function jsdoc(Prism) {
  Prism.register(_javadoclike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_javascript_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  Prism.register(_typescript_js__WEBPACK_IMPORTED_MODULE_2__["default"])
  ;(function (Prism) {
    var javascript = Prism.languages.javascript
    var type = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source
    var parameterPrefix =
      '(@(?:arg|argument|param|property)\\s+(?:' + type + '\\s+)?)'
    Prism.languages.jsdoc = Prism.languages.extend('javadoclike', {
      parameter: {
        // @param {string} foo - foo bar
        pattern: RegExp(
          parameterPrefix + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source
        ),
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      }
    })
    Prism.languages.insertBefore('jsdoc', 'keyword', {
      'optional-parameter': {
        // @param {string} [baz.foo="bar"] foo bar
        pattern: RegExp(
          parameterPrefix +
            /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source
        ),
        lookbehind: true,
        inside: {
          parameter: {
            pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
            lookbehind: true,
            inside: {
              punctuation: /\./
            }
          },
          code: {
            pattern: /(=)[\s\S]*(?=\]$)/,
            lookbehind: true,
            inside: javascript,
            alias: 'language-javascript'
          },
          punctuation: /[=[\]]/
        }
      },
      'class-name': [
        {
          pattern: RegExp(
            /(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(
              /<TYPE>/g,
              function () {
                return type
              }
            )
          ),
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        },
        {
          pattern: RegExp('(@[a-z]+\\s+)' + type),
          lookbehind: true,
          inside: {
            string: javascript.string,
            number: javascript.number,
            boolean: javascript.boolean,
            keyword: Prism.languages.typescript.keyword,
            operator: /=>|\.\.\.|[&|?:*]/,
            punctuation: /[.,;=<>{}()[\]]/
          }
        }
      ],
      example: {
        pattern:
          /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
        lookbehind: true,
        inside: {
          code: {
            pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
            lookbehind: true,
            inside: javascript,
            alias: 'language-javascript'
          }
        }
      }
    })
    Prism.languages.javadoclike.addSupport('javascript', Prism.languages.jsdoc)
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsdoc.js.map