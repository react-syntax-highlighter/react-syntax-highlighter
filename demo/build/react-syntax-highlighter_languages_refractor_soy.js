(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_soy"],{

/***/ "./node_modules/refractor/lang/soy.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/soy.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return soy; });
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

soy.displayName = 'soy'
soy.aliases = []

/** @param {Refractor} Prism */
function soy(Prism) {
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var stringPattern = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
    var numberPattern = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/
    Prism.languages.soy = {
      comment: [
        /\/\*[\s\S]*?\*\//,
        {
          pattern: /(\s)\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      'command-arg': {
        pattern:
          /(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
        lookbehind: true,
        alias: 'string',
        inside: {
          punctuation: /\./
        }
      },
      parameter: {
        pattern: /(\{+\/?\s*@?param\??\s+)\.?[\w.]+/,
        lookbehind: true,
        alias: 'variable'
      },
      keyword: [
        {
          pattern:
            /(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
          lookbehind: true
        },
        /\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/
      ],
      delimiter: {
        pattern: /^\{+\/?|\/?\}+$/,
        alias: 'punctuation'
      },
      property: /\w+(?==)/,
      variable: {
        pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/,
        inside: {
          string: {
            pattern: stringPattern,
            greedy: true
          },
          number: numberPattern,
          punctuation: /[\[\].?]/
        }
      },
      string: {
        pattern: stringPattern,
        greedy: true
      },
      function: [
        /\w+(?=\()/,
        {
          pattern: /(\|[^\S\r\n]*)\w+/,
          lookbehind: true
        }
      ],
      boolean: /\b(?:false|true)\b/,
      number: numberPattern,
      operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
      punctuation: /[{}()\[\]|.,:]/
    }

    // Tokenize all inline Soy expressions
    Prism.hooks.add('before-tokenize', function (env) {
      var soyPattern = /\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g
      var soyLitteralStart = '{literal}'
      var soyLitteralEnd = '{/literal}'
      var soyLitteralMode = false
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'soy',
        soyPattern,
        function (match) {
          // Soy tags inside {literal} block are ignored
          if (match === soyLitteralEnd) {
            soyLitteralMode = false
          }
          if (!soyLitteralMode) {
            if (match === soyLitteralStart) {
              soyLitteralMode = true
            }
            return true
          }
          return false
        }
      )
    })

    // Re-insert the tokens after tokenizing
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'soy')
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_soy.js.map