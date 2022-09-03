"use strict";

var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    apiMeal: path.resolve(__dirname, "./src/js/apiMeal.js"),
    print: path.resolve(__dirname, "./src/js/print.js"),
    dashboard: path.resolve(__dirname, "./src/js/receta.js"),
    area: path.resolve(__dirname, "./src/js/searchByArea.js"),
    categoria: path.resolve(__dirname, "./src/js/searchByCategory.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Recetario BEDU",
      filename: "index.html",
      template: "./src/app/index.html",
      hash: true,
    }),
    new MiniCssExtractPlugin(),
  ],
  // Modulos para Estilos CSS, Babel e Imagenes
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "src/img",
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  // Server
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    open: true,
    hot: true,
  },
};
