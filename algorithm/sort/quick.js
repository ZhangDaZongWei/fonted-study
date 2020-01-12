/**
 * 快速排序: 这是最快的排序算法了，具体方法是：
 * 1. 找到一个基准值，然后将整个序列分为两部分，一部分都比基准值小，
 *    一部分都比基准值大
 * 2. 然后再对这两部分序列分别进行相同的递归排序
 */

const dataArr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.time("quickSort");
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  // 选出一个基准值，就挑中间的值
  let index = Math.floor(arr.length / 2);
  let middle = arr.splice(index, 1)[0];
  // 定义left序列，right序列
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= middle) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat([middle], quickSort(right));
}
console.timeEnd("quickSort");

// console.log("quickSort: ", quickSort(dataArr));

// 另一个实现方式
function quickSort2(arr, left, right) {
  if (!Array.isArray(arr) || arr.length === 1) {
    return arr;
  }
  if (left < right) {
    const middle = arr[right];
    let i = left - 1;
    let j = left;
    let temp;
    for (j; j <= right; j++) {
      if (arr[j] <= middle) {
        temp = arr[++i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    
    quickSort(arr,left,i-1)
    quickSort2(arr,i+1,right)
  }
  return arr
}

console.log("quickSort2: ", quickSort2(dataArr,0,dataArr.length-1))