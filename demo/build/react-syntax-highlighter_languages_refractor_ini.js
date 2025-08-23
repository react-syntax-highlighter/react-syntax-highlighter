(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_ini"],{

/***/ "./node_modules/refractor/lang/ini.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ini.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ini; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
ini.displayName = 'ini'
ini.aliases = []

/** @param {Refractor} Prism */
function ini(Prism) {
  Prism.languages.ini = {
    /**
     * The component mimics the behavior of the Win32 API parser.
     *
     * @see {@link https://github.com/PrismJS/prism/issues/2775#issuecomment-787477723}
     */

    comment: {
      pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
      lookbehind: true
    },
    section: {
      pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
      lookbehind: true,
      inside: {
        'section-name': {
          pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
          lookbehind: true,
          alias: 'selector'
        },
        punctuation: /\[|\]/
      }
    },
    key: {
      pattern:
        /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
      lookbehind: true,
      alias: 'attr-name'
    },
    value: {
      pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
      lookbehind: true,
      alias: 'attr-value',
      inside: {
        'inner-value': {
          pattern: /^("|').+(?=\1$)/,
          lookbehind: true
        }
      }
    },
    punctuation: /=/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ini.js.map