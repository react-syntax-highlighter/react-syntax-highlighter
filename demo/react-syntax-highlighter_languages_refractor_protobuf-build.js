(window.webpackJsonp = window.webpackJsonp || []).push([
  [107],
  {
    675: function(e, i, t) {
      'use strict';
      function n(e) {
        e.languages.protobuf = e.languages.extend('clike', {
          keyword: /\b(?:package|import|message|enum)\b/,
          builtin: /\b(?:required|repeated|optional|reserved)\b/,
          primitive: {
            pattern: /\b(?:double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes)\b/,
            alias: 'symbol'
          }
        });
      }
      (e.exports = n), (n.displayName = 'protobuf'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_protobuf-build.js.map
