(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~react-syntax-highlighter_languages_refractor_xquery"],{

/***/ "./node_modules/refractor/lang/markup.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/markup.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return markup; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
markup.displayName = 'markup'
markup.aliases = ['atom', 'html', 'mathml', 'rss', 'ssml', 'svg', 'xml']

/** @param {Refractor} Prism */
function markup(Prism) {
  Prism.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        'internal-subset': {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: 'attr-equals'
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: 'named-entity'
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    Prism.languages.markup['entity']
  Prism.languages.markup['doctype'].inside['internal-subset'].inside =
    Prism.languages.markup

  // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function (env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.value.replace(/&amp;/, '&')
    }
  })
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {}
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      }
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      }
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      }
      var def = {}
      def[tagName] = {
        pattern: RegExp(
          /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            function () {
              return tagName
            }
          ),
          'i'
        ),
        lookbehind: true,
        greedy: true,
        inside: inside
      }
      Prism.languages.insertBefore('markup', 'cdata', def)
    }
  })
  Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function (attrName, lang) {
      Prism.languages.markup.tag.inside['special-attr'].push({
        pattern: RegExp(
          /(^|["'\s])/.source +
            '(?:' +
            attrName +
            ')' +
            /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          'i'
        ),
        lookbehind: true,
        inside: {
          'attr-name': /^[^\s=]+/,
          'attr-value': {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang, 'language-' + lang],
                inside: Prism.languages[lang]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: 'attr-equals'
                },
                /"|'/
              ]
            }
          }
        }
      })
    }
  })
  Prism.languages.html = Prism.languages.markup
  Prism.languages.mathml = Prism.languages.markup
  Prism.languages.svg = Prism.languages.markup
  Prism.languages.xml = Prism.languages.extend('markup', {})
  Prism.languages.ssml = Prism.languages.xml
  Prism.languages.atom = Prism.languages.xml
  Prism.languages.rss = Prism.languages.xml
}


/***/ }),

/***/ "./node_modules/refractor/lang/xquery.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/xquery.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return xquery; });
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

xquery.displayName = 'xquery'
xquery.aliases = []

/** @param {Refractor} Prism */
function xquery(Prism) {
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    Prism.languages.xquery = Prism.languages.extend('markup', {
      'xquery-comment': {
        pattern: /\(:[\s\S]*?:\)/,
        greedy: true,
        alias: 'comment'
      },
      string: {
        pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
        greedy: true
      },
      extension: {
        pattern: /\(#.+?#\)/,
        alias: 'symbol'
      },
      variable: /\$[-\w:]+/,
      axis: {
        pattern:
          /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
        lookbehind: true,
        alias: 'operator'
      },
      'keyword-operator': {
        pattern:
          /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
        lookbehind: true,
        alias: 'operator'
      },
      keyword: {
        pattern:
          /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
        lookbehind: true
      },
      function: /[\w-]+(?::[\w-]+)*(?=\s*\()/,
      'xquery-element': {
        pattern: /(element\s+)[\w-]+(?::[\w-]+)*/,
        lookbehind: true,
        alias: 'tag'
      },
      'xquery-attribute': {
        pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/,
        lookbehind: true,
        alias: 'attr-name'
      },
      builtin: {
        pattern:
          /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
        lookbehind: true
      },
      number: /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
      operator: [
        /[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,
        {
          pattern: /(\s)-(?=\s)/,
          lookbehind: true
        }
      ],
      punctuation: /[[\](){},;:/]/
    })
    Prism.languages.xquery.tag.pattern =
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/
    Prism.languages.xquery['tag'].inside['attr-value'].pattern =
      /=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/
    Prism.languages.xquery['tag'].inside['attr-value'].inside['punctuation'] =
      /^="|"$/
    Prism.languages.xquery['tag'].inside['attr-value'].inside['expression'] = {
      // Allow for two levels of nesting
      pattern: /\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,
      inside: Prism.languages.xquery,
      alias: 'language-xquery'
    }

    // The following will handle plain text inside tags
    var stringifyToken = function (token) {
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
            token.content === '{' &&
            // Ignore `{{`
            (!tokens[i + 1] ||
              tokens[i + 1].type !== 'punctuation' ||
              tokens[i + 1].content !== '{') &&
            (!tokens[i - 1] ||
              tokens[i - 1].type !== 'plain-text' ||
              tokens[i - 1].content !== '{')
          ) {
            // Here we might have entered an XQuery expression inside a tag
            openedTags[openedTags.length - 1].openedBraces++
          } else if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces > 0 &&
            token.type === 'punctuation' &&
            token.content === '}'
          ) {
            // Here we might have left an XQuery expression inside a tag
            openedTags[openedTags.length - 1].openedBraces--
          } else if (token.type !== 'comment') {
            notTagNorBrace = true
          }
        }
        if (notTagNorBrace || typeof token === 'string') {
          if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces === 0
          ) {
            // Here we are inside a tag, and not inside an XQuery expression.
            // That's plain text: drop any tokens matched.
            var plainText = stringifyToken(token)

            // And merge text with adjacent text
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
            if (/^\s+$/.test(plainText)) {
              tokens[i] = plainText
            } else {
              tokens[i] = new Prism.Token(
                'plain-text',
                plainText,
                null,
                plainText
              )
            }
          }
        }
        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content)
        }
      }
    }
    Prism.hooks.add('after-tokenize', function (env) {
      if (env.language !== 'xquery') {
        return
      }
      walkTokens(env.tokens)
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=vendors~react-syntax-highlighter_languages_refractor_xquery.js.map