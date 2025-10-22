(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_javadoc"],{

/***/ "./node_modules/refractor/lang/java.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/java.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = java
java.displayName = 'java'
java.aliases = []
function java(Prism) {
  ;(function (Prism) {
    var keywords =
      /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/ // full package (optional) + parent classes (optional)
    var classNamePrefix = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/
      .source // based on the java naming conventions
    var className = {
      pattern: RegExp(classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
      lookbehind: true,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /\./
      }
    }
    Prism.languages.java = Prism.languages.extend('clike', {
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
        lookbehind: true,
        greedy: true
      },
      'class-name': [
        className,
        {
          // variables and parameters
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(
            classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source
          ),
          lookbehind: true,
          inside: className.inside
        }
      ],
      keyword: keywords,
      function: [
        Prism.languages.clike.function,
        {
          pattern: /(::\s*)[a-z_]\w*/,
          lookbehind: true
        }
      ],
      number:
        /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern:
          /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: true
      }
    })
    Prism.languages.insertBefore('java', 'string', {
      'triple-quoted-string': {
        // http://openjdk.java.net/jeps/355#Description
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: true,
        alias: 'string'
      },
      char: {
        pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
        greedy: true
      }
    })
    Prism.languages.insertBefore('java', 'class-name', {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: true,
        alias: 'punctuation'
      },
      generics: {
        pattern:
          /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          'class-name': className,
          keyword: keywords,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      },
      namespace: {
        pattern: RegExp(
          /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(
            /<keyword>/g,
            function () {
              return keywords.source
            }
          )
        ),
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/javadoc.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/javadoc.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorJava = __webpack_require__(/*! ./java.js */ "./node_modules/refractor/lang/java.js")
var refractorJavadoclike = __webpack_require__(/*! ./javadoclike.js */ "./node_modules/refractor/lang/javadoclike.js")
module.exports = javadoc
javadoc.displayName = 'javadoc'
javadoc.aliases = []
function javadoc(Prism) {
  Prism.register(refractorJava)
  Prism.register(refractorJavadoclike)
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


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_javadoc.js.map