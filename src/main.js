const Koa = require("koa");
const Router = require("koa-router");

// 初始化环境变量
require("./config");

// web服务
const app = new Koa();
app.use((ctx) => {
  ctx.body = {
    name: 123,
    sex: "nima",
  };
});

// 启动web服务同时监听端口
app.listen(3004, () => {
  console.log("服务已经启动～～ ～ 端口为: 3004");
});
