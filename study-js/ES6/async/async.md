### 解决异步的方式发展

> 对于解决异步的诸多方式，只是在处理异步问题上更加直观，并没有改变js是**单线程语言**，以及**event loop**的运行机制

#### promise

> 这里不会具体讲`promise`的用法，只记录自己感觉重要的地方

1. 注意事项

   - 使用`promise`封装异步函数的时候，`resolve`和`reject`是在回调函数里面执行的。
   - 当一个`promise`对象返回一个`promise`对象时，后面的`then`会作为这个返回的`promise`对象的第一个`then`处理。看代码：
   
         promise.then(res => {
           console.log(res)
           return new Promise((resolve,reject) => {...})
         }).then(res => {
           // 这个res就是上一个then中返回的promise对象的resolve的值
           // ...
         })

2. 重要的API

   - `Promise.all`：将所有指定的`promise`都执行完，再进行下一步操作。看代码：

          // promise1,promise2是传入的promise对象，是以数组的形式
          Promise.all([promise1,promise2]).then(res => {
            // res是一个数组，按顺序包含传入promise对象的resolve值
            console.log(res[0])
            console.log(res[1])
          })

    - `Promise.race`：对于指定的`promise`对象，只要其中有一个完成了，就执行下一步。看代码：

          Promise.race([promise3,promise4]).then(res => {
            // res是最先完成的promise对象的resolve值
            console.log(res)
          })

    - `Promise.resolve`：将`thenable`对象转换为`Promise`对象，看代码：

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

3. 所遵循的Promise/A+规范

   > 这是由 CommonJS 组织制定的异步模式编程规范，promise功能的实现就是根据它来实现的

   - 一个`promise`对象只有三种状态：**等待pending**、**fulfilled已完成**、**已失败rejected**。状态的转换只能是： pending ---> fulfilled / pending ---> rejected

   - `then`必须返回一个`promise`对象(这样才能实现链式调用啊！)，接受**两个参数**，第一个是成功时的回调，第二个是失败时的回调(对于失败的回调不常用，一般用catch代替)
