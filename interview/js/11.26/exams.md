1. `await`为什么会出现，与`promise`有哪些不同？

     - `await`是搭配`async`使用的，使异步代码看起来像同步代码，这个方式也可以用`Generator`函数实现，但是需要另写执行器或者使用类似`co`的库，`async-await`内置了执行器，使用更方便。
     - `async-await`是基于`promise`实现的，返回值就是`promise`。`async-await`会阻塞执行，`async-await`可以使用`try-catch`捕获错误，`promise`不行。


2. 写一个扁平化数组的方法(就是将嵌套多层的数组转换为只有一层的数组)

     - 递归

          ```js
          // 递归
          let arr = [1,2,3,[4,5,6,[7,8,9]]]

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
     - toString()方法

3. 判断数组类型的方法有哪些？