### JS中Number所用标准

> 参考链接：

  1. [IEEE 754](https://www.cxymsg.com/guide/jsBasic.html#_0-1-0-2%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%AD%89%E4%BA%8E0-3%EF%BC%9F) 
  2. [IEEE 754](https://juejin.im/post/5b90e00e6fb9a05cf9080dff#heading-0)

#### 补充

1. 依据**IEEE 754**标准，单精度浮点数使用4个字节，即32位来存储。1位符号位，8位指数偏移值，23位有效数字部分；双精度浮点数使用8个字节，即64位来存储。
2. 单精度的指数固定偏移值127，双精度的指数固定偏移值是1023，这是移位运算得出来的。