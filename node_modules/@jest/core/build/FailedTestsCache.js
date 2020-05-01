'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

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

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class FailedTestsCache {
  constructor() {
    _defineProperty(this, '_enabledTestsMap', void 0);
  }

  filterTests(tests) {
    const enabledTestsMap = this._enabledTestsMap;

    if (!enabledTestsMap) {
      return tests;
    }

    return tests.filter(testResult => enabledTestsMap[testResult.path]);
  }

  setTestResults(testResults) {
    this._enabledTestsMap = (testResults || [])
      .filter(testResult => testResult.numFailingTests)
      .reduce((suiteMap, testResult) => {
        suiteMap[testResult.testFilePath] = testResult.testResults
          .filter(test => test.status === 'failed')
          .reduce((testMap, test) => {
            testMap[test.fullName] = true;
            return testMap;
          }, {});
        return suiteMap;
      }, {});
    this._enabledTestsMap = Object.freeze(this._enabledTestsMap);
  }

  updateConfig(globalConfig) {
    if (!this._enabledTestsMap) {
      return globalConfig;
    }

    const newConfig = _objectSpread({}, globalConfig);

    newConfig.enabledTestsMap = this._enabledTestsMap;
    return Object.freeze(newConfig);
  }
}

exports.default = FailedTestsCache;
