(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_qml"],{

/***/ "./node_modules/refractor/lang/qml.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/qml.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return qml; });
/* harmony import */ var _javascript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript.js */ "./node_modules/refractor/lang/javascript.js");
// @ts-nocheck

qml.displayName = 'qml'
qml.aliases = []

/** @type {import('../core.js').Syntax} */
function qml(Prism) {
  Prism.register(_javascript_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var jsString = /"(?:\\.|[^\\"\r\n])*"|'(?:\\.|[^\\'\r\n])*'/.source
    var jsComment = /\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))*\*\//.source
    var jsExpr =
      /(?:[^\\()[\]{}"'/]|<string>|\/(?![*/])|<comment>|\(<expr>*\)|\[<expr>*\]|\{<expr>*\}|\\[\s\S])/.source
        .replace(/<string>/g, function () {
          return jsString
        })
        .replace(/<comment>/g, function () {
          return jsComment
        })

    // the pattern will blow up, so only a few iterations
    for (var i = 0; i < 2; i++) {
      jsExpr = jsExpr.replace(/<expr>/g, function () {
        return jsExpr
      })
    }
    jsExpr = jsExpr.replace(/<expr>/g, '[^\\s\\S]')
    Prism.languages.qml = {
      comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
        greedy: true
      },
      'javascript-function': {
        pattern: RegExp(
          /((?:^|;)[ \t]*)function\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*\(<js>*\)\s*\{<js>*\}/.source.replace(
            /<js>/g,
            function () {
              return jsExpr
            }
          ),
          'm'
        ),
        lookbehind: true,
        greedy: true,
        alias: 'language-javascript',
        inside: Prism.languages.javascript
      },
      'class-name': {
        pattern: /((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,
        lookbehind: true
      },
      property: [
        {
          pattern: /((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
          lookbehind: true
        },
        {
          pattern:
            /((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
          lookbehind: true,
          inside: {
            keyword: /^property/,
            property: /\w+(?:\.\w+)*/
          }
        }
      ],
      'javascript-expression': {
        pattern: RegExp(
          /(:[ \t]*)(?![\s;}[])(?:(?!$|[;}])<js>)+/.source.replace(
            /<js>/g,
            function () {
              return jsExpr
            }
          ),
          'm'
        ),
        lookbehind: true,
        greedy: true,
        alias: 'language-javascript',
        inside: Prism.languages.javascript
      },
      string: {
        pattern: /"(?:\\.|[^\\"\r\n])*"/,
        greedy: true
      },
      keyword: /\b(?:as|import|on)\b/,
      punctuation: /[{}[\]:;,]/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_qml.js.map