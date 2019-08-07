// 实现类的继承

function Shape() {
  this.x = 0
  this.y = 0
}

Shape.prototype.move = function(x,y) {
  this.x += x
  this.y += y
  console.info('Shape moved.')
}

function Rectangle() {
  Shape.call(this)
}

// Rectangle.prototype.__proto__ === Shape.prototype
Rectangle.prototype = Object.create(Shape.prototype)

Rectangle.prototype.constructor = Rectangle

let react = new Rectangle()

react.move(1,1)

console.info(react.x,react.y)

console.log(Shape.prototype.constructor)

console.log(Rectangle.prototype)