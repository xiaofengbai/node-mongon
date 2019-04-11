"use strict";
let config = require('./config/base');
let moment = require('moment');
let db = require("./core/mongo").init();
let app = require("./core/express")(db);
let path = require('path');
let express = require('express');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '../public')));
app.listen(config.port, config.ip, () => {
    console.log('connect', `server ${config.ip+ ':' + config.port} created`)
})