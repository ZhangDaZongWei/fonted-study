#### 更灵活地描述webpack

> 有时需要根据不同环境构建不同webpack配置，例如开发环境develoption和production，可以写两个webpack.config.js，但是就有些多余了。

##### 导出为一个Function

通过function来更灵活地接收命令行的参数，实现不同开发环境的构建，如下：

    module.exports = function(env={},argv) {
      // 配置代码...
    }

1. 参数`env`，运行时的专属环境变量，**值为对象**。它的值是通过命令行传入的，例如`webpack --env.production --env.bao=foo`，则`env={"production": true, "bao": "foo"}`

2. 参数`argv`，通过命令行传入的所有参数，如`--config`、`--env`、`--devtool`

##### 导出一个promise function

    module.exports = function(env={},argv) {
      return new Promise((resolve,reject) => {
        setTimeOut(() => {
          resolve()
        },1000)
      })
    }

##### 导出多种配置

就是说`module.exports`的值还可以为一个**数组**，每项都是一个配置项，而且每项都会执行构建。适用于上传到NPM的库使用

