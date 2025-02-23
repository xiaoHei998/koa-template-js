/**
 *  @returns { import('koa').Middleware }
 */
function exception() {
  /**
   * @param { import('koa').Context } ctx
   * @param { import('koa').Next }
   */
  return async function (ctx, next) {
    try {
      await next();
    } catch (error) {
      /** @type {Error} */
      const err = error;
      ctx.body = {
        code: 800,
        data: err.message,
      };
    }
  };
}

module.exports = exception;
