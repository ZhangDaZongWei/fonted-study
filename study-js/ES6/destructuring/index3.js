/**
 * 1. 字符串可以解构赋值，此时，字符串被转换成了一个类似数组的对象。
 * 2. 当数值和布尔值解构赋值时，也是先转化为对象。
 * 3. 只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转      为对象，所以对它们进行解构赋值都会报错。
 */
const [h,i,j,k] = 'hello'
const {length} = 'hello'
console.log(length)

/**
 * 4. 函数参数也可以使用解构赋值。
 * 5. 函数参数的解构可以使用默认值。但是具有两种写法，并且会得到不一样的结果。
 */
function f1([a,b]) {
  console.log(a+b)
}
f1([3,4])
// 第一种写法,这时是x,y参数具有默认值
function f2({x,y} = {x:3,y:7}) {
  console.log(x+y) 
}
f2()
f2({}) // NaN 因为这时其实已经给参数赋值了，分别是undefined，所以加上来就为NaN
// 第二种写法,这时是变量x,y分别具有默认值
function f3({x=3,y=x}={}) {
  console.log(x+y)
}
f3({})