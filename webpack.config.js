'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    oaca: path.join(__dirname, 'src/js/oaca.js')
  },

  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].min.js'
  },

  devtool: 'source-map',

  resolve: {
    modules: ['client/lib', 'node_modules'],
    extensions: ['.jsx', '.js']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  }
};
