const path = require("path")
const htmlPlugin = require('html-webpack-plugin')
module.exports = {
    mode:"development",  // 设置打包模式，production表示生产模式， develpoment 开发模式
    entry:"./src/index.js", // 用来指定打包时的主文件，默认./src/index.js
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'main.js',  // 打包后的文件名 
        // clean:true, //自动清理打包目录
    } ,// 配置代码打包后的地址
    /* 
        webpack默认情况下，只会处理js文件，如果希望其可以处理其他类型的文件，则要引入loader
        - 以css为例，
            - 使用css-loader可以处理js中的样式
            - 使用步骤
                1. 安装：yarn add css-loader -D
    */
   module:{
    rules:[
        {
            test:/\.css$/i,
            use:['style-loader', 'css-loader']
        },
        {
            test:/\.(jpg|png)$/i,
            type:'assets/resource' // 图片资源类型的数据，可以通过type来指定
        },
        {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
    ]
   },
//    插件，自动生成dist目录下的index.html文件
   plugins:[
    new htmlPlugin({
        template:'./src/index.html'
    })
   ],
//    设置代码的映射
   devtool: "inline-source-map"
}