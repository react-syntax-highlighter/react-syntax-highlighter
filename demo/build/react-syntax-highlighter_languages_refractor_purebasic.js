(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_purebasic"],{

/***/ "./node_modules/refractor/lang/clike.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clike; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
clike.displayName = 'clike'
clike.aliases = []

/** @param {Refractor} Prism */
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/purebasic.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/purebasic.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return purebasic; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

purebasic.displayName = 'purebasic'
purebasic.aliases = ['pbfasm']

/** @param {Refractor} Prism */
function purebasic(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  /*
Original Code by Bas Groothedde
!!MANY THANKS!! I never would have made this, regex and me will never be best friends ;)
==> https://codepen.io/ImagineProgramming/details/JYydBy/
slightly changed to pass all tests
*/

  // PureBasic support, steal stuff from ansi-c
  Prism.languages.purebasic = Prism.languages.extend('clike', {
    comment: /;.*/,
    keyword:
      /\b(?:align|and|as|break|calldebugger|case|compilercase|compilerdefault|compilerelse|compilerelseif|compilerendif|compilerendselect|compilererror|compilerif|compilerselect|continue|data|datasection|debug|debuglevel|declare|declarec|declarecdll|declaredll|declaremodule|default|define|dim|disableasm|disabledebugger|disableexplicit|else|elseif|enableasm|enabledebugger|enableexplicit|end|enddatasection|enddeclaremodule|endenumeration|endif|endimport|endinterface|endmacro|endmodule|endprocedure|endselect|endstructure|endstructureunion|endwith|enumeration|extends|fakereturn|for|foreach|forever|global|gosub|goto|if|import|importc|includebinary|includefile|includepath|interface|macro|module|newlist|newmap|next|not|or|procedure|procedurec|procedurecdll|proceduredll|procedurereturn|protected|prototype|prototypec|read|redim|repeat|restore|return|runtime|select|shared|static|step|structure|structureunion|swap|threaded|to|until|wend|while|with|xincludefile|xor)\b/i,
    function: /\b\w+(?:\.\w+)?\s*(?=\()/,
    number: /(?:\$[\da-f]+|\b-?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)\b/i,
    operator:
      /(?:@\*?|\?|\*)\w+\$?|-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*/@]/
  })
  Prism.languages.insertBefore('purebasic', 'keyword', {
    tag: /#\w+\$?/,
    asm: {
      pattern: /(^[\t ]*)!.*/m,
      lookbehind: true,
      alias: 'tag',
      inside: {
        comment: /;.*/,
        string: {
          pattern: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        // Anonymous label references, i.e.: jmp @b
        'label-reference-anonymous': {
          pattern: /(!\s*j[a-z]+\s+)@[fb]/i,
          lookbehind: true,
          alias: 'fasm-label'
        },
        // Named label reference, i.e.: jne label1
        'label-reference-addressed': {
          pattern: /(!\s*j[a-z]+\s+)[A-Z._?$@][\w.?$@~#]*/i,
          lookbehind: true,
          alias: 'fasm-label'
        },
        keyword: [
          /\b(?:extern|global)\b[^;\r\n]*/i,
          /\b(?:CPU|DEFAULT|FLOAT)\b.*/
        ],
        function: {
          pattern: /^([\t ]*!\s*)[\da-z]+(?=\s|$)/im,
          lookbehind: true
        },
        'function-inline': {
          pattern: /(:\s*)[\da-z]+(?=\s)/i,
          lookbehind: true,
          alias: 'function'
        },
        label: {
          pattern: /^([\t ]*!\s*)[A-Za-z._?$@][\w.?$@~#]*(?=:)/m,
          lookbehind: true,
          alias: 'fasm-label'
        },
        register:
          /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s|mm\d+)\b/i,
        number:
          /(?:\b|-|(?=\$))(?:0[hx](?:[\da-f]*\.)?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
        operator: /[\[\]*+\-/%<>=&|$!,.:]/
      }
    }
  })
  delete Prism.languages.purebasic['class-name']
  delete Prism.languages.purebasic['boolean']
  Prism.languages.pbfasm = Prism.languages['purebasic']
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_purebasic.js.map