(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_less"],{

/***/ "./node_modules/refractor/lang/less.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/less.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = less
less.displayName = 'less'
less.aliases = []
function less(Prism) {
  /* FIXME :
:extend() is not handled specifically : its highlighting is buggy.
Mixin usage must be inside a ruleset to be highlighted.
At-rules (e.g. import) containing interpolations are buggy.
Detached rulesets are highlighted as at-rules.
A comment before a mixin usage prevents the latter to be properly highlighted.
*/
  Prism.languages.less = Prism.languages.extend('css', {
    comment: [
      /\/\*[\s\S]*?\*\//,
      {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: true
      }
    ],
    atrule: {
      pattern:
        /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        punctuation: /[:()]/
      }
    },
    // selectors and mixins are considered the same
    selector: {
      pattern:
        /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        // mixin parameters
        variable: /@+[\w-]+/
      }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
    operator: /[+\-*\/]/
  })
  Prism.languages.insertBefore('less', 'property', {
    variable: [
      // Variable declaration (the colon must be consumed!)
      {
        pattern: /@[\w-]+\s*:/,
        inside: {
          punctuation: /:/
        }
      }, // Variable usage
      /@@?[\w-]+/
    ],
    'mixin-usage': {
      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
      lookbehind: true,
      alias: 'function'
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_less.js.map