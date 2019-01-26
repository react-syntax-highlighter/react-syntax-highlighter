(window.webpackJsonp = window.webpackJsonp || []).push([
  [96],
  {
    665: function(r, o, e) {
      'use strict';
      function n(r) {
        var o;
        r.languages.parigp = {
          comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
          string: { pattern: /"(?:[^"\\\r\n]|\\.)*"/, greedy: !0 },
          keyword: ((o = [
            'breakpoint',
            'break',
            'dbg_down',
            'dbg_err',
            'dbg_up',
            'dbg_x',
            'forcomposite',
            'fordiv',
            'forell',
            'forpart',
            'forprime',
            'forstep',
            'forsubgroup',
            'forvec',
            'for',
            'iferr',
            'if',
            'local',
            'my',
            'next',
            'return',
            'until',
            'while'
          ]),
          (o = o
            .map(function(r) {
              return r.split('').join(' *');
            })
            .join('|')),
          RegExp('\\b(?:' + o + ')\\b')),
          function: /\w[\w ]*?(?= *\()/,
          number: {
            pattern: /((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,
            lookbehind: !0
          },
          operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
          punctuation: /[\[\]{}().,:;|]/
        };
      }
      (r.exports = n), (n.displayName = 'parigp'), (n.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_parigp-build.js.map
