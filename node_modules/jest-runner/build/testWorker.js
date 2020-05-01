'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.setup = setup;
exports.worker = worker;

function _jestHasteMap() {
  const data = _interopRequireDefault(require('jest-haste-map'));

  _jestHasteMap = function() {
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

function _jestMessageUtil() {
  const data = require('jest-message-util');

  _jestMessageUtil = function() {
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

function _jestResolve() {
  const data = _interopRequireDefault(require('jest-resolve'));

  _jestResolve = function() {
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

// Make sure uncaught errors are logged before we exit.
process.on('uncaughtException', err => {
  console.error(err.stack);
  (0, _exit().default)(1);
});

const formatError = error => {
  if (typeof error === 'string') {
    const {message, stack} = (0, _jestMessageUtil().separateMessageFromStack)(
      error
    );
    return {
      message,
      stack,
      type: 'Error'
    };
  }

  return {
    code: error.code || undefined,
    message: error.message,
    stack: error.stack,
    type: 'Error'
  };
};

const resolvers = new Map();

const getResolver = config => {
  const resolver = resolvers.get(config.name);

  if (!resolver) {
    throw new Error('Cannot find resolver for: ' + config.name);
  }

  return resolver;
};

function setup(setupData) {
  // Module maps that will be needed for the test runs are passed.
  for (const {
    config,
    serializableModuleMap
  } of setupData.serializableResolvers) {
    const moduleMap = _jestHasteMap().default.ModuleMap.fromJSON(
      serializableModuleMap
    );

    resolvers.set(
      config.name,
      _jestRuntime().default.createResolver(config, moduleMap)
    );
  }
}

async function worker({config, globalConfig, path, context}) {
  try {
    return await (0, _runTest.default)(
      path,
      globalConfig,
      config,
      getResolver(config),
      context &&
        _objectSpread({}, context, {
          changedFiles: context.changedFiles && new Set(context.changedFiles)
        })
    );
  } catch (error) {
    throw formatError(error);
  }
}
