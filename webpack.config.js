var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname),
  devtool: 'source-map',
  entry: {
        demo: "./demo/index.js"
    },
  output: {
    path: path.join(__dirname) + '/demo',
    filename: "[name].js"
  },
  module: {
      loaders: [
        {
            test: /\.js?$/,
            loader: 'babel',
            query: { presets: ['react', 'es2015'] },
            include: path.join(__dirname) + '/demo'
        },
        { test: /\.css$/, loader: 'style!css' }
      ]
  },
};