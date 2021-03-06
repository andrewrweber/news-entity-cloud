const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: 'inline-source-map',
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve((__dirname, './dist')),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }]
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }])
  ]
}