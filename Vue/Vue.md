#### Vue

1. 是一款用于构建用户界面的 JavaScript 框架
2. 声明式渲染、响应式

#### 单文件组件

1. 单文件组件——Single-File Components(SFC)
2. 单文件组件会将一个组建的逻辑（JS）、模板（HTML）和样式（CSS）封装在同一个文件中

#### vue中的SSR是什么

在Vue.js中，SSR代表服务端渲染（Server-Side Rendering）。SSR是一种将Vue.js应用程序在服务器端预渲染为HTML字符串的技术。与传统的客户端渲染（Client-Side Rendering）不同，客户端渲染是在浏览器中由JavaScript执行的，SSR在服务器端生成HTML，然后将其发送到浏览器。

以下是Vue.js中SSR的一些关键概念和好处：

1. **SEO友好性（Search Engine Optimization）：** 因为搜索引擎爬虫能够轻松解析服务器端生成的HTML，所以使用SSR可以改善应用程序的搜索引擎排名。
2. **首屏渲染速度：** SSR允许在浏览器加载JavaScript之前发送已渲染的HTML，从而加速首次加载时间，提供更好的用户体验。
3. **性能：** 尽管首次渲染可能较慢，但一旦页面加载，Vue.js会接管客户端并将其转变为一个完全交互的SPA（Single Page Application），提供快速的导航和用户交互。
4. **兼容性：** SSR可以改善对不支持JavaScript的浏览器的兼容性，因为它们仍然可以浏览已渲染的HTML。

要在Vue.js中实现SSR，你需要使用Vue.js的官方库`vue-server-renderer`来设置服务器端渲染，并进行一些特定的配置和调整。SSR通常需要Node.js服务器来处理渲染请求。

总之，Vue.js中的SSR是一种将Vue.js应用程序的渲染逻辑移到服务器端的技术，以提高性能、SEO友好性和用户体验。它适用于需要这些特性的应用程序，但也需要更多的服务器端配置和管理。

#### 单页面应用（SPA）

1. 所有功能在一个HTML页面上实现
   * 优点：按需更新页面、开发效率高、用户体验好
   * 缺点：学习成本、首屏加载速度慢、不利于SEO
2. 应用场景：系统类网站、内部网站、文档类网站、移动端网站
3. 按需更新页面：明确访问路径和组建的对应关系——路由

#### 路由

1. 路由是路径和组件的映射关系
2. 根据路由就能知道不同路径应该匹配渲染哪个组件

#### Vue 2.x

* Vue的特点
  * 采用组件化模式，提高代码复用率、且让代码更好维护
  * 声明式编码 ，让编码人员无需直接操作DOM，提高开发效率
  * 使用虚拟DOM+优秀的Diff算法，尽量复用DOM节点
* 条件渲染
  * `v-show`不支持`<template>`元素，也不支持`v-else`，相当于对于元素加上了`display:none`样式
  * **`v-if`和`v-show`**
    * `v-if`是真正的条件渲染，它会确保在切换的工程中条件块内的事件监听器和子组件适当的被销毁和重建
    * `v-if`是惰性的，如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真，才会开始渲染条件块
    * `v-show`不管条件是什么，元素总是会被渲染，并且只是简单的基于CSS进行切换
    * `v-if`有更高地切换开销，`v-show`有更高的初始渲染开销
    * 如果需要频繁地切换，使用`v-show`较好，如果在运行时条件很少改变，则用`v-if`更好
* 列表渲染
  * 