#### Node.js
* 运行在服务器端的js
* 用来编写服务器
* 特点：
  * 单线程、异步、非阻塞（不阻塞其他程序的运行）
  * 统一API

#### Nvm - 控制不同的node版本
* 命令
  * nvm list - 显示已安装的node版本
  * nvm install 版本 - 安装指定版本的node
  * 配置nvm的镜像服务器
  * nvm node_mirror https://npmmirror.com/mirrors/node/
  * nvm use 版本 - 指定要使用的node版本

#### node.js和Javascript区别：
* ECMAScript(node有) 、DOM（node没有）、 BOM（node没有）
  
#### xss攻击
* 用户向系统中输入一些恶意代码
#### csrf攻击
* 跨站请求伪造

* 现在大部分浏览器都不会在跨域的情况下自动发送cookie，以避免csrf攻击

* 如何解决？
  * 使用refer来检查请求的来源
  * 使用验证码
  * 尽量使用post请求（结合token）
  
* token
  * 可以在创建表单时随机生成一个令牌，将令牌存储到session中，并通过模板发送给用户，用户提交表单时，必须将token发回，才可以进行后续操作
  
* **Babel**：

  Babel用于将你的JavaScript代码转换为向后兼容的版本，以确保它在不同浏览器和环境中能够正常运行
