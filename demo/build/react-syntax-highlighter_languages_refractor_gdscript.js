(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_gdscript"],{

/***/ "./node_modules/refractor/lang/gdscript.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/gdscript.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gdscript; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
gdscript.displayName = 'gdscript'
gdscript.aliases = []

/** @param {Refractor} Prism */
function gdscript(Prism) {
  Prism.languages.gdscript = {
    comment: /#.*/,
    string: {
      pattern:
        /@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/,
      greedy: true
    },
    'class-name': {
      // class_name Foo, extends Bar, class InnerClass
      // export(int) var baz, export(int, 0) var i
      // as Node
      // const FOO: int = 9, var bar: bool = true
      // func add(reference: Item, amount: int) -> Item:
      pattern:
        /(^(?:class|class_name|extends)[ \t]+|^export\([ \t]*|\bas[ \t]+|(?:\b(?:const|var)[ \t]|[,(])[ \t]*\w+[ \t]*:[ \t]*|->[ \t]*)[a-zA-Z_]\w*/m,
      lookbehind: true
    },
    keyword:
      /\b(?:and|as|assert|break|breakpoint|class|class_name|const|continue|elif|else|enum|export|extends|for|func|if|in|is|master|mastersync|match|not|null|onready|or|pass|preload|puppet|puppetsync|remote|remotesync|return|self|setget|signal|static|tool|var|while|yield)\b/,
    function: /\b[a-z_]\w*(?=[ \t]*\()/i,
    variable: /\$\w+/,
    number: [
      /\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/,
      /\b(?:INF|NAN|PI|TAU)\b/
    ],
    constant: /\b[A-Z][A-Z_\d]*\b/,
    boolean: /\b(?:false|true)\b/,
    operator: /->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/,
    punctuation: /[.:,;()[\]{}]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_gdscript.js.map