
console.log('event loop start ...')

let promise

setTimeout(() => {
  console.log('setTimeout1')
  Promise.resolve('promise').then(res => {
    promise = res
    console.log(res)
  })
},10)

setTimeout(() => {
  console.log('setTimeout2')
},1)

console.log('event loop end ...', promise)
