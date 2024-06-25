const express = require('express')

// 引入jwt
const jwt = require('jsonwebtoken')
const app = express()
const STU_ARR = [
    { id: '1', name: 'Tom', age: '12', gender: '男', address: '北京' },
    { id: '2', name: 'Jerry', age: '12', gender: '女', address: '北京' }
]
app.use(express.urlencoded({ extended: true }))
// 解析json格式请求体的中间件
app.use(express.json())
// 设置响应头
app.use((req, res, next) => {
    // 设置指定头时只能设置一个
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 允许的请求的方式
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    // 允许传递的请求头
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')
    next()
})
// 登录
app.post('/login', (req, res) => {
    const { username, password } = req.body
    console.log(req.body);
    if (username == 'admin' && password == '123456') {
        const token = jwt.sign({
            username,
            password
        }, 'helloworld', {
            expiresIn: '1h'
        })
        res.send({
            status: 'ok',
            data:{
                token
            }
        })
    } else {
        res.send({
            status: 'error',
            data: '用户名或密码不正确'
        })
    }
})
// 定义学生信息的路由
app.get('/students', (req, res) => {
    // 这个路由必须在用户登录后才能访问
    // 需要检查用户是否登录
    // 读取请求头
    const token = req.get('Authorization').split(' ')[1]
    // 对token进行解码
    try {
        const decodeData = jwt.verify(token, 'helloworld')
    } catch (error) {
        res.status(403).send({
            status: 'error',
            data:'数据加载错误'
        })
    }
    console.log('收到请求');
    res.send({
        status: 'ok',
        data: STU_ARR
    })
})
// 定义一个添加学生的路由
app.post('/students', (req, res) => {
    console.log(req.body);
    const { name, age, gender, address } = req.body
    const stu = {
        id: +STU_ARR.at(-1).id + 1 + '',
        name,
        age: +age,
        gender,
        address
    }
    STU_ARR.push(stu)
    res.send({
        status: 'ok',
        data: stu
    })     
})
// 查询某个学生的路由
app.get('/students/:id', (req, res) => {
    const id = req.params.id
    const stu = STU_ARR.find(item => item.id == id)
    res.send({
        status: 'ok',
        data: stu
    })
})
// 删除某个学生
app.delete('/students/:id', (req, res) => {
    const id = req.params.id
    // const stu = STU_ARR.find(item => item.id == id)
    for (let i = 0; i < STU_ARR.length; i++) {
        if (STU_ARR[i].id === id) {
            const delStu = STU_ARR[i]
            STU_ARR.splice(i, 1)
            res.send({
                status: 'ok',
                data: delStu
            })
            return
        }
    }
    res.status(403).send({
        status: 'error',
        data: '数据不存在'
    })
})
// 定义一个修改学生的路由
// app.put()
app.put('/students', (req, res) => {
    const { id, name, age, gender, address } = req.body
    const updateStu = STU_ARR.find(item => item.id === id)
    if (updateStu) {
        updateStu.name = name
        updateStu.age = age
        updateStu.gender = gender
        updateStu.address = address
        res.send({
            status: 'ok',
            data: updateStu
        })
    } else {
        res.status(403).send({
            status: 'error',
            data: '数据不存在'
        })
    }
})
app.listen(3000, () => {
    console.log('服务器启动');
})