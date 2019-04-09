let actions = require('../actions/Actions');
let ProjectManger = require('../actions/ProjectAction');
var BaseRouter = require('../routes/baseRouter');
let Warapper = {};
/**
 * params router,
 */
Warapper.parames = (req, other) => {
    return {
        req: req
    }
}
Warapper.doAction = (anx, req, res, next) => {
    let action = (typeof anx == 'string') ? anx : anx[0];
    let type = (typeof anx == 'string') ? anx : anx[1];
    let callBack = ProjectManger[action];
    if (!callBack || typeof callBack != 'function') {
        res.send(`${action} is not a function `);
    };
    async function doac() {
        var result = await callBack.call(ProjectManger, Warapper.parames(req));
        res.send(result);
    }
    return doac();
}
var router = require('express').Router();
BaseRouter.initRouter(router, Warapper, actions.project);
module.exports = router;