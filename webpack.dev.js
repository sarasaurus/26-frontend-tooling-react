'use strict';

const { HotModuleReplacementPlugin } = require('webpack');
const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');
// THIS IS AN ES 5 FILE

const webpackDevConfig = {};

webpackDevConfig.mode = 'development';
// this maps our compiled and pre-compiled line numbers
webpackDevConfig.devtool = 'inline-source-map';


// this keeps track of SPA 'history'
webpackDevConfig.devServer = {
  contentBase: './build',
  open: true,
  hot: true,
  historyApiFallback: true,
};

// this plugin is CPU intensive
webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
];

webpackDevConfig.module = {};

webpackDevConfig.module.rules = [
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
];

module.exports = merge(commonConfig, webpackDevConfig);

