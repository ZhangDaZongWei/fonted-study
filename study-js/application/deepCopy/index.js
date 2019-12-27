/**
 * 深克隆
 */

function createObj() {
  this.me = {
    name: "张宗伟",
    age: 25,
    address: {
      province: "河南",
      city: "信阳",
      county: "光山"
    }
  };
}

Object.defineProperty(createObj.prototype,'custom',{
  value: 'custom',
  configurable: true,
  enumerable: true,
  writable: true,
})

let copyedObj = new createObj();

copyedObj.personality = new Array(1);
copyedObj.regax = new RegExp("hahaha", "g");
copyedObj.fun = function say() {
  console.log("l love you!");
};
copyedObj.refer = copyedObj;
copyedObj.date = new Date();

// 使用JSON的序列化和反序列化
// 优点简单方便，缺点如下

function deepCopy1(obj) {
  console.log("obj: ", obj);
  console.log("obj constructor: ", obj.constructor);
  // 1. 会让constructor都指向Object，而非其真实的构造函数
  let stringifyed = JSON.stringify(obj);
  let parsed = JSON.parse(stringifyed);
  console.log("parsed: ", parsed);
  console.log("parsed constructor: ", parsed.constructor);

  // 2. 对于函数、类似new RegExp的正则表达式以及类似new Array(1)的数组类型(其实两者都是对象实例),
  // 而JSON并不支持对象实例的格式，所以都不能准确复制
  console.log("parsed array: ", parsed.personality[0]);
  console.log("parsed regax: ", parsed.regax);
  console.log("parsed fun: ", parsed.fun);
  console.log("parsed date: ", parsed.date);

  // 3. 针对循环引用，会报错
}

// deepCopy1(copyedObj)

// 实现深克隆的正确姿势

// 1. 判断所要复制的数据类型

function dataType(value) {
  // 普通类型返回false
  if (typeof value !== "object") return false;
  let type = Object.prototype.toString.call(value);
  // 引用类型返回各自类型
  if (type === '[object Object]') {
    return 'Object'
  }
  if (type === "[object Array]") {
    return "Array";
  }
  if (type === "[object RegExp]") {
    return "Regax";
  }
  if (type === "[object Date]") {
    return "Date";
  }
}

// 处理循环引用，否则会爆栈
// 原理就是使用数组保存各个遍历的值，加以比较
let arrayed = []
let newArray = []

console.time('deepCopy')
function deepCopy2(value) {
  const type = dataType(value);
  let newValue;
  // 基本类型直接返回
  if (!type) return value;
  switch (type) {
    case 'Object':
      let proto = Object.getPrototypeOf(value)
      newValue = Object.create(proto)
      break
    case "Array":
      newValue = [];
      break;
    case "Regax":
      // 对于正则表达式，需要注意要复制flag
      let flag = "";
      if (value.global) flag += "g";
      if (value.ignoreCase) flag += "i";
      if (value.multiline) flag += "m";
      newValue = new RegExp(value.source, flag);
      // 这里不太明白
      if (value.lastIndex) newValue.lastIndex = value.lastIndex;
      break;
    case "Date":
      newValue = new Date(value.getTime());
      break;
    default: newValue = ''
  }

  // 比较是否有循环存在
  let index = arrayed.indexOf(value)
  if (index != -1) {
    return newArray[index]
  }
  arrayed.push(value)
  newArray.push(newValue)

  // 将自身的可遍历属性复制到新值上
  // 还包含它原型上的相关属性
  for (let i in value) {
    if (Object.hasOwnProperty.call(value,i)) {
      newValue[i] = deepCopy2(value[i])
    }
  }

  return newValue
}
console.timeEnd('deepCopy')

let newObj = deepCopy2(copyedObj)

copyedObj.me.name = '段书晴'

console.log('newObj: ', newObj)
console.log('newObj date: ', typeof newObj.date)
console.log('newObj & refer: ', newObj === newObj.refer)

