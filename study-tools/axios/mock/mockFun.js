var Mock = require('mockjs')

let template = {
  title: 'this is a mock template',
  'letter|3-5': 'start|', 
  'name|6': '|end',
  'number|+2': 2,
  'age|20-80': 30,
  'float|10-20.2-3': 1,
  'float-1|20.2-3': 1, 
  'float-2|30.2': 1,
  'name|5': 2,
  'function': () => template.title
}

let mockFun = Mock.mock(template)

console.log(JSON.stringify(mockFun,null,2))