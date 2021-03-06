var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/client.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
            presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        use:[
          {loader: 'style-loader'}, // order matters
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.css$/,
        use:[
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  }
}