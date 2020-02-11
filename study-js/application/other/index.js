/**
 * 实现f(1)(2)(3)、f(1,2)(3)、f(1,2,3) = 6
 */

function fn(...args) {
  console.log('args: ',args)
  // 获取参数的个数
  const argsLen = args.length
  let args_1 = args[0]
  if (argsLen === 1) {
    return (args_1_1) => {
      return (args_1_2) => {
        return args_1 + args_1_1 + args_1_2
      }
    }
  } else if (argsLen === 2) {
    let args_2 = args[1]
    return (args_2_1) => {
      return args_1 + args_2 + args_2_1
    }
  } else {
    let args_2 = args[1]
    let args_3 = args[2]
    return args_1 + args_2 + args_3
  }
}

console.log('1,2,3: ',fn(1,2,3))
console.log('1,2 3: ',fn(1,2)(3))
console.log('1 2 3: ',fn(1)(2)(3))