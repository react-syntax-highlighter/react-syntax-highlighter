(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    619: function(m, e, t) {
      'use strict';
      function i(m) {
        m.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-–].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m }
          },
          coord: /^@@.*@@$/m,
          commit_sha1: /^commit \w{40}$/m
        };
      }
      (m.exports = i), (i.displayName = 'git'), (i.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_git-build.js.map
