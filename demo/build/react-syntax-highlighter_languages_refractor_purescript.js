(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_purescript"],{

/***/ "./node_modules/refractor/lang/haskell.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/haskell.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = haskell
haskell.displayName = 'haskell'
haskell.aliases = ['hs']
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
      }, // Most of this is needed because of the meaning of a single '.'.
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

/***/ "./node_modules/refractor/lang/purescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/purescript.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorHaskell = __webpack_require__(/*! ./haskell.js */ "./node_modules/refractor/lang/haskell.js")
module.exports = purescript
purescript.displayName = 'purescript'
purescript.aliases = ['purs']
function purescript(Prism) {
  Prism.register(refractorHaskell)
  Prism.languages.purescript = Prism.languages.extend('haskell', {
    keyword:
      /\b(?:ado|case|class|data|derive|do|else|forall|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b|∀/,
    'import-statement': {
      // The imported or hidden names are not included in this import
      // statement. This is because we want to highlight those exactly like
      // we do for the names in the program.
      pattern:
        /(^[\t ]*)import\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*(?:\s+as\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
      lookbehind: true,
      inside: {
        keyword: /\b(?:as|hiding|import)\b/,
        punctuation: /\./
      }
    },
    // These are builtin functions only. Constructors are highlighted later as a constant.
    builtin:
      /\b(?:absurd|add|ap|append|apply|between|bind|bottom|clamp|compare|comparing|compose|conj|const|degree|discard|disj|div|eq|flap|flip|gcd|identity|ifM|join|lcm|liftA1|liftM1|map|max|mempty|min|mod|mul|negate|not|notEq|one|otherwise|recip|show|sub|top|unit|unless|unlessM|void|when|whenM|zero)\b/,
    operator: [
      // Infix operators
      Prism.languages.haskell.operator[0], // ASCII operators
      Prism.languages.haskell.operator[2], // All UTF16 Unicode operator symbols
      // This regex is equivalent to /(?=[\x80-\uFFFF])[\p{gc=Math_Symbol}\p{gc=Currency_Symbol}\p{Modifier_Symbol}\p{Other_Symbol}]/u
      // See https://github.com/PrismJS/prism/issues/3006 for more details.
      /[\xa2-\xa6\xa8\xa9\xac\xae-\xb1\xb4\xb8\xd7\xf7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u0482\u058d-\u058f\u0606-\u0608\u060b\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u07fe\u07ff\u09f2\u09f3\u09fa\u09fb\u0af1\u0b70\u0bf3-\u0bfa\u0c7f\u0d4f\u0d79\u0e3f\u0f01-\u0f03\u0f13\u0f15-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1390-\u1399\u166d\u17db\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20bf\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u2140-\u2144\u214a-\u214d\u214f\u218a\u218b\u2190-\u2307\u230c-\u2328\u232b-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u2767\u2794-\u27c4\u27c7-\u27e5\u27f0-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2b73\u2b76-\u2b95\u2b97-\u2bff\u2ce5-\u2cea\u2e50\u2e51\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u309b\u309c\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua700-\ua716\ua720\ua721\ua789\ua78a\ua828-\ua82b\ua836-\ua839\uaa77-\uaa79\uab5b\uab6a\uab6b\ufb29\ufbb2-\ufbc1\ufdfc\ufdfd\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe6\uffe8-\uffee\ufffc\ufffd]/
    ]
  })
  Prism.languages.purs = Prism.languages.purescript
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_purescript.js.map