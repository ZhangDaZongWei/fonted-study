#### `await`为什么会出现，与`promise`有哪些不同？

1. `await`是搭配`async`使用的，使异步代码看起来像同步代码，这个方式也可以用`Generator`函数实现，但是需要另写执行器或者使用类似`co`的库，`async-await`内置了执行器，使用更方便。
2. `async-await`是基于`promise`实现的，返回值就是`promise`。`async-await`会阻塞执行，`async-await`可以使用`try-catch`捕获错误，`promise`不行。


#### 写一个扁平化数组的方法(就是将嵌套多层的数组转换为只有一层的数组)

1. 递归

  ```js
  // 递归
  let arr = [1,'2','3',[4,5,6,[7,8,9]]]

  // 第一种方式
  let flatedArr = []

  function flatArr(arr) {
    for (let i of arr) {
      if (!Array.isArray(i)) {
        flatedArr.push(i)
      } else {
        flatArr(i)
      }
    }
  }

  // 第二种方式

  function flatArr2(arr) {
    let result = []

    for (let i of arr) {
      if (Array.isArray(i)) {
        result = result.concat(flatArr2(i))
      } else {
        result.push(i)
      }
    }

    return result
  }
  ```
2. `toString()`方法

    ```js
    // toString()
    function flatArr3(arr) {
      let str = arr.toString()
      console.log('str: ',str)
      // 通过split后，返回数组中的元素都是字符串，所以要用map转一次
      let result = str.split(',').map(item => Number(item))
      console.log('result: ', result)
    }
    ```

3. `reduce()`方法

    ```js
    // reduce()

    function flatArr4(arr) {
      // 包含递归，一定要return出去
      return result = arr.reduce((acc,curr) => 
        acc.concat(Array.isArray(curr) ? flatArr4(curr) : curr)
      ,[])
    }
    ```

4.  扩展运算符

    ```js
    // 扩展运算符

    function flatArr5(arr) {
          
      while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
      }

      console.log('result: ', arr)
    }
    ```

#### 判断数组类型的方法有哪些？

1. 使用`Array.isArray(value)`，最有效的方式
2. 使用`instanceof`，但是不太准确

   > 原因是：假定在一个全局环境中时，不存在任何问题，但是当网页中包含多个框架(`iframe`)时，就存在不同的执行环境(执行上下文)，从而存在多个不同的`Array`构造函数。

3. 使用`constructor`，但是不太准确

   ```js
   // constructor可以修改
   let str = 'zhangzongwei'
   str.constructor = Array
   str.constructor == Array // true, 但是str明显不是Array
   ```

4. `Object.prototype.toString()`

   ```js
   let arr = [1,2,3]
   let type = Object.prototype.toString.call(arr) // [object Array]
   // 这里注意 Array.prototype.toString()方法覆盖了上述方法
   ```