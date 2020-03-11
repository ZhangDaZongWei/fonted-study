/**
 * middleware中间件
 * 1. 在服务端框架中，如express/koa，middleware是位于接收请求数据和响应数据
 *    过程之中的代码，用于添加 CORS headers、记录日志、内容压缩等工作
 * 2. 在redux中，是位于 action 被发起之后，到达 reducer 之前的扩展点，
 *    用于进行日志记录、创建崩溃报告、调用异步接口或者路由
 * 3. 中间件的优秀特性之一就是可以被链式组合
 */

