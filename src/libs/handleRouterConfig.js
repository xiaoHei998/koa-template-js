const routeConfig = require("../routes/index");
/**
 *
 * @param { import('koa-router') } router
 * @param { import('koa') } app
 */
module.exports = function handleRouterConfig(router, app) {
  Object.values(routeConfig).forEach(({ path, method, controllers }) => {
    router[method](path, controllers);
  });
  app.use(router.routes()).use(router.allowedMethods());
};
