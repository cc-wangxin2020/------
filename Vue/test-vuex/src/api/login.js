import request from './request'

export async function login(formData) {
    const resp = await request.post('/login', formData)
    localStorage.setItem('user', JSON.stringify(resp.data))
    return resp
}

export async function logout() {
    const resp = await request.get('/logout')
    localStorage.removeItem('user')
    return resp
}

export async function isMe() {
     const token = localStorage.getItem('user')
     const resp = await request.get('/isMe', {
        headers: {
            'Authorization': token
        }
     })
     return resp
}