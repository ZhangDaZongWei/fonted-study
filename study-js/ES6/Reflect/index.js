let target = {}

let proxy = new Proxy(target,{
  set: (target,name,value,receiver) => {
    let success = Reflect.set(target,name,value,receiver)
    console.log(success)
    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value)
    }
    return success
  }
})

console.log(proxy.name = 35)
console.log(target) 
console.log(Proxy.__proto__)
console.log(Reflect.__proto__)