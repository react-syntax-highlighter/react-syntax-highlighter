(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_pug"],{

/***/ "./node_modules/refractor/lang/pug.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/pug.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pug; });
/* harmony import */ var _javascript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript.js */ "./node_modules/refractor/lang/javascript.js");
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck


pug.displayName = 'pug'
pug.aliases = []

/** @type {import('../core.js').Syntax} */
function pug(Prism) {
  Prism.register(_javascript_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  ;(function (Prism) {
    // TODO:
    // - Add CSS highlighting inside <style> tags
    // - Add support for multi-line code blocks
    // - Add support for interpolation #{} and !{}
    // - Add support for tag interpolation #[]
    // - Add explicit support for plain text using |
    // - Add support for markup embedded in plain text

    Prism.languages.pug = {
      // Multiline stuff should appear before the rest

      // This handles both single-line and multi-line comments
      comment: {
        pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
        lookbehind: true
      },
      // All the tag-related part is in lookbehind
      // so that it can be highlighted by the "tag" pattern
      'multiline-script': {
        pattern:
          /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      // See at the end of the file for known filters
      filter: {
        pattern:
          /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true,
        inside: {
          'filter-name': {
            pattern: /^:[\w-]+/,
            alias: 'variable'
          },
          text: /\S[\s\S]*/
        }
      },
      'multiline-plain-text': {
        pattern:
          /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true
      },
      markup: {
        pattern: /(^[\t ]*)<.+/m,
        lookbehind: true,
        inside: Prism.languages.markup
      },
      doctype: {
        pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
        lookbehind: true
      },
      // This handle all conditional and loop keywords
      'flow-control': {
        pattern:
          /(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m,
        lookbehind: true,
        inside: {
          each: {
            pattern: /^each .+? in\b/,
            inside: {
              keyword: /\b(?:each|in)\b/,
              punctuation: /,/
            }
          },
          branch: {
            pattern: /^(?:case|default|else|if|unless|when|while)\b/,
            alias: 'keyword'
          },
          rest: Prism.languages.javascript
        }
      },
      keyword: {
        pattern: /(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m,
        lookbehind: true
      },
      mixin: [
        // Declaration
        {
          pattern: /(^[\t ]*)mixin .+/m,
          lookbehind: true,
          inside: {
            keyword: /^mixin/,
            function: /\w+(?=\s*\(|\s*$)/,
            punctuation: /[(),.]/
          }
        },
        // Usage
        {
          pattern: /(^[\t ]*)\+.+/m,
          lookbehind: true,
          inside: {
            name: {
              pattern: /^\+\w+/,
              alias: 'function'
            },
            rest: Prism.languages.javascript
          }
        }
      ],
      script: {
        pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      'plain-text': {
        pattern:
          /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
        lookbehind: true
      },
      tag: {
        pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
        lookbehind: true,
        inside: {
          attributes: [
            {
              pattern: /&[^(]+\([^)]+\)/,
              inside: Prism.languages.javascript
            },
            {
              pattern: /\([^)]+\)/,
              inside: {
                'attr-value': {
                  pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
                  lookbehind: true,
                  inside: Prism.languages.javascript
                },
                'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
                punctuation: /[!=(),]+/
              }
            }
          ],
          punctuation: /:/,
          'attr-id': /#[\w\-]+/,
          'attr-class': /\.[\w\-]+/
        }
      },
      code: [
        {
          pattern: /(^[\t ]*(?:-|!?=)).+/m,
          lookbehind: true,
          inside: Prism.languages.javascript
        }
      ],
      punctuation: /[.\-!=|]+/
    }
    var filter_pattern =
      /(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/
        .source

    // Non exhaustive list of available filters and associated languages
    var filters = [
      {
        filter: 'atpl',
        language: 'twig'
      },
      {
        filter: 'coffee',
        language: 'coffeescript'
      },
      'ejs',
      'handlebars',
      'less',
      'livescript',
      'markdown',
      {
        filter: 'sass',
        language: 'scss'
      },
      'stylus'
    ]
    var all_filters = {}
    for (var i = 0, l = filters.length; i < l; i++) {
      var filter = filters[i]
      filter =
        typeof filter === 'string'
          ? {
              filter: filter,
              language: filter
            }
          : filter
      if (Prism.languages[filter.language]) {
        all_filters['filter-' + filter.filter] = {
          pattern: RegExp(
            filter_pattern.replace('<filter_name>', function () {
              return filter.filter
            }),
            'm'
          ),
          lookbehind: true,
          inside: {
            'filter-name': {
              pattern: /^:[\w-]+/,
              alias: 'variable'
            },
            text: {
              pattern: /\S[\s\S]*/,
              alias: [filter.language, 'language-' + filter.language],
              inside: Prism.languages[filter.language]
            }
          }
        }
      }
    }
    Prism.languages.insertBefore('pug', 'filter', all_filters)
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_pug.js.map