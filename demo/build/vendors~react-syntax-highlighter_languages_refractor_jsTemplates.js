(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~react-syntax-highlighter_languages_refractor_jsTemplates"],{

/***/ "./node_modules/refractor/lang/clike.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clike; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
clike.displayName = 'clike'
clike.aliases = []

/** @param {Refractor} Prism */
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/javascript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/javascript.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return javascript; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

javascript.displayName = 'javascript'
javascript.aliases = ['js']

/** @param {Refractor} Prism */
function javascript(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          '(?:' +
          // constant
          (/NaN|Infinity/.source +
            '|' +
            // binary integer
            /0[bB][01]+(?:_[01]+)*n?/.source +
            '|' +
            // octal integer
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
            '|' +
            // hexadecimal integer
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
            '|' +
            // decimal bigint
            /\d+(?:_\d+)*n/.source +
            '|' +
            // decimal number (integer or float) but no bigint
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
              .source) +
          ')' +
          /(?![\w$])/.source
      ),
      lookbehind: true
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  })
  Prism.languages.javascript['class-name'][0].pattern =
    /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
          // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source +
          '(?:' +
          /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
            .source +
          '|' +
          // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
            .source +
          ')' +
          // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
            .source
      ),
      lookbehind: true,
      greedy: true,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: 'language-regex',
          inside: Prism.languages.regex
        },
        'regex-delimiter': /^\/|\/$/,
        'regex-flags': /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: 'function'
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern:
          /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  })
  Prism.languages.insertBefore('javascript', 'string', {
    hashbang: {
      pattern: /^#!.*/,
      greedy: true,
      alias: 'comment'
    },
    'template-string': {
      pattern:
        /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        interpolation: {
          pattern:
            /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\$\{|\}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    'string-property': {
      pattern:
        /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: 'property'
    }
  })
  Prism.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
      pattern:
        /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: 'property'
    }
  })
  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript')

    // add attribute support for all DOM events.
    // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
    Prism.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
        .source,
      'javascript'
    )
  }
  Prism.languages.js = Prism.languages.javascript
}


/***/ }),

/***/ "./node_modules/refractor/lang/js-templates.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/js-templates.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jsTemplates; });
/* harmony import */ var _javascript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript.js */ "./node_modules/refractor/lang/javascript.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

jsTemplates.displayName = 'js-templates'
jsTemplates.aliases = []

