"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _pluginSyntaxDynamicImport = _interopRequireDefault(require("@babel/plugin-syntax-dynamic-import"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(_ref) {
  var template = _ref.template,
      t = _ref.types;
  var buildImport = template("\n    Promise.resolve().then(() => require(SOURCE))\n  ");
  return {
    inherits: _pluginSyntaxDynamicImport.default,
    visitor: {
      Import: function Import(path) {
        var importArguments = path.parentPath.node.arguments;
        var isString = t.isStringLiteral(importArguments[0]) || t.isTemplateLiteral(importArguments[0]);

        if (isString) {
          t.removeComments(importArguments[0]);
        }

        var newImport = buildImport({
          SOURCE: isString ? importArguments : t.templateLiteral([t.templateElement({
            raw: '',
            cooked: ''
          }), t.templateElement({
            raw: '',
            cooked: ''
          }, true)], importArguments)
        });
        path.parentPath.replaceWith(newImport);
      }
    }
  };
}