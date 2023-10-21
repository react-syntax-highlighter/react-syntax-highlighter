(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_latex"],{

/***/ "./node_modules/refractor/lang/latex.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/latex.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return latex; });
// @ts-nocheck
latex.displayName = 'latex'
latex.aliases = ['context', 'tex']

/** @type {import('../core.js').Syntax} */
function latex(Prism) {
  ;(function (Prism) {
    var funcPattern = /\\(?:[^a-z()[\]]|[a-z*]+)/i
    var insideEqu = {
      'equation-command': {
        pattern: funcPattern,
        alias: 'regex'
      }
    }
    Prism.languages.latex = {
      comment: /%.*/,
      // the verbatim environment prints whitespace to the document
      cdata: {
        pattern:
          /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: true
      },
      /*
       * equations can be between $$ $$ or $ $ or \( \) or \[ \]
       * (all are multiline)
       */
      equation: [
        {
          pattern:
            /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
          inside: insideEqu,
          alias: 'string'
        },
        {
          pattern:
            /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
          lookbehind: true,
          inside: insideEqu,
          alias: 'string'
        }
      ],
      /*
       * arguments which are keywords or references are highlighted
       * as keywords
       */
      keyword: {
        pattern:
          /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
        lookbehind: true
      },
      url: {
        pattern: /(\\url\{)[^}]+(?=\})/,
        lookbehind: true
      },
      /*
       * section or chapter headlines are highlighted as bold so that
       * they stand out more
       */
      headline: {
        pattern:
          /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
        lookbehind: true,
        alias: 'class-name'
      },
      function: {
        pattern: funcPattern,
        alias: 'selector'
      },
      punctuation: /[[\]{}&]/
    }
    Prism.languages.tex = Prism.languages.latex
    Prism.languages.context = Prism.languages.latex
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_latex.js.map