function target() {
  this.name = 'zhangzongwei'
  this.age = 25
}

let t = new target()

console.log(t)

let handler = {}

let proxy = new Proxy(t,handler)

console.log(proxy.name, proxy.age)