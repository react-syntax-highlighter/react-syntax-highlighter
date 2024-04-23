"use strict";
(self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || []).push([["react-syntax-highlighter_languages_highlight_rsl"],{

/***/ "./node_modules/highlight.js/es/languages/rsl.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/rsl.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rsl)
/* harmony export */ });
/*
Language: RenderMan RSL
Author: Konstantin Evdokimenko <qewerty@gmail.com>
Contributors: Shuen-Huei Guan <drake.guan@gmail.com>
Website: https://renderman.pixar.com/resources/RenderMan_20/shadingLanguage.html
Category: graphics
*/

function rsl(hljs) {
  const BUILT_INS = [
    "abs",
    "acos",
    "ambient",
    "area",
    "asin",
    "atan",
    "atmosphere",
    "attribute",
    "calculatenormal",
    "ceil",
    "cellnoise",
    "clamp",
    "comp",
    "concat",
    "cos",
    "degrees",
    "depth",
    "Deriv",
    "diffuse",
    "distance",
    "Du",
    "Dv",
    "environment",
    "exp",
    "faceforward",
    "filterstep",
    "floor",
    "format",
    "fresnel",
    "incident",
    "length",
    "lightsource",
    "log",
    "match",
    "max",
    "min",
    "mod",
    "noise",
    "normalize",
    "ntransform",
    "opposite",
    "option",
    "phong",
    "pnoise",
    "pow",
    "printf",
    "ptlined",
    "radians",
    "random",
    "reflect",
    "refract",
    "renderinfo",
    "round",
    "setcomp",
    "setxcomp",
    "setycomp",
    "setzcomp",
    "shadow",
    "sign",
    "sin",
    "smoothstep",
    "specular",
    "specularbrdf",
    "spline",
    "sqrt",
    "step",
    "tan",
    "texture",
    "textureinfo",
    "trace",
    "transform",
    "vtransform",
    "xcomp",
    "ycomp",
    "zcomp"
  ];

  const TYPES = [
    "matrix",
    "float",
    "color",
    "point",
    "normal",
    "vector"
  ];

  const KEYWORDS = [
    "while",
    "for",
    "if",
    "do",
    "return",
    "else",
    "break",
    "extern",
    "continue"
  ];

  const CLASS_DEFINITION = {
    match: [
      /(surface|displacement|light|volume|imager)/,
      /\s+/,
      hljs.IDENT_RE,
    ],
    scope: {
      1: "keyword",
      3: "title.class",
    }
  };

  return {
    name: 'RenderMan RSL',
    keywords: {
      keyword: KEYWORDS,
      built_in: BUILT_INS,
      type: TYPES
    },
    illegal: '</',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '#',
        end: '$'
      },
      CLASS_DEFINITION,
      {
        beginKeywords: 'illuminate illuminance gather',
        end: '\\('
      }
    ]
  };
}




/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_rsl.js.map