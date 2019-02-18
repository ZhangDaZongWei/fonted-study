/**
 * 1. 从数组和对象中提取值，对变量进行赋值，这被称为解构
 * 2. “模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
 */
let [a,b,c] = [1,2,3]
console.log("a="+ a + " b="+ b + " c=" + c)

let [,,third] = ['one','two','third']
console.log(third)

/**
 * 3. ...var 表示一个数组
 * 4. 如果解构不成功(未对应)就将其赋值为undefined
 * 5. 不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组
 */
let [head,...tail] = [1,2,3,4]
console.log(head)
console.log(tail)

let [x,y,...z] = ['a']
console.log(x)
console.log(y)
console.log(z)

/**
 * 6. 如果等号的右边不是数组，严格地说，不是可遍历的结构Iterator，将会报错。要么转为对象以后不      具备Iterator接口，要么本身就不具备Iterator接口。
 * 7. 对于Set结构，也可以使用数组的解构赋值。
 * 8. 只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
 * 9. Generator函数，原生具有Iterator接口，解构赋值会依次从这个接口获取值。
 */
let {d} = {d:1}
console.log(d)

let [e,f] = new Set([3,4])
console.log(e + ' ' + f)

/**
 * 10. 解构赋值可以指定默认值。
 * 11. ES6内部使用严格相等运算符(===),判断一个位置是否有值。即当一个数组成员严格等于               undefined，默认值才会生效。
 * 12. 若默认值是一个表达式，那么它是惰性求值得，即只有在用到的时候，才会求值。
 * 13. 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
 */
let [foo=true] = []
console.log(foo)

let [s = 1] = [null]
console.log(s)

function fun() {
  console.log('aaa')
}

let [h = fun()] = []
console.log(h) // 'aaa' undefined ?
