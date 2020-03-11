const target = {}

Reflect.defineProperty(target,'time',{
  value: Date.now(),
  enumerable: true
})

console.log(target.time)

handler = {
  defineProperty: (target,property,descriptor) => {
    console.log('call defineProperty: ',descriptor)
    Reflect.defineProperty(target,property,descriptor)
  }
}

let proxy = new Proxy(target,handler)

proxy.name = 'zhangzongwei'

console.log(target)