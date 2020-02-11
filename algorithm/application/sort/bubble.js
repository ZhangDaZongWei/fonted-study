/**
 * 冒泡排序
 */

const dataArr = [5, 3, 10, 2, 20, 18, 30, 35, 15, 16, 50, 40];

function bubbleSort(arr) {
  console.time("bubbleSort");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.timeEnd("bubbleSort");
  return arr;
}

let result = bubbleSort(dataArr);

console.log("bubble sort: ", result);

/**
 * 改进版冒泡排序：用一个变量记录上次发生交换的位置pos，下一次只要遍历到pos就行了
 * 可能感觉第一种也是同样的思路啊，但是当后面的数是有序时，情况就不一样了
 */

function bubbleSort2(arr) {
  console.time("bubbleSort2");
  let i = arr.length - 1;
  while (i) {
    // 将pos置0，意味着当未发生交换时可以退出while
    let pos = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 若发生交换则记录位置
        pos = j;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    i = pos;
  }
  console.timeEnd("bubbleSort2");
  return arr;
}

result = bubbleSort2(dataArr);

console.log("bubbleSort2：", result);

/**
 * 改进版冒泡排序：一趟排序，同时找出最小和最大值
 */

function bubbleSort3(arr) {
  console.time("bubbleSort3");
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    // 正向找出最大值
    for (let j = low; j < high; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    high--;
    // 反向找出最小值
    for (let i = high; i > low; i--) {
      if (arr[i] < arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
    low++;
  }
  console.timeEnd("bubbleSort3");
  return arr;
}

result = bubbleSort3(dataArr);

console.log("bubbleSort3: ", result);

/**
 * 改进版冒泡排序：第三种方式并没有第二种好，那么可以结合一下第二种和第三种
 */

function bubbleSort4(arr) {
  console.time("bubbleSort4");
  let low = 0;
  let high = arr.length - 1;
  while (low < high && low && high) {
    let lowPos = 0;
    let highPos = 0;
    // 正向找出最大值
    for (let j = low; j < high; j++) {
      if (arr[j] > arr[j + 1]) {
        highPos = j;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    high = highPos;
    // 反向找出最小值
    for (let i = high; i > low; i--) {
      if (arr[i] < arr[i - 1]) {
        lowPos = i;
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
    low = lowPos;
  }
  console.timeEnd("bubbleSort4");
  return arr;
}

result = bubbleSort4(dataArr);

console.log("bubbleSort4: ", result);