/** @param {Refractor} Prism */
function jsTemplates(Prism) {
  Prism.register(_javascript_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var templateString = Prism.languages.javascript['template-string']

    // see the pattern in prism-javascript.js
    var templateLiteralPattern = templateString.pattern.source
    var interpolationObject = templateString.inside['interpolation']
    var interpolationPunctuationObject =
      interpolationObject.inside['interpolation-punctuation']
    var interpolationPattern = interpolationObject.pattern.source

    /**
     * Creates a new pattern to match a template string with a special tag.
     *
     * This will return `undefined` if there is no grammar with the given language id.
     *
     * @param {string} language The language id of the embedded language. E.g. `markdown`.
     * @param {string} tag The regex pattern to match the tag.
     * @returns {object | undefined}
     * @example
     * createTemplate('css', /\bcss/.source);
     */
    function createTemplate(language, tag) {
      if (!Prism.languages[language]) {
        return undefined
      }
      return {
        pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
        lookbehind: true,
        greedy: true,
        inside: {
          'template-punctuation': {
            pattern: /^`|`$/,
            alias: 'string'
          },
          'embedded-code': {
            pattern: /[\s\S]+/,
            alias: language
          }
        }
      }
    }
    Prism.languages.javascript['template-string'] = [
      // styled-jsx:
      //   css`a { color: #25F; }`
      // styled-components:
      //   styled.h1`color: red;`
      createTemplate(
        'css',
        /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
          .source
      ),
      // html`<p></p>`
      // div.innerHTML = `<p></p>`
      createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
      // svg`<path fill="#fff" d="M55.37 ..."/>`
      createTemplate('svg', /\bsvg/.source),
      // md`# h1`, markdown`## h2`
      createTemplate('markdown', /\b(?:markdown|md)/.source),
      // gql`...`, graphql`...`, graphql.experimental`...`
      createTemplate(
        'graphql',
        /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source
      ),
      // sql`...`
      createTemplate('sql', /\bsql/.source),
      // vanilla template string
      templateString
    ].filter(Boolean)

    /**
     * Returns a specific placeholder literal for the given language.
     *
     * @param {number} counter
     * @param {string} language
     * @returns {string}
     */
    function getPlaceholder(counter, language) {
      return '___' + language.toUpperCase() + '_' + counter + '___'
    }

    /**
     * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
     *
     * @param {string} code
     * @param {any} grammar
     * @param {string} language
     * @returns {(string|Token)[]}
     */
    function tokenizeWithHooks(code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language
      }
      Prism.hooks.run('before-tokenize', env)
      env.tokens = Prism.tokenize(env.code, env.grammar)
      Prism.hooks.run('after-tokenize', env)
      return env.tokens
    }

    /**
     * Returns the token of the given JavaScript interpolation expression.
     *
     * @param {string} expression The code of the expression. E.g. `"${42}"`
     * @returns {Token}
     */
    function tokenizeInterpolationExpression(expression) {
      var tempGrammar = {}
      tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject

      /** @type {Array} */
      var tokens = Prism.tokenize(expression, tempGrammar)
      if (tokens.length === 3) {
        /**
         * The token array will look like this
         * [
         *     ["interpolation-punctuation", "${"]
         *     "..." // JavaScript expression of the interpolation
         *     ["interpolation-punctuation", "}"]
         * ]
         */

        var args = [1, 1]
        args.push.apply(
          args,
          tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript')
        )
        tokens.splice.apply(tokens, args)
      }
      return new Prism.Token(
        'interpolation',
        tokens,
        interpolationObject.alias,
        expression
      )
    }

    /**
     * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
     *
     * This function has 3 phases:
     *
     * 1. Replace all JavaScript interpolation expression with a placeholder.
     *    The placeholder will have the syntax of a identify of the target language.
     * 2. Tokenize the code with placeholders.
     * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
     *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
     *    tokenized as two tokens by the grammar of the embedded language.
     *
     * @param {string} code
     * @param {object} grammar
     * @param {string} language
     * @returns {Token}
     */
    function tokenizeEmbedded(code, grammar, language) {
      // 1. First filter out all interpolations

      // because they might be escaped, we need a lookbehind, so we use Prism
      /** @type {(Token|string)[]} */
      var _tokens = Prism.tokenize(code, {
        interpolation: {
          pattern: RegExp(interpolationPattern),
          lookbehind: true
        }
      })

      // replace all interpolations with a placeholder which is not in the code already
      var placeholderCounter = 0
      /** @type {Object<string, string>} */
      var placeholderMap = {}
      var embeddedCode = _tokens
        .map(function (token) {
          if (typeof token === 'string') {
            return token
          } else {
            var interpolationExpression = token.content
            var placeholder
            while (
              code.indexOf(
                (placeholder = getPlaceholder(placeholderCounter++, language))
              ) !== -1
            ) {
              /* noop */
            }
            placeholderMap[placeholder] = interpolationExpression
            return placeholder
          }
        })
        .join('')

      // 2. Tokenize the embedded code

      var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language)

      // 3. Re-insert the interpolation

      var placeholders = Object.keys(placeholderMap)
      placeholderCounter = 0

      /**
       *
       * @param {(Token|string)[]} tokens
       * @returns {void}
       */
      function walkTokens(tokens) {
        for (var i = 0; i < tokens.length; i++) {
          if (placeholderCounter >= placeholders.length) {
            return
          }
          var token = tokens[i]
          if (typeof token === 'string' || typeof token.content === 'string') {
            var placeholder = placeholders[placeholderCounter]
            var s =
              typeof token === 'string'
                ? token
                : /** @type {string} */ token.content
            var index = s.indexOf(placeholder)
            if (index !== -1) {
              ++placeholderCounter
              var before = s.substring(0, index)
              var middle = tokenizeInterpolationExpression(
                placeholderMap[placeholder]
              )
              var after = s.substring(index + placeholder.length)
              var replacement = []
              if (before) {
                replacement.push(before)
              }
              replacement.push(middle)
              if (after) {
                var afterTokens = [after]
                walkTokens(afterTokens)
                replacement.push.apply(replacement, afterTokens)
              }
              if (typeof token === 'string') {
                tokens.splice.apply(tokens, [i, 1].concat(replacement))
                i += replacement.length - 1
              } else {
                token.content = replacement
              }
            }
          } else {
            var content = token.content
            if (Array.isArray(content)) {
              walkTokens(content)
            } else {
              walkTokens([content])
            }
          }
        }
      }
      walkTokens(embeddedTokens)
      return new Prism.Token(
        language,
        embeddedTokens,
        'language-' + language,
        code
      )
    }

    /**
     * The languages for which JS templating will handle tagged template literals.
     *
     * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
     */
    var supportedLanguages = {
      javascript: true,
      js: true,
      typescript: true,
      ts: true,
      jsx: true,
      tsx: true
    }
    Prism.hooks.add('after-tokenize', function (env) {
      if (!(env.language in supportedLanguages)) {
        return
      }

      /**
       * Finds and tokenizes all template strings with an embedded languages.
       *
       * @param {(Token | string)[]} tokens
       * @returns {void}
       */
      function findTemplateStrings(tokens) {
        for (var i = 0, l = tokens.length; i < l; i++) {
          var token = tokens[i]
          if (typeof token === 'string') {
            continue
          }
          var content = token.content
          if (!Array.isArray(content)) {
            if (typeof content !== 'string') {
              findTemplateStrings([content])
            }
            continue
          }
          if (token.type === 'template-string') {
            /**
             * A JavaScript template-string token will look like this:
             *
             * ["template-string", [
             *     ["template-punctuation", "`"],
             *     (
             *         An array of "string" and "interpolation" tokens. This is the simple string case.
             *         or
             *         ["embedded-code", "..."] This is the token containing the embedded code.
             *                                  It also has an alias which is the language of the embedded code.
             *     ),
             *     ["template-punctuation", "`"]
             * ]]
             */

            var embedded = content[1]
            if (
              content.length === 3 &&
              typeof embedded !== 'string' &&
              embedded.type === 'embedded-code'
            ) {
              // get string content
              var code = stringContent(embedded)
              var alias = embedded.alias
              var language = Array.isArray(alias) ? alias[0] : alias
              var grammar = Prism.languages[language]
              if (!grammar) {
                // the embedded language isn't registered.
                continue
              }
              content[1] = tokenizeEmbedded(code, grammar, language)
            }
          } else {
            findTemplateStrings(content)
          }
        }
      }
      findTemplateStrings(env.tokens)
    })

    /**
     * Returns the string content of a token or token stream.
     *
     * @param {string | Token | (string | Token)[]} value
     * @returns {string}
     */
    function stringContent(value) {
      if (typeof value === 'string') {
        return value
      } else if (Array.isArray(value)) {
        return value.map(stringContent).join('')
      } else {
        return stringContent(value.content)
      }
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=vendors~react-syntax-highlighter_languages_refractor_jsTemplates.js.map