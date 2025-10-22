(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_cssExtras"],{

/***/ "./node_modules/refractor/lang/css-extras.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/css-extras.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cssExtras; });
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.js */ "./node_modules/refractor/lang/css.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

cssExtras.displayName = 'css-extras'
cssExtras.aliases = []

/** @param {Refractor} Prism */
function cssExtras(Prism) {
  Prism.register(_css_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
    var selectorInside
    Prism.languages.css.selector = {
      pattern: Prism.languages.css.selector.pattern,
      lookbehind: true,
      inside: (selectorInside = {
        'pseudo-element':
          /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
        'pseudo-class': /:[-\w]+/,
        class: /\.[-\w]+/,
        id: /#[-\w]+/,
        attribute: {
          pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
          greedy: true,
          inside: {
            punctuation: /^\[|\]$/,
            'case-sensitivity': {
              pattern: /(\s)[si]$/i,
              lookbehind: true,
              alias: 'keyword'
            },
            namespace: {
              pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
              lookbehind: true,
              inside: {
                punctuation: /\|$/
              }
            },
            'attr-name': {
              pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
              lookbehind: true
            },
            'attr-value': [
              string,
              {
                pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                lookbehind: true
              }
            ],
            operator: /[|~*^$]?=/
          }
        },
        'n-th': [
          {
            pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
            lookbehind: true,
            inside: {
              number: /[\dn]+/,
              operator: /[+-]/
            }
          },
          {
            pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
            lookbehind: true
          }
        ],
        combinator: />|\+|~|\|\|/,
        // the `tag` token has been existed and removed.
        // because we can't find a perfect tokenize to match it.
        // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.

        punctuation: /[(),]/
      })
    }
    Prism.languages.css['atrule'].inside['selector-function-argument'].inside =
      selectorInside
    Prism.languages.insertBefore('css', 'property', {
      variable: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
        lookbehind: true
      }
    })
    var unit = {
      pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
      lookbehind: true
    }
    // 123 -123 .123 -.123 12.3 -12.3
    var number = {
      pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
      lookbehind: true
    }
    Prism.languages.insertBefore('css', 'function', {
      operator: {
        pattern: /(\s)[+\-*\/](?=\s)/,
        lookbehind: true
      },
      // CAREFUL!
      // Previewers and Inline color use hexcode and color.
      hexcode: {
        pattern: /\B#[\da-f]{3,8}\b/i,
        alias: 'color'
      },
      color: [
        {
          pattern:
            /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
          lookbehind: true
        },
        {
          pattern:
            /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
          inside: {
            unit: unit,
            number: number,
            function: /[\w-]+(?=\()/,
            punctuation: /[(),]/
          }
        }
      ],
      // it's important that there is no boundary assertion after the hex digits
      entity: /\\[\da-f]{1,8}/i,
      unit: unit,
      number: number
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/css.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/css.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return css; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
css.displayName = 'css'
css.aliases = []

/** @param {Refractor} Prism */
function css(Prism) {
  ;(function (Prism) {
    var string =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/
    Prism.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp(
          '@[\\w-](?:' +
            /[^;{\s"']|\s+(?!\s)/.source +
            '|' +
            string.source +
            ')*?' +
            /(?:;|(?=\s*\{))/.source
        ),
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: 'selector'
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp(
          '\\burl\\((?:' +
            string.source +
            '|' +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ')\\)',
          'i'
        ),
        greedy: true,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp('^' + string.source + '$'),
            alias: 'url'
          }
        }
      },
      selector: {
        pattern: RegExp(
          '(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
            string.source +
            ')*(?=\\s*\\{)'
        ),
        lookbehind: true
      },
      string: {
        pattern: string,
        greedy: true
      },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      punctuation: /[(){};:,]/
    }
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css
    var markup = Prism.languages.markup
    if (markup) {
      markup.tag.addInlined('style', 'css')
      markup.tag.addAttribute('style', 'css')
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_cssExtras.js.map