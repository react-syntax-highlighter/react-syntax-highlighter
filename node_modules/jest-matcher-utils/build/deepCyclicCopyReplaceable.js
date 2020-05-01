'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = deepCyclicCopyReplaceable;

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const builtInObject = [
  Array,
  Buffer,
  Date,
  Float32Array,
  Float64Array,
  Int16Array,
  Int32Array,
  Int8Array,
  Map,
  Set,
  RegExp,
  Uint16Array,
  Uint32Array,
  Uint8Array,
  Uint8ClampedArray
];

const isBuiltInObject = object => builtInObject.includes(object.constructor);

const isMap = value => value.constructor === Map;

function deepCyclicCopyReplaceable(value, cycles = new WeakMap()) {
  if (typeof value !== 'object' || value === null) {
    return value;
  } else if (cycles.has(value)) {
    return cycles.get(value);
  } else if (Array.isArray(value)) {
    return deepCyclicCopyArray(value, cycles);
  } else if (isMap(value)) {
    return deepCyclicCopyMap(value, cycles);
  } else if (isBuiltInObject(value)) {
    return value;
  } else {
    return deepCyclicCopyObject(value, cycles);
  }
}

function deepCyclicCopyObject(object, cycles) {
  const newObject = Object.create(Object.getPrototypeOf(object));
  const descriptors = Object.getOwnPropertyDescriptors(object);
  cycles.set(object, newObject);
  Object.keys(descriptors).forEach(key => {
    const descriptor = descriptors[key];

    if (typeof descriptor.value !== 'undefined') {
      descriptor.value = deepCyclicCopyReplaceable(descriptor.value, cycles);
    }

    descriptor.configurable = true;
  });
  return Object.defineProperties(newObject, descriptors);
}

function deepCyclicCopyArray(array, cycles) {
  const newArray = new (Object.getPrototypeOf(array).constructor)(array.length);
  const length = array.length;
  cycles.set(array, newArray);

  for (let i = 0; i < length; i++) {
    newArray[i] = deepCyclicCopyReplaceable(array[i], cycles);
  }

  return newArray;
}

function deepCyclicCopyMap(map, cycles) {
  const newMap = new Map();
  cycles.set(map, newMap);
  map.forEach((value, key) => {
    newMap.set(key, deepCyclicCopyReplaceable(value, cycles));
  });
  return newMap;
}
