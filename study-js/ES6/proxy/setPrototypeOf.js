var target = function() {}

Object.preventExtensions(target)

var handler = {
  setPrototypeOf: (target,proto) => {
    console.log("set target prototype")
    // Object.setPrototypeOf(target,proto)
    return false
  }
}

var proxy = new Proxy(target,handler)

Object.setPrototypeOf(proxy,{})

console.log(target.__proto__)