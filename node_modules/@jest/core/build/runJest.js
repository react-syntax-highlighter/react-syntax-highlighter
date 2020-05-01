'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = runJest;

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

function _realpathNative() {
  const data = require('realpath-native');

  _realpathNative = function() {
    return data;
  };

  return data;
}

function _console() {
  const data = require('@jest/console');

  _console = function() {
    return data;
  };

  return data;
}

function _jestUtil() {
  const data = require('jest-util');

  _jestUtil = function() {
    return data;
  };

  return data;
}

function _exit() {
  const data = _interopRequireDefault(require('exit'));

  _exit = function() {
    return data;
  };

  return data;
}

function fs() {
  const data = _interopRequireWildcard(require('graceful-fs'));

  fs = function() {
    return data;
  };

  return data;
}

function _jestWatcher() {
  const data = require('jest-watcher');

  _jestWatcher = function() {
    return data;
  };

  return data;
}

function _testResult() {
  const data = require('@jest/test-result');

  _testResult = function() {
    return data;
  };

  return data;
}

var _getNoTestsFoundMessage = _interopRequireDefault(
  require('./getNoTestsFoundMessage')
);

var _runGlobalHook = _interopRequireDefault(require('./runGlobalHook'));

var _SearchSource = _interopRequireDefault(require('./SearchSource'));

var _TestScheduler = _interopRequireDefault(require('./TestScheduler'));

var _collectHandles = _interopRequireDefault(require('./collectHandles'));

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

const getTestPaths = async (
  globalConfig,
  context,
  outputStream,
  changedFiles,
  jestHooks,
  filter
) => {
  const source = new _SearchSource.default(context);
  const data = await source.getTestPaths(globalConfig, changedFiles, filter);

  if (!data.tests.length && globalConfig.onlyChanged && data.noSCM) {
    new (_console().CustomConsole)(outputStream, outputStream).log(
      'Jest can only find uncommitted changed files in a git or hg ' +
        'repository. If you make your project a git or hg ' +
        'repository (`git init` or `hg init`), Jest will be able ' +
        'to only run tests related to files changed since the last ' +
        'commit.'
    );
  }

  const shouldTestArray = await Promise.all(
    data.tests.map(test =>
      jestHooks.shouldRunTestSuite({
        config: test.context.config,
        duration: test.duration,
        testPath: test.path
      })
    )
  );
  const filteredTests = data.tests.filter((_test, i) => shouldTestArray[i]);
  return _objectSpread({}, data, {
    allTests: filteredTests.length,
    tests: filteredTests
  });
};

const processResults = (runResults, options) => {
  const {
    outputFile,
    json: isJSON,
    onComplete,
    outputStream,
    testResultsProcessor,
    collectHandles
  } = options;

  if (collectHandles) {
    runResults.openHandles = collectHandles();
  } else {
    runResults.openHandles = [];
  }

  if (testResultsProcessor) {
    runResults = require(testResultsProcessor)(runResults);
  }

  if (isJSON) {
    if (outputFile) {
      const cwd = (0, _realpathNative().sync)(process.cwd());
      const filePath = path().resolve(cwd, outputFile);
      fs().writeFileSync(
        filePath,
        JSON.stringify((0, _testResult().formatTestResults)(runResults))
      );
      outputStream.write(
        `Test results written to: ${path().relative(cwd, filePath)}\n`
      );
    } else {
      process.stdout.write(
        JSON.stringify((0, _testResult().formatTestResults)(runResults))
      );
    }
  }

  return onComplete && onComplete(runResults);
};

const testSchedulerContext = {
  firstRun: true,
  previousSuccess: true
};

async function runJest({
  contexts,
  globalConfig,
  outputStream,
  testWatcher,
  jestHooks = new (_jestWatcher().JestHook)().getEmitter(),
  startRun,
  changedFilesPromise,
  onComplete,
  failedTestsCache,
  filter
}) {
  const Sequencer = (0, _jestUtil().interopRequireDefault)(
    require(globalConfig.testSequencer)
  ).default;
  const sequencer = new Sequencer();
  let allTests = [];

  if (changedFilesPromise && globalConfig.watch) {
    const {repos} = await changedFilesPromise;
    const noSCM = Object.keys(repos).every(scm => repos[scm].size === 0);

    if (noSCM) {
      process.stderr.write(
        '\n' +
          _chalk().default.bold('--watch') +
          ' is not supported without git/hg, please use --watchAll ' +
          '\n'
      );
      (0, _exit().default)(1);
    }
  }

  const testRunData = await Promise.all(
    contexts.map(async context => {
      const matches = await getTestPaths(
        globalConfig,
        context,
        outputStream,
        changedFilesPromise && (await changedFilesPromise),
        jestHooks,
        filter
      );
      allTests = allTests.concat(matches.tests);
      return {
        context,
        matches
      };
    })
  );
  allTests = await sequencer.sort(allTests);

  if (globalConfig.listTests) {
    const testsPaths = Array.from(new Set(allTests.map(test => test.path)));

    if (globalConfig.json) {
      console.log(JSON.stringify(testsPaths));
    } else {
      console.log(testsPaths.join('\n'));
    }

    onComplete &&
      onComplete((0, _testResult().makeEmptyAggregatedTestResult)());
    return null;
  }

  if (globalConfig.onlyFailures && failedTestsCache) {
    allTests = failedTestsCache.filterTests(allTests);
    globalConfig = failedTestsCache.updateConfig(globalConfig);
  }

  const hasTests = allTests.length > 0;

  if (!hasTests) {
    const noTestsFoundMessage = (0, _getNoTestsFoundMessage.default)(
      testRunData,
      globalConfig
    );

    if (
      globalConfig.passWithNoTests ||
      globalConfig.findRelatedTests ||
      globalConfig.lastCommit ||
      globalConfig.onlyChanged
    ) {
      new (_console().CustomConsole)(outputStream, outputStream).log(
        noTestsFoundMessage
      );
    } else {
      new (_console().CustomConsole)(outputStream, outputStream).error(
        noTestsFoundMessage
      );
      (0, _exit().default)(1);
    }
  } else if (
    allTests.length === 1 &&
    globalConfig.silent !== true &&
    globalConfig.verbose !== false
  ) {
    const newConfig = _objectSpread({}, globalConfig, {
      verbose: true
    });

    globalConfig = Object.freeze(newConfig);
  }

  let collectHandles;

  if (globalConfig.detectOpenHandles) {
    collectHandles = (0, _collectHandles.default)();
  }

  if (hasTests) {
    await (0, _runGlobalHook.default)({
      allTests,
      globalConfig,
      moduleName: 'globalSetup'
    });
  }

  if (changedFilesPromise) {
    testSchedulerContext.changedFiles = (
      await changedFilesPromise
    ).changedFiles;
  }

  const results = await new _TestScheduler.default(
    globalConfig,
    {
      startRun
    },
    testSchedulerContext
  ).scheduleTests(allTests, testWatcher);
  sequencer.cacheResults(allTests, results);

  if (hasTests) {
    await (0, _runGlobalHook.default)({
      allTests,
      globalConfig,
      moduleName: 'globalTeardown'
    });
  }

  return processResults(results, {
    collectHandles,
    json: globalConfig.json,
    onComplete,
    outputFile: globalConfig.outputFile,
    outputStream,
    testResultsProcessor: globalConfig.testResultsProcessor
  });
}
