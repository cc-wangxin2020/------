const inputs = document.querySelectorAll('.form-item input')
console.log(inputs);

const obj = {
    name: 'tom',
    password: '123',
    sex: true,
    textArea: '',
    policy: true
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', function (e){
        this.setCustomValidity('')
        this.checkValidity()
    })
    inputs[i].addEventListener('invalid', function (e){
        console.log('验证');
        console.log(this.validationMessage);
        this.setCustomValidity('验证未通过！')
    })
}

const phone = document.querySelector('.phone')
const password = document.querySelector('.password')
const male = document.querySelector('.male input')
const female = document.querySelector('.female input')
const policy = document.querySelector('.policy input')
const hobbies = document.querySelector('.hobby').selectOptions
console.log(policy.checked);
// 防抖
function debounce(fn, duration) {
    let timer;
    return function () {
        const that = this
        const args = [...arguments]
        if (timer) {
            timer = null
        }
        timer = setTimeout(() => {
            fn.call(that, args)
        }, duration)
    }
}

function save() {
    const obj = {
        phone: phone.value,
        password: password.value,
        sex: male.checked ? '男' : '女',
        policy: policy.checked,
        hobbies: []
    }
    const str = JSON.stringify(obj)
    localStorage.setItem('user1', str)
}

