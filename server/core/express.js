"use strict";

let config = require("../config/base");

let express = require("express");
let path = require("path");
let session = require("express-session");
let mongoose = require("./mongo");
let MongoStore = require("connect-mongo")(session);
let bodyPaese = require('body-parser');

function initWebpack(app) {
    let webpack = require("webpack");
    let wpConfig = require("../../build/webpack.dev.config");

    let compiler = webpack(wpConfig);
    let devMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
    app.use(devMiddleware(compiler, {
        noInfo: true,
        publicPath: wpConfig.output.publicPath,
        headers: { "Access-Control-Allow-Origin": "*" },
        //stats: 'errors-only'
        stats: { colors: true }
    }));

    let hotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line
    app.use(hotMiddleware(compiler, {
        // log: logger.info
    }));
}
module.exports = function(db) {
    let app = express();
    // parse application/x-www-form-urlencoded
    app.use(bodyPaese.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyPaese.json())
    app.use(function(req, res, next) {
        console.log('Time: %d', Date.now());
        next();
    });
    var projectRouter = require('../models/project');
    app.use('/project', projectRouter);

    let services = require("./services");
    services.loadServices(app, db);
    initWebpack(app);
    services.registerRoutes(app, db);
    require('../routes/index')(app, db);
    return app;
};