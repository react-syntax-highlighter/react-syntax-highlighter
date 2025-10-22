(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_wolfram"],{

/***/ "./node_modules/refractor/lang/wolfram.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/wolfram.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wolfram
wolfram.displayName = 'wolfram'
wolfram.aliases = ['mathematica', 'wl', 'nb']
function wolfram(Prism) {
  Prism.languages.wolfram = {
    // Allow one level of nesting - note: regex taken from applescipt
    comment: /\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,
    string: {
      pattern: /"(?:\\.|[^"\\\r\n])*"/,
      greedy: true
    },
    keyword:
      /\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/,
    context: {
      pattern: /\b\w+`+\w*/,
      alias: 'class-name'
    },
    blank: {
      pattern: /\b\w+_\b/,
      alias: 'regex'
    },
    'global-variable': {
      pattern: /\$\w+/,
      alias: 'variable'
    },
    boolean: /\b(?:False|True)\b/,
    number:
      /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    operator:
      /\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\^|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
  }
  Prism.languages.mathematica = Prism.languages.wolfram
  Prism.languages.wl = Prism.languages.wolfram
  Prism.languages.nb = Prism.languages.wolfram
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_wolfram.js.map