(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_solutionFile"],{

/***/ "./node_modules/refractor/lang/solution-file.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/solution-file.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return solutionFile; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
solutionFile.displayName = 'solution-file'
solutionFile.aliases = ['sln']

/** @param {Refractor} Prism */
function solutionFile(Prism) {
  ;(function (Prism) {
    var guid = {
      // https://en.wikipedia.org/wiki/Universally_unique_identifier#Format
      pattern: /\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,
      alias: 'constant',
      inside: {
        punctuation: /[{}]/
      }
    }
    Prism.languages['solution-file'] = {
      comment: {
        pattern: /#.*/,
        greedy: true
      },
      string: {
        pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
        greedy: true,
        inside: {
          guid: guid
        }
      },
      object: {
        // Foo
        //   Bar("abs") = 9
        //   EndBar
        //   Prop = TRUE
        // EndFoo
        pattern:
          /^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,
        lookbehind: true,
        greedy: true,
        alias: 'keyword'
      },
      property: {
        pattern: /^([ \t]*)(?!\s)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,
        lookbehind: true,
        inside: {
          guid: guid
        }
      },
      guid: guid,
      number: /\b\d+(?:\.\d+)*\b/,
      boolean: /\b(?:FALSE|TRUE)\b/,
      operator: /=/,
      punctuation: /[(),]/
    }
    Prism.languages['sln'] = Prism.languages['solution-file']
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_solutionFile.js.map