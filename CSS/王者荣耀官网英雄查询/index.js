(async function () {
    const BASE_URL = 'https://study.duyiedu.com/api/'
    const TOKEN_KEY = 'token'
    // localStorage.setItem(TOKEN_KEY, 'this is a token')
    function get(path) {
        const headers = {}
        // const token = localStorage.getItem(TOKEN_KEY)
        // if (token) {
        //     headers.authorization = token
        // }
        return fetch(BASE_URL + path, { headers })
    }
    function post(path, bodyObj) {
        const headers = {
            'Content-Type': 'application/json; charset=utf-8'
        }
        return fetch(BASE_URL + path, { headers, body: JSON.stringify(bodyObj) })
    }
    async function getHeros() {
        // 得到一个json格式的promise对象
        const res = await get('herolist')
        console.log(res);
        return res.json()
    }
    // async function postHeros() {
    //     // 得到一个json格式的promise对象
    //     const res = await post('herolist', { name: 'tom', age: '13' })
    //     console.log(res);
    //     return res.json()
    // }
    // postHeros().then(res => {
    //     console.log(res);
    // })
    getHeros().then(res => {
        console.log(res);
    })
    // console.log(allHeros);

    // const doms = {
    //     ul: document.querySelector('.list'),
    //     radio: document.querySelectorAll('.radio'),
    //     input: document.querySelector('.input input')
    // }
    // ulHTML(allHeros)
    // /**
    //  * 初始化
    //  */
    // console.log(allHeros);
    // /**
    //  * 根据数据渲染ul
    //  */
    // function ulHTML(heros) {
    //     doms.ul.innerHTML = heros.map(h => `<li>
    //     <a href="${h.m_bl_link}">
    //         <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${h.ename}/${h.ename}.jpg" alt="">
    //         <span>${h.cname}</span>
    //     </a>
    // </li>`).join('')
    // }
    // /***
    //  * 用户交互
    //  */
    // /**
    //  * radio点击事件
    //  */
    // for (let i = 0; i < doms.radio.length; i++) {
    //     doms.radio[i].addEventListener('click', function () {
    //         handleClick(doms.radio[i])
    //     })
    // }
    // function handleClick(radio) {
    //     // 处理样式
    //     const temp = document.querySelector('.radio.checked')
    //     temp && temp.classList.remove('checked')
    //     radio.classList.add('checked')
    //     // 处理数据
    //     const type = radio.getAttribute('data-type');
    //     const value = radio.getAttribute('data-value');
    //     if (type === 'all') {
    //         ulHTML(allHeros)
    //     } else if (type === 'pay_type') {
    //         const heros = allHeros.filter(item => item.pay_type === +value)
    //         ulHTML(heros)
    //     } else {
    //         const heros = allHeros.filter(item => item.hero_type === +value || item.hero_type2 === +value)
    //         ulHTML(heros)
    //     }
    // }
    // /**
    //  * 搜索事件
    //  */
    // doms.input.addEventListener('input', function () {
    //     const all = document.querySelector('div[data-type="all"]')
    //     handleClick(all)
    //     const heros = allHeros.filter(h => h.cname.includes(this.value))
    //     ulHTML(heros)
    // })
})()