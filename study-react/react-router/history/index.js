// 实现一个路由-history
// 这时获取的并不是hash值了，而是pathname
// 不可访问任意路径，必须从根路径开始
class HistoryRouter {
  constructor() {
    this.routers = {}
    this.listenPopstate()
    this.listenLink()
  }

  // 监听浏览器前进或者后退
  listenPopstate() {
    window.addEventListener('popstate',(e) => {
      let state = e.state || {
        newPath: ''
      }
      let path = state.newPath
      if (path) {
        // 解析路径
        let pathArr = path.split('/')
        path ='/' + pathArr[pathArr.length - 1]
      }
      this.dealPathHandler(path)
    },false)
  }

  // 监听点击链接
  listenLink() {
    window.addEventListener('click',(e) => {
      let dom = e.target
      // 判断点击的是不是a标签
      if (dom.tagName.toUpperCase() === 'A' && dom.getAttribute('href')) {
        // 拦截默认事件
        e.preventDefault()
        this.assign(dom.getAttribute('href'))
      }
    },false)
  }

  // push path
  assign(path) {
    // 拼接路径
    let newPath = '/history/index.html' + path
    history.pushState({newPath},null,newPath)
    this.dealPathHandler(path)
  }

  // 

  // replace path
  replace(path) {
    history.replaceState({path},null,path)
    this.dealPathHandler(path)
  }

  // 注册每个路由页面
  registerRouter(path,callback=function(){}) {
    this.routers[path] = callback
  }

  // 注册首页
  registerIndex(callback=function(){}) {
    this.routers['/'] = callback
  }

  // 注册未发现页
  registerNotFound(callback=function(){}) {
    this.routers['404'] = callback
  }

  // 注册错误页
  registerError(callback=function(){}) {
    this.routers['error'] = callback
  }

  // 对于不同的路由，使用不同的处理函数
  // 注意这里不会包含空字符串，即使是首页window.location.pathname 也为 '/'
  dealPathHandler(path) {
    let handler
    if (!this.routers.hasOwnProperty(path)) {
      handler = this.routers['404']
    } else {
      handler = this.routers[path]
    }

    try {
      handler()
    } catch(e) {
      this.routers['error'](e)
    }

    console.log('history state: ',history.state)
  }

}
