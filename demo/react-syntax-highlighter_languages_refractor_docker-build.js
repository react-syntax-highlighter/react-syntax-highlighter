(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    608: function(e, n, o) {
      'use strict';
      function s(e) {
        (e.languages.docker = {
          keyword: {
            pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
            lookbehind: !0
          },
          string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
          comment: /#.*/,
          punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
        }),
          (e.languages.dockerfile = e.languages.docker);
      }
      (e.exports = s), (s.displayName = 'docker'), (s.aliases = ['dockerfile']);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_docker-build.js.map
