import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import pkg from './package.json';

// treat as externals not relative and not absolute paths
const external = id => !id.startsWith('.') && !id.startsWith('/');

const input = './src/index.js';
const inputUmd = './src/index.sync.js';
const extensions = ['.js', '.jsx'];

const babelOptions = {
  babelrc: false,
  runtimeHelpers: true,
  extensions,
  exclude: 'node_modules/**'
};

const commonjsOptions = {
  include: 'node_modules/**'
};

export default [
  {
    input,
    external,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    plugins: [nodeResolve({ extensions }), babel(babelOptions), sizeSnapshot()]
  },

  {
    input,
    external,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      nodeResolve({ extensions }),
      babel(babelOptions)
      // size-snapshot plugin doesn't support rollup v1 somewhere yet. But guys are working on it now!
      // sizeSnapshot(),
    ]
  },

  {
    input: inputUmd,
    output: {
      format: 'umd',
      name: pkg.name,
      file: 'build/dist/react-syntax-highlighter.umd.js'
    },

    plugins: [
      json(),
      nodeResolve({ extensions }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      sizeSnapshot()
    ]
  },

  {
    input: inputUmd,
    output: {
      format: 'umd',
      name: pkg.name,
      file: 'build/dist/react-syntax-highlighter.umd.min.js'
    },
    plugins: [
      json(),
      nodeResolve({ extensions }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot(),
      uglify()
    ]
  }
];
