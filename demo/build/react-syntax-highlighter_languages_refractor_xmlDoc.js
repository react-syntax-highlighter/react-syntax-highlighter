(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_xmlDoc"],{

/***/ "./node_modules/refractor/lang/xml-doc.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/xml-doc.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = xmlDoc
xmlDoc.displayName = 'xmlDoc'
xmlDoc.aliases = []
function xmlDoc(Prism) {
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