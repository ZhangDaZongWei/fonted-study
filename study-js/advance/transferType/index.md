### JS类型转换

> 参考链接：  
    1. [JS类型转换](https://www.cxymsg.com/guide/jsBasic.html#%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%E7%9A%84%E8%A7%84%E5%88%99%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F)
    2. [JS类型转换](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc715f6fb9a049c15ea4e0)

#### 补充

1. 对于在加法运算时，注意若其中一项是字符串则字符串的优先级高；如果是引用类型转为基本类型，则结果只能是字符串，所以与引用类型做加法要么是字符串要么报错。若两者都不是引用类型且
也不是字符串或者数字，那么转换时数字的优先级高。
2. 对于比较运算符，还是数字的优先级高。这里是指如果要比较，就必须以数字的形式去比较，所以字符串会以其Unicode码来比较，引用类型先转为字符串，在按照字符串规则比较。