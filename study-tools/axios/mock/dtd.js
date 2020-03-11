var Mock = require('mockjs')

var data = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
})

console.log('data',JSON.stringify(data))

// -----------------------------------------------------

let stringData = Mock.mock({
  'letter|3-5': 'start|', 
  'name|6': '|end'
})

console.log('stringData',stringData)

// -----------------------------------------------------

let numData = Mock.mock({
  'number|+2': 2,
  'age|20-80': 30,
  'float|10-20.2-3': 1,
  'float-1|20.2-3': 1, 
  'float-2|30.2': 1,
  'name|5': 2
})

console.log('numData',JSON.stringify(numData,null,2))

// -----------------------------------------------------

let booleanData = Mock.mock({
  'yes|1': true,
  'NO|1-2': false
})

console.log('booleanData',JSON.stringify(booleanData,null,2)) 

// -----------------------------------------------------

let objData = Mock.mock({
  'obj|3': {
    'property-1|3-6': 'mock',
    'property-2|20-30': 1,
    'property-3|1': true,
    'property-4|50.2-3': 1
  }
})

console.log('objData',JSON.stringify(objData,null,2)) 

// -----------------------------------------------------

let arrData = Mock.mock({
  'arr|5': [1,2,3,4,5],
  'arrOther|+1': [6,7,8,9,10],
  'generatorArr-1|1-3': [11,12],
  'generatorArr-2|1': [13,14,15]
})
 
console.log('arrData',JSON.stringify(arrData,null,2))

// -----------------------------------------------------

let funObj = {
  name: 'zhangzongwei',
  age: 25
}

let funData = Mock.mock({
  'name': () => funObj.age
})

console.log('funData',JSON.stringify(funData,null,2))

// -----------------------------------------------------

let regexpData = Mock.mock({
  'regex-1|5-10': /[a-z0-9]/
})

console.log('regaxData',JSON.stringify(regexpData,null,2))