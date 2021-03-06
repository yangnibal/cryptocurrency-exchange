const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        host: 'localhost',
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
});