const express = require('express')
const fs = require('fs/promises')
const path = require('node:path')
const uuid = require('uuid').v4
const router = express.Router()

let STUDENTS = require('../data/students.json')

// app.get('/', (req, res) => {
//     res.send('请求已发送')
// })
// router.post('/login', (req, res) => {
//     // console.log('登录');
//     res.send(req.body)
// })

// router.post('/registor', (req, res) => {
//     res.send(req.body)
// })
router.use((req, res, next) => {
    if (req.session.loginUser) {
        next()
    } else {
        res.redirect('/')
    }
})
router.get('/students', (req, res) => {
    /* 
        ejs是node中的一款模板引擎，都各具特色，ejs
            1. 安装ejs
            2. 配置express的模板引擎为ejs 同时配置模板路径
                app.set('view engine', 'ejs')
                app.set('views', path.resolve(__dirname, 'views'))
            3. 使用
    */
    // res.render() 用来渲染一个模板引擎，并将其返回给浏览器
    // 可以将一个对象作为render的第二个参数传递
    // console.log(req.cookies);
    // 生成token
    const csrfToken = uuid()
    req.session.csrfToken = csrfToken
    req.session.save(() => {
        res.render('students', { obj: STUDENTS, username: req.session.loginUser, csrfToken })
    })
})
router.post('/add_student', (req, res, next) => {
        const csrfToken = req.body.csrf
        if (csrfToken !== req.session.csrfToken) {
            res.status(403).send('token错误')
            return
        }
        req.session.csrfToken = null
        const id = STUDENTS.length == 0 ? 1 : (STUDENTS.at(-1).id + 1)
            // const id = 1
        console.log(id);
        const newUser = {
            id,
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            address: req.body.address
        }
        STUDENTS.push(newUser)
        req.session.save(() => {
            next()
        })
    })
    // 删除学生
router.get('/delete', (req, res, next) => {
        const id = +req.query.id
            // console.log(id);
        STUDENTS = STUDENTS.filter((stu) => stu.id !== id)
            // console.log(STUDENTS);
        next()
            // res.send('删除')
    })
    // 修改信息
router.get('/to_update', (req, res) => {
    const id = +req.query.id
    const student = STUDENTS.find(item => item.id === id)
        // console.log(student);
    res.render('update', { student })
})

router.post('/update_student', (req, res, next) => {
    const id = +req.query.id
    const { name, age, gender, address } = req.body
    const stu = STUDENTS.find(item => item.id == id)
    stu.name = name
    stu.age = +age
    stu.gender = gender
    stu.address = address
    next()
})
router.use((req, res) => {
    fs.writeFile(
        path.resolve(__dirname, '../data/students.json'),
        JSON.stringify(STUDENTS)
    ).then(() => {
        res.redirect('/students/students')
    })
})
module.exports = router