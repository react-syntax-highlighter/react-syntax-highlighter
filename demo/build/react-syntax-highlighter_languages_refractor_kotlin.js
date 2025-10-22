(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_kotlin"],{

/***/ "./node_modules/refractor/lang/kotlin.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/kotlin.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = kotlin
kotlin.displayName = 'kotlin'
kotlin.aliases = ['kt', 'kts']
function kotlin(Prism) {
  ;(function (Prism) {
    Prism.languages.kotlin = Prism.languages.extend('clike', {
      keyword: {
        // The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get
        pattern:
          /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
        lookbehind: true
      },
      function: [
        {
          pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
          greedy: true
        },
        {
          pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
          lookbehind: true,
          greedy: true
        }
      ],
      number:
        /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
      operator:
        /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
    })
    delete Prism.languages.kotlin['class-name']
    var interpolationInside = {
      'interpolation-punctuation': {
        pattern: /^\$\{?|\}$/,
        alias: 'punctuation'
      },
      expression: {
        pattern: /[\s\S]+/,
        inside: Prism.languages.kotlin
      }
    }
    Prism.languages.insertBefore('kotlin', 'string', {
      // https://kotlinlang.org/spec/expressions.html#string-interpolation-expressions
      'string-literal': [
        {
          pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
          alias: 'multiline',
          inside: {
            interpolation: {
              pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
              inside: interpolationInside
            },
            string: /[\s\S]+/
          }
        },
        {
          pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
          alias: 'singleline',
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
              lookbehind: true,
              inside: interpolationInside
            },
            string: /[\s\S]+/
          }
        }
      ],
      char: {
        // https://kotlinlang.org/spec/expressions.html#character-literals
        pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
        greedy: true
      }
    })
    delete Prism.languages.kotlin['string']
    Prism.languages.insertBefore('kotlin', 'keyword', {
      annotation: {
        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
        alias: 'builtin'
      }
    })
    Prism.languages.insertBefore('kotlin', 'function', {
      label: {
        pattern: /\b\w+@|@\w+\b/,
        alias: 'symbol'
      }
    })
    Prism.languages.kt = Prism.languages.kotlin
    Prism.languages.kts = Prism.languages.kotlin
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_kotlin.js.map