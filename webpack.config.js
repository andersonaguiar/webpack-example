var webpack = require('webpack');

module.exports = {
  entry : {
    index : './js/modules/index.js',
    about: './js/modules/about.js'
  },

  output : {
    path: 'app',
    publicPath: './app/',
    filename : '[name].js'
  }
};