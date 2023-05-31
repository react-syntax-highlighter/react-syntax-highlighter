(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_hoon"],{

/***/ "./node_modules/refractor/lang/hoon.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/hoon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hoon; });
// @ts-nocheck
hoon.displayName = 'hoon'
hoon.aliases = []

/** @type {import('../core.js').Syntax} */
function hoon(Prism) {
  Prism.languages.hoon = {
    comment: {
      pattern: /::.*/,
      greedy: true
    },
    string: {
      pattern: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,
      greedy: true
    },
    constant: /%(?:\.[ny]|[\w-]+)/,
    'class-name': /@(?:[a-z0-9-]*[a-z0-9])?|\*/i,
    function: /(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,
    keyword:
      /\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_hoon.js.map