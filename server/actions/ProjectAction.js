let mongo = require('../core/mongo');
let test = require('assert');
let httpFetch = require('node-fetch');
let FormData = require('form-data');
exports.query = function(param) {
    return mongo.getDB().collection('userTests').find({})
        .limit(5)
        .skip(0)
        .toArray()
        .then((doc) => {
            return doc;
        })
}
const { URLSearchParams } = require('url');


exports.add = function(param) {
    const { URLSearchParams } = require('url');

    const params = new URLSearchParams();
    params.append('a', 1);
    return httpFetch("http://127.0.0.1:3030/project/list", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        })
        .then(res => {
            return res.json()
        })
        .then(json => {
            return json;
        })
    console.log(param);
    let projects = {
        name: '白小峰'
    };
    return mongo.getDB().collection('userTests').insertOne(projects, function(err, doc) {
        if (!err) {
            return doc;
        } else {
            console.log(`Err:${err}`)
        }
    })
}