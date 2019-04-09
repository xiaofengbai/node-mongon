let _ = require('lodash');
let Services;
class Serveice {
    constructor(shema, app, db) {
        let me = this;
        shema = shema || {};
        me.$shema = shema;
        me.$app = app;
        me.$db = db;
        let setting = _.defaultsDeep(shema.setting, {
            name: ''
        })
        me.$setting = setting;
        me.$name = setting.name;
        me.$collection = setting.collection;
        if (!setting.name) {
            console.info('server', 'server Name is null');
        }
    }
}