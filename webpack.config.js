'use strict';
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const env = process.env.NODE_ENV;

const location = {
  build: './assets/javascript/build',
  home: './assets/javascript/src/pages/home'
};

// define plugins
const plugins = (function (env) {
  let plugins = [];

  if (env === 'production') {
    plugins.push(new CleanWebpackPlugin([location.build]));
  }

  return plugins;
})(env);

module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  },
  entry: {
    home: location.home
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, location.build)
  },
  plugins: plugins,
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader"
      }
    ]
  }
};