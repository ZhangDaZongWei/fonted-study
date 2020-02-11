/**
 * 归并排序: 即先将排序序列分为两份，各自排列完之后再合并，对子序列也进行同样的操作
 * 很明显，这是分治法的应用
 * 若将两个有序表合并成一个，称为 二路归并
 */

const dataArr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

function mergeSort(arr) {
  console.time('merge sort')
  // 递归将序列分为两份
  function recursive(arr) {
    // 递归终止条件
    if (arr.length < 2) {
      return arr
    }
    let pos = Math.floor(arr.length / 2)
    let left = arr.slice(0,pos)
    let right = arr.slice(pos)
    return merge(recursive(left),recursive(right))
  }

  // 合并
  function merge(left,right) {
    let result = []
    while(left.length && right.length) {
      if (left[0] > right[0]) {
        result.push(right.shift())
      } else {
        result.push(left.shift())
      }
    }
    if (left.length) {
      result = result.concat(left)
    }
    if (right.length) {
      result = result.concat(right)
    }
    return result
  }

  console.timeEnd('merge sort')

  return recursive(arr)
}

console.log('merge sort: ',mergeSort(dataArr))