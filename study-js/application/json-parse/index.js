/**
 * 实现JSON.parse(string json)
 */

// 黑魔法，易受xss攻击
let json = '{"name":"zhangdazongwei","age":25}'

let jsonObj = eval('('+json+')')

console.log('jsonObj: ', jsonObj)

// 简易版JSON解析器
// 那么先了解一下JSON支持的数据类型:
// 1. string，number，boolean，null
// 2. object，array

// 那么从左往右开始解析
// 设置一个变量i用来记录当前解析的位置:

// 全局使用
let i = 0
let jsonStr = '{"a":1,"b":true,"c":false,"foo":null,"bar":[1,2,3]}'

function parseJson() {
  // 若遇到一个{括号，则表明要解析一个对象了
  if (jsonStr[i] === '{') {
    return parseObj()
  }
  // 若遇到一个[，则表明要解析一个数组了
  if (jsonStr[i] === '[') {
    return parseArr()
  }
  // 若遇到一个"，则表明要解析一个字符串了
  if (jsonStr[i] === '"') {
    return parseStr()
  }
  // 若遇到一个'n'，则表明要解析null了
  // 不是null的话，就报错
  if (jsonStr[i] === 'n') {
    return parseNull()
  }
  // 若遇到一个't'，则表明要解析true了
  // 不是true的话，就报错
  if (jsonStr[i] === 't') {
    return parseTrue()
  } 
  // 若遇到一个'f'，则表明要解析false了
  // 不是false的话，就报错
  if (jsonStr[i] === 'f') {
    return parseFalse()
  }
  // 若都不满足，则表明要解析number了
  return parseNumber()
}

function parseObj() {
  // 只要不遇到'}'就表明继续解析
  // 因为JSON中的key都是类似"key"，所以解析key就重用parseStr()
  // value为上述可使用的类型，所以解析value就重用parseJson()
  ++i
  let obj = {}
  while(jsonStr[i] !== '}') {
    let key = parseStr()
    if (jsonStr[i] === ':') {
      i++
    }
    let value = parseJson()
    obj[key]= value
    if (jsonStr[i] === ',') {
      i++
    }
  }
  ++i
  return obj
}

function parseArr() {
  // 只要不遇到]，就继续解析
  // 对于数组中的值，重用parseJson()
  i++
  let arr = []
  while(jsonStr[i] !== ']') {
    arr.push(parseJson())
    if (jsonStr[i] === ',') {
      i++
    }
  }
  i++
  return arr
}

function parseStr() {
  // 只要不遇到"，就继续解析
  i++
  let str = ''
  while(jsonStr[i] !== '"') {
    str += jsonStr[i++]
  }
  i++
  return str
}

function parseNull() {
  // 因为null才是有效值，所以若连续四个字符不为null就报错
  if (jsonStr.slice(i,i+4) !== 'null') {
    throw new TypeError('JSON not support this type value (null).')
  }
  i += 4
  return null
}

function parseTrue() {
  // 因为true才是有效值，所以若连续四个字符不为true就报错
  if (jsonStr.slice(i,i+4) !== 'true') {
    throw new TypeError('JSON not support this type value (true).')
  }
  i += 4
  return true
}

function parseFalse() {
  // 因为false才是有效值，所以若连续五个字符不为false就报错
  if (jsonStr.slice(i,i+5) !== 'false') {
    throw new TypeError('JSON not support this type value (false).')
  }
  i += 5
  return false
}

function parseNumber() {
  let number = ''
  while(numberHelp(jsonStr[i])) {
    number += jsonStr[i++]
  }
  return parseFloat(number)
}

function numberHelp(value) {
  let chars = {
    '-': true,
    '+': true,
    'e': true,
    'E': true,
    '.': true
  }
  if (chars[value]) {
    return true
  }
  if (value >= 0 && value <= 9) {
    return true
  }
  return false
}

let resultObj = parseJson()

console.log('json parse: ',resultObj)
console.log(typeof resultObj)

// 进阶版：https://musicfe.dev/json-parser/