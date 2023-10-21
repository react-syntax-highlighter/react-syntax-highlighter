(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_typoscript"],{

/***/ "./node_modules/refractor/lang/typoscript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typoscript.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return typoscript; });
// @ts-nocheck
typoscript.displayName = 'typoscript'
typoscript.aliases = ['tsconfig']

/** @type {import('../core.js').Syntax} */
function typoscript(Prism) {
  ;(function (Prism) {
    var keywords =
      /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/
    Prism.languages.typoscript = {
      comment: [
        {
          // multiline comments /* */
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true
        },
        {
          // double-slash comments - ignored when backslashes or colon is found in front
          // also ignored whenever directly after an equal-sign, because it would probably be an url without protocol
          pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
          lookbehind: true,
          greedy: true
        },
        {
          // hash comments - ignored when leading quote is found for hex colors in strings
          pattern: /(^|[^"'])#.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      function: [
        {
          // old include style
          pattern:
            /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
          inside: {
            string: {
              pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
              inside: {
                keyword: keywords
              }
            },
            keyword: {
              pattern: /INCLUDE_TYPOSCRIPT/
            }
          }
        },
        {
          // new include style
          pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
          inside: {
            string: /"[^"\r\n]*"|'[^'\r\n]*'/
          }
        }
      ],
      string: {
        pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/,
        lookbehind: true,
        inside: {
          function: /\{\$.*\}/,
          // constants include
          keyword: keywords,
          number: /^\d+$/,
          punctuation: /[,|:]/
        }
      },
      keyword: keywords,
      number: {
        // special highlighting for indexes of arrays in tags
        pattern: /\b\d+\s*[.{=]/,
        inside: {
          operator: /[.{=]/
        }
      },
      tag: {
        pattern: /\.?[-\w\\]+\.?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /[{}[\];(),.:|]/,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
    }
    Prism.languages.tsconfig = Prism.languages.typoscript
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_typoscript.js.map