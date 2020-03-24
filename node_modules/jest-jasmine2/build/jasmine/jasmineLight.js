'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports._interface = exports.create = void 0;

var _createSpy = _interopRequireDefault(require('./createSpy'));

var _Env = _interopRequireDefault(require('./Env'));

var _JsApiReporter = _interopRequireDefault(require('./JsApiReporter'));

var _ReportDispatcher = _interopRequireDefault(require('./ReportDispatcher'));

var _Spec = _interopRequireDefault(require('./Spec'));

var _spyRegistry = _interopRequireDefault(require('./spyRegistry'));

var _Suite = _interopRequireDefault(require('./Suite'));

var _Timer = _interopRequireDefault(require('./Timer'));

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

const create = function(createOptions) {
  const j$ = _objectSpread({}, createOptions);

  j$._DEFAULT_TIMEOUT_INTERVAL = createOptions.testTimeout || 5000;

  j$.getEnv = function(options) {
    const env = (j$.currentEnv_ = j$.currentEnv_ || new j$.Env(options)); //jasmine. singletons in here (setTimeout blah blah).

    return env;
  };

  j$.createSpy = _createSpy.default;
  j$.Env = (0, _Env.default)(j$);
  j$.JsApiReporter = _JsApiReporter.default;
  j$.ReportDispatcher = _ReportDispatcher.default;
  j$.Spec = _Spec.default;
  j$.SpyRegistry = _spyRegistry.default;
  j$.Suite = _Suite.default;
  j$.Timer = _Timer.default;
  j$.version = '2.5.2-light';
  return j$;
}; // Interface is a reserved word in strict mode, so can't export it as ESM

exports.create = create;

const _interface = function(jasmine, env) {
  const jasmineInterface = {
    describe(description, specDefinitions) {
      return env.describe(description, specDefinitions);
    },

    xdescribe(description, specDefinitions) {
      return env.xdescribe(description, specDefinitions);
    },

    fdescribe(description, specDefinitions) {
      return env.fdescribe(description, specDefinitions);
    },

    it() {
      return env.it.apply(env, arguments);
    },

    xit() {
      return env.xit.apply(env, arguments);
    },

    fit() {
      return env.fit.apply(env, arguments);
    },

    beforeEach() {
      if (typeof arguments[0] !== 'function') {
        throw new Error(
          'Invalid first argument. It must be a callback function.'
        );
      }

      return env.beforeEach.apply(env, arguments);
    },

    afterEach() {
      if (typeof arguments[0] !== 'function') {
        throw new Error(
          'Invalid first argument. It must be a callback function.'
        );
      }

      return env.afterEach.apply(env, arguments);
    },

    beforeAll() {
      if (typeof arguments[0] !== 'function') {
        throw new Error(
          'Invalid first argument. It must be a callback function.'
        );
      }

      return env.beforeAll.apply(env, arguments);
    },

    afterAll() {
      if (typeof arguments[0] !== 'function') {
        throw new Error(
          'Invalid first argument. It must be a callback function.'
        );
      }

      return env.afterAll.apply(env, arguments);
    },

    pending() {
      return env.pending.apply(env, arguments);
    },

    fail() {
      return env.fail.apply(env, arguments);
    },

    spyOn(obj, methodName, accessType) {
      return env.spyOn(obj, methodName, accessType);
    },

    jsApiReporter: new jasmine.JsApiReporter({
      timer: new jasmine.Timer()
    }),
    jasmine
  };
  return jasmineInterface;
};

exports._interface = _interface;
