(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    603: function(e, s, t) {
      'use strict';
      function i(e) {
        (e.languages.css.selector = {
          pattern: /[^{}\s][^{}]*(?=\s*\{)/,
          inside: {
            'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            'pseudo-class': /:[-\w]+(?:\(.*\))?/,
            class: /\.[-:.\w]+/,
            id: /#[-:.\w]+/,
            attribute: /\[[^\]]+\]/
          }
        }),
          e.languages.insertBefore('css', 'function', {
            hexcode: /#[\da-f]{3,8}/i,
            entity: /\\[\da-f]{1,8}/i,
            number: /[\d%.]+/
          });
      }
      (e.exports = i), (i.displayName = 'cssExtras'), (i.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_cssExtras-build.js.map
