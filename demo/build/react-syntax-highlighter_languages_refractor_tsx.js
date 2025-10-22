(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_tsx"],{

/***/ "./node_modules/refractor/lang/jsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/jsx.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = jsx
jsx.displayName = 'jsx'
jsx.aliases = []
function jsx(Prism) {
  ;(function (Prism) {
    var javascript = Prism.util.clone(Prism.languages.javascript)
    var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source
    var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source
    var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source
    /**
     * @param {string} source
     * @param {string} [flags]
     */
    function re(source, flags) {
      source = source
        .replace(/<S>/g, function () {
          return space
        })
        .replace(/<BRACES>/g, function () {
          return braces
        })
        .replace(/<SPREAD>/g, function () {
          return spread
        })
      return RegExp(source, flags)
    }
    spread = re(spread).source
    Prism.languages.jsx = Prism.languages.extend('markup', javascript)
    Prism.languages.jsx.tag.pattern = re(
      /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
        .source
    )
    Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/
    Prism.languages.jsx.tag.inside['attr-value'].pattern =
      /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/
    Prism.languages.jsx.tag.inside['tag'].inside['class-name'] =
      /^[A-Z]\w*(?:\.[A-Z]\w*)*$/
    Prism.languages.jsx.tag.inside['comment'] = javascript['comment']
    Prism.languages.insertBefore(
      'inside',
      'attr-name',
      {
        spread: {
          pattern: re(/<SPREAD>/.source),
          inside: Prism.languages.jsx
        }
      },
      Prism.languages.jsx.tag
    )
    Prism.languages.insertBefore(
      'inside',
      'special-attr',
      {
        script: {
          // Allow for two levels of nesting
          pattern: re(/=<BRACES>/.source),
          alias: 'language-javascript',
          inside: {
            'script-punctuation': {
              pattern: /^=(?=\{)/,
              alias: 'punctuation'
            },
            rest: Prism.languages.jsx
          }
        }
      },
      Prism.languages.jsx.tag
    ) // The following will handle plain text inside tags
    var stringifyToken = function (token) {
      if (!token) {
        return ''
      }
      if (typeof token === 'string') {
        return token
      }
      if (typeof token.content === 'string') {
        return token.content
      }
      return token.content.map(stringifyToken).join('')
    }
    var walkTokens = function (tokens) {
      var openedTags = []
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
        var notTagNorBrace = false
        if (typeof token !== 'string') {
          if (
            token.type === 'tag' &&
            token.content[0] &&
            token.content[0].type === 'tag'
          ) {
            // We found a tag, now find its kind
            if (token.content[0].content[0].content === '</') {
              // Closing tag
              if (
                openedTags.length > 0 &&
                openedTags[openedTags.length - 1].tagName ===
                  stringifyToken(token.content[0].content[1])
              ) {
                // Pop matching opening tag
                openedTags.pop()
              }
            } else {
              if (token.content[token.content.length - 1].content === '/>') {
                // Autoclosed tag, ignore
              } else {
                // Opening tag
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                })
              }
            }
          } else if (
            openedTags.length > 0 &&
            token.type === 'punctuation' &&
            token.content === '{'
          ) {
            // Here we might have entered a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces++
          } else if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces > 0 &&
            token.type === 'punctuation' &&
            token.content === '}'
          ) {
            // Here we might have left a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces--
          } else {
            notTagNorBrace = true
          }
        }
        if (notTagNorBrace || typeof token === 'string') {
          if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces === 0
          ) {
            // Here we are inside a tag, and not inside a JSX context.
            // That's plain text: drop any tokens matched.
            var plainText = stringifyToken(token) // And merge text with adjacent text
            if (
              i < tokens.length - 1 &&
              (typeof tokens[i + 1] === 'string' ||
                tokens[i + 1].type === 'plain-text')
            ) {
              plainText += stringifyToken(tokens[i + 1])
              tokens.splice(i + 1, 1)
            }
            if (
              i > 0 &&
              (typeof tokens[i - 1] === 'string' ||
                tokens[i - 1].type === 'plain-text')
            ) {
              plainText = stringifyToken(tokens[i - 1]) + plainText
              tokens.splice(i - 1, 1)
              i--
            }
            tokens[i] = new Prism.Token(
              'plain-text',
              plainText,
              null,
              plainText
            )
          }
        }
        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content)
        }
      }
    }
    Prism.hooks.add('after-tokenize', function (env) {
      if (env.language !== 'jsx' && env.language !== 'tsx') {
        return
      }
      walkTokens(env.tokens)
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/tsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tsx.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorJsx = __webpack_require__(/*! ./jsx.js */ "./node_modules/refractor/lang/jsx.js")
var refractorTypescript = __webpack_require__(/*! ./typescript.js */ "./node_modules/refractor/lang/typescript.js")
module.exports = tsx
tsx.displayName = 'tsx'
tsx.aliases = []
function tsx(Prism) {
  Prism.register(refractorJsx)
  Prism.register(refractorTypescript)
  ;(function (Prism) {
    var typescript = Prism.util.clone(Prism.languages.typescript)
    Prism.languages.tsx = Prism.languages.extend('jsx', typescript) // doesn't work with TS because TS is too complex
    delete Prism.languages.tsx['parameter']
    delete Prism.languages.tsx['literal-property'] // This will prevent collisions between TSX tags and TS generic types.
    // Idea by https://github.com/karlhorky
    // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928
    var tag = Prism.languages.tsx.tag
    tag.pattern = RegExp(
      /(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')',
      tag.pattern.flags
    )
    tag.lookbehind = true
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
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tsx.js.map