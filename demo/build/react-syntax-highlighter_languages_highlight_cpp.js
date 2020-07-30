(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_cpp"],{

/***/ "./node_modules/highlight.js/lib/languages/cpp.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/cpp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: C++
Category: common, system
Website: https://isocpp.org
Requires: c-like.js
*/

/** @type LanguageFn */
function cpp(hljs) {
  var lang = hljs.getLanguage('c-like').rawDefinition();
  // return auto-detection back on
  lang.disableAutodetect = false;
  lang.name = 'C++';
  lang.aliases = ['cc', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'];
  return lang;
}

module.exports = cpp;


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_cpp.js.map