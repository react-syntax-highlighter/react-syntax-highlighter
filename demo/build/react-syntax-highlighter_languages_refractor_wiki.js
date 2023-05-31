(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_wiki"],{

/***/ "./node_modules/refractor/lang/wiki.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/wiki.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wiki; });
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck

wiki.displayName = 'wiki'
wiki.aliases = []

/** @type {import('../core.js').Syntax} */
function wiki(Prism) {
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.wiki = Prism.languages.extend('markup', {
    'block-comment': {
      pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
      lookbehind: true,
      alias: 'comment'
    },
    heading: {
      pattern: /^(=+)[^=\r\n].*?\1/m,
      inside: {
        punctuation: /^=+|=+$/,
        important: /.+/
      }
    },
    emphasis: {
      // TODO Multi-line
      pattern: /('{2,5}).+?\1/,
      inside: {
        'bold-italic': {
          pattern: /(''''').+?(?=\1)/,
          lookbehind: true,
          alias: ['bold', 'italic']
        },
        bold: {
          pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
          lookbehind: true
        },
        italic: {
          pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
          lookbehind: true
        },
        punctuation: /^''+|''+$/
      }
    },
    hr: {
      pattern: /^-{4,}/m,
      alias: 'punctuation'
    },
    url: [
      /ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i,
      /\[\[.+?\]\]|\[.+?\]/
    ],
    variable: [
      /__[A-Z]+__/,
      // FIXME Nested structures should be handled
      // {{formatnum:{{#expr:{{{3}}}}}}}
      /\{{3}.+?\}{3}/,
      /\{\{.+?\}\}/
    ],
    symbol: [/^#redirect/im, /~{3,5}/],
    // Handle table attrs:
    // {|
    // ! style="text-align:left;"| Item
    // |}
    'table-tag': {
      pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
      lookbehind: true,
      inside: {
        'table-bar': {
          pattern: /\|$/,
          alias: 'punctuation'
        },
        rest: Prism.languages.markup['tag'].inside
      }
    },
    punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
  })
  Prism.languages.insertBefore('wiki', 'tag', {
    // Prevent highlighting inside <nowiki>, <source> and <pre> tags
    nowiki: {
      pattern: /<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,
      inside: {
        tag: {
          pattern: /<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,
          inside: Prism.languages.markup['tag'].inside
        }
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_wiki.js.map