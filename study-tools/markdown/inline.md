<!-- 
  1. 链接，有行内链接和参考链接，需要注意的点：
    1. 不同行链接前后要有空行
    2. 行内链接，方块括号后面紧接着圆括号并插入网址链接，如果需要加上title，则在链接后面用双引号包裹title就好，见下面的例子
    3. 也可以使用相对链接，只要链接的是同一主机资源(这里指的是和当前文件所在同一目录下，而且可以多种文件类型，只要目录里面包含)，见下面的例子
    4. 参考性链接，其实就是先使用后定义，用一个标识先作为占位符，所以讲整个链接分为链接文字，链接标识，链接内容，见下面的例子：
      1. 链接标识，紧跟在链接文字后面，不可以加上一个空格，同样使用[]包裹起来，但是要唯一，这个是肯定的,注意它不区别大小写字母
      2. 链接内容，可以在任何地方去定义，但是最好是在文档的末尾，有几个需要注意的点：
        1. 方括号（前面可以选择性地加上至多三个空格来缩进），里面输入链接文字
        2. 接着一个冒号
        3. 接着一个以上的空格或制表符
        4. 接着链接的网址
        5. 选择性地接着 title 内容，可以用单引号、双引号或是括弧包着，并且单引号和双引号貌似是一模一样的，title也可以放在下一行
        6. 可以使用隐式标识，这是链接文字就代表链接标识，其实这是为懒人准备的，不过文字和标识统一起来也很好
 -->

This is [Baidu](https://www.baidu.com "百度") 

This is [Block](/block.md/ "关于百度")

This is [Index](/index.html/ "index")

### 序号4的例子

This is [许昌][address] where is a great place, I love it [中国][country], I support [HongKong][]

[address]: https://github.com (去往许昌)

[address]: https://github.com "去往许昌"

[address]: https://github.com (去往许昌)

[country]: https://china.com
          '祖国强大'

[HongKong]: https://HongKong.com (香港加油)

<!-- 
  2. 强调，使用*或者_包裹，相当于html中的em标签，若使用两个*和_包裹，那么相当于html中的strong标签，需要注意的点儿：
    1. 以什么符号开始，就要以那个符号结束，见下面的例子
    2. 若符号两边都有空白，会作为普通符号，见下面的例子
    3. 若想使用*和_符号，前面可以加上\，见下面的例子
 -->

I am in *许昌*  

I am in **许昌**  

I am in ** 许昌**

I am in \*信阳\*


<!-- 
  3. 行内代码，使用一个或者多个反引号`包裹起来，需要注意的点：
    1. 代码中可以使用反引号`见下面的例子
    2. 起始和结束端都可以放入一个空白，起始端后面一个，结束端前面一个，这样更美观一些，见下面的例子,
    3. 特殊字符会被转换为实体字符，见下面的例子
 -->

这是一个js变量`` const a = 3` ``

我想要打印出实体字符` &#8212; [<html><html>]`

<!-- 
  4. 图片，在文档中插入一张图片确实有点难，但是markdown实现了！，分为行内式和参考式，注意的点：
    1. 格式为：
      1. 一个惊叹号 !
      2. 接着一个方括号，里面放上图片的替代文字
      3. 接着一个普通括号，里面放上图片的网址(只能本地，而且必须是相对路径)，最后还可以用引号包住并加上选择性的 'title' 文字。
    2. 行内式和参考式都类似链接，见下面的例子
    3. 图片无法指定宽高，若需要此效果，则使用img标签吧，见下面的例子
 -->

![图片](./images/退换货.jpg "这是一张图片")

### 网络图片不显示
![百度图片](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566828774829&di=f901735ea872d92fffcf4d607ebe7ec2&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fc2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg "郑州二七")

### 外部本地绝对路径图片不显示
![本地绝对路径图片](C:/Users/10426/Desktop/project/wine-platform-source/效果图/效果图/退换货.jpg)

### 同一资源下绝对路径图片不显示
![同一资源下绝对路径图片](C:\Users\10426\Desktop\project\studying\fonted-study\study-tools\markdown\images/退换货.jpg)

![参考式图片][picture]

[picture]: ./images/退换货.jpg "参考式图片"


<!-- 
  5. 反斜杠，即\，一般它的作用就是解决你想用的符号恰好是markdown中所用到的
  6. 自动链接，就是提供一个比较简单的方式来书写链接，注意点：
    1. 使用<>包裹起来即可，里面可以是网址，也可以是邮箱地址，见下面的例子
    2. 这种方式可以防止爬虫
    3. 很明显，这种方式的弊端就是不优雅
 -->

<https://www.baidu.com>