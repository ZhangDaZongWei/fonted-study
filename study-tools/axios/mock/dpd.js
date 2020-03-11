var Mock = require('mockjs')

let dpd = Mock.mock({
  name: {
      first: '@FIRST',
      middle: '@FIRST',
      last: '@LAST',
      full: '@first @middle @last'
  }
})

console.log(JSON.stringify(dpd,null,2))