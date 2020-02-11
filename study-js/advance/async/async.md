### 解决异步的方式发展

> 对于解决异步的诸多方式，只是在处理异步问题上更加直观，并没有改变js是**单线程语言**，以及**event loop**的运行机制

#### promise

> 这里不会具体讲`promise`的用法，只记录自己感觉重要的地方

1. 注意事项

   - 使用`promise`封装异步函数的时候，`resolve`和`reject`是在回调函数里面执行的。
   - 当一个`promise`对象返回一个`promise`对象时，后面的`then`会作为这个返回的`promise`对象的第一个`then`处理。看代码：
   
     ```js
     promise.then(res => {
       console.log(res)
       return new Promise((resolve,reject) => {...})
     }).then(res => {
      // 这个res就是上一个then中返回的promise对象的resolve的值
      // ...
     })
     ```

2. 重要的API

   - `Promise.all`：将所有指定的`promise`都执行完，再进行下一步操作。看代码：

      ```js
      // promise1,promise2是传入的promise对象，是以数组的形式
      Promise.all([promise1,promise2]).then(res => {
        // res是一个数组，按顺序包含传入promise对象的resolve值
        console.log(res[0])
        console.log(res[1])
      })
      ```

    - `Promise.race`：对于指定的`promise`对象，只要其中有一个完成了，就执行下一步。看代码：

      ```js
      Promise.race([promise3,promise4])
      .then(res => {
        // res是最先完成的promise对象的resolve值
        console.log(res)
      })
      ```

    - `Promise.resolve`：将`thenable`对象转换为`Promise`对象，看代码：

      ```js
      // 什么是 thenable 对象呢？
      const thenable = {
      // 就是拥有 then 属性，且属性值是如下格式的函数的对象
        then: (resolve,reject) => {
          if (success) {
            resolve(...)  
          } else {
            reject(...)
          }
        }
      }

      // 变为promise对象
      let thenPromise = Promise.resolve(thenable)
      thenPromise.then(res => {...})
      ```

3. 所遵循的Promise/A+规范

   > 这是由 CommonJS 组织制定的异步模式编程规范，promise功能的实现就是根据它来实现的

   - 一个`promise`对象只有三种状态：**等待pending**、**fulfilled已完成**、**已失败rejected**。状态的转换只能是： pending ---> fulfilled / pending ---> rejected

   - `then`必须返回一个`promise`对象(这样才能实现链式调用啊！)，接受**两个参数**，第一个是成功时的回调，第二个是失败时的回调(对于失败的回调不常用，一般用catch代替)


#### Generator

> 其实Generator并不是用来处理异步问题的，只不过使其与异步产生关联而已

1. Generator简介

   - `Generator`函数执行时，并不是立即执行函数内部的代码，而是返回一个对象(`iterator`对象)
   - 执行过程是：调用`next`方法，会一直执行下去，直到遇到`yield`或者`return`，然后执行`yield`或者`return`后面的表达式，并且都有返回值：对于遇到`yield`是`{value: ..., done: false}`，对于`return`是`{value: ..., done: true}`

2. Iterator遍历器对象

   - `Iterator`对象是一个指针对象，实现类似于单项链表的数据结构，通过`next()`将指针指向下一个节点
   - 具有`[Symbol.iterator]`属性的对象可以生成`iterator`对象(见如下代码)，从而可以使用`for...of`或者`next()`方法取值。原生具有`[Symbol.iterator]`属性的数据结构有：`Array`、`like-Array`(类数组对象)、`Set`、`Map`

     ```js
     let arr = [1,2,3]
     // 生成iterator对象
     // 可以看出对象[Symbol.iterator]属性返回的是一个函数
     let iterArr = arr[Symbol.iterator]()
     ```

3. Generator注意事项

   - `yield*`后可跟一个Generator对象，并且会把它其中的`yield`按照规则来一步一步执行。当有多个`Generator`串联使用的时候，可以使用`yield*`

4. Thunk函数

   - 只有一个参数的函数，而且这个参数是一个`callback`函数，这样的函数就是**Thunk函数**。看代码：

   ```js
   // 这是一个读取文件的函数，有三个参数
   function readFile(filename,'utf-8',(err,data) => {...})
   // Thunk化
   const thunk = function(filename,codeType) {
     return function(callback) {
       readFile(path,codeType,callback)
     }
   }
   // readFileThunk就是一个Thunk函数
   const readFileThunk = thunk('test.json','utf-8')
   ```

5. 结合Thunk函数和Generator函数

   > 上面说过Generator函数本身与异步没啥关系，但是要是将Thunk函数与Generator结合起来，就可以用来处理异步了，传入Thunk函数的callback，正好可以作为异步函数的回调

  1. 手动执行，看代码：

     ```js
     function* G() {
       const res = yield thunk('test.json','utf-8')
       console.log('res: ',res)
     }

     const g = G()
     g.next().value((err,data) => {
       g.next(data)
     })
     ```

  2. 自动执行，看代码：

     ```js
     // 上面只是进行一个thunk函数的操作，若遇到多个，那又要嵌套着写，很麻烦
     // 于是自执行函数出现了
     function autoGenerator(G) {
       // 生成iterator对象
       const g = G()
       function next(err,data) {
         const res = g.next(data)
         if (res.done) {
           // 如果执行完就return
           return
         }
         res.value(next)
       }
       // 先自执行一次，启动iterator
       next()
     }
     ```

#### async-await

> Generator的**语法糖**，更加易读！

1. `function*` ---> `async function`、`yield` ---> `await`。看代码：

   ```js
   async function asyncFun() {
     const res1 = await new Promise(...)
     const res2 = await new Promise(...)

     console.log('res1: ',res1)
     console.log('res2: ',res2)

     return 'done'
   }
   ```

2. `async`函数返回`promise`，`then`后取到的值就是`done`