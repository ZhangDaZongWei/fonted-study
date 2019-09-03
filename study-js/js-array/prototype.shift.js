/**
 * 1. shift()是Array.prototype上的方法，是从数组中移除第一个元素，并返回此值，会改变原数组。所以它有副作用
 *    1. 无参数
 *    2. 返回值，即移除的元素。如果数组为空，则返回undefined
 *    3. 函数周边
 *       1. shift()方法并不局限于数组，使用call或者apply方法让类数组也可以  
 */

 const arr = ['zhang','zong','wei']

 console.log(arr.shift())

 console.log('arr: ',arr)