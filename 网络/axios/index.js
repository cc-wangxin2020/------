const ins = axios.create({
    baseURL: 'https://study.duyiedu.com/api/'
})
// 添加请求拦截器
ins.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    if(token){
        config.headers.authorization = token
    }
    console.log(config);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
ins.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log(response);
    const token = response.headers.content-length
    localStorage.setItem('token', token)
    if(response.data.code !== 0){
        console.log('网络错误');
        return new Error('网络错误')
    }
    return response.data.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

async function getHeros() {
    const res = await ins.get('/herolist')
    return res
}
getHeros().then(res => {
    console.log(res);
})