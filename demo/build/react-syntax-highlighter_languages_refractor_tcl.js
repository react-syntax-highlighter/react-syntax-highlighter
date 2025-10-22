(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_tcl"],{

/***/ "./node_modules/refractor/lang/tcl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tcl.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tcl; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
tcl.displayName = 'tcl'
tcl.aliases = []

/** @param {Refractor} Prism */
function tcl(Prism) {
  Prism.languages.tcl = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true
    },
    string: {
      pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
      greedy: true
    },
    variable: [
      {
        pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,
        lookbehind: true
      },
      {
        pattern: /(\$)\{[^}]+\}/,
        lookbehind: true
      },
      {
        pattern: /(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
        lookbehind: true
      }
    ],
    function: {
      pattern: /(^[\t ]*proc[ \t]+)\S+/m,
      lookbehind: true
    },
    builtin: [
      {
        pattern:
          /(^[\t ]*)(?:break|class|continue|error|eval|exit|for|foreach|if|proc|return|switch|while)\b/m,
        lookbehind: true
      },
      /\b(?:else|elseif)\b/
    ],
    scope: {
      pattern: /(^[\t ]*)(?:global|upvar|variable)\b/m,
      lookbehind: true,
      alias: 'constant'
    },
    keyword: {
      pattern:
        /(^[\t ]*|\[)(?:Safe_Base|Tcl|after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|scan|seek|set|socket|source|split|string|subst|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|test|vars|wordBreak(?:After|Before))|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
      lookbehind: true
    },
    operator:
      /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|in|ne|ni)\b/,
    punctuation: /[{}()\[\]]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tcl.js.map