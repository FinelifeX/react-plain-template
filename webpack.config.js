const path = require('path');

// util

/**
 * 
 * @param {string} dir 
 * @returns {string} Directory path using OS dir path
 */
const makePath = (dir) => path.resolve(__dirname, dir);

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: makePath('./src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  output: {
    path: makePath('./dist'),
    filename: 'bundle.js',
  },
  /** @type {import('webpack-dev-server').Configuration} */
  devServer: {
    contentBase: makePath('./dist'),
  }
}