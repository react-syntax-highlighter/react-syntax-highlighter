"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_monkey"],{

/***/ "./node_modules/highlight.js/es/languages/monkey.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/monkey.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ monkey)
/* harmony export */ });
/*
Language: Monkey
Description: Monkey2 is an easy to use, cross platform, games oriented programming language from Blitz Research.
Author: Arthur Bikmullin <devolonter@gmail.com>
Website: https://blitzresearch.itch.io/monkey2
*/

function monkey(hljs) {
  const NUMBER = {
    className: 'number',
    relevance: 0,
    variants: [
      { begin: '[$][a-fA-F0-9]+' },
      hljs.NUMBER_MODE
    ]
  };
  const FUNC_DEFINITION = {
    variants: [
      { match: [
        /(function|method)/,
        /\s+/,
        hljs.UNDERSCORE_IDENT_RE,
      ] },
    ],
    scope: {
      1: "keyword",
      3: "title.function"
    }
  };
  const CLASS_DEFINITION = {
    variants: [
      { match: [
        /(class|interface|extends|implements)/,
        /\s+/,
        hljs.UNDERSCORE_IDENT_RE,
      ] },
    ],
    scope: {
      1: "keyword",
      3: "title.class"
    }
  };
  const BUILT_INS = [
    "DebugLog",
    "DebugStop",
    "Error",
    "Print",
    "ACos",
    "ACosr",
    "ASin",
    "ASinr",
    "ATan",
    "ATan2",
    "ATan2r",
    "ATanr",
    "Abs",
    "Abs",
    "Ceil",
    "Clamp",
    "Clamp",
    "Cos",
    "Cosr",
    "Exp",
    "Floor",
    "Log",
    "Max",
    "Max",
    "Min",
    "Min",
    "Pow",
    "Sgn",
    "Sgn",
    "Sin",
    "Sinr",
    "Sqrt",
    "Tan",
    "Tanr",
    "Seed",
    "PI",
    "HALFPI",
    "TWOPI"
  ];
  const LITERALS = [
    "true",
    "false",
    "null"
  ];
  const KEYWORDS = [
    "public",
    "private",
    "property",
    "continue",
    "exit",
    "extern",
    "new",
    "try",
    "catch",
    "eachin",
    "not",
    "abstract",
    "final",
    "select",
    "case",
    "default",
    "const",
    "local",
    "global",
    "field",
    "end",
    "if",
    "then",
    "else",
    "elseif",
    "endif",
    "while",
    "wend",
    "repeat",
    "until",
    "forever",
    "for",
    "to",
    "step",
    "next",
    "return",
    "module",
    "inline",
    "throw",
    "import",
    // not positive, but these are not literals
    "and",
    "or",
    "shl",
    "shr",
    "mod"
  ];

  return {
    name: 'Monkey',
    case_insensitive: true,
    keywords: {
      keyword: KEYWORDS,
      built_in: BUILT_INS,
      literal: LITERALS
    },
    illegal: /\/\*/,
    contains: [
      hljs.COMMENT('#rem', '#end'),
      hljs.COMMENT(
        "'",
        '$',
        { relevance: 0 }
      ),
      FUNC_DEFINITION,
      CLASS_DEFINITION,
      {
        className: 'variable.language',
        begin: /\b(self|super)\b/
      },
      {
        className: 'meta',
        begin: /\s*#/,
        end: '$',
        keywords: { keyword: 'if else elseif endif end then' }
      },
      {
        match: [
          /^\s*/,
          /strict\b/
        ],
        scope: { 2: "meta" }
      },
      {
        beginKeywords: 'alias',
        end: '=',
        contains: [ hljs.UNDERSCORE_TITLE_MODE ]
      },
      hljs.QUOTE_STRING_MODE,
      NUMBER
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_monkey.js.map