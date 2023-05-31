(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_javadoc"],{

/***/ "./node_modules/refractor/lang/javadoc.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/javadoc.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return javadoc; });
/* harmony import */ var _java_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./java.js */ "./node_modules/refractor/lang/java.js");
/* harmony import */ var _javadoclike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javadoclike.js */ "./node_modules/refractor/lang/javadoclike.js");
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck



javadoc.displayName = 'javadoc'
javadoc.aliases = []

/** @type {import('../core.js').Syntax} */
function javadoc(Prism) {
  Prism.register(_java_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_javadoclike_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_2__["default"])
  ;(function (Prism) {
    var codeLinePattern = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m
    var memberReference = /#\s*\w+(?:\s*\([^()]*\))?/.source
    var reference =
      /(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(
        /<mem>/g,
        function () {
          return memberReference
        }
      )
    Prism.languages.javadoc = Prism.languages.extend('javadoclike', {})
    Prism.languages.insertBefore('javadoc', 'keyword', {
      reference: {
        pattern: RegExp(
          /(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/
            .source +
            '(?:' +
            reference +
            ')'
        ),
        lookbehind: true,
        inside: {
          function: {
            pattern: /(#\s*)\w+(?=\s*\()/,
            lookbehind: true
          },
          field: {
            pattern: /(#\s*)\w+/,
            lookbehind: true
          },
          namespace: {
            pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
            inside: {
              punctuation: /\./
            }
          },
          'class-name': /\b[A-Z]\w*/,
          keyword: Prism.languages.java.keyword,
          punctuation: /[#()[\],.]/
        }
      },
      'class-name': {
        // @param <T> the first generic type parameter
        pattern: /(@param\s+)<[A-Z]\w*>/,
        lookbehind: true,
        inside: {
          punctuation: /[.<>]/
        }
      },
      'code-section': [
        {
          pattern:
            /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
          lookbehind: true,
          inside: {
            code: {
              // there can't be any HTML inside of {@code} tags
              pattern: codeLinePattern,
              lookbehind: true,
              inside: Prism.languages.java,
              alias: 'language-java'
            }
          }
        },
        {
          pattern:
            /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
          lookbehind: true,
          inside: {
            line: {
              pattern: codeLinePattern,
              lookbehind: true,
              inside: {
                // highlight HTML tags and entities
                tag: Prism.languages.markup.tag,
                entity: Prism.languages.markup.entity,
                code: {
                  // everything else is Java code
                  pattern: /.+/,
                  inside: Prism.languages.java,
                  alias: 'language-java'
                }
              }
            }
          }
        }
      ],
      tag: Prism.languages.markup.tag,
      entity: Prism.languages.markup.entity
    })
    Prism.languages.javadoclike.addSupport('java', Prism.languages.javadoc)
  })(Prism)
}


/***/ }),

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
javadoclike.displayName = 'javadoclike'
javadoclike.aliases = []

/** @type {import('../core.js').Syntax} */
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


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_javadoc.js.map