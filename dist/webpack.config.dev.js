"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/js/index.js'
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
  performance: {
    hints: false
  },
  // Modulos para Estilos CSS, Babel e Imagenes
  module: {
    rules: [{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      // test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //type: 'src/img'
      test: /\.(png|svg|jpg|gif)$/,
      loader: 'file-loader',
      options: {
        name: 'img/[name].[hash:7].[ext]'
      }
    }]
  },
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