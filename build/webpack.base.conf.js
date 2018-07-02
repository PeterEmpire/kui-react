// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const pkg = require('../package.json');
// const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js[x]$/, exclude: /node_modules/, loader: 'babel-loader',
        /* query: {
          presets: ['es2015', 'react'],
          // plugins: ['transform-runtime']
        } */
      },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.styl(us)?$/, use: ['style-loader', 'css-loader', 'stylus-loader'] },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', ]
      }, 
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        query: { limit: 13000, name: 'img/[name].[ext]?[hash:7]' }
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader',
        query: { limit: 10000, name: 'fonts/[name].[ext]?[hash:7]', prefix: 'font' }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less'],
    alias: {
      // 'vue': 'vue/dist/vue.esm.js',
    },
    plugins: [
       
    ]
  }
}