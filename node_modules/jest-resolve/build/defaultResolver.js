'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = defaultResolver;
exports.clearDefaultResolverCache = void 0;

function fs() {
  const data = _interopRequireWildcard(require('fs'));

  fs = function() {
    return data;
  };

  return data;
}

function path() {
  const data = _interopRequireWildcard(require('path'));

  path = function() {
    return data;
  };

  return data;
}

function _browserResolve() {
  const data = require('browser-resolve');

  _browserResolve = function() {
    return data;
  };

  return data;
}

function _jestPnpResolver() {
  const data = _interopRequireDefault(require('jest-pnp-resolver'));

  _jestPnpResolver = function() {
    return data;
  };

  return data;
}

var _isBuiltinModule = _interopRequireDefault(require('./isBuiltinModule'));

var _nodeModulesPaths = _interopRequireDefault(require('./nodeModulesPaths'));

var _ModuleNotFoundError = _interopRequireDefault(
  require('./ModuleNotFoundError')
);

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
function defaultResolver(path, options) {
  // @ts-ignore: the "pnp" version named isn't in DefinitelyTyped
  if (process.versions.pnp) {
    return (0, _jestPnpResolver().default)(path, options);
  }

  const resolve = options.browser ? _browserResolve().sync : resolveSync;
  return resolve(path, {
    basedir: options.basedir,
    defaultResolver,
    extensions: options.extensions,
    moduleDirectory: options.moduleDirectory,
    paths: options.paths,
    rootDir: options.rootDir
  });
}

const clearDefaultResolverCache = () => {
  checkedPaths.clear();
};

exports.clearDefaultResolverCache = clearDefaultResolverCache;
const REGEX_RELATIVE_IMPORT = /^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\\\/])/;

function resolveSync(target, options) {
  const basedir = options.basedir;
  const extensions = options.extensions || ['.js'];
  const paths = options.paths || [];

  if (REGEX_RELATIVE_IMPORT.test(target)) {
    // resolve relative import
    const resolveTarget = path().resolve(basedir, target);
    const result = tryResolve(resolveTarget);

    if (result) {
      return result;
    }
  } else {
    // otherwise search for node_modules
    const dirs = (0, _nodeModulesPaths.default)(basedir, {
      moduleDirectory: options.moduleDirectory,
      paths
    });

    for (let i = 0; i < dirs.length; i++) {
      const resolveTarget = path().join(dirs[i], target);
      const result = tryResolve(resolveTarget);

      if (result) {
        return result;
      }
    }
  }

  if ((0, _isBuiltinModule.default)(target)) {
    return target;
  }

  throw new _ModuleNotFoundError.default(
    "Cannot find module '" + target + "' from '" + basedir + "'"
  );
  /*
   * contextual helper functions
   */

  function tryResolve(name) {
    const dir = path().dirname(name);
    let result;

    if (isDirectory(dir)) {
      result = resolveAsFile(name) || resolveAsDirectory(name);
    }

    if (result) {
      // Dereference symlinks to ensure we don't create a separate
      // module instance depending on how it was referenced.
      result = fs().realpathSync(result);
    }

    return result;
  }

  function resolveAsFile(name) {
    if (isFile(name)) {
      return name;
    }

    for (let i = 0; i < extensions.length; i++) {
      const file = name + extensions[i];

      if (isFile(file)) {
        return file;
      }
    }

    return undefined;
  }

  function resolveAsDirectory(name) {
    if (!isDirectory(name)) {
      return undefined;
    }

    const pkgfile = path().join(name, 'package.json');
    let pkgmain;

    try {
      const body = fs().readFileSync(pkgfile, 'utf8');
      pkgmain = JSON.parse(body).main;
    } catch (e) {}

    if (pkgmain && !isCurrentDirectory(pkgmain)) {
      const resolveTarget = path().resolve(name, pkgmain);
      const result = tryResolve(resolveTarget);

      if (result) {
        return result;
      }
    }

    return resolveAsFile(path().join(name, 'index'));
  }
}

var IPathType;

(function(IPathType) {
  IPathType[(IPathType['FILE'] = 1)] = 'FILE';
  IPathType[(IPathType['DIRECTORY'] = 2)] = 'DIRECTORY';
  IPathType[(IPathType['OTHER'] = 3)] = 'OTHER';
})(IPathType || (IPathType = {}));

const checkedPaths = new Map();

function statSyncCached(path) {
  const result = checkedPaths.get(path);

  if (result !== undefined) {
    return result;
  }

  let stat;

  try {
    stat = fs().statSync(path);
  } catch (e) {
    if (!(e && (e.code === 'ENOENT' || e.code === 'ENOTDIR'))) {
      throw e;
    }
  }

  if (stat) {
    if (stat.isFile() || stat.isFIFO()) {
      checkedPaths.set(path, IPathType.FILE);
      return IPathType.FILE;
    } else if (stat.isDirectory()) {
      checkedPaths.set(path, IPathType.DIRECTORY);
      return IPathType.DIRECTORY;
    }
  }

  checkedPaths.set(path, IPathType.OTHER);
  return IPathType.OTHER;
}
/*
 * helper functions
 */

function isFile(file) {
  return statSyncCached(file) === IPathType.FILE;
}

function isDirectory(dir) {
  return statSyncCached(dir) === IPathType.DIRECTORY;
}

const CURRENT_DIRECTORY = path().resolve('.');

function isCurrentDirectory(testPath) {
  return CURRENT_DIRECTORY === path().resolve(testPath);
}
