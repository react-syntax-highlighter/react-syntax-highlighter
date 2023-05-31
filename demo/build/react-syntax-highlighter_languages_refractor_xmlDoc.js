(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_xmlDoc"],{

/***/ "./node_modules/refractor/lang/xml-doc.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/xml-doc.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return xmlDoc; });
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck

xmlDoc.displayName = 'xml-doc'
xmlDoc.aliases = []

/** @type {import('../core.js').Syntax} */
function xmlDoc(Prism) {
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    /**
     * If the given language is present, it will insert the given doc comment grammar token into it.
     *
     * @param {string} lang
     * @param {any} docComment
     */
    function insertDocComment(lang, docComment) {
      if (Prism.languages[lang]) {
        Prism.languages.insertBefore(lang, 'comment', {
          'doc-comment': docComment
        })
      }
    }
    var tag = Prism.languages.markup.tag
    var slashDocComment = {
      pattern: /\/\/\/.*/,
      greedy: true,
      alias: 'comment',
      inside: {
        tag: tag
      }
    }
    var tickDocComment = {
      pattern: /'''.*/,
      greedy: true,
      alias: 'comment',
      inside: {
        tag: tag
      }
    }
    insertDocComment('csharp', slashDocComment)
    insertDocComment('fsharp', slashDocComment)
    insertDocComment('vbnet', tickDocComment)
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_xmlDoc.js.map