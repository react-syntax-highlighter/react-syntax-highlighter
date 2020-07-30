(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_ebnf"],{

/***/ "./node_modules/highlight.js/lib/languages/ebnf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ebnf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Extended Backus-Naur Form
Author: Alex McKibben <alex@nullscope.net>
Website: https://en.wikipedia.org/wiki/Extended_Backus–Naur_form
*/

function ebnf(hljs) {
    var commentMode = hljs.COMMENT(/\(\*/, /\*\)/);

    var nonTerminalMode = {
        className: "attribute",
        begin: /^[ ]*[a-zA-Z][a-zA-Z-_]*([\s-_]+[a-zA-Z][a-zA-Z]*)*/
    };

    var specialSequenceMode = {
        className: "meta",
        begin: /\?.*\?/
    };

    var ruleBodyMode = {
        begin: /=/, end: /[.;]/,
        contains: [
            commentMode,
            specialSequenceMode,
            {
              // terminals
              className: 'string',
              variants: [
                hljs.APOS_STRING_MODE,
                hljs.QUOTE_STRING_MODE,
                {begin: '`', end: '`'},
              ]
            },
        ]
    };

    return {
        name: 'Extended Backus-Naur Form',
        illegal: /\S/,
        contains: [
            commentMode,
            nonTerminalMode,
            ruleBodyMode
        ]
    };
}

module.exports = ebnf;


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_ebnf-build.js.map