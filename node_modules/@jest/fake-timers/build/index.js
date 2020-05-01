'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'JestFakeTimers', {
  enumerable: true,
  get: function() {
    return _jestFakeTimers.default;
  }
});
Object.defineProperty(exports, 'LolexFakeTimers', {
  enumerable: true,
  get: function() {
    return _FakeTimersLolex.default;
  }
});

var _jestFakeTimers = _interopRequireDefault(require('./jestFakeTimers'));

var _FakeTimersLolex = _interopRequireDefault(require('./FakeTimersLolex'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
