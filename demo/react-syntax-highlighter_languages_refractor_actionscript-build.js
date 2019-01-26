(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    581: function(e, a, t) {
      'use strict';
      function n(e) {
        (e.languages.actionscript = e.languages.extend('javascript', {
          keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
          operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
        })),
          (e.languages.actionscript['class-name'].alias = 'function'),
          e.languages.markup &&
            e.languages.insertBefore('actionscript', 'string', {
              xml: {
                pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                lookbehind: !0,
                inside: { rest: e.languages.markup }
              }
            });
      }
      (e.exports = n), (n.displayName = 'actionscript'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_actionscript-build.js.map
