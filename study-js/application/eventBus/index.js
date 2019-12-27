/**
 * EventBus 即类似发布订阅/监听触发模式
 */

// 构造一个Event类

class Event {
  constructor() {
    this.EventMap =  new Map();
    this.MaxEventNum = 10;
  }
}

// 触发事件
Event.prototype._emit = function(eventName, ...args) {
  // ...args 将参数变为一个数组
  // 得到一个事件处理函数
  let handlerArr = this.EventMap.get(eventName);
  // 使用apply、call触发函数
  if (Array.isArray(handlerArr)) {
    handlerArr.forEach(item => {
      if (args.length > 0) {
        item.apply(this,args)
      } else {
        item.call(this)
      }
    });
  } else {
    if (args.length > 0) {
      handlerArr.apply(this, args);
    } else {
      handlerArr.call(this);
    }
  }
};

// 监听/注册事件
// 一个事件类型只有一个处理函数
// 一个事件类型对应多个处理函数
Event.prototype._listener = function(eventName, handler) {
  if (typeof handler !== 'function') return
  let handlered = this.EventMap.get(eventName)
  if (!handlered) {
    this.EventMap.set(eventName,handler)
  } else if (Array.isArray(handlered)) {
    handlered.push(handler)
  } else {
    this.EventMap.set(eventName,[handlered,handler])
  }
};

// 移除监听函数
// 对于匿名函数无法移除
Event.prototype._removeListener = function(eventName,handler) {
  let handlered = this.EventMap.get(eventName)
  if (Array.isArray(handlered)) {
    let index = handlered.indexOf(handler)
    if (index !== -1) {
      handlered.splice(index,1)
    }
    // 若数组中最后只剩一个，则不用数组结构
    if (handlered.length === 1) {
      handlered = handlered[0]
    }
  } else {
    this.EventMap.delete(eventName)
  }
}

// 实例化一个对象
const event = new Event()

function fun1(name) {
  console.log('l love '+ name)
}

function fun2(name) {
  console.log('我爱'+name)
}

function fun3(name) {
  console.log('我在乎'+name)
}

event._listener('say',fun1)

event._listener('say',fun2)

event._listener('say',fun3)

event._emit('say','段书晴')

event._removeListener('say',fun1)

event._emit('say','段书晴')


