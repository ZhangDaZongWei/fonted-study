// 原型继承
// 共享引用属性，且不能传参
function prototypeExtend() {
  function parent() {
    this.color = 'tomato'
  }

  function child() {}

  child.prototype = new parent()

  let child1 = new child()
  child1.color = 'brown'
  console.log(child1.color,child.prototype.color)

  let child2 = new child()
  console.log(child2.color)

}

// prototypeExtend()

// 构造函数继承
// 解决了上述的问题
// 但是方法的复用性降低

// 组合继承
// 会出现多余属性，调用两次父类的构造函数
function constructorExtend() {
  function parent(value) {
    this.val = value
    this.anwer = ['today']
  }
  
  parent.prototype.getValue = function getValue() {
    return this.val
  }
  
  function child(value) {
    // 调用父类构造函数
    parent.call(this,value)
  }
  
  child.prototype = new parent()
  console.log('child.prototype: ', child.prototype)
  
  let child1 = new child('zhangzongwei')
  child1.anwer.push('yestoday')
  console.log('child1: ',child1.val, child1.anwer, child1.getValue())  

  let child2 = new child('duanshuqing')
  console.log('child2: ', child2.anwer)

}

// constructorExtend()

// 原型式继承
// 传入的对象作为原型
// 缺点是共享引用属性
function prototypalExtend() {

  function parent(o) {
    function F() {}
    F.prototype = o
    return new F()
  }

  let o = {
    name: 'duanshuqing',
    property: ['beautiful']
  }

  let child1 = parent(o)
  child1.property = 'smart'
  child1.name = 'zhangzongwei'
  console.log('child1: ',o,child1)

  let child2 = parent(o)
  console.log('child2: ',child2)
}

prototypalExtend()

// 组合继承导致了子类原型有父类的实例属性，但是通过了构造函数调用之后就显得多余
// 于是需要使用上述 原型式继承 中转一次或者使用Object.create()，这就是寄生组合式继承
function parasiticExtend() {
  function obj(o) {
    function F() {}
    F.prototype = o
    return new F()
  } 

  function parent(value) {
    this.name = value
  }

  parent.prototype.getName = function () {
    return this.name
  }

  function child(value) {
    parent.call(this,value)
  }

  // child.prototype = obj(parent.prototype)

  child.prototype = Object.create(parent.prototype,{
    constructor: {
      value: child
    }
  })

  console.log('child: ', child.prototype)
}

// parasiticExtend()

// 为什么不将子类的原型直接引用父类的原型呢？因为这样的话，子类原型和父类原型指向
// 同一块内存，这样会造成相互干扰！