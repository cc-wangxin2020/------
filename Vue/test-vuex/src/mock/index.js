import Mock from "mockjs";
Mock.setup({
    timeout: 10
})
Mock.mock('/login', 'post', {
    code: 0,
    msg: '',
    data: {
        name: 'admin',
        password: '123456'
    }
})
Mock.mock('/logout', 'get', {
    code: 0,
    msg: '',
    data: true
})
Mock.mock('/isMe', 'get', {
    code: 0,
    msg: '',
    data: {
        name: 'admin',
        password: '123456'
    }
})