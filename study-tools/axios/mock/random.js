var Mock = require('mockjs')

let Random = Mock.Random

console.log(Random.email())

console.log(Mock.mock('@email'))

// -----------------------------------------------------

let pool = 'I am a character pool'

console.log(Random.character(pool)) 

console.log(Random.character("upper"))

// -----------------------------------------------------

console.log(Mock.mock('@range(10)'))

// -----------------------------------------------------

console.log(Random.date("MM-dd")) 

// -----------------------------------------------------

console.log(Random.now())

console.log(Random.now('day'))

console.log(Random.now('year'))

// -----------------------------------------------------


console.log(Random.image('Hello World'))

// console.log(Random.dataImage())

// -----------------------------------------------------

console.log(Random.color())

// -----------------------------------------------------

console.log(Random.paragraph())

console.log(Random.cparagraph())

console.log(Random.ctitle())

// -----------------------------------------------------

console.log(Random.clast())

console.log(Random.cfirst())

console.log(Random.cname())

// -----------------------------------------------------

console.log(Random.increment(200))    

// -----------------------------------------------------

var template = {
  name: 'value1'
}

var data = {
  name: 'value2'
}

console.log(Mock.valid(template,data))

// -----------------------------------------------------

var newTemplate = {
  'key|1-10': '★'
}

console.log(JSON.stringify(Mock.mock(newTemplate),null,2))

console.log(Mock.toJSONSchema(newTemplate))