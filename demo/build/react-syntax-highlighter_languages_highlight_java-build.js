(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_java"],{

/***/ "./node_modules/highlight.js/lib/languages/java.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/java.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/*
Language: Java
Author: Vsevolod Solovyov <vsevolod.solovyov@gmail.com>
Category: common, enterprise
Website: https://www.java.com/
*/

function java(hljs) {
  var JAVA_IDENT_RE = '[\u00C0-\u02B8a-zA-Z_$][\u00C0-\u02B8a-zA-Z_$0-9]*';
  var GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';
  var KEYWORDS = 'false synchronized int abstract float private char boolean var static null if const ' +
    'for true while long strictfp finally protected import native final void ' +
    'enum else break transient catch instanceof byte super volatile case assert short ' +
    'package default double public try this switch continue throws protected public private ' +
    'module requires exports do';

  var ANNOTATION = {
    className: 'meta',
    begin: '@' + JAVA_IDENT_RE,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"] // allow nested () inside our annotation
      },
    ]
  };
  /**
   * A given sequence, possibly with underscores
   * @type {(s: string | RegExp) => string}  */
  var SEQUENCE_ALLOWING_UNDERSCORES = (seq) => concat('[', seq, ']+([', seq, '_]*[', seq, ']+)?');
  var JAVA_NUMBER_MODE = {
    className: 'number',
    variants: [
      { begin: `\\b(0[bB]${SEQUENCE_ALLOWING_UNDERSCORES('01')})[lL]?` }, // binary
      { begin: `\\b(0${SEQUENCE_ALLOWING_UNDERSCORES('0-7')})[dDfFlL]?` }, // octal
      {
        begin: concat(
          /\b0[xX]/,
          either(
            concat(SEQUENCE_ALLOWING_UNDERSCORES('a-fA-F0-9'), /\./, SEQUENCE_ALLOWING_UNDERSCORES('a-fA-F0-9')),
            concat(SEQUENCE_ALLOWING_UNDERSCORES('a-fA-F0-9'), /\.?/),
            concat(/\./, SEQUENCE_ALLOWING_UNDERSCORES('a-fA-F0-9'))
          ),
          /([pP][+-]?(\d+))?/,
          /[fFdDlL]?/ // decimal & fp mixed for simplicity
        )
      },
      // scientific notation
      { begin: concat(
        /\b/,
        either(
          concat(/\d*\./, SEQUENCE_ALLOWING_UNDERSCORES("\\d")), // .3, 3.3, 3.3_3
          SEQUENCE_ALLOWING_UNDERSCORES("\\d") // 3, 3_3
        ),
        /[eE][+-]?[\d]+[dDfF]?/)
      },
      // decimal & fp mixed for simplicity
      { begin: concat(
        /\b/,
        SEQUENCE_ALLOWING_UNDERSCORES(/\d/),
        optional(/\.?/),
        optional(SEQUENCE_ALLOWING_UNDERSCORES(/\d/)),
        /[dDfFlL]?/)
      }
    ],
    relevance: 0
  };

  return {
    name: 'Java',
    aliases: ['jsp'],
    keywords: KEYWORDS,
    illegal: /<\/|#/,
    contains: [
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/',
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/, relevance: 0
            },
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'class',
        beginKeywords: 'class interface', end: /[{;=]/, excludeEnd: true,
        keywords: 'class interface',
        illegal: /[:"\[\]]/,
        contains: [
          { beginKeywords: 'extends implements' },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: 'new throw return else',
        relevance: 0
      },
      {
        className: 'function',
        begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          {
            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
            relevance: 0,
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              ANNOTATION,
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.C_NUMBER_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      JAVA_NUMBER_MODE,
      ANNOTATION
    ]
  };
}

module.exports = java;


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_java-build.js.map