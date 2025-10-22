(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~react-syntax-highlighter_languages_refractor_cshtml"],{

/***/ "./node_modules/refractor/lang/cshtml.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/cshtml.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cshtml; });
/* harmony import */ var _csharp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csharp.js */ "./node_modules/refractor/lang/csharp.js");
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */


cshtml.displayName = 'cshtml'
cshtml.aliases = ['razor']

/** @param {Refractor} Prism */
function cshtml(Prism) {
  Prism.register(_csharp_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  // Docs:
  // https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-5.0&tabs=visual-studio
  // https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-5.0

  ;(function (Prism) {
    var commentLike = /\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//
      .source
    var stringLike =
      /@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source +
      '|' +
      /'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source

    /**
     * Creates a nested pattern where all occurrences of the string `<<self>>` are replaced with the pattern itself.
     *
     * @param {string} pattern
     * @param {number} depthLog2
     * @returns {string}
     */
    function nested(pattern, depthLog2) {
      for (var i = 0; i < depthLog2; i++) {
        pattern = pattern.replace(/<self>/g, function () {
          return '(?:' + pattern + ')'
        })
      }
      return pattern
        .replace(/<self>/g, '[^\\s\\S]')
        .replace(/<str>/g, '(?:' + stringLike + ')')
        .replace(/<comment>/g, '(?:' + commentLike + ')')
    }
    var round = nested(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source, 2)
    var square = nested(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source, 1)
    var curly = nested(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source, 2)
    var angle = nested(/<(?:[^<>'"@/]|<comment>|<self>)*>/.source, 1)
    var inlineCs =
      /@/.source +
      /(?:await\b\s*)?/.source +
      '(?:' +
      /(?!await\b)\w+\b/.source +
      '|' +
      round +
      ')' +
      '(?:' +
      /[?!]?\.\w+\b/.source +
      '|' +
      '(?:' +
      angle +
      ')?' +
      round +
      '|' +
      square +
      ')*' +
      /(?![?!\.(\[]|<(?!\/))/.source

    // Note about the above bracket patterns:
    // They all ignore HTML expressions that might be in the C# code. This is a problem because HTML (like strings and
    // comments) is parsed differently. This is a huge problem because HTML might contain brackets and quotes which
    // messes up the bracket and string counting implemented by the above patterns.
    //
    // This problem is not fixable because 1) HTML expression are highly context sensitive and very difficult to detect
    // and 2) they require one capturing group at every nested level. See the `tagRegion` pattern to admire the
    // complexity of an HTML expression.
    //
    // To somewhat alleviate the problem a bit, the patterns for characters (e.g. 'a') is very permissive, it also
    // allows invalid characters to support HTML expressions like this: <p>That's it!</p>.

    var tagAttrInlineCs = /@(?![\w()])/.source + '|' + inlineCs
    var tagAttrValue =
      '(?:' +
      /"[^"@]*"|'[^'@]*'|[^\s'"@>=]+(?=[\s>])/.source +
      '|' +
      '["\'][^"\'@]*(?:(?:' +
      tagAttrInlineCs +
      ')[^"\'@]*)+["\']' +
      ')'
    var tagAttrs =
      /(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*<tagAttrValue>|(?=[\s/>])))+)?/.source.replace(
        /<tagAttrValue>/,
        tagAttrValue
      )
    var tagContent = /(?!\d)[^\s>\/=$<%]+/.source + tagAttrs + /\s*\/?>/.source
    var tagRegion =
      /\B@?/.source +
      '(?:' +
      /<([a-zA-Z][\w:]*)/.source +
      tagAttrs +
      /\s*>/.source +
      '(?:' +
      (/[^<]/.source +
        '|' +
        // all tags that are not the start tag
        // eslint-disable-next-line regexp/strict
        /<\/?(?!\1\b)/.source +
        tagContent +
        '|' +
        // nested start tag
        nested(
          // eslint-disable-next-line regexp/strict
          /<\1/.source +
            tagAttrs +
            /\s*>/.source +
            '(?:' +
            (/[^<]/.source +
              '|' +
              // all tags that are not the start tag
              // eslint-disable-next-line regexp/strict
              /<\/?(?!\1\b)/.source +
              tagContent +
              '|' +
              '<self>') +
            ')*' +
            // eslint-disable-next-line regexp/strict
            /<\/\1\s*>/.source,
          2
        )) +
      ')*' +
      // eslint-disable-next-line regexp/strict
      /<\/\1\s*>/.source +
      '|' +
      /</.source +
      tagContent +
      ')'

    // Now for the actual language definition(s):
    //
    // Razor as a language has 2 parts:
    //  1) CSHTML: A markup-like language that has been extended with inline C# code expressions and blocks.
    //  2) C#+HTML: A variant of C# that can contain CSHTML tags as expressions.
    //
    // In the below code, both CSHTML and C#+HTML will be create as separate language definitions that reference each
    // other. However, only CSHTML will be exported via `Prism.languages`.

    Prism.languages.cshtml = Prism.languages.extend('markup', {})
    var csharpWithHtml = Prism.languages.insertBefore(
      'csharp',
      'string',
      {
        html: {
          pattern: RegExp(tagRegion),
          greedy: true,
          inside: Prism.languages.cshtml
        }
      },
      {
        csharp: Prism.languages.extend('csharp', {})
      }
    )
    var cs = {
      pattern: /\S[\s\S]*/,
      alias: 'language-csharp',
      inside: csharpWithHtml
    }
    var inlineValue = {
      pattern: RegExp(/(^|[^@])/.source + inlineCs),
      lookbehind: true,
      greedy: true,
      alias: 'variable',
      inside: {
        keyword: /^@/,
        csharp: cs
      }
    }
    Prism.languages.cshtml.tag.pattern = RegExp(/<\/?/.source + tagContent)
    Prism.languages.cshtml.tag.inside['attr-value'].pattern = RegExp(
      /=\s*/.source + tagAttrValue
    )
    Prism.languages.insertBefore(
      'inside',
      'punctuation',
      {
        value: inlineValue
      },
      Prism.languages.cshtml.tag.inside['attr-value']
    )
    Prism.languages.insertBefore('cshtml', 'prolog', {
      'razor-comment': {
        pattern: /@\*[\s\S]*?\*@/,
        greedy: true,
        alias: 'comment'
      },
      block: {
        pattern: RegExp(
          /(^|[^@])@/.source +
            '(?:' +
            [
              // @{ ... }
              curly,
              // @code{ ... }
              /(?:code|functions)\s*/.source + curly,
              // @for (...) { ... }
              /(?:for|foreach|lock|switch|using|while)\s*/.source +
                round +
                /\s*/.source +
                curly,
              // @do { ... } while (...);
              /do\s*/.source +
                curly +
                /\s*while\s*/.source +
                round +
                /(?:\s*;)?/.source,
              // @try { ... } catch (...) { ... } finally { ... }
              /try\s*/.source +
                curly +
                /\s*catch\s*/.source +
                round +
                /\s*/.source +
                curly +
                /\s*finally\s*/.source +
                curly,
              // @if (...) {...} else if (...) {...} else {...}
              /if\s*/.source +
                round +
                /\s*/.source +
                curly +
                '(?:' +
                /\s*else/.source +
                '(?:' +
                /\s+if\s*/.source +
                round +
                ')?' +
                /\s*/.source +
                curly +
                ')*',
              // @helper Ident(params) { ... }
              /helper\s+\w+\s*/.source + round + /\s*/.source + curly
            ].join('|') +
            ')'
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          keyword: /^@\w*/,
          csharp: cs
        }
      },
      directive: {
        pattern:
          /^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,
        lookbehind: true,
        greedy: true,
        inside: {
          keyword: /^@\w+/,
          csharp: cs
        }
      },
      value: inlineValue,
      'delegate-operator': {
        pattern: /(^|[^@])@(?=<)/,
        lookbehind: true,
        alias: 'operator'
      }
    })
    Prism.languages.razor = Prism.languages.cshtml
  })(Prism)
}


/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=vendors~react-syntax-highlighter_languages_refractor_cshtml.js.map