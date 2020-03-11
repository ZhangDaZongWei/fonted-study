let obj = {
  foo: 4,
  set bar(value) {
    return this.foo = value
  }
}

let myObj = {
  foo: 0
}

Reflect.set(obj,'bar',3)

console.log(obj.foo)

Reflect.set(obj,'bar',5,myObj)

console.log(obj.foo, myObj.foo)

// --------------------------------------------

let target = {
  name: 'zhangzongwei'
}

handler = {
  get: (target,property,receiver) => {
    console.log('call get function')
    // Reflect.set(target,property,3,receiver)
  },
  set: (target,property,value) => {
    console.log('call set function')
  },
  defineProperty: (target,property,attr) => {
    console.log('call defineProperty function')
  }
}

let proxy = new Proxy(target,handler)

proxy.age = 25

console.log(target)
