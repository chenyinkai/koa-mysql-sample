const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static') // 静态资源服务插件
const path = require('path') // 路径管理
const bodyParser = require('koa-bodyparser') // 请求体，返回体解析类似json，text，图片等

app.use(bodyParser()) // 使用解析上下文插件

// 配置静态资源
const main = serve(path.join(__dirname))

app.use(main)

app.use(require('./router/index').routes())

app.listen(3000) // 服务启动端口
console.log('启动成功') // 日志打印
