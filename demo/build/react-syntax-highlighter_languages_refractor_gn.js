(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_gn"],{

/***/ "./node_modules/refractor/lang/gn.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/gn.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gn; });
// @ts-nocheck
gn.displayName = 'gn'
gn.aliases = ['gni']

/** @type {import('../core.js').Syntax} */
function gn(Prism) {
  // https://gn.googlesource.com/gn/+/refs/heads/main/docs/reference.md#grammar

  Prism.languages.gn = {
    comment: {
      pattern: /#.*/,
      greedy: true
    },
    'string-literal': {
      pattern: /(^|[^\\"])"(?:[^\r\n"\\]|\\.)*"/,
      lookbehind: true,
      greedy: true,
      inside: {
        interpolation: {
          pattern:
            /((?:^|[^\\])(?:\\{2})*)\$(?:\{[\s\S]*?\}|[a-zA-Z_]\w*|0x[a-fA-F0-9]{2})/,
          lookbehind: true,
          inside: {
            number: /^\$0x[\s\S]{2}$/,
            variable: /^\$\w+$/,
            'interpolation-punctuation': {
              pattern: /^\$\{|\}$/,
              alias: 'punctuation'
            },
            expression: {
              pattern: /[\s\S]+/,
              inside: null // see below
            }
          }
        },

        string: /[\s\S]+/
      }
    },
    keyword: /\b(?:else|if)\b/,
    boolean: /\b(?:false|true)\b/,
    'builtin-function': {
      // a few functions get special highlighting to improve readability
      pattern:
        /\b(?:assert|defined|foreach|import|pool|print|template|tool|toolchain)(?=\s*\()/i,
      alias: 'keyword'
    },
    function: /\b[a-z_]\w*(?=\s*\()/i,
    constant:
      /\b(?:current_cpu|current_os|current_toolchain|default_toolchain|host_cpu|host_os|root_build_dir|root_gen_dir|root_out_dir|target_cpu|target_gen_dir|target_os|target_out_dir)\b/,
    number: /-?\b\d+\b/,
    operator: /[-+!=<>]=?|&&|\|\|/,
    punctuation: /[(){}[\],.]/
  }
  Prism.languages.gn['string-literal'].inside['interpolation'].inside[
    'expression'
  ].inside = Prism.languages.gn
  Prism.languages.gni = Prism.languages.gn
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_gn.js.map