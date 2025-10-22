(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_jsdoc"],{

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

/***/ "./node_modules/refractor/lang/jsdoc.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/jsdoc.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorJavadoclike = __webpack_require__(/*! ./javadoclike.js */ "./node_modules/refractor/lang/javadoclike.js")
var refractorTypescript = __webpack_require__(/*! ./typescript.js */ "./node_modules/refractor/lang/typescript.js")
module.exports = jsdoc
jsdoc.displayName = 'jsdoc'
jsdoc.aliases = []
function jsdoc(Prism) {
  Prism.register(refractorJavadoclike)
  Prism.register(refractorTypescript)
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


/***/ }),

/***/ "./node_modules/refractor/lang/typescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typescript.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = typescript
typescript.displayName = 'typescript'
typescript.aliases = ['ts']
function typescript(Prism) {
  ;(function (Prism) {
    Prism.languages.typescript = Prism.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: true,
        greedy: true,
        inside: null // see below
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }) // The keywords TypeScript adds to JavaScript
    Prism.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/, // keywords that have to be followed by an identifier
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, // This is for `import type *, {}`
      /\btype\b(?=\s*(?:[\{*]|$))/
    ) // doesn't work with TS because TS is too complex
    delete Prism.languages.typescript['parameter']
    delete Prism.languages.typescript['literal-property'] // a version of typescript specifically for highlighting types
    var typeInside = Prism.languages.extend('typescript', {})
    delete typeInside['class-name']
    Prism.languages.typescript['class-name'].inside = typeInside
    Prism.languages.insertBefore('typescript', 'function', {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: 'operator'
          },
          function: /^[\s\S]+/
        }
      },
      'generic-function': {
        // e.g. foo<T extends "bar" | "baz">( ...
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: true,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            // everything after the first <
            alias: 'class-name',
            inside: typeInside
          }
        }
      }
    })
    Prism.languages.ts = Prism.languages.typescript
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsdoc.js.map