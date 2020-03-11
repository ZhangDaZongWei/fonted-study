
let arr = [1,2,3,4,5,6]

let sum = arr.reduce((acc,curr) => acc+curr,5)

console.log(sum)

// -----------------------------------------------

var initialValue = 0;
var arrObj = [{x: 1}, {x:2}, {x:3}]
var arrSum = arrObj.reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    initialValue
);

console.log(arrSum)

// -----------------------------------------------

var arrCon = [[0,1],[2,3],[4,5]]
var arrConCom = arrCon.reduce((a,b) => {
  return a.concat(b)
})
console.log(arrConCom)

// -----------------------------------------------

var arrNames = ['Alice','Bob','Tiff','Bruce','Alice']

var arrNamesCount = arrNames.reduce((nameObj,currName) => {
  if ( currName in nameObj) {
    nameObj[currName]++
  } else {
    nameObj[currName] = 1
  }
  return nameObj
},{})

console.log(arrNamesCount)

// -----------------------------------------------

var arrAssign = [
  {name: 'Alice', age: 21},
  {name: 'Max', age: 20},
  {name: 'Jane', age: 20}
]
// 版本一
var arrAssignCom = arrAssign.reduce((assignObj,curr) => {
  if (curr.age in assignObj) {
    assignObj[curr.age].push(curr)
  } else {
    assignObj[curr.age] = [curr]
  }
  return assignObj
},{})

console.log(arrAssignCom)

// 版本二
function groupBy(arr,property) {
  return arr.reduce((assignObj,curr) => {
    let index = curr[property]
    if (!assignObj[index]) {
      assignObj[index] = [curr]
    } else {
      assignObj[index].push(curr)
    }
    return assignObj
  },{})
}

console.log(groupBy(arrAssign,'age'))

// -----------------------------------------------

var arrBooks = [
  {
    name: 'Anna',
    books: ['Bible','Harry Potter'],
    age: 21
  },
  {
    name: 'Bob',
    books: ['War and peace','Romeo and Juliet'],
    age: 26
  },
  {
    name: 'Anna',
    books: ['The Lord of the Rings','The Shining'],
    age: 18
  }
]

var allBooks = arrBooks.reduce((acc,curr) => {
  // acc.push(...curr.books)
  return [...acc,...curr.books]
},['Alphabet'])

console.log(allBooks)

// -----------------------------------------------

var arrRepeat = [1,1,1,2,2,3,2,4,5,5,5,3,4,4,4,4]

var deleteRepeat = arrRepeat.sort().reduce((acc,curr) => {
  if (acc.length == 0 || acc[acc.length - 1] !== curr) {
    acc.push(curr)
  }
  return acc
},[])

console.log(deleteRepeat)

// -----------------------------------------------

function p1(a) {
  return new Promise((resolve,reject) => {
    resolve(a*5)
  })
}

function p2(a) {
  return new Promise((resolve,reject) => {
    resolve(a*2)
  })
}

function f3(a) {
  return a*3
}

function p4(a) {
  return new Promise((resolve,reject) => {
    resolve(a*4)
  })
}

function promiseChain(arrPromise,initValue) {
  return arrPromise.reduce((acc,curr) => {
    return acc.then(curr)
  },Promise.resolve(initValue))
}

var arrPromise = [p1,p2,f3,p4]
var accPromise = promiseChain(arrPromise,10)
accPromise.then(console.log)

// -----------------------------------------------

function pipe(...functions) {
  return function(input) {
    return functions.reduce((acc,fn) => fn(acc),input)
  }
}

const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

var multiply = pipe(double,triple)
console.log(multiply(5)) // 30

var multiply1 = pipe(triple,quadruple)
console.log(multiply1(5)) // 60

var multiply2 = pipe(double,quadruple)
console.log(multiply2(5)) // 40