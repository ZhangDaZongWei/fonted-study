/**
 * 选择排序
 * 原理是：在未排序的序列里找出最小/大值，放在排好序的序列的末位
 * n个数需要进行n-1趟排序
 */

const dataArr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

function selectionSort(arr) {
  console.time('selection sort')
  for (let i=1; i<arr.length; i++) {
    let temp = i-1
    let min = arr[i-1]
    let j = i
    for (j; j<arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j]
        temp = j
      }
    }
    arr[temp] = arr[i-1]
    arr[i-1] = min
  }
  console.timeEnd('selection sort')
  return arr
}

console.log('selection sort: ', selectionSort(dataArr))

// 改变版，只记录下标
function selectionSort2(arr) {
  console.time('selection sort2')
  for (let i=0; i<arr.length -1; i++) {
    let temp
    let minIndex = i
    let j = i+1
    for (j; j<arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.timeEnd('selection sort2')
  return arr
}

console.log('selection sort: ', selectionSort2(dataArr))