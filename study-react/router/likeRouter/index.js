/**
 * 1. 路由就是请求不同的地址，返回不同的页面内容，一般是后端操作的，其过程是这样的：
 *  1. 浏览器发出请求
 *  2. 服务器监听到某个端口发过来的url，并解析
 *  3. 根据服务器设定好的路由配置，返回相应的数据（html，json，图片等）
 *  4. 浏览器收到数据后，根据content-type字段去决定如何解析数据
 * 2. 所以，大概来讲，前端向后端请求资源时，就是通过“路由”的方式，而请求页面只是其中一种功能而已
 * 3. 后端路由，对于静态资源，URL的映射函数就是一个文件读取操作；对于动态资源，映射函数可能是数据库读取操作/一些数据处理
 * 
 * 4. 为什么会出现前端路由呢？
 *  1. 整个流程：ajax(带来异步交互，不用整个刷新页面) ---> 异步交互更高级的体验SPA(单页面应用)，交互不用刷新，连路由调转都不用刷新了 
 *     ---> 为了实现上述功能，前端路由登场
 *  2. SPA的方式虽然解决了页面刷新带来的交互体验不好的问题，但是由于url一直不变，所以浏览器无法记住历史记录，这就尴尬了。而且还会导致SEO的不友好
 *  3. 前端路由，路由映射的函数通常是一些DOM的显示和隐藏操作
 *  4. 静态路由就是已经设置好的，动态路由就是可以通过传入参数进行自定义
 * 
 * 5. 路由的实现形式：
 *  1. hash, 因为url后加#并不会刷新页面，并且还会触发hashChange事件
 *  2. history，之前的history对象主要用于多页面跳转，有go(),forward(),back()属性。HTML5又新增了几个API如下：
 *     1.history.pushState();         // 添加新的状态到历史状态栈
 *     2.history.replaceState();      // 用新的状态代替当前状态
 *     3. history.state               // 返回当前状态对象
 *    因为pushState和replaceState改变url时，并不会触发请求，所以就实现前端路由的功能。另外这两个函数经常和window.onpopstate配合使用，
 *    onpopstate是在操作浏览前进或者返回时触发的事件。
 *    但是呢，通过以上方式改变url，并不会触发什么事件，这就很尴尬了。那么换个思路，可以将所有触发history改变的情况都罗列出来
 *    然后进行拦截处理，主要有一下方式：
 *     1. 点击浏览器的前进或后退按钮
 *     2. 点击 a 标签
 *     3. 在 JS 代码中触发 history.pushState 函数
 *     4. 在 JS 代码中触发 history.replaceState 函数
 * 6. hash路由和history路由的优缺点
 *    1. hash路由可以触发事件，所以控制起来很方便，而且刷新没有发送请求，这个作用很大
 *    2. hash的兼容性更好，无需后端配合
 *    3. hash的缺点是样式不好看，会导致锚点功能失效
 *    4. history更加美观，而且是HTML5标准，以后支持性更好。缺点就是需要后端的配合，防止页面刷新出现找不到文件的情况
 */

 