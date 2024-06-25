/* 
    express是node中的服务器软件
        通过express可以快速的在node中搭建一个web服务器

*/
const express = require('express')
const { log } = require('node:console')
const path = require('node:path')
const app = express()
    // 配置静态资源的路径
    // 中间件将浏览器的访问根目录设置成了./public
app.use(express.static(path.resolve(__dirname, './public')))
    // 引入解析请求体的中间件
app.use(express.urlencoded({ extended: true }))
    // Router是express中创建的一个对象
const router = express.Router()
    // router实际上是一个中间件，可以在该中间件上去绑定各种路由以及其他中间件

// app.get('/login', (req, res) => {
//     console.log(req.query);
//     res.send("登录成功" + req.query.username)
// })
// get请求发送参数的第二种方式
// hello/:id 表示当用户访问 /hello/xxx时就会触发
// 在路径中以冒号命名的部分称为param
app.get('/hello/:id', (req, res) => {
    res.send(req.params)
})
app.post('/login', (req, res) => {
    // 通过req.body来获取post请求的参数（请求体中的参数）
    // 默认情况下，express不会自动解析请求体
    console.log(req.body);
    res.send(req.body)
})
app.listen(3000, () => {
    console.log('服务器启动~');
})