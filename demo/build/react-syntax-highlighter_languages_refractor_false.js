(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['react-syntax-highlighter_languages_refractor_false'],
  {
    /***/ './node_modules/refractor/lang/false.js':
      /*!**********************************************!*\
  !*** ./node_modules/refractor/lang/false.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        module.exports = $false;
        $false.displayName = '$false';
        $false.aliases = [];
        function $false(Prism) {
          (function (Prism) {
            /**
             * Based on the manual by Wouter van Oortmerssen.
             *
             * @see {@link https://github.com/PrismJS/prism/issues/2801#issue-829717504}
             */
            Prism.languages['false'] = {
              comment: {
                pattern: /\{[^}]*\}/,
              },
              string: {
                pattern: /"[^"]*"/,
                greedy: true,
              },
              'character-code': {
                pattern: /'(?:[^\r]|\r\n?)/,
                alias: 'number',
              },
              'assembler-code': {
                pattern: /\d+`/,
                alias: 'important',
              },
              number: /\d+/,
              operator: /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
              punctuation: /\[|\]/,
              variable: /[a-z]/,
              'non-standard': {
                pattern: /[()<BDO®]/,
                alias: 'bold',
              },
            };
          })(Prism);
        }

        /***/
      },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_false.js.map
