'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createDirectory;

function _mkdirp() {
  const data = require('mkdirp');

  _mkdirp = function() {
    return data;
  };

  return data;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function createDirectory(path) {
  try {
    (0, _mkdirp().sync)(path, '777');
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw e;
    }
  }
}
