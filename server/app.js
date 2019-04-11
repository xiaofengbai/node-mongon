"use strict";
let config = require('./config/base');
let moment = require('moment');
// let logger = require('./core/log').logger('app');
let db = require("./core/mongo").init();
let app = require("./core/express")(db);
let express = require('express');
let ejs = require('ejs');
let path = require('path');

// app.use(logger.connect('app', 'info'));
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '../public')));
app.listen(config.port, config.ip, () => {
    console.log('connect', `server ${config.ip+ ':' + config.port} created`)
})