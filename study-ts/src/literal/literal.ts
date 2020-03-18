/**
 * 字面量：字符串和数字
 * 1. 当使用var, let声明一个变量时，ts complier会将其当作string类型
 *    当使用const, 就作为字面量
 */

// liter_s会被complier成string类型
let liter_s = 'str'
// ...成字面量
const liter_s2 = 'str'

function getStr(val: 'abc') : void
function getStr(val: 'zhang') : void
function getStr(val: string) {
  console.log('literal: ', val)
}

getStr('abc')