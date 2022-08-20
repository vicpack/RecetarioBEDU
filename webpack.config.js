const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
<<<<<<< HEAD
        bundle: './js/API.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ["file-loader"]
            }
        ],
    }
=======
      bundle: './src/js/API.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Recetario BEDU',
            filename: 'index.html',
            template: './src/app/index.html',
            hash: true,
        })
    ],
    // Modulos para Estilos CSS, Babel e Imagenes
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.js$/,
            use:{
              loader: 'babel-loader',
              options:{
                presets: ['@babel-preset-env']
              }
            }
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'src/img'
          }
    ],},


    // Server
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
        open: true,
        hot: true,
      }
>>>>>>> 4b642d5834a2a7f06448bd60fcc1d6e930c2d5a8
}