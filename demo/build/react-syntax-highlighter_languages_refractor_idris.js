(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_idris"],{

/***/ "./node_modules/refractor/lang/haskell.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/haskell.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return haskell; });
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */
haskell.displayName = 'haskell'
haskell.aliases = ['hs']

/** @param {Refractor} Prism */
function haskell(Prism) {
  Prism.languages.haskell = {
    comment: {
      pattern:
        /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--(?:(?=.)[^-!#$%*+=?&@|~.:<>^\\\/].*|$)|\{-[\s\S]*?-\})/m,
      lookbehind: true
    },
    char: {
      pattern:
        /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|ACK|BEL|BS|CAN|CR|DC1|DC2|DC3|DC4|DEL|DLE|EM|ENQ|EOT|ESC|ETB|ETX|FF|FS|GS|HT|LF|NAK|NUL|RS|SI|SO|SOH|SP|STX|SUB|SYN|US|VT|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
      alias: 'string'
    },
    string: {
      pattern: /"(?:[^\\"]|\\(?:\S|\s+\\))*"/,
      greedy: true
    },
    keyword:
      /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
    'import-statement': {
      // The imported or hidden names are not included in this import
      // statement. This is because we want to highlight those exactly like
      // we do for the names in the program.
      pattern:
        /(^[\t ]*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
      lookbehind: true,
      inside: {
        keyword: /\b(?:as|hiding|import|qualified)\b/,
        punctuation: /\./
      }
    },
    // These are builtin variables only. Constructors are highlighted later as a constant.
    builtin:
      /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
    // decimal integers and floating point numbers | octal integers | hexadecimal integers
    number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
    operator: [
      {
        // infix operator
        pattern: /`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/,
        greedy: true
      },
      {
        // function composition
        pattern: /(\s)\.(?=\s)/,
        lookbehind: true
      },
      // Most of this is needed because of the meaning of a single '.'.
      // If it stands alone freely, it is the function composition.
      // It may also be a separator between a module name and an identifier => no
      // operator. If it comes together with other special characters it is an
      // operator too.
      //
      // This regex means: /[-!#$%*+=?&@|~.:<>^\\\/]+/ without /\./.
      /[-!#$%*+=?&@|~:<>^\\\/][-!#$%*+=?&@|~.:<>^\\\/]*|\.[-!#$%*+=?&@|~.:<>^\\\/]+/
    ],
    // In Haskell, nearly everything is a variable, do not highlight these.
    hvariable: {
      pattern: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*/,
      inside: {
        punctuation: /\./
      }
    },
    constant: {
      pattern: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*/,
      inside: {
        punctuation: /\./
      }
    },
    punctuation: /[{}[\];(),.:]/
  }
  Prism.languages.hs = Prism.languages.haskell
}


/***/ }),

/***/ "./node_modules/refractor/lang/idris.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/idris.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return idris; });
/* harmony import */ var _haskell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./haskell.js */ "./node_modules/refractor/lang/haskell.js");
// @ts-nocheck
/**
 * @import {Refractor} from '../lib/core.js'
 */

idris.displayName = 'idris'
idris.aliases = ['idr']

/** @param {Refractor} Prism */
function idris(Prism) {
  Prism.register(_haskell_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.idris = Prism.languages.extend('haskell', {
    comment: {
      pattern: /(?:(?:--|\|\|\|).*$|\{-[\s\S]*?-\})/m
    },
    keyword:
      /\b(?:Type|case|class|codata|constructor|corecord|data|do|dsl|else|export|if|implementation|implicit|import|impossible|in|infix|infixl|infixr|instance|interface|let|module|mutual|namespace|of|parameters|partial|postulate|private|proof|public|quoteGoal|record|rewrite|syntax|then|total|using|where|with)\b/,
    builtin: undefined
  })
  Prism.languages.insertBefore('idris', 'keyword', {
    'import-statement': {
      pattern: /(^\s*import\s+)(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*/m,
      lookbehind: true,
      inside: {
        punctuation: /\./
      }
    }
  })
  Prism.languages.idr = Prism.languages.idris
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_idris.js.map