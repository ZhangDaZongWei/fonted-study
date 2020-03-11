// 实现一个路由对象-hash
// 可以直接访问任意路径
class HashRouter {
  constructor() {
    this.routers = {}
    window.addEventListener('hashchange',this.load.bind(this),false)
  }

  // 为每个路由注册不同的回调函数callback
  register(hash,callback=function(){}) {
    this.routers[hash] = callback
  }

  // 注册首页的回调函数callback
  registerIndex(callback=function() {}) {
    this.routers['index'] = callback
  }

  // 处理出现没有对应路由的情况
  registerNotFound(callback=function(){}) {
    this.routers['/404'] = callback
  }

  // 处理错误的情况，主要是处理handler的错误
  registerError(callback=function(){}) {
    this.routers['/error'] = callback
  }
  
  // 触发hashchange时，执行其对应的回调函数callback
  load() {
    let hash = window.location.hash.slice(1)
    let handler
    
    if(!hash) {
      handler = this.routers.index
    } else if(!this.routers.hasOwnProperty(hash)){
      handler = this.routers['/404']
    } else {
      handler = this.routers[hash]
    }

    try {
      handler()
    } catch(e) {
      this.routers['/error'](e)
    }
  }
}
