let username = document.querySelector('input[type=text]')
let password = document.querySelector('input[type=password]')

function validateUsername() {
    let username = document.querySelector('input[type=text]')
    let span = document.querySelector('.nameErr')
    let err = '';
    // console.log(err);
    if (!username.value.trim()) {
        err = '用户名不能为空'
    } else if (username.value.length < 2 || username.value.length > 10) {
        err = '用户名必须为2-10位的字符'
    }
    span.innerText = err
    return !err
}

function validatePassword() {
    let password = document.querySelector('input[type=password]')
    let span = document.querySelector('.psdErr')
    let err = '';
    // console.log(err);
    if (!password.value.trim()) {
        err = '密码不能为空'
    } else if (password.value.length < 2 || password.value.length > 10) {
        err = '密码必须为2-10位的字符'
    }
    span.innerText = err
    return !err
}
function validate() {
    let r1 = validateUsername()
    let r2 = validatePassword()
    return r1 && r2
}
username.addEventListener('input', validateUsername)
password.addEventListener('input', validatePassword)

let form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    if (!validate()) {
        e.preventDefault()
    }
})