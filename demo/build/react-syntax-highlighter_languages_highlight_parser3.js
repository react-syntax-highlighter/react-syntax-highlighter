"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_parser3"],{

/***/ "./node_modules/highlight.js/es/languages/parser3.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/parser3.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parser3)
/* harmony export */ });
/*
Language: Parser3
Requires: xml.js
Author: Oleg Volchkov <oleg@volchkov.net>
Website: https://www.parser.ru/en/
Category: template
*/

function parser3(hljs) {
  const CURLY_SUBCOMMENT = hljs.COMMENT(
    /\{/,
    /\}/,
    { contains: [ 'self' ] }
  );
  return {
    name: 'Parser3',
    subLanguage: 'xml',
    relevance: 0,
    contains: [
      hljs.COMMENT('^#', '$'),
      hljs.COMMENT(
        /\^rem\{/,
        /\}/,
        {
          relevance: 10,
          contains: [ CURLY_SUBCOMMENT ]
        }
      ),
      {
        className: 'meta',
        begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
        relevance: 10
      },
      {
        className: 'title',
        begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
      },
      {
        className: 'variable',
        begin: /\$\{?[\w\-.:]+\}?/
      },
      {
        className: 'keyword',
        begin: /\^[\w\-.:]+/
      },
      {
        className: 'number',
        begin: '\\^#[0-9a-fA-F]+'
      },
      hljs.C_NUMBER_MODE
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_parser3.js.map