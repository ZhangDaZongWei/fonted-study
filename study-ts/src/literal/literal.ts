/**
 * 字面量：字符串和数字
 * 1. 当使用var, let声明一个变量时，ts complier会将其当作string类型
 *    当使用const, 就作为字面量
 * 2. 字面量类型不仅确定了变量的类型，而且还确定了变量的值
 */

// liter_s会被complier成string类型
let liter_s = 'str'
// ...成字面量
const liter_s2 = 'str'

// 同时确定变量类型和值
let liter_s3: 'str' | 1

function getStr(val: 'abc') : void
function getStr(val: 'zhang') : void
function getStr(val: string) {
  console.log('literal: ', val)
}

getStr('abc')