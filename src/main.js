const Koa = require('koa')
let s = 123
const b = 123
const app = new Koa()

app.listen(3004, () => {
  console.log('服务已经启动～～ ～ 端口为: 3004')
})