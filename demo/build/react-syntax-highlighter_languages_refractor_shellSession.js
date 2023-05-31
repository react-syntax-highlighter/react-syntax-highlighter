(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_shellSession"],{

/***/ "./node_modules/refractor/lang/shell-session.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/shell-session.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shellSession; });
/* harmony import */ var _bash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bash.js */ "./node_modules/refractor/lang/bash.js");
// @ts-nocheck

shellSession.displayName = 'shell-session'
shellSession.aliases = ['sh-session', 'shellsession']

/** @type {import('../core.js').Syntax} */
function shellSession(Prism) {
  Prism.register(_bash_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    // CAREFUL!
    // The following patterns are concatenated, so the group referenced by a back reference is non-obvious!

    var strings = [
      // normal string
      /"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source,
      /'[^']*'/.source,
      /\$'(?:[^'\\]|\\[\s\S])*'/.source,
      // here doc
      // 2 capturing groups
      /<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source
    ].join('|')
    Prism.languages['shell-session'] = {
      command: {
        pattern: RegExp(
          // user info
          /^/.source +
            '(?:' +
            // <user> ":" ( <path> )?
            (/[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+(?::[^\0-\x1F$#%*?"<>:;|]+)?/
              .source +
              '|' +
              // <path>
              // Since the path pattern is quite general, we will require it to start with a special character to
              // prevent false positives.
              /[/~.][^\0-\x1F$#%*?"<>@:;|]*/.source) +
            ')?' +
            // shell symbol
            /[$#%](?=\s)/.source +
            // bash command
            /(?:[^\\\r\n \t'"<$]|[ \t](?:(?!#)|#.*$)|\\(?:[^\r]|\r\n?)|\$(?!')|<(?!<)|<<str>>)+/.source.replace(
              /<<str>>/g,
              function () {
                return strings
              }
            ),
          'm'
        ),
        greedy: true,
        inside: {
          info: {
            // foo@bar:~/files$ exit
            // foo@bar$ exit
            // ~/files$ exit
            pattern: /^[^#$%]+/,
            alias: 'punctuation',
            inside: {
              user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
              punctuation: /:/,
              path: /[\s\S]+/
            }
          },
          bash: {
            pattern: /(^[$#%]\s*)\S[\s\S]*/,
            lookbehind: true,
            alias: 'language-bash',
            inside: Prism.languages.bash
          },
          'shell-symbol': {
            pattern: /^[$#%]/,
            alias: 'important'
          }
        }
      },
      output: /.(?:.*(?:[\r\n]|.$))*/
    }
    Prism.languages['sh-session'] = Prism.languages['shellsession'] =
      Prism.languages['shell-session']
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_shellSession.js.map