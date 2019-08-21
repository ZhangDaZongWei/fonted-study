class Test {
  constructor(x,y) {
    this.x = x
    this.y = y
  }

  toString() {
    return 'call a function'
  }

  get prop() {
    console.log("hahaha")
  }

  set prop(value) {
    return 'hahaha'
  }
}

let test = new Test(2,3)

test.prop = 'prop'

console.log(test.prop)
