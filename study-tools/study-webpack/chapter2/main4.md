#### 其他配置项

##### target

针对不同的运行环境，例如在web浏览器端和node端就不一样，这是需要构建出不同的代码，`target`就是配置不同环境下如何生成不同代码，值如下：

target值 | 描述
:-: | -
web | 针对浏览器(默认),所有代码都集中在一个文件里
node | 针对node.js，使用require语句加载Chunk代码
async-node | 针对node.js，异步加载Chunk代码
webworker | 针对WebWorker
electron-main | 针对Electron主线程
electron-renderer | 针对Electron渲染线程

##### devtool

`devtool`用于配置启动Source Map，方便调式，**值为Boolean**

##### watch / watchOptions

`watch`配置监听当文件发生变动时，进行编译。**值为Boolean**，默认是关闭的。在使用DevServer时，默认是开启的。`watchOptions`配置监听的一些模式:

    module.exports = {
      watch: true,
      watchOptions: {
        ignored: /node_modules/, 
        // 指监听到文件变更后，延迟一段时间再执行编译，默认是300
        aggregateTimeOut: 300,
        // 判断文件是否变更是通过不停地询问系统指定文件有没有改变来实现的，默认是1000/s
        poll: 1000
      }
    }

##### externals

`externals`配置不需要webpack打包的模块，这些模块是外部环境提供的。通过`externals`告诉webpack在js环境中已经内置了哪些全局变量，不用将这些全局变量打包到代码中而是直接使用它们，如下：

    module.exports = {
      externals: {
        // 将导入语句里的jquery 替换成运行环境里的全局变量jQuery 
        jquery: 'jQuery'
      }
    }

##### resolveLoader

`resolveLoader`用于如何去寻找Loader，加载loader是通过报名寻找的。配置如下：

    module.exports = {
      resolveLoader: {
        // 指定目录，是一个数组，一个没有下一个
        modules: ['node_modules'],
        // 入口文件的后缀
        extensions: ['.js','.json']
        // 指定入口文件位置的字段
        mainFields: ['loader','main']
      }
    }

常用于加载本地的Loader

