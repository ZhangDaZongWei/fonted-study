### Event Loop补充

> js的执行和运行是不同的，执行要分环境，如浏览器环境，node环境等。运行就是js引擎对js代码的解析。node环境中的Event Loop见[node event loop](https://mp.weixin.qq.com/s/cOMlH-z5noHrg6Upg6zyNw)

#### 宏任务(Macro Task)和微任务(MicroTask)

1. 宏任务还包括：`I/O`、`UI Rendering`

2. 微任务包括：`Process.nextTick`、`Promise.then catch finally`(注意我不是说`Promise`)、`MutationObserver`。除了微任务就是宏任务了

3. 在一次event loop中，**微任务的执行优先级比宏任务的高**

