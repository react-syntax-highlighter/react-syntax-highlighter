(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    594: function(e, r, n) {
      'use strict';
      function t(e) {
        !(function(e) {
          var r = /%%?[~:\w]+%?|!\S+!/,
            n = {
              pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
              alias: 'attr-name',
              inside: { punctuation: /:/ }
            },
            t = /"[^"]*"/,
            i = /(?:\b|-)\d+\b/;
          e.languages.batch = {
            comment: [
              /^::.*/m,
              {
                pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                lookbehind: !0
              }
            ],
            label: { pattern: /^:.*/m, alias: 'property' },
            command: [
              {
                pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
                lookbehind: !0,
                inside: {
                  keyword: /^for\b|\b(?:in|do)\b/i,
                  string: t,
                  parameter: n,
                  variable: r,
                  number: i,
                  punctuation: /[()',]/
                }
              },
              {
                pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
                lookbehind: !0,
                inside: {
                  keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
                  string: t,
                  parameter: n,
                  variable: r,
                  number: i,
                  operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
                }
              },
              {
                pattern: /((?:^|[&()])[ \t]*)else\b/im,
                lookbehind: !0,
                inside: { keyword: /^else\b/i }
              },
              {
                pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                inside: {
                  keyword: /^set\b/i,
                  string: t,
                  parameter: n,
                  variable: [r, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
                  number: i,
                  operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
                  punctuation: /[()',]/
                }
              },
              {
                pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                inside: {
                  keyword: /^\w+\b/i,
                  string: t,
                  parameter: n,
                  label: {
                    pattern: /(^\s*):\S+/m,
                    lookbehind: !0,
                    alias: 'property'
                  },
                  variable: r,
                  number: i,
                  operator: /\^/
                }
              }
            ],
            operator: /[&@]/,
            punctuation: /[()']/
          };
        })(e);
      }
      (e.exports = t), (t.displayName = 'batch'), (t.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_batch-build.js.map
