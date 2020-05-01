'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.normalizeDiffOptions = exports.noColor = void 0;

var _chalk = _interopRequireDefault(require('chalk'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const noColor = string => string;

exports.noColor = noColor;
const DIFF_CONTEXT_DEFAULT = 5;
const OPTIONS_DEFAULT = {
  aAnnotation: 'Expected',
  aColor: _chalk.default.green,
  aIndicator: '-',
  bAnnotation: 'Received',
  bColor: _chalk.default.red,
  bIndicator: '+',
  changeColor: _chalk.default.inverse,
  changeLineTrailingSpaceColor: noColor,
  commonColor: _chalk.default.dim,
  commonIndicator: ' ',
  commonLineTrailingSpaceColor: noColor,
  contextLines: DIFF_CONTEXT_DEFAULT,
  emptyFirstOrLastLinePlaceholder: '',
  expand: true,
  includeChangeCounts: false,
  omitAnnotationLines: false,
  patchColor: _chalk.default.yellow
};

const getContextLines = contextLines =>
  typeof contextLines === 'number' &&
  Number.isSafeInteger(contextLines) &&
  contextLines >= 0
    ? contextLines
    : DIFF_CONTEXT_DEFAULT; // Pure function returns options with all properties.

const normalizeDiffOptions = (options = {}) =>
  _objectSpread({}, OPTIONS_DEFAULT, {}, options, {
    contextLines: getContextLines(options.contextLines)
  });

exports.normalizeDiffOptions = normalizeDiffOptions;
