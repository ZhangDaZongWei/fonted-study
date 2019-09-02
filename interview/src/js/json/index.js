// JSON字符串转为JSON对象，或者逆过程

const str = '{"name":"zhangzongwei","age":"25","address":"xuchang"}'

let obj = eval('('+str+')')
obj = JSON.parse(str)

console.log('JSON-Object: ',obj)

let json = JSON.stringify(obj)

console.log('Object-JSON: ',json)