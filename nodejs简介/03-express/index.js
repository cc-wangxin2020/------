const express = require('express')
const path = require('node:path')
    // const cookieParser = require('cookie-parser')
const studentRouter = require('./routers/students')
const session = require('express-session')
const app = express()
    // 将ejs设置尾默认的模板引擎
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
    // 添加session中间件
app.use(session({
        secret: 'hello'
    }))
    // app.use(cookieParser())
    // 添加解析cookie的中间件
    // app.use(express.co)
    // 添加studentRouter中间件
app.use('/students', studentRouter)
app.get('/get_cookie', (req, res) => {
    // res.cookie('username', 'admin')
    console.log(req.session);
    res.send('session已经发送')
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
                - 不足：cookie是由服务器创建，浏览器保存
                        每次浏览器访问服务器时都需要将cookie发回，导致cookie中不能存放较多的数据
                        并且cookie是直接存放在客户端的，容易被篡改盗用
                - 应对：将用户的数据统一存储在服务器中，每一个用户的数据有一个对应的id
                        只需要通过cookie将id发送给浏览器，浏览器只需每次访问时将id发回，即可读取到服务器中存储的数据
                        这个技术称为session
                - session
                    - session是服务器中的一个对象，这个对象用来存储用户的数据
                    - 每个session对象都有一个唯一的id，id会通过cookie的形式发送给客户端
                    - 客户端每次访问时只需将存储id的cookie发回即可获取它在服务器中存储的数据
                    - 在express中可以通过express-session组件来实现session功能
        */
        const username = req.body.username
        const password = req.body.password
        if (username === 'admin' && password === '123456') {
            // res.cookie('username', username, {
            //     maxAge: 10000
            // })
            // 登录成功后，为用户设置session
            req.session.username = username
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