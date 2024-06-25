const express = require('express')
const path = require('node:path')
const cookieParser = require('cookie-parser')
const studentRouter = require('./routers/students')
const app = express()
    // 将ejs设置尾默认的模板引擎
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
    // 添加解析cookie的中间件
    // app.use(express.co)
    // 添加studentRouter中间件
app.use('/students', require('./routers/students'))
app.get('/get_cookie', (req, res) => {
    res.cookie('username', 'admin')
    res.send('cookie已经发送')
})
app.get('/hello', (req, res) => {
    console.log(req.cookies);
})

app.get('/', (req, res) => {
    res.render('login')
})
app.post('/login', (req, res) => {
        /* 
            cookie
                - cookie是HTTP协议中用来解决无状态问题的技术
                - cookie的本质是一个头——由服务器创建
                    - 服务器以响应头的形式将cookie发送给客户端
                        客户端收到以后会将其存储， 并在下次向客户端发送请求时将其传回
                        这样服务器就可以根据cookie来识别客户端了
                - cookie是有有效期的
                    - 默认情况下cookie的有效期就是一次会话（session）
                        会话就是一次打开到关闭浏览器的过程
                    - maxage：用来设置cookie的有效时间，单位是毫秒
                    - cookie一旦发送给浏览器就不能在修改了
                    - 但是可以通过发送新的同名cookie来替换旧cookie，从而达到修改的目的
        */
        const username = req.body.username
        const password = req.body.password
        if (username === 'admin' && password === '123456') {
            res.cookie('username', username, {
                maxAge: 10000
            })
            res.redirect('/students/students')
        } else {
            res.send('用户名或密码错误')
        }
    })
    // 可以在所有路由的后边配置错误路由
app.use((req, res) => {
    // 只要这个中间件一执行，说明上边的地址都没有匹配
    res.status(404)
    res.send('您访问的页面不存在')
})
app.listen(3000, () => {
    console.log('服务器已开启');
})