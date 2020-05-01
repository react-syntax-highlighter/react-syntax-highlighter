'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = readConfigFileAndSetRootDir;

function path() {
  const data = _interopRequireWildcard(require('path'));

  path = function() {
    return data;
  };

  return data;
}

function fs() {
  const data = _interopRequireWildcard(require('fs'));

  fs = function() {
    return data;
  };

  return data;
}

var _jsonlint = _interopRequireDefault(require('./vendor/jsonlint'));

var _constants = require('./constants');

function _importMjs() {
  const data = _interopRequireDefault(require('./importMjs'));

  _importMjs = function() {
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
// @ts-ignore: vendored
// Read the configuration and set its `rootDir`
// 1. If it's a `package.json` file, we look into its "jest" property
// 2. For any other file, we just require it.
async function readConfigFileAndSetRootDir(configPath) {
  const isJSON = configPath.endsWith(_constants.JEST_CONFIG_EXT_JSON);
  const isMjs = configPath.endsWith(_constants.JEST_CONFIG_EXT_MJS);
  let configObject;

  if (isMjs) {
    try {
      const importedConfig = await (0, _importMjs().default)(configPath);

      if (!importedConfig.default) {
        throw new Error(
          `Jest: Failed to load mjs config file ${configPath} - did you use a default export?`
        );
      }

      configObject = importedConfig.default;
    } catch (error) {
      if (error.message === 'Not supported') {
        throw new Error(
          `Jest: Your version of Node does not support dynamic import - please enable it or use a .cjs file extension for file ${configPath}`
        );
      }

      throw error;
    }
  } else {
    try {
      configObject = require(configPath);
    } catch (error) {
      if (isJSON) {
        throw new Error(
          `Jest: Failed to parse config file ${configPath}\n` +
            `  ${_jsonlint.default.errors(
              fs().readFileSync(configPath, 'utf8')
            )}`
        );
      } else {
        throw error;
      }
    }
  }

  if (configPath.endsWith(_constants.PACKAGE_JSON)) {
    // Event if there's no "jest" property in package.json we will still use
    // an empty object.
    configObject = configObject.jest || {};
  }

  if (configObject.rootDir) {
    // We don't touch it if it has an absolute path specified
    if (!path().isAbsolute(configObject.rootDir)) {
      // otherwise, we'll resolve it relative to the file's __dirname
      configObject.rootDir = path().resolve(
        path().dirname(configPath),
        configObject.rootDir
      );
    }
  } else {
    // If rootDir is not there, we'll set it to this file's __dirname
    configObject.rootDir = path().dirname(configPath);
  }

  return configObject;
}
