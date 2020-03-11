var target = {}

console.log(Object.isExtensible(target))

var p = new Proxy(target,{
  isExtensible: function(target) {
    console.log('called')
    return true
  }
})

console.log(Object.isExtensible(p))