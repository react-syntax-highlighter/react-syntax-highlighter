(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_peoplecode"],{

/***/ "./node_modules/refractor/lang/peoplecode.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/peoplecode.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return peoplecode; });
// @ts-nocheck
peoplecode.displayName = 'peoplecode'
peoplecode.aliases = ['pcode']

/** @type {import('../core.js').Syntax} */
function peoplecode(Prism) {
  Prism.languages.peoplecode = {
    comment: RegExp(
      [
        // C-style multiline comments
        /\/\*[\s\S]*?\*\//.source,
        // REM comments
        /\bREM[^;]*;/.source,
        // Nested <* *> comments
        /<\*(?:[^<*]|\*(?!>)|<(?!\*)|<\*(?:(?!\*>)[\s\S])*\*>)*\*>/.source,
        // /+ +/ comments
        /\/\+[\s\S]*?\+\//.source
      ].join('|')
    ),
    string: {
      pattern: /'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,
      greedy: true
    },
    variable: /%\w+/,
    'function-definition': {
      pattern: /((?:^|[^\w-])(?:function|method)\s+)\w+/i,
      lookbehind: true,
      alias: 'function'
    },
    'class-name': {
      pattern:
        /((?:^|[^-\w])(?:as|catch|class|component|create|extends|global|implements|instance|local|of|property|returns)\s+)\w+(?::\w+)*/i,
      lookbehind: true,
      inside: {
        punctuation: /:/
      }
    },
    keyword:
      /\b(?:abstract|alias|as|catch|class|component|constant|create|declare|else|end-(?:class|evaluate|for|function|get|if|method|set|try|while)|evaluate|extends|for|function|get|global|if|implements|import|instance|library|local|method|null|of|out|peopleCode|private|program|property|protected|readonly|ref|repeat|returns?|set|step|then|throw|to|try|until|value|when(?:-other)?|while)\b/i,
    'operator-keyword': {
      pattern: /\b(?:and|not|or)\b/i,
      alias: 'operator'
    },
    function: /[_a-z]\w*(?=\s*\()/i,
    boolean: /\b(?:false|true)\b/i,
    number: /\b\d+(?:\.\d+)?\b/,
    operator: /<>|[<>]=?|!=|\*\*|[-+*/|=@]/,
    punctuation: /[:.;,()[\]]/
  }
  Prism.languages.pcode = Prism.languages.peoplecode
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_peoplecode.js.map