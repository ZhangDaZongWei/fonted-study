let stu1 = {
  name: 'zhangsan',
  score: 59
}
let stu2 = {
  name: 'lisi',
  score: 99
}

let handler = {
  has(target,prop) {
    if (prop === 'score' && target[prop] < 60) {
      console.log(`${target.name}不及格`)
      return false
    }
    return prop in target
  }
}

let p1 = new Proxy(stu1,handler)
let p2 = new Proxy(stu2,handler)

console.log('hasOwnProperty' in p1)
console.log(p1)