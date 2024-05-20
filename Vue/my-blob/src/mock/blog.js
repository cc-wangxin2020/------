import Mock from "mockjs";
import qs from 'querystring'

Mock.mock('/api/blogtype', 'get', {
    code: 0,
    msg: '',
    'data|10-20': [
        {
            'id|+1': 1,
            name: "分类@id",
            'artcleCount|0-300': 0,
            'order|+1': 1
        }
    ]
})

Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (options) {
    const query = qs.parse(options.url)
    return Mock.mock({
        code: 0,
        msg: '',
        data: {
            'total|2000-3000': 0,
            [`row|${query.limit || 10}`]: [
                {
                    id: '@guid',
                    title: '@ctitle(10, 30)',
                    descriptions: '@cparagraph(1, 10)',
                    category: {
                        'id|1-10': 0,
                        name: '分类@id',
                    },
                    'scanNumber|0-3000': 0,
                    'commentNumber|0-300': 30,
                    'thumb|1':[ Mock.Random.image("300*250", "#000", '#fff', 'png', 'Random Image'), null],
                    createData: Mock.Random.date('T')
                } 
            ]
        }
    })
})