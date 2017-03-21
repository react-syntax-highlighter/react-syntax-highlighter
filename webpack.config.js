var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname),
  devtool: 'source-map',
  entry: {
        demo: './demo/index.js',
        diff: './demo/diff.js',
        virtualized: './demo/virtualized.js'
    },
  output: {
    path: path.join(__dirname, 'demo'),
    filename: '[name]-build.js'
  },
  module: {
      loaders: [
        {
            test: /\.js?$/,
            loader: 'babel',
            query: { 
              presets: ['react', 'es2015'],
              plugins: ['transform-object-rest-spread', 'transform-runtime']
            },
            include: path.join(__dirname, 'demo')
        },
        { test: /\.css$/, loader: 'style!css' }
      ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify('production')
    })
  ]
};