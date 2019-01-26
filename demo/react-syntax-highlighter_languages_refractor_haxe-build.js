(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    627: function(e, a, n) {
      'use strict';
      function t(e) {
        (e.languages.haxe = e.languages.extend('clike', {
          string: {
            pattern: /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /(^|[^\\])\$(?:\w+|\{[^}]+\})/,
                lookbehind: !0,
                inside: {
                  interpolation: { pattern: /^\$\w*/, alias: 'variable' }
                }
              }
            }
          },
          keyword: /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,
          operator: /\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/
        })),
          e.languages.insertBefore('haxe', 'class-name', {
            regex: { pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/, greedy: !0 }
          }),
          e.languages.insertBefore('haxe', 'keyword', {
            preprocessor: { pattern: /#\w+/, alias: 'builtin' },
            metadata: { pattern: /@:?\w+/, alias: 'symbol' },
            reification: { pattern: /\$(?:\w+|(?=\{))/, alias: 'variable' }
          }),
          (e.languages.haxe.string.inside.interpolation.inside.rest =
            e.languages.haxe),
          delete e.languages.haxe['class-name'];
      }
      (e.exports = t), (t.displayName = 'haxe'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_haxe-build.js.map
