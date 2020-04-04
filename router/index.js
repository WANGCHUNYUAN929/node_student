const queryString = require('querystring')
const getRouter = require('router')
const router = getRouter()
const Student = require('../model/user')
// 引入模板引擎
const template = require('art-template')

router.get('/list', async (req, res) => {
    let Students = await Student.find()
    let html = template('list.art', {
        Students: Students
    })
    res.end(html)
})
router.get('/add', (req, res) => {
    let html = template('index.art', {})
    res.end(html)
})

router.post('/add', (req, res) => {
    let result = ''
    req.on('data', param => {
        result += param
    })
    req.on('end', async () => {
        // 创建数据
        await Student.create(queryString.parse(result))

        res.writeHead(301, {
            Location: '/list'
        })
        res.end()
    })
})

module.exports = router