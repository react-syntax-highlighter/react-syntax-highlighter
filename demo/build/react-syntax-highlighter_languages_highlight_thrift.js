"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_thrift"],{

/***/ "./node_modules/highlight.js/es/languages/thrift.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/thrift.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ thrift)
/* harmony export */ });
/*
Language: Thrift
Author: Oleg Efimov <efimovov@gmail.com>
Description: Thrift message definition format
Website: https://thrift.apache.org
Category: protocols
*/

function thrift(hljs) {
  const TYPES = [
    "bool",
    "byte",
    "i16",
    "i32",
    "i64",
    "double",
    "string",
    "binary"
  ];
  const KEYWORDS = [
    "namespace",
    "const",
    "typedef",
    "struct",
    "enum",
    "service",
    "exception",
    "void",
    "oneway",
    "set",
    "list",
    "map",
    "required",
    "optional"
  ];
  return {
    name: 'Thrift',
    keywords: {
      keyword: KEYWORDS,
      type: TYPES,
      literal: 'true false'
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'class',
        beginKeywords: 'struct enum service exception',
        end: /\{/,
        illegal: /\n/,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            // hack: eating everything after the first title
            starts: {
              endsWithParent: true,
              excludeEnd: true
            } })
        ]
      },
      {
        begin: '\\b(set|list|map)\\s*<',
        keywords: { type: [
          ...TYPES,
          "set",
          "list",
          "map"
        ] },
        end: '>',
        contains: [ 'self' ]
      }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_thrift.js.map