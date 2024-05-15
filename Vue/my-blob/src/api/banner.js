import request from './request.js'

export async function getBanners() {
    const resp = await request.get('/api/banner')
    return resp
}
