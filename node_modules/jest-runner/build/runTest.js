'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = runTest;

function _vm() {
  const data = require('vm');

  _vm = function() {
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

function _jestRuntime() {
  const data = _interopRequireDefault(require('jest-runtime'));

  _jestRuntime = function() {
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

function _jestUtil() {
  const data = require('jest-util');

  _jestUtil = function() {
    return data;
  };

  return data;
}

function _jestLeakDetector() {
  const data = _interopRequireDefault(require('jest-leak-detector'));

  _jestLeakDetector = function() {
    return data;
  };

  return data;
}

function _jestResolve() {
  const data = _interopRequireDefault(require('jest-resolve'));

  _jestResolve = function() {
    return data;
  };

  return data;
}

function _jestConfig() {
  const data = require('jest-config');

  _jestConfig = function() {
    return data;
  };

  return data;
}

function docblock() {
  const data = _interopRequireWildcard(require('jest-docblock'));

  docblock = function() {
    return data;
  };

  return data;
}

function _jestMessageUtil() {
  const data = require('jest-message-util');

  _jestMessageUtil = function() {
    return data;
  };

  return data;
}

function _sourceMapSupport() {
  const data = _interopRequireDefault(require('source-map-support'));

  _sourceMapSupport = function() {
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

function freezeConsole(testConsole, config) {
  // @ts-ignore: `_log` is `private` - we should figure out some proper API here
  testConsole._log = function fakeConsolePush(_type, message) {
    const error = new (_jestUtil().ErrorWithStack)(
      `${_chalk().default.red(
        `${_chalk().default.bold(
          'Cannot log after tests are done.'
        )} Did you forget to wait for something async in your test?`
      )}\nAttempted to log "${message}".`,
      fakeConsolePush
    );
    const formattedError = (0, _jestMessageUtil().formatExecError)(
      error,
      config,
      {
        noStackTrace: false
      },
      undefined,
      true
    );
    process.stderr.write('\n' + formattedError + '\n'); // TODO: set exit code in Jest 25
    // process.exitCode = 1;
  };
} // Keeping the core of "runTest" as a separate function (as "runTestInternal")
// is key to be able to detect memory leaks. Since all variables are local to
// the function, when "runTestInternal" finishes its execution, they can all be
// freed, UNLESS something else is leaking them (and that's why we can detect
// the leak!).
//
// If we had all the code in a single function, we should manually nullify all
// references to verify if there is a leak, which is not maintainable and error
// prone. That's why "runTestInternal" CANNOT be inlined inside "runTest".

async function runTestInternal(path, globalConfig, config, resolver, context) {
  const testSource = fs().readFileSync(path, 'utf8');
  const docblockPragmas = docblock().parse(docblock().extract(testSource));
  const customEnvironment = docblockPragmas['jest-environment'];
  let testEnvironment = config.testEnvironment;

  if (customEnvironment) {
    if (Array.isArray(customEnvironment)) {
      throw new Error(
        `You can only define a single test environment through docblocks, got "${customEnvironment.join(
          ', '
        )}"`
      );
    }

    testEnvironment = (0, _jestConfig().getTestEnvironment)(
      _objectSpread({}, config, {
        testEnvironment: customEnvironment
      })
    );
  }

  const TestEnvironment = (0, _jestUtil().interopRequireDefault)(
    require(testEnvironment)
  ).default;
  const testFramework =
    process.env.JEST_CIRCUS === '1'
      ? require('jest-circus/runner') // eslint-disable-line import/no-extraneous-dependencies
      : require(config.testRunner);
  const Runtime = config.moduleLoader
    ? require(config.moduleLoader)
    : require('jest-runtime');
  let runtime = undefined;
  const consoleOut = globalConfig.useStderr ? process.stderr : process.stdout;

  const consoleFormatter = (type, message) =>
    (0, _console().getConsoleOutput)(
      config.cwd,
      !!globalConfig.verbose, // 4 = the console call is buried 4 stack frames deep
      _console().BufferedConsole.write(
        [],
        type,
        message,
        4,
        runtime && runtime.getSourceMaps()
      )
    );

  let testConsole;

  if (globalConfig.silent) {
    testConsole = new (_console().NullConsole)(
      consoleOut,
      consoleOut,
      consoleFormatter
    );
  } else if (globalConfig.verbose) {
    testConsole = new (_console().CustomConsole)(
      consoleOut,
      consoleOut,
      consoleFormatter
    );
  } else {
    testConsole = new (_console().BufferedConsole)(
      () => runtime && runtime.getSourceMaps()
    );
  }

  const environment = new TestEnvironment(config, {
    console: testConsole,
    docblockPragmas,
    testPath: path
  });
  const leakDetector = config.detectLeaks
    ? new (_jestLeakDetector().default)(environment)
    : null;
  const cacheFS = {
    [path]: testSource
  };
  (0, _jestUtil().setGlobal)(environment.global, 'console', testConsole);
  runtime = new Runtime(config, environment, resolver, cacheFS, {
    changedFiles: context && context.changedFiles,
    collectCoverage: globalConfig.collectCoverage,
    collectCoverageFrom: globalConfig.collectCoverageFrom,
    collectCoverageOnlyFrom: globalConfig.collectCoverageOnlyFrom,
    coverageProvider: globalConfig.coverageProvider
  });
  const start = Date.now();
  const sourcemapOptions = {
    environment: 'node',
    handleUncaughtExceptions: false,
    retrieveSourceMap: source => {
      const sourceMaps = runtime && runtime.getSourceMaps();
      const sourceMapSource = sourceMaps && sourceMaps[source];

      if (sourceMapSource) {
        try {
          return {
            map: JSON.parse(fs().readFileSync(sourceMapSource, 'utf8')),
            url: source
          };
        } catch (e) {}
      }

      return null;
    }
  }; // For tests

  runtime
    .requireInternalModule(
      require.resolve('source-map-support'),
      'source-map-support'
    )
    .install(sourcemapOptions); // For runtime errors

  _sourceMapSupport().default.install(sourcemapOptions);

  if (
    environment.global &&
    environment.global.process &&
    environment.global.process.exit
  ) {
    const realExit = environment.global.process.exit;

    environment.global.process.exit = function exit(...args) {
      const error = new (_jestUtil().ErrorWithStack)(
        `process.exit called with "${args.join(', ')}"`,
        exit
      );
      const formattedError = (0, _jestMessageUtil().formatExecError)(
        error,
        config,
        {
          noStackTrace: false
        },
        undefined,
        true
      );
      process.stderr.write(formattedError);
      return realExit(...args);
    };
  } // if we don't have `getVmContext` on the env,or `compileFunction` available skip coverage

  const collectV8Coverage =
    globalConfig.coverageProvider === 'v8' &&
    typeof environment.getVmContext === 'function' &&
    typeof _vm().compileFunction === 'function';

  try {
    await environment.setup();
    let result;

    try {
      if (collectV8Coverage) {
        await runtime.collectV8Coverage();
      }

      result = await testFramework(
        globalConfig,
        config,
        environment,
        runtime,
        path
      );
    } catch (err) {
      // Access stack before uninstalling sourcemaps
      err.stack;
      throw err;
    } finally {
      if (collectV8Coverage) {
        await runtime.stopCollectingV8Coverage();
      }
    }

    freezeConsole(testConsole, config);
    const testCount =
      result.numPassingTests +
      result.numFailingTests +
      result.numPendingTests +
      result.numTodoTests;
    result.perfStats = {
      end: Date.now(),
      start
    };
    result.testFilePath = path;
    result.console = testConsole.getBuffer();
    result.skipped = testCount === result.numPendingTests;
    result.displayName = config.displayName;
    const coverage = runtime.getAllCoverageInfoCopy();

    if (coverage) {
      const coverageKeys = Object.keys(coverage);

      if (coverageKeys.length) {
        result.coverage = coverage;
        result.sourceMaps = runtime.getSourceMapInfo(new Set(coverageKeys));
      }
    }

    if (collectV8Coverage) {
      const v8Coverage = runtime.getAllV8CoverageInfoCopy();

      if (v8Coverage && v8Coverage.length > 0) {
        result.v8Coverage = v8Coverage;
      }
    }

    if (globalConfig.logHeapUsage) {
      if (global.gc) {
        global.gc();
      }

      result.memoryUsage = process.memoryUsage().heapUsed;
    } // Delay the resolution to allow log messages to be output.

    return new Promise(resolve => {
      setImmediate(() =>
        resolve({
          leakDetector,
          result
        })
      );
    });
  } finally {
    await environment.teardown();

    _sourceMapSupport().default.resetRetrieveHandlers();
  }
}

async function runTest(path, globalConfig, config, resolver, context) {
  const {leakDetector, result} = await runTestInternal(
    path,
    globalConfig,
    config,
    resolver,
    context
  );

  if (leakDetector) {
    // We wanna allow a tiny but time to pass to allow last-minute cleanup
    await new Promise(resolve => setTimeout(resolve, 100)); // Resolve leak detector, outside the "runTestInternal" closure.

    result.leaks = await leakDetector.isLeaking();
  } else {
    result.leaks = false;
  }

  return result;
}
