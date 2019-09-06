### http协议

1. 状态码的含义
   > 200 OK 代表请求没问题，响应实体的主体部分包含了所请求的资源  
     202 Accepted 代表请求已接受，但服务器还未对其执行任何动作  
     301 Moved Permanently 代表永久重定向  
     302 Found 代表临时重定向，客户端应该使用 Location 首部给出的 URL 来临时定位资源，但将来的请求仍应使用老的 URL

2. [http首部(请求头，响应头)的解释](https://www.jianshu.com/p/65bd69fa204d)

3. 首部由一个空行（CRLF，carriage return & line feed）结束，表示首部列表的结束和实体主体部分的开始  
   URL 包含了 HTTP 协议版本、Host 域表示的主机组件、端口、路径、参数、用户名和密码。所以，请求报文中的 Host 域和 HTTP 版本是相关联的。

