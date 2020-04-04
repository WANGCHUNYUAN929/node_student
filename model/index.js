const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')
    .then(() => console.log('数据库connect成功'))
    .catch(() => console.log('数据库connect失败'))