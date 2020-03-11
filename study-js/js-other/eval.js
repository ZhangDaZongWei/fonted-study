/**
 * 1. eval(string)函数，将传入的字符串String当做js代码执行
 *    1. string参数
 *       1. 要求是字符串，字符串中可以是一些js代码，例如表达式、语句等，eval会执行这是js代码，好像是新开辟了一个运行空间似的
 *       2. 如果不是字符串，那么不当做执行js代码执行。就是什么也不做
 *    2. 返回值
 *       1. 若传入的是字符串，则返回执行js代码后返回的值，若js代码执行后无返回值则为undefined,另外对于表达式，它并没有返回值啊，所以直接返回运算的值即可；如不是，原样返回
 *    3. 函数周边
 *       1. eval(string)是全局对象的一个函数属性，其实就是window对象或者global对象的一个属性而已
 *       2. 有一个很奇怪的地方，从ES6起，当在间接调用eval(就是说将eval引用(function也是对象哦)赋值给一个变量，然后用这个变量来调用)时，
 *          它工作在全局作用域中，就意味着它不能访问其所在的局部变量。
 *       3. 不要使用eval，因为别人可以插入任意的js代码，具有危险性。 
 *       4. eval(string)的执行需要js解释器，一个是当使用解释器将js代码转换为机器语言时，会将所有的变量命名概念都删除，
 *          所以会强制让浏览器去进行长时间的变量名查找，以确定变量在机器代码中的位置并设置其值。另外，eval()会将变量的新内容的引入，
 *          比如更改该变量的类型，因此会强制浏览器重新执行所有已经生成的机器代码以进行补偿。所以看出来这是多么耗时间啊！
 *          记住，少用eval(string)。但是可以使用window.Function来代替。没错又出来一个新的函数，哭~
 *       5. eval(string)执行时，查找变量的方式很奇葩，例如在使用new Date()时，不会立即假设Date是来自window.Date而不是一个名为Date的局部变量
 *          所以会使得浏览器高代价地查找是否存在名为Date()的任何局部变量，效率太低了，而Function则不然
 *       6. 将JSON字符串转换为JSON对象
*/
let e1 = eval('8==9')

e1 = eval('(function(){ return "eval is great!"})()')

e1 = eval('(function(){ let a = 2})()')

console.log('e1: ',e1)

// 3.2的例子，注意的是当直接定义name和age变量时，geval还是会报错，但是将其定义为global的属性时，就可以了。
// 在浏览器中也是如此，说明直接定义的变量并不会成为全局对象的属性
global.name = 'duanshuqing'
global.age = 23

function indirectEval() {
  let name = 'zhangzongwei'
  let age = 25

  let e2 = eval('name + age')
  
  let geval = eval
  e2 = geval('name + age')

  console.log('e2: ', e2)
}

indirectEval()

// 3.5的例子

function Date(n) {
  return{time: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][(n-1)%7 || 0]}
}

let e3 = eval('('+'{a:4-1, b:3,c:new Date(3)}'+')')

console.log('e3: ',e3)

// 再来看看window.Function的表现，没错它使用的是内置Date

let f1 = Function('"use strict"; return (' + '{a:4-1, b:3,c:new Date(3)}' +')')()

// 那么如何让Function也使用定义的Date呢？如下，直接传入定义的Date即可，但是有点绕了

f1 = Function('"use strict"; return (' + 'function(Date) {return Date(5)}' + ')')()(Date)

console.log('f1: ',f1)

// 3.6的例子

const JSON = '[1,2,3]'

let e4 = eval(JSON)

console.log('e4: ',e4)