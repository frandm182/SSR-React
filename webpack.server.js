const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  // Informamos a webpack que se va a construir el bundle para node
  target: 'node',
  // Informamos a webpack el fichero root de la aplicación en servidor
  entry: './src/index.js',
  // Informamos a webpack donde ponemos el fichero de salida
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
