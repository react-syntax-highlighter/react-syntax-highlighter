(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_nginx"],{

/***/ "./node_modules/refractor/lang/nginx.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/nginx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = nginx
nginx.displayName = 'nginx'
nginx.aliases = []
function nginx(Prism) {
  ;(function (Prism) {
    var variable =
      /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i
    Prism.languages.nginx = {
      comment: {
        pattern: /(^|[\s{};])#.*/,
        lookbehind: true,
        greedy: true
      },
      directive: {
        pattern:
          /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
        lookbehind: true,
        greedy: true,
        inside: {
          string: {
            pattern:
              /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
            lookbehind: true,
            greedy: true,
            inside: {
              escape: {
                pattern: /\\["'\\nrt]/,
                alias: 'entity'
              },
              variable: variable
            }
          },
          comment: {
            pattern: /(\s)#.*/,
            lookbehind: true,
            greedy: true
          },
          keyword: {
            pattern: /^\S+/,
            greedy: true
          },
          // other patterns
          boolean: {
            pattern: /(\s)(?:off|on)(?!\S)/,
            lookbehind: true
          },
          number: {
            pattern: /(\s)\d+[a-z]*(?!\S)/i,
            lookbehind: true
          },
          variable: variable
        }
      },
      punctuation: /[{};]/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_nginx.js.map