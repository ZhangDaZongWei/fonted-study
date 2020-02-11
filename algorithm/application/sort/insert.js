/**
 * 插入排序：将后面未排序的插入到之前已排序的
 */

const dataArr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

function insertSort(arr) {
  console.time("insertSort");
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (temp < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = temp;
        break;
      }
    }
    if (j < 0) {
      arr[0] = temp;
    }
  }
  console.timeEnd("insertSort");
  return arr;
}

let result = insertSort(dataArr);

console.log("insertSort: ", result);

/**
 * 改变版插入排序：只改变了上述实现的形式for ---> while
 * 但是时间提升的超级大！
 */

function newInsertSort(arr) {
  console.time("newInsertSort");
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  console.timeEnd("newInsertSort");
  return arr;
}

result = newInsertSort(dataArr);

console.log("newInsertSort: ", result);

/**
 * 改进版插入排序：插入排序过程中有查找的过程，而且所需要查找的部分是有序的，
 * 那么可以使用二分法来查找啊
 */

function insertSort2(arr) {
  console.time("insertSort2");
  for (let i = 1; i < arr.length; i++) {
    // 得到排好序的数组
    let low = 0;
    let high = i - 1;
    let mid = 0;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (arr[mid] > arr[i]) {
        high = mid - 1;
      } else if (arr[mid] < arr[i]) {
        low = mid + 1;
      } else {
        break;
      }
    }
    for (let j = mid + 1; j < i; j++) {
      arr[j + 1] = arr[j];
    }
    arr[mid + 1] = arr[i];
  }
  console.timeEnd("insertSort2");
  return arr;
}

result = insertSort2(dataArr);

console.log("insertSort2: ", result);

/**
 * 改进版插入排序：只是对上面while和for循环的改写
 */

function newInsertSort2(arr) {
  console.time("newInsertSort2");
  for (let i = 1; i < arr.length; i++) {
    // 得到排好序的数组
    let low = 0;
    let high = i - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] > arr[i]) {
        high = mid - 1;
      } else if (arr[mid] < arr[i]) {
        low = mid + 1;
      }
    }
    for (let j = i - 1; j >= low; j--) {
      arr[j + 1] = arr[j];
    }
    arr[low] = arr[i];
  }
  console.timeEnd("newInsertSort2");
  return arr;
}

result = newInsertSort2(dataArr)

console.log('newInsertSort2: ', result)