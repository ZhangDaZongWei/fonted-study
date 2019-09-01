function Person(name,age) {
  this.one = {
    name,
    age
  }
}

const p1 = new Person('zhangzongwei',25)
const p2 = new Person('duanshuqing',23)

console.log('p1: ', p1.one)