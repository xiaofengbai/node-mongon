let log4j = require('log4js');
let config = require('../config/base');
log4j.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

exports.logger = (name, level) => {
    var logger = log4j.getLogger(name);
    // logger.setLevel(log4j.levels[level] || log4j.levels['debug']);
    return logger;
}
exports.connect = (name, level = 'debug') => {
    log4j.connectLogger(log4j.getLogger(name), {
        level: level,
        format: ':method :url :status'
    })
}