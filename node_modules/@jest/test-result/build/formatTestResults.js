'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = formatTestResults;

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
const formatTestResult = (testResult, codeCoverageFormatter, reporter) => {
  const assertionResults = testResult.testResults.map(formatTestAssertion);

  if (testResult.testExecError) {
    const now = Date.now();
    return {
      assertionResults,
      coverage: {},
      endTime: now,
      message: testResult.failureMessage
        ? testResult.failureMessage
        : testResult.testExecError.message,
      name: testResult.testFilePath,
      startTime: now,
      status: 'failed',
      summary: ''
    };
  } else {
    const allTestsPassed = testResult.numFailingTests === 0;
    return {
      assertionResults,
      coverage: codeCoverageFormatter
        ? codeCoverageFormatter(testResult.coverage, reporter)
        : testResult.coverage,
      endTime: testResult.perfStats.end,
      message: testResult.failureMessage || '',
      name: testResult.testFilePath,
      startTime: testResult.perfStats.start,
      status: allTestsPassed ? 'passed' : 'failed',
      summary: ''
    };
  }
};

function formatTestAssertion(assertion) {
  const result = {
    ancestorTitles: assertion.ancestorTitles,
    failureMessages: null,
    fullName: assertion.fullName,
    location: assertion.location,
    status: assertion.status,
    title: assertion.title
  };

  if (assertion.failureMessages) {
    result.failureMessages = assertion.failureMessages;
  }

  return result;
}

function formatTestResults(results, codeCoverageFormatter, reporter) {
  const testResults = results.testResults.map(testResult =>
    formatTestResult(testResult, codeCoverageFormatter, reporter)
  );
  return _objectSpread({}, results, {
    testResults
  });
}
