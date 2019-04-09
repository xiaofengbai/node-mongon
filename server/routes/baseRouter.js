exports.initRouter = (rt, wrapper, actions) => {
    for (const an of actions) {
        if (!an) return;
        rt.use(an[0], wrapper.doAction.bind(wrapper, an[1]));
    }
}