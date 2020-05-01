'use strict';

function _exit() {
  const data = _interopRequireDefault(require('exit'));

  _exit = function() {
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

function _throat() {
  const data = _interopRequireDefault(require('throat'));

  _throat = function() {
    return data;
  };

  return data;
}

function _jestWorker() {
  const data = _interopRequireDefault(require('jest-worker'));

  _jestWorker = function() {
    return data;
  };

  return data;
}

var _runTest = _interopRequireDefault(require('./runTest'));

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

const TEST_WORKER_PATH = require.resolve('./testWorker');

/* eslint-disable-next-line no-redeclare */
class TestRunner {
  constructor(globalConfig, context) {
    _defineProperty(this, '_globalConfig', void 0);

    _defineProperty(this, '_context', void 0);

    this._globalConfig = globalConfig;
    this._context = context || {};
  }

  async runTests(tests, watcher, onStart, onResult, onFailure, options) {
    return await (options.serial
      ? this._createInBandTestRun(tests, watcher, onStart, onResult, onFailure)
      : this._createParallelTestRun(
          tests,
          watcher,
          onStart,
          onResult,
          onFailure
        ));
  }

  async _createInBandTestRun(tests, watcher, onStart, onResult, onFailure) {
    process.env.JEST_WORKER_ID = '1';
    const mutex = (0, _throat().default)(1);
    return tests.reduce(
      (promise, test) =>
        mutex(() =>
          promise
            .then(async () => {
              if (watcher.isInterrupted()) {
                throw new CancelRun();
              }

              await onStart(test);
              return (0, _runTest.default)(
                test.path,
                this._globalConfig,
                test.context.config,
                test.context.resolver,
                this._context
              );
            })
            .then(result => onResult(test, result))
            .catch(err => onFailure(test, err))
        ),
      Promise.resolve()
    );
  }

  async _createParallelTestRun(tests, watcher, onStart, onResult, onFailure) {
    const resolvers = new Map();

    for (const test of tests) {
      if (!resolvers.has(test.context.config.name)) {
        resolvers.set(test.context.config.name, {
          config: test.context.config,
          serializableModuleMap: test.context.moduleMap.toJSON()
        });
      }
    }

    const worker = new (_jestWorker().default)(TEST_WORKER_PATH, {
      exposedMethods: ['worker'],
      forkOptions: {
        stdio: 'pipe'
      },
      maxRetries: 3,
      numWorkers: this._globalConfig.maxWorkers,
      setupArgs: [
        {
          serializableResolvers: Array.from(resolvers.values())
        }
      ]
    });
    if (worker.getStdout()) worker.getStdout().pipe(process.stdout);
    if (worker.getStderr()) worker.getStderr().pipe(process.stderr);
    const mutex = (0, _throat().default)(this._globalConfig.maxWorkers); // Send test suites to workers continuously instead of all at once to track
    // the start time of individual tests.

    const runTestInWorker = test =>
      mutex(async () => {
        if (watcher.isInterrupted()) {
          return Promise.reject();
        }

        await onStart(test);
        return worker.worker({
          config: test.context.config,
          context: _objectSpread({}, this._context, {
            changedFiles:
              this._context.changedFiles &&
              Array.from(this._context.changedFiles)
          }),
          globalConfig: this._globalConfig,
          path: test.path
        });
      });

    const onError = async (err, test) => {
      await onFailure(test, err);

      if (err.type === 'ProcessTerminatedError') {
        console.error(
          'A worker process has quit unexpectedly! ' +
            'Most likely this is an initialization error.'
        );
        (0, _exit().default)(1);
      }
    };

    const onInterrupt = new Promise((_, reject) => {
      watcher.on('change', state => {
        if (state.interrupted) {
          reject(new CancelRun());
        }
      });
    });
    const runAllTests = Promise.all(
      tests.map(test =>
        runTestInWorker(test)
          .then(testResult => onResult(test, testResult))
          .catch(error => onError(error, test))
      )
    );

    const cleanup = async () => {
      const {forceExited} = await worker.end();

      if (forceExited) {
        console.log(
          _chalk().default.yellow(
            'A worker process has failed to exit gracefully and has been force exited. ' +
              'This is likely caused by tests leaking due to improper teardown. ' +
              'Try running with --runInBand --detectOpenHandles to find leaks.'
          )
        );
      }
    };

    return Promise.race([runAllTests, onInterrupt]).then(cleanup, cleanup);
  }
}

class CancelRun extends Error {
  constructor(message) {
    super(message);
    this.name = 'CancelRun';
  }
}

module.exports = TestRunner;
