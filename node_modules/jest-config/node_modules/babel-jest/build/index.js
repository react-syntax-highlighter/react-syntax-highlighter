'use strict';

function _crypto() {
  const data = require('crypto');

  _crypto = function() {
    return data;
  };

  return data;
}

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

function _core() {
  const data = require('@babel/core');

  _core = function() {
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

function _slash() {
  const data = _interopRequireDefault(require('slash'));

  _slash = function() {
    return data;
  };

  return data;
}

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

const THIS_FILE = fs().readFileSync(__filename);

const jestPresetPath = require.resolve('babel-preset-jest');

const babelIstanbulPlugin = require.resolve('babel-plugin-istanbul'); // Narrow down the types

const createTransformer = (options = {}) => {
  options = _objectSpread({}, options, {
    caller: {
      name: 'babel-jest',
      supportsStaticESM: false
    },
    compact: false,
    plugins: (options && options.plugins) || [],
    presets: ((options && options.presets) || []).concat(jestPresetPath),
    sourceMaps: 'both'
  });

  function loadBabelConfig(cwd, filename) {
    // `cwd` first to allow incoming options to override it
    const babelConfig = (0, _core().loadPartialConfig)(
      _objectSpread(
        {
          cwd
        },
        options,
        {
          filename
        }
      )
    );

    if (!babelConfig) {
      throw new Error(
        `babel-jest: Babel ignores ${_chalk().default.bold(
          (0, _slash().default)(path().relative(cwd, filename))
        )} - make sure to include the file in Jest's ${_chalk().default.bold(
          'transformIgnorePatterns'
        )} as well.`
      );
    }

    return babelConfig;
  }

  return {
    canInstrument: true,

    getCacheKey(
      fileData,
      filename,
      configString,
      {config, instrument, rootDir}
    ) {
      const babelOptions = loadBabelConfig(config.cwd, filename);
      const configPath = [
        babelOptions.config || '',
        babelOptions.babelrc || ''
      ];
      return (0, _crypto().createHash)('md5')
        .update(THIS_FILE)
        .update('\0', 'utf8')
        .update(JSON.stringify(babelOptions.options))
        .update('\0', 'utf8')
        .update(fileData)
        .update('\0', 'utf8')
        .update(path().relative(rootDir, filename))
        .update('\0', 'utf8')
        .update(configString)
        .update('\0', 'utf8')
        .update(configPath.join(''))
        .update('\0', 'utf8')
        .update(instrument ? 'instrument' : '')
        .update('\0', 'utf8')
        .update(process.env.NODE_ENV || '')
        .update('\0', 'utf8')
        .update(process.env.BABEL_ENV || '')
        .digest('hex');
    },

    process(src, filename, config, transformOptions) {
      const babelOptions = _objectSpread(
        {},
        loadBabelConfig(config.cwd, filename).options
      );

      if (transformOptions && transformOptions.instrument) {
        babelOptions.auxiliaryCommentBefore = ' istanbul ignore next '; // Copied from jest-runtime transform.js

        babelOptions.plugins = (babelOptions.plugins || []).concat([
          [
            babelIstanbulPlugin,
            {
              // files outside `cwd` will not be instrumented
              cwd: config.rootDir,
              exclude: []
            }
          ]
        ]);
      }

      const transformResult = (0, _core().transformSync)(src, babelOptions);

      if (transformResult) {
        const {code, map} = transformResult;

        if (typeof code === 'string') {
          return {
            code,
            map
          };
        }
      }

      return src;
    }
  };
};

const transformer = _objectSpread({}, createTransformer(), {
  // Assigned here so only the exported transformer has `createTransformer`,
  // instead of all created transformers by the function
  createTransformer
});

module.exports = transformer;
