let obj = {
  name: 'zhangzongwei',
  age: 25
}

console.log(Object.getOwnPropertyDescriptors(obj))

// -------------------------------------------------

let obj1 = {}

function withValue(value) {
  let d = withValue.d || (
    withValue.d = {
      enumerable: false,
      configurable: false,
      get: function() {
        return 1
      }
    }
  )
  return d
}

Object.defineProperty(obj1,'key',withValue('static'))
Object.defineProperty(obj1,'newKey',withValue('static'))

console.log('newKey: ',obj1.newKey)
console.log('key: ',obj1.key)

// -------------------------------------------------

let obj2 = {}

Object.defineProperty(obj2,'a',{
  value: 1,
  configurable: false
})

console.log('obj2.a: ',obj2.a)

Object.defineProperty(obj2,'a',{
  enumerable: false
})

console.log('obj2.a: ',obj2.a)

// -------------------------------------------------

function myClass() {

}

Object.defineProperty(myClass.prototype, 'x', {
  get() {
    return this._store
  },
  set(val) {
    this._store = val
    console.log('this: ', this)
  }
})

var m1 = new myClass()
var m2 = new myClass()

m1.y = 2
m1.x = 1

// -------------------------------------------------

function test() {
  this.x = 3
}

var t = new test()

console.log('t.x: ',t.x)