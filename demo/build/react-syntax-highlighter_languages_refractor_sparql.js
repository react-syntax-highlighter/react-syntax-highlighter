(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_sparql"],{

/***/ "./node_modules/refractor/lang/sparql.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/sparql.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sparql; });
/* harmony import */ var _turtle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./turtle.js */ "./node_modules/refractor/lang/turtle.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

sparql.displayName = 'sparql'
sparql.aliases = ['rq']

/** @param {Refractor} Prism */
function sparql(Prism) {
  Prism.register(_turtle_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.sparql = Prism.languages.extend('turtle', {
    boolean: /\b(?:false|true)\b/i,
    variable: {
      pattern: /[?$]\w+/,
      greedy: true
    }
  })
  Prism.languages.insertBefore('sparql', 'punctuation', {
    keyword: [
      /\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i,
      /\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|REGEX|REPLACE|ROUND|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i,
      /\b(?:BASE|GRAPH|PREFIX)\b/i
    ]
  })
  Prism.languages.rq = Prism.languages.sparql
}


/***/ }),

/***/ "./node_modules/refractor/lang/turtle.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/turtle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return turtle; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
turtle.displayName = 'turtle'
turtle.aliases = ['trig']

/** @param {Refractor} Prism */
function turtle(Prism) {
  Prism.languages.turtle = {
    comment: {
      pattern: /#.*/,
      greedy: true
    },
    'multiline-string': {
      pattern:
        /"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,
      greedy: true,
      alias: 'string',
      inside: {
        comment: /#.*/
      }
    },
    string: {
      pattern: /"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/,
      greedy: true
    },
    url: {
      pattern:
        /<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,
      greedy: true,
      inside: {
        punctuation: /[<>]/
      }
    },
    function: {
      pattern:
        /(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,
      inside: {
        'local-name': {
          pattern: /([^:]*:)[\s\S]+/,
          lookbehind: true
        },
        prefix: {
          pattern: /[\s\S]+/,
          inside: {
            punctuation: /:/
          }
        }
      }
    },
    number: /[+-]?\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
    punctuation: /[{}.,;()[\]]|\^\^/,
    boolean: /\b(?:false|true)\b/,
    keyword: [/(?:\ba|@prefix|@base)\b|=/, /\b(?:base|graph|prefix)\b/i],
    tag: {
      pattern: /@[a-z]+(?:-[a-z\d]+)*/i,
      inside: {
        punctuation: /@/
      }
    }
  }
  Prism.languages.trig = Prism.languages['turtle']
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_sparql.js.map