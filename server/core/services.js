"use strict";

let EventEmitter = require("events").EventEmitter;
let path = require("path");
let fs = require("fs");
let util = require("util");
let _ = require("lodash");
let express = require("express");
require('require-webpack-compat')(module, require);

class Serverse {
    constructor() {
        this.app = null;
        this.db = null;
        this.services = {};
    };
    loadServices(app, db) {
        let that = this;
        that.app = app;
        that.db = db;
        console.log(`build Serverse ....`);
        let addService = function(serviceSchema) {
            // let service = new Service(serviceSchema, app, db);
            that.services['userTest'] = serviceSchema;
        };
        let modules = require.context('../models/', true, /service\.js$/);
        // console.log(`All modules ${modules}`);

        if (modules) {
            modules.keys().map(function(model) {
                addService(modules(model));
            })
        }
    };
    registerRoutes(app, db) {
        let router = express.Router();
        _.forIn(this.services, (service, name) => {
            router.get('/' + name, (req, res) => {
                service.find({}, function(err, docs) {
                    console.log(err, docs);
                    if (docs.length == 0) {
                        for (let i = 0; i < 10; i++) {
                            let userTest = new UserTest({
                                name: Date.now().toString() + 'name',
                                pwd: Date.now().toString() + 'pwd',
                                dec: Date.now()
                            });
                            userTest.save().then(() => {
                                console.log("Default UserTest created!");
                            });
                        }
                    }
                    res.json(docs);
                })
            });
        })
        app.use(router);
    }
}
module.exports = new Serverse();