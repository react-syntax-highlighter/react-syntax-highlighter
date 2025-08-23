(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_toml"],{

/***/ "./node_modules/refractor/lang/toml.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/toml.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toml; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
toml.displayName = 'toml'
toml.aliases = []

/** @param {Refractor} Prism */
function toml(Prism) {
  ;(function (Prism) {
    var key = /(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source

    /**
     * @param {string} pattern
     */
    function insertKey(pattern) {
      return pattern.replace(/__/g, function () {
        return key
      })
    }
    Prism.languages.toml = {
      comment: {
        pattern: /#.*/,
        greedy: true
      },
      table: {
        pattern: RegExp(
          insertKey(
            /(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source
          ),
          'm'
        ),
        lookbehind: true,
        greedy: true,
        alias: 'class-name'
      },
      key: {
        pattern: RegExp(
          insertKey(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source),
          'm'
        ),
        lookbehind: true,
        greedy: true,
        alias: 'property'
      },
      string: {
        pattern:
          /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
        greedy: true
      },
      date: [
        {
          // Offset Date-Time, Local Date-Time, Local Date
          pattern:
            /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
          alias: 'number'
        },
        {
          // Local Time
          pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,
          alias: 'number'
        }
      ],
      number:
        /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
      boolean: /\b(?:false|true)\b/,
      punctuation: /[.,=[\]{}]/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_toml.js.map