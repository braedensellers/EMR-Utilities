const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
        library: 'EMRUtilities',
        libraryTarget: 'umd',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});