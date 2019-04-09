"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserTestSchema = new Schema({
    name: String,
    pwd: String,
    dec: String,
    p1: String,
});

let UserTest = mongoose.model("UserTest", UserTestSchema, 'userTests');

module.exports = UserTest;