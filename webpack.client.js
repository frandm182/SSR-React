const webpack = require('webpack');
const path = require('path');

module.exports = {
  // Informamos a webpack que se va a construir el bundle para node
  target: 'node',
  // Informamos a webpack el fichero root de la aplicación en servidor
  entry: './src/client/client.js',
  // Informamos a webpack donde ponemos el fichero de salida
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  // Informamos a webpack que babel corra en cada fichero
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};
