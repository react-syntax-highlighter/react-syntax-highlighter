(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_abnf"],{

/***/ "./node_modules/refractor/lang/abnf.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/abnf.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return abnf; });
// @ts-nocheck
abnf.displayName = 'abnf'
abnf.aliases = []

/** @type {import('../core.js').Syntax} */
function abnf(Prism) {
  ;(function (Prism) {
    var coreRules =
      '(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)'
    Prism.languages.abnf = {
      comment: /;.*/,
      string: {
        pattern: /(?:%[is])?"[^"\n\r]*"/,
        greedy: true,
        inside: {
          punctuation: /^%[is]/
        }
      },
      range: {
        pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
        alias: 'number'
      },
      terminal: {
        pattern:
          /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
        alias: 'number'
      },
      repetition: {
        pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
        lookbehind: true,
        alias: 'operator'
      },
      definition: {
        pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,
        lookbehind: true,
        alias: 'keyword',
        inside: {
          punctuation: /<|>/
        }
      },
      'core-rule': {
        pattern: RegExp(
          '(?:(^|[^<\\w-])' + coreRules + '|<' + coreRules + '>)(?![\\w-])',
          'i'
        ),
        lookbehind: true,
        alias: ['rule', 'constant'],
        inside: {
          punctuation: /<|>/
        }
      },
      rule: {
        pattern: /(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,
        lookbehind: true,
        inside: {
          punctuation: /<|>/
        }
      },
      operator: /=\/?|\//,
      punctuation: /[()\[\]]/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_abnf.js.map