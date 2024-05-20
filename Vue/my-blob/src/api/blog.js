import request from './request.js'

/**
 * 获取文章列表
 */
export async function getBlog(page = 1, limit = 10, categoryid = -1) {
    const resp = await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryid
        }
    })
    return resp
}
/**
 * 获取博客类型
 */
export async function getBlogTypes() {
    const resp = await request.get('/api/blogtype')
    return resp
}
