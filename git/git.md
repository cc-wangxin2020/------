#### 分支

git在存储文件时，每一次代码的提交都会创建一个与之对应的节点，git就是通过一个一个的节点来记录代码的状态的，节点会构成一个树状结构，默认情况下仓库只有一个分支，命名为master。在使用git时，可以创建多个分支，分支与分支之间相互独立，在一个分支上修改代码不会影响其他的分支。

```bash
git branch # 查看当前分支
git branch <branch name> # 创建新的分支
git branch -d <branch name> # 删除分支
git switch <branch name> # 切换分支
git switch -c <branch name> # 创建并切换分支
```

在开发过程中，都是在自己的分支上编写代码，代码编写完成后，在将自己的分支合并到主分支上

```bash
git merge <branch name> # 合并分支
```

#### 变基（rebase）

在开发中除了通过merge来合并分支外，还可以通过变基来完成分支的合并

通过merge合并分支时，在提交记录中会将所有的分支创建和分支合并的过程全部都显示出来，这样当项目比较复杂，开发过程比较波折时，必须要反复的创建、合并、删除分支，这样会使得代码的提交记录变得极为混乱

原理：

1. 当发起变基时，git会首先找到两条分支的最近的共同祖先
2. 对比当前分支相对于祖先的历史提交，并且将它们提取出来存储到一个临时文件中
3. 将当前部分指向目标的基底
4. 以当前基地开始，重新执行历史操作

变基和merge对于合并分支来说最终的结果是一样的，但是变基会使得代码的提交记录更整洁更清晰

```bash
git rebase
```

#### 远程仓库（remote）

远程的git仓库和本地没有什么区别，不同点在于远程的仓库可以被多人同时访问使用，方便协同开发。在实际工作中，git的服务器通常由公司搭建内部使用或是购买一些公共的私有git服务器。学习阶段，直接使用一些开放的公共git仓库，目前常用的库有两个：GitHub和Gitee

```bash
git remote add <remote name> <url>

# 修改分支的名字为main
git branch -M main

# git push将代码上传服务器上
git push -u origin main 
```

#### 远程库的操作命令

```bash
git remote # 列出当前的关联的远程库
git remote add <远程库名> <url> # 关联远程仓库
git remote remove <远程库名> # 删除远程库
git push -u <远程库名> <分支名> # 向远程库推送代码，并和当前分支关联
git push <远程库> <本地分支>:<远程分支> # 将代码推送到指定的远成分支
git clone <url> # 从远程库下载代码

git push # 如果本地的版本低于远程库，push默认是推不上去的
git fetch # 要想推送成功，必须先确保本地库和远程库版本一致，fetch会从远程仓库下载所有代码，但是不会将代码和当前分支自动合并；使用fetch拉取代码后， 必须要手动对代码进行合并
git pull # 从服务器上拉取代码并自动合并

```

#### tag

当头指针没有指向某个分支的头部时， 这种状态称为分离头指针（HEAD detached），分离头指针的状态下也可以操作代码，但是这些操作不会出现在任何分支上，所以注意不要在分离头指针的状态下来操作仓库

如果要回到后面的接单对代码进行操作，则可以选择创建分支后再操作

```bach
git switch -c <分支名> <提交id>
```

可以为提交记录设置标签，设置标签后，可以通过标签快速的识别出不同的开发节点

```bash
git tag
git tag <版本>
git tag <版本> <提交id>
git push <远程仓库> <标签名> # 推送远程标签
git push <远程仓库> --tags # 推送所有的标签
git tag -d <标签名> # 删除标签
git push <远程仓库> --delete <标签名> # 删除远程标签
```

#### 构建工具

构建工具作用：通过构建工具可以将使用ESM规范编写的代码转换为旧的JS语法，可以使得所有浏览器都可以支持代码

#### Webpack

* 打包工具，将整个项目打包成一个文件，打包速度比较慢

* 项目必须是node项目（webpack是用node写的）

* 使用步骤：

  1. 初始化项目

  2. 安装依赖`webpack`、`webpack-cli`

     ```bash
     # 将webpack webpack-cli设置成开发依赖
     yarn add -D webpack webpack-cli
     ```

  3. 在项目中创建`src`目录，然后编写代码

  4. 执行`yarn webpack`来对代码进行打包（打包后观察dist目录）
  
* 配置文件（webpack.config.js）

  * babel可以将新的js语法转换为旧的js，以提高代码的兼容性。

  * 使用时需要向webpack中引入babel的loader

  * 使用步骤

    1. 安装

    2. 可以在package.json中设置兼容的列表

       ```json
       "bowserslist":[
           "defaults"
       ]
       ```

* 插件(plugin)

  * 插件为webpack扩展功能
    * html-webpack-plugin：这个插件可以在打包代码后，自动在打包目录生成html页面

#### Vite

* vite也是前端的构建工具
* 相较于webpack，vite采用了不同的运行方式：
  * 开发时并不对代码打包，而是直接采用ESM的方式来运行项目
  * 在项目部署时，再对项目进行打包
* 除了速度外，vite使用起来也更加方便
* 基本使用：
  1. 安装开发依赖vite
  2. vite的源码目录就是项目的根目录
  3. 开发命令
     * vite 启动开发服务器
     * vite build 打包代码
     * vite preview预览打包后的代码

## 第三部分 Vue

#### Vue

* Vue是前端的框架，主要负责帮助构建用户的界面
* MVVM：Model - Vue - View Model
* Vue负责vm的工作（视图模型），通过Vue可以将视图和模型相关联
  * 当模型发生变化时，视图会自动更新
  * 也可以通过视图去操作模型
* Vue的思想：
  * 组件化开发
  * 声明式渲染

