"use strict";

let path = require("path");
let UserTest = require('../models/test/model/userTest');
module.exports = function(app, db) {
    app.get("/index1", function(req, res) {
        res.json({ a: 1 });
    });
    app.get("/a", function(req, res) {
        res.send('OK');
    });
};