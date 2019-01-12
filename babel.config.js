module.exports = {
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    ['@babel/syntax-dynamic-import', { loose: true }],
    ['@babel/transform-runtime', { loose: true }]
  ],
  presets: ['@babel/react', '@babel/env'],
  env: {
    cjs: {
      plugins: [
        ['@babel/transform-runtime', { loose: true }],
        ['transform-dynamic-import', { loose: true }]
      ],
      presets: [['@babel/env']]
    },
    test: {
      presets: [['@babel/env', { targets: { node: true } }]],
      // There is no @babel/ scoped transform for this plugin
      plugins: ['transform-dynamic-import']
    }
  }
};
