// 先执行同步， 再执行异步
// 异步，先微队列，再宏队列
// macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
// micro-task(微任务)：Promise，process.nextTick