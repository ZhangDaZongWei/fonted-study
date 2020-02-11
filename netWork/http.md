### http

> 参考链接：

  1. [http知识](https://juejin.im/post/5ad4465d6fb9a028da7d0117#heading-3)
  2. [http知识](https://www.cxymsg.com/guide/http.html#http%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B9%E6%B3%95%EF%BC%9F)


### https

> 参考链接：[https知识](https://juejin.im/post/5ad6ad575188255c272273c4)

### 补充

#### 首部类型

1. 端到端首部：会转发给请求或响应对应的最终接受对象，必须保存在由缓存生成的响应中，并规定必须转发
2. 逐跳首部：只对单次的转发有效，会因为存在缓存或者代理而不再转发

#### 通用首部

1. `cache-control`: 控制缓存
    - `max-age`: 控制缓存的相对时间
    - `public`: 可以被所有用户缓存，包括终端和`CDN`等中间代理服务器
    - `private`: 只能被终端浏览器缓存
    - `no-cache`: 先缓存在本地，然后命中缓存后必须和服务器验证缓存的新鲜度才能使用
    - `no-store`: 不缓存
2. `connection`: 逐跳首部
    - 控制不再转发给代理的首部
    - 管理持久连接`keep-alive`

#### 请求首部

1. `Accept`: 客户端和代理能够处理的媒体类型及优先级(q值表示)
    - `text/html`
    - `application/xml`
    - `image/apng`
2. `Accept Encoding`: 客户端和代理能够接收的编码格式及优先级(q值表示)
    - `gzip`、`compress`
3. `If-Match`: 告知服务器比对`If-Match`携带的值与资源的实体标记`ETag`值，当一样时才会执行请求。
   > 形如`If-xxx`的首部，称为条件请求，只有满足条件时才会执行请求
4. `If-None-Match`：与`If-Match`相反
5. `If-Modified-Since`: 告知服务器比对资源的更新时间与`If-Modified-Since`的值，若不同则执行请求
6. `If-Unmodified-Since`: 与`If-Modified-Since`相反
7. `Range`: 需要获取资源的范围
8. `Authorization`: Web的认证信息
9. `User-Agent`: 客服端程序信息

#### 响应首部

1. `Location`: 令客户端重定向的URL
2. `ETag`: 将资源以字符串方式做唯一标识
3. `Server`：服务器的信息

#### 实体首部
> 就是对实体内容进行补充说明

1. `Content-Type`: 实体的媒体类型，与`Accept`类似
2. `Content-Encoding`: 实体的编码方式，与`Accept Encoding`类似
3. `Allow`: 获取资源时所支持的方法。如`GET`、`POST`、`HEAD`
4. `Last-Modified`: 资源修改的最终时间
5. `Expires`: 实体主体的过期时间

#### `keep-alive`与多路复用的区别

`keep-alive`表示多个请求共用一个连接通道，但是每个请求和响应是连续并且有顺序；多路复用因为二进制传输以帧的形式传输，从而可以乱序，到达之后再通过帧头部识别，换句话说，就是可以并行请求与响应