### css

1. 盒模型
> 标准盒模型：等同于设置{box-sizing: content-box;}，盒子总宽度 = margin-left + border-left + padding-left + width + padding-right +  border-right + margin-right。其中，width等于content area的宽度，即内容的宽度。

> IE盒模型：等同于设置{box-sizing: border-box;}，盒子总宽度 = margin-left + width + margin-right。其中，width = border-left + padding-left + 内容的宽度 + padding-right + border-right。


2. letter-spacing属性可继承，无单位时无效，值可以为负数，设置字符间的间距(没有水平或者垂直的概念)
