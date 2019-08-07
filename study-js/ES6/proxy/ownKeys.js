let target = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.for('secret')]: '4',
};

Object.defineProperty(target, 'key', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: 'static'
});

console.log(Object.keys(target))

let handler = {
  ownKeys(target) {
    return ['a', 'd', Symbol.for('secret'), 'key'];
  }
};

let proxy = new Proxy(target, handler);

console.log(Object.keys(proxy))
// ['a']

// -----------------------------------------------------------

function parent() {
  Object.defineProperty(this,'key',{
    value: 'child',
    configurable: false,
    enumerable: true
  })
}

Object.defineProperty(parent.prototype,'value',{
  value: 'parent',
  configurable: false
})

let child = new parent()

console.log(child.key,child.value)

let p = new Proxy(child,{
  ownKeys: function(target) {
    return ['key']
  }
})

console.log(Object.getOwnPropertyNames(p))
console.log(Object.keys(p))

for (let i in p) {
  console.log(i)
}