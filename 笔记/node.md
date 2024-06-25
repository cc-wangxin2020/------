#### app.use(express.urlencoded({extended: true})) 什么意思?
这段代码是使用 Express 框架中的中间件（middleware）来处理 URL 编码的数据。让我解释一下每个部分的含义：
1. app.use: 这是 Express 应用中用于添加中间件的方法。它允许你在请求被处理之前执行一些操作，比如解析请求体、验证数据等。
2. express.urlencoded({extended: true}): 这是一个中间件函数，用于解析 URL 编码的请求体数据，并将其转换为 JavaScript 对象。URL 编码是一种将数据编码为键值对形式的格式，常见于 HTML 表单提交。
3. 参数 {extended: true} 表示将支持更丰富的编码格式，包括嵌套对象和数组。如果设置为 false，则只支持基本的键值对编码。

综合起来，这段代码的作用是在 Express 应用中添加一个中间件，用于处理 URL 编码的请求体数据，并将其转换为 JavaScript 对象，从而使你能够在处理请求时访问这些数据。这对于处理通过表单提交的数据非常有用。例如，你可以通过 req.body 访问这些解析后的数据。