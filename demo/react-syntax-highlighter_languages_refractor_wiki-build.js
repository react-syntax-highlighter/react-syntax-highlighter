(window.webpackJsonp = window.webpackJsonp || []).push([
  [147],
  {
    712: function(i, n, a) {
      'use strict';
      function e(i) {
        (i.languages.wiki = i.languages.extend('markup', {
          'block-comment': {
            pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
            lookbehind: !0,
            alias: 'comment'
          },
          heading: {
            pattern: /^(=+).+?\1/m,
            inside: { punctuation: /^=+|=+$/, important: /.+/ }
          },
          emphasis: {
            pattern: /('{2,5}).+?\1/,
            inside: {
              'bold italic': { pattern: /(''''').+?(?=\1)/, lookbehind: !0 },
              bold: { pattern: /(''')[^'](?:.*?[^'])?(?=\1)/, lookbehind: !0 },
              italic: { pattern: /('')[^'](?:.*?[^'])?(?=\1)/, lookbehind: !0 },
              punctuation: /^''+|''+$/
            }
          },
          hr: { pattern: /^-{4,}/m, alias: 'punctuation' },
          url: [
            /ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i,
            /\[\[.+?\]\]|\[.+?\]/
          ],
          variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?\}\}/],
          symbol: [/^#redirect/im, /~{3,5}/],
          'table-tag': {
            pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
            lookbehind: !0,
            inside: {
              'table-bar': { pattern: /\|$/, alias: 'punctuation' },
              rest: i.languages.markup.tag.inside
            }
          },
          punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
        })),
          i.languages.insertBefore('wiki', 'tag', {
            nowiki: {
              pattern: /<(nowiki|pre|source)\b[\s\S]*?>[\s\S]*?<\/\1>/i,
              inside: {
                tag: {
                  pattern: /<(?:nowiki|pre|source)\b[\s\S]*?>|<\/(?:nowiki|pre|source)>/i,
                  inside: i.languages.markup.tag.inside
                }
              }
            }
          });
      }
      (i.exports = e), (e.displayName = 'wiki'), (e.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_wiki-build.js.map
