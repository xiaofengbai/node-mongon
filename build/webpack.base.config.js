"use strict";

let path = require("path");
let webpack = require("webpack");

module.exports = {
    devtool: "#inline-source-map",

    entry: {
        // app: ["./client/app/main.js"],
        vendor: [
            "es6-promise",
            "lodash",
            "moment"
        ],
        // frontend: ["./client/frontend/main.js"]
    },

    output: {
        path: path.resolve(__dirname, "..", "server", "public", "app"),
        publicPath: "/app/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },

    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [{
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            // ES6/7 syntax and JSX transpiling out of the box
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /vendor/]
            }
        ]
    },

    resolve: {
        extensions: [".vue", ".js", ".json"],
        mainFiles: ["index"],
        alias: {
            "images": path.resolve(__dirname, "..", "client", "images"),
            "vue$": "vue/dist/vue.common.js"
        }
    },

    performance: {
        hints: false
    }
};