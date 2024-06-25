/* 
    package.json
        - package.json是包的描述文件
        - node中通过该文件对项目进行描述
        - 每一个node项目必须有package.json
    命令
        npm init 初始化项目，创建package.json文件（需要回答问题）
        npm init -y 初始化项目，创建package.json文件（所有值都采用默认值）
        npm install 包名 将指定包下载到当前项目中
            - 将包下载当前项目的node_modules目录下
            - 会在package.json的dependencies属性中添加一个新的属性
            - 会自动添加package-lock.json文件——帮助加速npm下载

        scripts:
            - 可以自定义一些命令
            - 定义以后可以直接通过npm来执行命令
            - start 和 test 可以直接通过npm start npm test执行
            - 其他命令需要通过npm run xxx 执行
    
    npm镜像：
        配置镜像——npm set registry https://registry.npmmirror.com
        删除镜像——npm config delete registry
*/
