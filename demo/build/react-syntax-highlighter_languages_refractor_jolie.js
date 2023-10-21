(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_jolie"],{

/***/ "./node_modules/refractor/lang/jolie.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/jolie.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jolie; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

jolie.displayName = 'jolie'
jolie.aliases = []

/** @type {import('../core.js').Syntax} */
function jolie(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.jolie = Prism.languages.extend('clike', {
    string: {
      pattern: /(^|[^\\])"(?:\\[\s\S]|[^"\\])*"/,
      lookbehind: true,
      greedy: true
    },
    'class-name': {
      pattern:
        /((?:\b(?:as|courier|embed|in|inputPort|outputPort|service)\b|@)[ \t]*)\w+/,
      lookbehind: true
    },
    keyword:
      /\b(?:as|cH|comp|concurrent|constants|courier|cset|csets|default|define|else|embed|embedded|execution|exit|extender|for|foreach|forward|from|global|if|import|in|include|init|inputPort|install|instanceof|interface|is_defined|linkIn|linkOut|main|new|nullProcess|outputPort|over|private|provide|public|scope|sequential|service|single|spawn|synchronized|this|throw|throws|type|undef|until|while|with)\b/,
    function: /\b[a-z_]\w*(?=[ \t]*[@(])/i,
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?l?/i,
    operator: /-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[?\/%^@|]/,
    punctuation: /[()[\]{},;.:]/,
    builtin:
      /\b(?:Byte|any|bool|char|double|enum|float|int|length|long|ranges|regex|string|undefined|void)\b/
  })
  Prism.languages.insertBefore('jolie', 'keyword', {
    aggregates: {
      pattern:
        /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
      lookbehind: true,
      inside: {
        keyword: /\bwith\b/,
        'class-name': /\w+/,
        punctuation: /,/
      }
    },
    redirects: {
      pattern:
        /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
      lookbehind: true,
      inside: {
        punctuation: /,/,
        'class-name': /\w+/,
        operator: /=>/
      }
    },
    property: {
      pattern:
        /\b(?:Aggregates|[Ii]nterfaces|Java|Javascript|Jolie|[Ll]ocation|OneWay|[Pp]rotocol|Redirects|RequestResponse)\b(?=[ \t]*:)/
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jolie.js.map