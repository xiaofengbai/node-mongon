// let mongoose = require("mongoose");
let mongoClient = require('mongodb').MongoClient;
let config = require('../config/base');
let MongoManager = {
    base: null
};

function getDBOption() {
    return {
        useNewUrlParser: true
    }

}

function initBase() {
    if (MongoManager.base) {
        return MongoManager.base;
    }
    mongoClient.connect(config.db.url, getDBOption(), onDBcnnected);
}

function onDBcnnected(err, client) {
    if (err) {
        console.log('connect err:' + err)
        client.close();
        return;
    }
    MongoManager.base = client;
}
exports.init = function(config) {
    initBase(config);
}
exports.getDB = function(param) {
    return MongoManager.base.db(config.db.baseDBName);
}