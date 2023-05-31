(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_agda"],{

/***/ "./node_modules/refractor/lang/agda.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/agda.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return agda; });
// @ts-nocheck
agda.displayName = 'agda'
agda.aliases = []

/** @type {import('../core.js').Syntax} */
function agda(Prism) {
  ;(function (Prism) {
    Prism.languages.agda = {
      comment: /\{-[\s\S]*?(?:-\}|$)|--.*/,
      string: {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
        greedy: true
      },
      punctuation: /[(){}⦃⦄.;@]/,
      'class-name': {
        pattern: /((?:data|record) +)\S+/,
        lookbehind: true
      },
      function: {
        pattern: /(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m,
        lookbehind: true
      },
      operator: {
        pattern: /(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,
        lookbehind: true
      },
      keyword:
        /\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_agda.js.map