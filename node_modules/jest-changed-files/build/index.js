'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'ChangedFiles', {
  enumerable: true,
  get: function() {
    return _types.ChangedFiles;
  }
});
Object.defineProperty(exports, 'ChangedFilesPromise', {
  enumerable: true,
  get: function() {
    return _types.ChangedFilesPromise;
  }
});
exports.findRepos = exports.getChangedFilesForRoots = void 0;

function _throat() {
  const data = _interopRequireDefault(require('throat'));

  _throat = function() {
    return data;
  };

  return data;
}

var _types = require('./types');

var _git = _interopRequireDefault(require('./git'));

var _hg = _interopRequireDefault(require('./hg'));

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

function notEmpty(value) {
  return value != null;
} // This is an arbitrary number. The main goal is to prevent projects with
// many roots (50+) from spawning too many processes at once.

const mutex = (0, _throat().default)(5);

const findGitRoot = dir => mutex(() => _git.default.getRoot(dir));

const findHgRoot = dir => mutex(() => _hg.default.getRoot(dir));

const getChangedFilesForRoots = async (roots, options) => {
  const repos = await findRepos(roots);

  const changedFilesOptions = _objectSpread(
    {
      includePaths: roots
    },
    options
  );

  const gitPromises = Array.from(repos.git).map(repo =>
    _git.default.findChangedFiles(repo, changedFilesOptions)
  );
  const hgPromises = Array.from(repos.hg).map(repo =>
    _hg.default.findChangedFiles(repo, changedFilesOptions)
  );
  const changedFiles = (
    await Promise.all(gitPromises.concat(hgPromises))
  ).reduce((allFiles, changedFilesInTheRepo) => {
    for (const file of changedFilesInTheRepo) {
      allFiles.add(file);
    }

    return allFiles;
  }, new Set());
  return {
    changedFiles,
    repos
  };
};

exports.getChangedFilesForRoots = getChangedFilesForRoots;

const findRepos = async roots => {
  const gitRepos = await Promise.all(
    roots.reduce((promises, root) => promises.concat(findGitRoot(root)), [])
  );
  const hgRepos = await Promise.all(
    roots.reduce((promises, root) => promises.concat(findHgRoot(root)), [])
  );
  return {
    git: new Set(gitRepos.filter(notEmpty)),
    hg: new Set(hgRepos.filter(notEmpty))
  };
};

exports.findRepos = findRepos;
