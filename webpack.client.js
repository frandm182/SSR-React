const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // Informamos a webpack que se va a construir el bundle para node
  target: 'node',
  // Informamos a webpack el fichero root de la aplicación en servidor
  entry: './src/client/client.js',
  // Informamos a webpack donde ponemos el fichero de salida
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
};

module.exports = merge(baseConfig, config);
