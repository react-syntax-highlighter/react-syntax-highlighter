(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_vhdl"],{

/***/ "./node_modules/refractor/lang/vhdl.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/vhdl.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vhdl; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
vhdl.displayName = 'vhdl'
vhdl.aliases = []

/** @param {Refractor} Prism */
function vhdl(Prism) {
  Prism.languages.vhdl = {
    comment: /--.+/,
    // support for all logic vectors
    'vhdl-vectors': {
      pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
      alias: 'number'
    },
    // support for operator overloading included
    'quoted-function': {
      pattern: /"\S+?"(?=\()/,
      alias: 'function'
    },
    string: /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
    attribute: {
      pattern: /\b'\w+/,
      alias: 'attr-name'
    },
    // support for predefined attributes included
    keyword:
      /\b(?:access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|private|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|view|wait|when|while|with)\b/i,
    boolean: /\b(?:false|true)\b/i,
    function: /\w+(?=\()/,
    // decimal, based, physical, and exponential numbers supported
    number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
    operator:
      /[<>]=?|:=|[-+*/&=]|\b(?:abs|and|mod|nand|nor|not|or|rem|rol|ror|sla|sll|sra|srl|xnor|xor)\b/i,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_vhdl.js.map