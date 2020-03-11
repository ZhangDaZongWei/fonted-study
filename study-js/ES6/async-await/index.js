/**
 * async-await函数
 * 参考链接：https://segmentfault.com/a/1190000007535316
 */

// async函数在做什么？
async function asyncExam() {
  console.log('async function.')
}

// let ret = asyncExam()
// Promise {undefined}，可见async函数返回的就是一个promise对象
// 那这和一般返回promise对象的函数就没什么区别了
// console.log(ret) 

// await在等什么？
// await等待表达式的返回值，若是promise则阻塞函数内部下面的代码执行，直至reslove
// 若不是promise，则不会阻塞
function say() {
  return 'I Love duanshuqing'
}

function asyncSay() {
  return new Promise((resolve,reject) => {
    setTimeout(function() {
      resolve('I Love duanshuqing...')
    },1000)
  })
}

async function asyncExam2() {
  console.time('await')
  const s2 = await asyncSay()
  console.timeEnd('await')
  const s1 = await say()
  console.log('s1: ',s1)
  console.log('s2: ',s2)
}

// asyncExam2()

/**
 * 对比async-await的优势
 * 实现一个：
 * 传入参数n，表示这个函数执行的时间
 * 执行的结果是n+200，这个值用于下一次
 */

function countTime(n) {
  return new Promise((resolve) => {
    console.log('running...')
    setTimeout(function() {
      resolve(n+200)
    },n)
  })
}

function step1(n,label) {
  console.log(label,'-step1: ',n)
  return countTime(n)
}

function step2(n,label) {
  console.log(label,'-step2: ',n)
  return countTime(n)
}

function step3(n,label) {
  console.log(label,'-step3: ',n)
  return countTime(n)
}

function startDo(n,label) {
  console.time('startDo')
  step1(n,label)
  .then(res => step2(res,label))
  .then(res => step3(res,label))
  .then(res => {
    console.log('startDo result: ',res)
    console.timeEnd('startDo')
  })
}

startDo(300,'startDo')

// 使用async-await改写
async function asyncStartDo(n,label) {
  console.time('asyncStartDo')
  let s1 = await step1(n,label)
  let s2 = await step2(s1,label)
  let s3 = await step3(s2,label)
  console.log('asyncStartDo result: ',s3)
  console.timeEnd('asyncStartDo')
}

asyncStartDo(300,'asyncStartDo')