"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/js/API.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Recetario BEDU',
    filename: 'index.html',
    template: './src/app/index.html',
    hash: true
  })],
  // Estilos CSS
  // Server
  devServer: {
    "static": {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 8080,
    open: true,
    hot: true
  }
};