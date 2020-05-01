'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

function path() {
  const data = _interopRequireWildcard(require('path'));

  path = function() {
    return data;
  };

  return data;
}

function _chalk() {
  const data = _interopRequireDefault(require('chalk'));

  _chalk = function() {
    return data;
  };

  return data;
}

function _slash() {
  const data = _interopRequireDefault(require('slash'));

  _slash = function() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _default = (root, verbose, buffer) => {
  const TITLE_INDENT = verbose ? '  ' : '    ';
  const CONSOLE_INDENT = TITLE_INDENT + '  ';
  return buffer.reduce((output, {type, message, origin}) => {
    origin = (0, _slash().default)(path().relative(root, origin));
    message = message
      .split(/\n/)
      .map(line => CONSOLE_INDENT + line)
      .join('\n');
    let typeMessage = 'console.' + type;

    if (type === 'warn') {
      message = _chalk().default.yellow(message);
      typeMessage = _chalk().default.yellow(typeMessage);
    } else if (type === 'error') {
      message = _chalk().default.red(message);
      typeMessage = _chalk().default.red(typeMessage);
    }

    return (
      output +
      TITLE_INDENT +
      _chalk().default.dim(typeMessage) +
      ' ' +
      _chalk().default.dim(origin) +
      '\n' +
      message +
      '\n'
    );
  }, '');
};

exports.default = _default;
