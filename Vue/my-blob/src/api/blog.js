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

/**
 * 根据id获取博客
 */
export async function getBlogById(id) {
    return await request.get(`/api/blog/${id}`)
}

/**
 * 提交评论
 */
export async function postComment(commentInfo) {
    return await request.post(`/api/comment`, commentInfo)
}

export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get(`/api/comment`, {
        params: {
            blogid,
            page,
            limit
        }
    })
}