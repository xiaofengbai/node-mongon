'use strict';
let path = require('path');
let webpack = require('webpack');
let merge = require('webpack-merge');
let baseWpConfig = require("./webpack.base.config");
module.exports = merge(baseWpConfig, {
    mode: 'none',
    devtool: '#inline-source-map',
    performance: {
        hints: false
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});