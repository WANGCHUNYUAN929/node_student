const http = require('http')
const path = require('path')
const serveStatic = require('serve-static')
// 引入路由
const router = require('./router')
// 静态资源托管
const serve = serveStatic(path.join(__dirname, 'public'))
const dateformat = require('dateformat')

// 引入模板引擎
const template = require('art-template')
template.defaults.root = path.join(__dirname, 'views')
template.defaults.imports.dateformat = dateformat
// 创建网站服务器
const app = http.createServer()
// 连接数据库
require('./model')

app.on('request', (req, res) => {
    router(req, res, () => {})
    serve(req, res, () => {})
})

app.listen(3000, () => {
    console.log('服务器创建成功');

})