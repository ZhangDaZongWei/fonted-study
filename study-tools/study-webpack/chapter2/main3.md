#### plugin

> 顾名思义，`plugin`用于扩展webpack的功能。**值为一个数组**，数组中的每一项都是一个plugin实例，通过构造函数生成。例如

    module.exports = {
      plugins: [
        new anythingPlugin()
      ]
    }
> 注意使用插件的关键在于弄懂`plugin`本身的配置项

#### DevServer

> 用来配置`DevServer`，可以在配置文件中使用，也可以在命令行中使用。但是必须使用`DevServer`启动时有用，**值为一个对象**

##### hot

`devServer.hot`用于模块热更替功能。`DevServer`更新页面的原始功能是发现源代码被更新后，就要刷新页面，这种体验不好。而`hot`则只进行新老模块的替换，**值为Boolean**

##### inline

`DevServer`的实时预览功能依赖于注入页面的代理客户端，接收命令并刷新页面，`devServer.inline`用于配置是否将代理客户端注入到将运行在页面的`chunk`里，默认注入，**值为Boolean**。对于是否注入，有不同的刷新策略：

1. 若注入，即`inline: true`，则通过代理客户端去刷新页面

2. 若不注入，即`inline: false`，则通过`iframe`的方式去刷新页面，但是需要在` http://localhost:8080/webpackdev-server／`这个地址去预览页面

注意的是，若开启`hot`功能，最方便的就是开启`inline: true`

##### historyApiFallback

`devServer.historyApiFallback`用于开发使用H5 History API的单页应用，有**两种值类型**：

1. 启用`historyApiFallback`最简单的方式是`historyApiFallback: true`，但是这会导致所有请求都返回`index.html`页面

2. 若想根据不同的请求返回不同`html`页面，则需要使用`historyApiFallback.rewrites`，**值为数组**   

        historyApiFallback: {
          rewrites: [
            { from: /^\/user/, to: '/user.html'},
            { from: /^\/study/, to: '/study.html'},
            { from: /./, to: '/index.html'},
          ]
        }

##### contentBase

`devServer.contentBase`用于配置DevServer HTTP服务器的文件根目录，默认是根目录，**值为两类**。若想去配置，以便去对特定的目录开启服务，例如指定为根目录下的public目录，则使用：`contentBase: path.join(_dirname,public)`。需要注意的是，`devServer`通过HTTP服务暴露文件的方式有两类：

1. 暴露本地文件，如上

2. 暴露WebPack构建出的结果，但是呢，构建的结果交给了`DevServer`，所以使用`DevServer`时，在本地你找不到构建出的文件

即`contentBase`只能用来配置暴露本地文件的规则，还可以使用`contentBase: false`来关闭暴露本地文件

##### headers

`devServer.headers`配置注入一些HTTP响应头，**值为对象**

##### host

`devServer.host`配置DevServer服务监听地址，只能通过命令行使用，即`--host 0.0.0.0`，`host`的默认值是`127.0.0.1`

##### port

`devServer.port`配置监听的端口号，默认`8080`

##### allowedHosts

`devServer.allowedHosts`就是配置一个白名单，当请求的Host在白名单中正常返回，**值为数组**

##### disableHostCheck

`devServer.disableHostCheck`用于配置是否关闭HTTP请求的Host检查，**值为Boolean**，DevServer默认只接受来自本地的请求，当`disableHostCheck: false`时，则接受任意Host的请求，通常搭配`--host 0.0.0.0`使用， 因为想让其他设备访问自己的本地服务， 但访问时是直接通过 IP 地址访问而不是通过 HOST 访问 ，所以需要关闭 HOST 检查。

##### https

`devServer.https`配置https服务，当然默认是http服务。HTTP2和Service Worker必须运行在HTTPS上，**值为两类**

1. 切换HTTPS服务，设`https: true`，devServer会自动生成一份HTTPS证书

2. 如果想用自己的证书，则`https`是一个对象，具有`key`、`cert`、`ca`等属性

##### clientLogLevel

`devSerever.clientLogLevel`配置客户端的日志等级，就是开发者工具控制台上看到的内容。可取值为`none`、`error`、`warning`、`info`，默认为`info`即输出所有类型日志

##### compress

`devServer.compress`配置是否启用Gzip压缩，**值为Boolean类型**，默认是false

##### open / openPage

`devServer.open`配置在第一次构建完之后，启动DevServer时自动打开浏览器，**值为Boolean类型**。`devServer.openPage`用来配置打开指定的URL页面



