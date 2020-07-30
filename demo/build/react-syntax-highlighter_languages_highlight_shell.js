(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_shell"],{

/***/ "./node_modules/highlight.js/lib/languages/shell.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/shell.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Shell Session
Requires: bash.js
Author: TSUYUSATO Kitsune <make.just.on@gmail.com>
Category: common
*/

function shell(hljs) {
  return {
    name: 'Shell Session',
    aliases: ['console'],
    contains: [
      {
        className: 'meta',
        begin: '^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]',
        starts: {
          end: '$', subLanguage: 'bash'
        }
      }
    ]
  }
}

module.exports = shell;


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_shell.js.map