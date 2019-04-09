"use strict";
let config = require('./config/base');
let moment = require('moment');
// let logger = require('./core/log').logger('app');
let db = require("./core/mongo").init();
let app = require("./core/express")(db);
// app.use(logger.connect('app', 'info'));
app.listen(config.port, config.ip, () => {
    console.log('connect', `server ${config.ip+ ':' + config.port} created`)
})