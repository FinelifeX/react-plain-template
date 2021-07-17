const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { webpack } = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

/**
 * 
 * @param {string} dir 
 * @returns {string} Directory path using OS dir path
 */
const makePath = (dir) => path.resolve(__dirname, dir);

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: makePath('./src/index.js'),
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  /** @type {import('webpack-dev-server').Configuration} */
  devServer: {
    contentBase: makePath('./dist'),
    hot: true,
    port: 3000,
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: makePath('./dist'),
    filename: 'bundle.js',
  },
}