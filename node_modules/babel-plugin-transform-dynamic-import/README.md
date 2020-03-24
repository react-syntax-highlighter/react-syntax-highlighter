# babel-plugin-transform-dynamic-import

Babel plugin to transpile `import()` to a deferred `require()`, for node. Matches the [proposed spec](https://github.com/domenic/proposal-import-function).

**NOTE:** Babylon >= v6.12.0 is required to correct parse dynamic imports.

## Installation

```sh
$ npm install babel-plugin-transform-dynamic-import --save-dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-dynamic-import"]
}
```

### Via CLI

```sh
$ babel --plugins transform-dynamic-import script.js
```

### Via Node API

```javascript
require('@babel/core').transform('code', {
  plugins: ['transform-dynamic-import']
});
```
