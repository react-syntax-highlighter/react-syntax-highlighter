"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_mizar"],{

/***/ "./node_modules/highlight.js/es/languages/mizar.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/mizar.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mizar)
/* harmony export */ });
/*
Language: Mizar
Description: The Mizar Language is a formal language derived from the mathematical vernacular.
Author: Kelley van Evert <kelleyvanevert@gmail.com>
Website: http://mizar.org/language/
Category: scientific
*/

function mizar(hljs) {
  return {
    name: 'Mizar',
    keywords:
      'environ vocabularies notations constructors definitions '
      + 'registrations theorems schemes requirements begin end definition '
      + 'registration cluster existence pred func defpred deffunc theorem '
      + 'proof let take assume then thus hence ex for st holds consider '
      + 'reconsider such that and in provided of as from be being by means '
      + 'equals implies iff redefine define now not or attr is mode '
      + 'suppose per cases set thesis contradiction scheme reserve struct '
      + 'correctness compatibility coherence symmetry assymetry '
      + 'reflexivity irreflexivity connectedness uniqueness commutativity '
      + 'idempotence involutiveness projectivity',
    contains: [ hljs.COMMENT('::', '$') ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_mizar.js.map