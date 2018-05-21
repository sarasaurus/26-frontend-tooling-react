require('dotenv').config();
// module to contain all config for project
// these files wont be transpiled! -- cannot transpile index so we use main
// hash is updated/changed each time files are bundled, this allowsCDN to know which 'version' to use/ when file has been updated
// here we are both bundling see line 12, and transpiling see line 13
// almost all that we do will be JS! no HTML
// also note that we are basically just assigning variables to different elements of the config object, could just make one giant object -- we will add a new obj for all our rules
// REGEX: /start pattern--- \escape special character just use verbatim, pattern goes here---- $/end pattern


const HTMLWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = module.exports = {};

// one entry point

webpackConfig.entry = `${__dirname}/src/main.js`;

// one output point
webpackConfig.output = {
  filename: '[name].[hash].js',
  path: `${__dirname}/build`,
  publicPath: process.env.CDN_URL,
};

// to write the html
webpackConfig.plugins = [
  new HTMLWebpackPlugin({
    title: 'Whatever you want your app to be named!',
  }),
];


// all rules webpack needs to bundle everything into one file
webpackConfig.module = {};
webpackConfig.module.rules = [
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader',
    ],
  },
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader', // this is transpiling
      options: {
        presets: ['env', 'stage-0', 'react'],
        plugins: ['transform-react-jsx-source'],
        cacheDirectory: true,
      },
    },
  },
];
