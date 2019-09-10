### dom

1. 提高dom元素操作效率
   > 使用事件代理 

   > 插入大量DOM元素时，使用innerHTML替代逐个构建元素

   > 使用DocumentFragment替代多次appendChild操作

**使用addEventListener替代 onxxx(比如onclick) 进行事件绑定并不能减少操作效率**

