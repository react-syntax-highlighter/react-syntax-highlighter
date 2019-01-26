(window.webpackJsonp = window.webpackJsonp || []).push([
  [104],
  {
    672: function(e, a, s) {
      'use strict';
      function n(e) {
        (e.languages.processing = e.languages.extend('clike', {
          keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
          operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
        })),
          e.languages.insertBefore('processing', 'number', {
            constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
            type: {
              pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,
              alias: 'variable'
            }
          }),
          (e.languages.processing.function.pattern = /\w+(?=\s*\()/),
          (e.languages.processing['class-name'].alias = 'variable');
      }
      (e.exports = n), (n.displayName = 'processing'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_processing-build.js.map
