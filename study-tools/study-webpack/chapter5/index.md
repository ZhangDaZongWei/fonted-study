### Webpack打包原理

#### 输出的`bundle.js`文件中有什么？

1. 文件中就是一个**立即执行函数**，参数为`module`数组，里面的每个元素都是一个函数，对应每个`module`
2. 文件中有一个`__webpack_require__`方法用来执行传入的数组元素，返回`module`的导出值，相当于`Node`中的`require`方法
3. 将那么多模块合并成一个单独的文件是为了更快地加载资源。因为浏览器不能快速地在本地加载文件，必须通过网络去请求，可想而知，文件一多，速度肯定会很慢，所以打包成一个文件，一次请求下来

#### Loader

1. `loader`可以进行链式处理，即上次的结果作为下次的输入
2. `loader`文件要导出一个函数，就是为了获取处理前的内容，返回处理后的内容。并且可以随意调用`Node`的API
3. `webpack`也提供了一些API给`loader`调用

   ```js
   // loader文件
   module.exports = function (source) {
     // source经过一系列处理
     let newSource = handleProcess(source)
     return source
   }
   ```

