const webpack = require('webpack');

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const absoluteSwaggermenPath = resolve(__dirname, '../../packages/swaggermen/src');
const absoluteSwaggermenCorePath = resolve(__dirname, '../../packages/swaggermen-core/src');
const absoluteSwaggermenDevPortalPath = resolve(__dirname, '../../packages/swaggermen-dev-portal/src');

console.log(absoluteSwaggermenPath);

module.exports = {
  context: resolve(__dirname, '../src'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@swaggermen/swaggermen': absoluteSwaggermenPath,
      '@swaggermen/swaggermen-core': absoluteSwaggermenCorePath,
      '@swaggermen/swaggermen-dev-portal': absoluteSwaggermenDevPortalPath,
    },
    fallback: {
      stream: false,
      path: false,
      process: require.resolve('process/browser'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: '../index.html' }),
    new webpack.ProvidePlugin({
      process: require.resolve('process/browser'),
    }),
  ],
  performance: {
    hints: false,
  },
};
