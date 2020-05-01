'use strict';

function _jestResolve() {
  const data = _interopRequireDefault(require('jest-resolve'));

  _jestResolve = function() {
    return data;
  };

  return data;
}

function _jestSnapshot() {
  const data = require('jest-snapshot');

  _jestSnapshot = function() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
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

/**
 * DependencyResolver is used to resolve the direct dependencies of a module or
 * to retrieve a list of all transitive inverse dependencies.
 */

/* eslint-disable-next-line no-redeclare */
class DependencyResolver {
  constructor(resolver, hasteFS, snapshotResolver) {
    _defineProperty(this, '_hasteFS', void 0);

    _defineProperty(this, '_resolver', void 0);

    _defineProperty(this, '_snapshotResolver', void 0);

    this._resolver = resolver;
    this._hasteFS = hasteFS;
    this._snapshotResolver = snapshotResolver;
  }

  resolve(file, options) {
    const dependencies = this._hasteFS.getDependencies(file);

    if (!dependencies) {
      return [];
    }

    return dependencies.reduce((acc, dependency) => {
      if (this._resolver.isCoreModule(dependency)) {
        return acc;
      }

      let resolvedDependency;

      try {
        resolvedDependency = this._resolver.resolveModule(
          file,
          dependency,
          options
        );
      } catch (_unused) {
        try {
          resolvedDependency = this._resolver.getMockModule(file, dependency);
        } catch (_unused2) {
          // leave resolvedDependency as undefined if nothing can be found
        }
      }

      if (resolvedDependency) {
        acc.push(resolvedDependency);
      }

      return acc;
    }, []);
  }

  resolveInverseModuleMap(paths, filter, options) {
    if (!paths.size) {
      return [];
    }

    const collectModules = (related, moduleMap, changed) => {
      const visitedModules = new Set();
      const result = [];

      while (changed.size) {
        changed = new Set(
          moduleMap.reduce((acc, module) => {
            if (
              visitedModules.has(module.file) ||
              !module.dependencies.some(dep => changed.has(dep))
            ) {
              return acc;
            }

            const file = module.file;

            if (filter(file)) {
              result.push(module);
              related.delete(file);
            }

            visitedModules.add(file);
            acc.push(file);
            return acc;
          }, [])
        );
      }

      return result.concat(
        Array.from(related).map(file => ({
          dependencies: [],
          file
        }))
      );
    };

    const relatedPaths = new Set();
    const changed = new Set();

    for (const path of paths) {
      if (this._hasteFS.exists(path)) {
        const modulePath = (0, _jestSnapshot().isSnapshotPath)(path)
          ? this._snapshotResolver.resolveTestPath(path)
          : path;
        changed.add(modulePath);

        if (filter(modulePath)) {
          relatedPaths.add(modulePath);
        }
      }
    }

    const modules = [];

    for (const file of this._hasteFS.getAbsoluteFileIterator()) {
      modules.push({
        dependencies: this.resolve(file, options),
        file
      });
    }

    return collectModules(relatedPaths, modules, changed);
  }

  resolveInverse(paths, filter, options) {
    return this.resolveInverseModuleMap(paths, filter, options).map(
      module => module.file
    );
  }
}

module.exports = DependencyResolver;
