'use strict';

const { HotModuleReplacementPlugin } = require('webpack');
const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');

// this file is for development env config
// THIS IS AN ES 5 FILE

const webpackDevConfig = {};

// this way we can hide things like console logs and other logs from end user
webpackDevConfig.mode = 'development';
// this is a way to map the pre-transpiled lines to the transpiled lines so that error on line xyz actually maps to the correct line both transpiled and untranspiled
webpackDevConfig.devtool = 'inline-source-map';


// we building SPA -- so no 'back'-- but user wants to be able to 'go back'--- want to give use illustion of diffferent routes, thus, must enable historyApiFallback-- keeps track of the fake history 
webpackDevConfig.devServer = {
  contentBase: './build',
  open: true,
  hot: true,
  historyApiFallback: true,
};

// this plugin can eat up a lot of CPU, so check and see if your computer can hack it--- if not can disable
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


// try removing things to see what changes in your app!
