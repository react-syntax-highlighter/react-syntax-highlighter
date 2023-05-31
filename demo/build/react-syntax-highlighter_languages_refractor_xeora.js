(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_xeora"],{

/***/ "./node_modules/refractor/lang/xeora.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/xeora.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return xeora; });
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck

xeora.displayName = 'xeora'
xeora.aliases = ['xeoracube']

/** @type {import('../core.js').Syntax} */
function xeora(Prism) {
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    Prism.languages.xeora = Prism.languages.extend('markup', {
      constant: {
        pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
        inside: {
          punctuation: {
            pattern: /\$/
          }
        }
      },
      variable: {
        pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /[$.]/
          },
          operator: {
            pattern: /#+|[-+*~=^@]/
          }
        }
      },
      'function-inline': {
        pattern:
          /\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,
        inside: {
          variable: {
            pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
            inside: {
              punctuation: {
                pattern: /[,.|]/
              },
              operator: {
                pattern: /#+|[-+*~=^@]/
              }
            }
          },
          punctuation: {
            pattern: /\$\w:|[$:?.,|]/
          }
        },
        alias: 'function'
      },
      'function-block': {
        pattern:
          /\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,
        inside: {
          punctuation: {
            pattern: /[$:{}?.,|]/
          }
        },
        alias: 'function'
      },
      'directive-inline': {
        pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
            inside: {
              tag: {
                pattern: /#\d/
              }
            }
          }
        },
        alias: 'function'
      },
      'directive-block-open': {
        pattern:
          /\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,
        inside: {
          punctuation: {
            pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
            inside: {
              tag: {
                pattern: /#\d/
              }
            }
          },
          attribute: {
            pattern: /![A-Z]+$/,
            inside: {
              punctuation: {
                pattern: /!/
              }
            },
            alias: 'keyword'
          }
        },
        alias: 'function'
      },
      'directive-block-separator': {
        pattern: /\}:[-\w.]+:\{/,
        inside: {
          punctuation: {
            pattern: /[:{}]/
          }
        },
        alias: 'function'
      },
      'directive-block-close': {
        pattern: /\}:[-\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /[:{}$]/
          }
        },
        alias: 'function'
      }
    })
    Prism.languages.insertBefore(
      'inside',
      'punctuation',
      {
        variable: Prism.languages.xeora['function-inline'].inside['variable']
      },
      Prism.languages.xeora['function-block']
    )
    Prism.languages.xeoracube = Prism.languages.xeora
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_xeora.js.map