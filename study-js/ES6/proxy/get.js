let obj = {
  name: 'zhangzongwei'
}


let proxy = new Proxy(obj,{
  get: function(target,property) {
    return 35
  }
})

proxy.age = 25

console.log('proxy: ', proxy)

console.log('age: ',proxy.age)

// -------------------------------------------

function createArray(...elements) {
  let handler = {
    get: (target,property,receiver) => {
      console.log('property: ',property)
      let index = Number(property)
      if (index < 0) {
        property = String(target.length + index)
      }
      return Reflect.get(target,property,receiver)
    }
  }

  let arr = []
  arr.push(...elements)
  return new Proxy(arr,handler)
}

let newArr = createArray('a','b','c')
console.log(newArr instanceof Object)
console.log(newArr[-1])
