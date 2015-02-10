var webpack = require('webpack');

var src = './app/src/assets/js/modules',
    dest = './app/build/assets/js';

module.exports = {
    src : src,
    dest : dest,
    watch: true,
    entry : {
        index : src + '/index.js',
        about: src + '/about.js'
    },

    output : {
        path: dest,
        publicPath: dest,
        filename : '[name].js'
    }
};