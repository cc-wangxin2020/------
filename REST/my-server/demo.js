const jwt = require('jsonwebtoken')

const obj = {
    name:'Tom',
    age:12,
    gender:'男'
}

// 使用jwt来对json数据进行加密
const token = jwt.sign(obj, 'helloworld', {
    // token的有效时间
    expiresIn:'1h'
})
console.log(token);
// 客户端解密
const decodeData = jwt.verify(token, 'helloworld')
console.log(decodeData);