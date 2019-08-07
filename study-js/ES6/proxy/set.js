let obj = {
  name: 'zhangzongwei'
}

let proxy = new Proxy(obj,{
  set: function(target,proper,value,) {
    if (proper === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('the type of age is wrong!')
      }
      if (proper > 100) {
        throw new RangeError('the age cannot beyond 200!')
      }
    }
    target[proper] = value
  }
})

proxy.class = 1
proxy.age = 80

console.log(obj.class)
console.log(obj.age)
console.log('name: ', proxy.name)

// -------------------------------------------------------------

const handler = {
  set: (obj,prop,value,receiver) => {
    obj[prop] = receiver
  }
}

const newProxy = new Proxy({},handler)
const myObj = {}
Object.setPrototypeOf(myObj,newProxy)

myObj.foo = 'baz'
console.log(myObj.foo === myObj)
console.log(Object.prototype.__proto__)