(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_aspnet"],{

/***/ "./node_modules/refractor/lang/aspnet.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/aspnet.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return aspnet; });
/* harmony import */ var _csharp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csharp.js */ "./node_modules/refractor/lang/csharp.js");
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck


aspnet.displayName = 'aspnet'
aspnet.aliases = []

/** @type {import('../core.js').Syntax} */
function aspnet(Prism) {
  Prism.register(_csharp_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  Prism.languages.aspnet = Prism.languages.extend('markup', {
    'page-directive': {
      pattern: /<%\s*@.*%>/,
      alias: 'tag',
      inside: {
        'page-directive': {
          pattern:
            /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
          alias: 'tag'
        },
        rest: Prism.languages.markup.tag.inside
      }
    },
    directive: {
      pattern: /<%.*%>/,
      alias: 'tag',
      inside: {
        directive: {
          pattern: /<%\s*?[$=%#:]{0,2}|%>/,
          alias: 'tag'
        },
        rest: Prism.languages.csharp
      }
    }
  })
  // Regexp copied from prism-markup, with a negative look-ahead added
  Prism.languages.aspnet.tag.pattern =
    /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/

  // match directives of attribute value foo="<% Bar %>"
  Prism.languages.insertBefore(
    'inside',
    'punctuation',
    {
      directive: Prism.languages.aspnet['directive']
    },
    Prism.languages.aspnet.tag.inside['attr-value']
  )
  Prism.languages.insertBefore('aspnet', 'comment', {
    'asp-comment': {
      pattern: /<%--[\s\S]*?--%>/,
      alias: ['asp', 'comment']
    }
  })

  // script runat="server" contains csharp, not javascript
  Prism.languages.insertBefore(
    'aspnet',
    Prism.languages.javascript ? 'script' : 'tag',
    {
      'asp-script': {
        pattern:
          /(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: true,
        alias: ['asp', 'script'],
        inside: Prism.languages.csharp || {}
      }
    }
  )
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_aspnet.js.map