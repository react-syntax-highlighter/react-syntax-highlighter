(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_phpdoc"],{

/***/ "./node_modules/refractor/lang/javadoclike.js":
/*!****************************************************!*\
  !*** ./node_modules/refractor/lang/javadoclike.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = javadoclike
javadoclike.displayName = 'javadoclike'
javadoclike.aliases = []
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

/***/ "./node_modules/refractor/lang/phpdoc.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/phpdoc.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorPhp = __webpack_require__(/*! ./php.js */ "./node_modules/refractor/lang/php.js")
var refractorJavadoclike = __webpack_require__(/*! ./javadoclike.js */ "./node_modules/refractor/lang/javadoclike.js")
module.exports = phpdoc
phpdoc.displayName = 'phpdoc'
phpdoc.aliases = []
function phpdoc(Prism) {
  Prism.register(refractorPhp)
  Prism.register(refractorJavadoclike)
  ;(function (Prism) {
    var typeExpression = /(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source
    Prism.languages.phpdoc = Prism.languages.extend('javadoclike', {
      parameter: {
        pattern: RegExp(
          '(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:' +
            typeExpression +
            '\\s+)?)\\$\\w+'
        ),
        lookbehind: true
      }
    })
    Prism.languages.insertBefore('phpdoc', 'keyword', {
      'class-name': [
        {
          pattern: RegExp(
            '(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)' +
              typeExpression
          ),
          lookbehind: true,
          inside: {
            keyword:
              /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,
            punctuation: /[|\\[\]()]/
          }
        }
      ]
    })
    Prism.languages.javadoclike.addSupport('php', Prism.languages.phpdoc)
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_phpdoc.js.map