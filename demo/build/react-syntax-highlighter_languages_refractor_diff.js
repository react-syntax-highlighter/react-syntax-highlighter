(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_diff"],{

/***/ "./node_modules/refractor/lang/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/diff.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diff; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
diff.displayName = 'diff'
diff.aliases = []

/** @param {Refractor} Prism */
function diff(Prism) {
  ;(function (Prism) {
    Prism.languages.diff = {
      coord: [
        // Match all kinds of coord lines (prefixed by "+++", "---" or "***").
        /^(?:\*{3}|-{3}|\+{3}).*$/m,
        // Match "@@ ... @@" coord lines in unified diff.
        /^@@.*@@$/m,
        // Match coord lines in normal diff (starts with a number).
        /^\d.*$/m
      ]

      // deleted, inserted, unchanged, diff
    }

    /**
     * A map from the name of a block to its line prefix.
     *
     * @type {Object<string, string>}
     */
    var PREFIXES = {
      'deleted-sign': '-',
      'deleted-arrow': '<',
      'inserted-sign': '+',
      'inserted-arrow': '>',
      unchanged: ' ',
      diff: '!'
    }

    // add a token for each prefix
    Object.keys(PREFIXES).forEach(function (name) {
      var prefix = PREFIXES[name]
      var alias = []
      if (!/^\w+$/.test(name)) {
        // "deleted-sign" -> "deleted"
        alias.push(/\w+/.exec(name)[0])
      }
      if (name === 'diff') {
        alias.push('bold')
      }
      Prism.languages.diff[name] = {
        pattern: RegExp(
          '^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
          'm'
        ),
        alias: alias,
        inside: {
          line: {
            pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
            lookbehind: true
          },
          prefix: {
            pattern: /[\s\S]/,
            alias: /\w+/.exec(name)[0]
          }
        }
      }
    })

    // make prefixes available to Diff plugin
    Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
      value: PREFIXES
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_diff.js.map