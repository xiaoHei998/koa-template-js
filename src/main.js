const Koa = require("koa");
const Router = require("koa-router");
const { koaBody } = require('koa-body');
const koaBodyparser = require('koa-bodyparser')
const handleRouterConfig = require('./libs/handleRouterConfig')
const exception = require('./middlreware/exception')
// 初始化环境变量
require("./config");

const router = new Router()
// web服务
const app = new Koa();
// 中间件
app.use(exception())
app.use(koaBody({ jsonLimit: '5mb' }))
app.use(koaBodyparser())
// 配置文件动态生成routes
handleRouterConfig(router, app)
// /**
//  * 这是一个示例 Koa 中间件函数。
//  * @param {import('koa').Context} ctx - Koa 的上下文对象
//  * @param {import('koa').Next} next - 下一个中间件函数
//  * @returns {number} qwe
//  */
// function test(ctx, next) {
//   ctx.body = 12312312312312
// }
// 启动web服务同时监听端口
app.listen(3004, () => {
  console.log("服务已经启动～～ ～ 端口为: 3004");
});
