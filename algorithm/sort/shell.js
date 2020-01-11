/**
 * 希尔排序：
 * 1. 选择一个增量将数组划分为若干个小数组，可以提前规定
 *    也可以动态生成，最后一个增量肯定为1
 * 2. 每个小数组进行直接插入排序
 */

const arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

function shell(arr) {
  let len = arr.length
  // 存储临时的值
  let temp 
  // 存储间距
  let gap = 1
  console.time('shell sort')
  // 动态生成初始gap
  while(gap < (len/5)) {
    gap = gap*5+1
  }
  for (gap; gap > 0; gap = Math.floor(gap/5)) {
    // 以gap为起点，进行直接插入排序  
    for (let i=gap; i<len; i++) {
      temp = arr[i]
      let j = i-gap
      for (j; j>=0 && arr[j]>temp; j=j-gap) {
        arr[j+gap] = arr[j]
      }
      arr[j+gap] = temp
    }
  }
  console.timeEnd('shell sort')
  return arr
}

console.log('shell sort: ', shell(arr))