(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    596: function(a, e, n) {
      'use strict';
      function t(a) {
        a.languages.brainfuck = {
          pointer: { pattern: /<|>/, alias: 'keyword' },
          increment: { pattern: /\+/, alias: 'inserted' },
          decrement: { pattern: /-/, alias: 'deleted' },
          branching: { pattern: /\[|\]/, alias: 'important' },
          operator: /[.,]/,
          comment: /\S+/
        };
      }
      (a.exports = t), (t.displayName = 'brainfuck'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_brainfuck-build.js.map
