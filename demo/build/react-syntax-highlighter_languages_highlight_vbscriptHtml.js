"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_vbscriptHtml"],{

/***/ "./node_modules/highlight.js/es/languages/vbscript-html.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/vbscript-html.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vbscriptHtml)
/* harmony export */ });
/*
Language: VBScript in HTML
Requires: xml.js, vbscript.js
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Description: "Bridge" language defining fragments of VBScript in HTML within <% .. %>
Website: https://en.wikipedia.org/wiki/VBScript
Category: scripting
*/

function vbscriptHtml(hljs) {
  return {
    name: 'VBScript in HTML',
    subLanguage: 'xml',
    contains: [
      {
        begin: '<%',
        end: '%>',
        subLanguage: 'vbscript'
      }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_vbscriptHtml.js.map