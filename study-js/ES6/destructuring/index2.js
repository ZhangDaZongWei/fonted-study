/**
 * 1. 解构也可用于对象。
 * 2. 数组解构赋值时，是按照顺序;而按对象解构赋值则按照属性名,若没有对应的属性名则赋值为undefined。
 * 3. 如果变量名与属性名不一样,则完全有不一样的赋值情况。即对象的解构赋值的内部机制，是先找到同名属性,然后再赋值对应的变量。
 * 4. 允许按数组解构和按对象解构互相嵌套。
 */
let {baz,bar,bac} = {bar: 3,baz:"hello"}
console.log(bar+baz)
// 如下，这时候baz并不是作为变量，而是一个匹配模式。
let {baz: bae} = {baz: 'b'}
console.log(bae)

let obj = {p: [
  'Hello',
  {y: 'World'}
]
}

let {p,p:[x,{y}]} = obj
console.log(p)
console.log(x + ' ' + y)

/**
 * 5. 对象的解构可以指定默认值,同样默认值生效的条件是对象的属性值严格等于undefined。
 * 6. 不将大括号写在行首，避免js将其解释为代码块。要将整个解构赋值语句，放在一个圆括号里。
 * 7. 解构赋值允许等号左边的模式之中，不放置任何变量名。
 */
let arr = [6]
console.log(arr)

let {a=3} = {a: 5}
let {b: b=6} = {b:8}
console.log(a + ' ' + b)
/**
 * 8. 数组本质是特殊的对象，因此可以对数组进行对象属性的解构。属性名是按照从0开始顺序的数字。
 */
let arr1 = [1,2,3]
// [arr1.length -1]:这种方括号的写法，属于"属性名表达式"。
let {0:first,1:second,[arr1.length -1]: last} = arr1
console.log(first + ' ' + second + ' ' + last)

/**
 * 9. 
 */

let {e,...f} = {
  e: 'zhangzongwei',
  b: 'henan',
  c: 25,
  d: 'xuchang'
}

console.log('e: ', e, 'f: ', f)