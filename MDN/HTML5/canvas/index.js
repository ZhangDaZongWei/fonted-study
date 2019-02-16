/*
绘制矩形,<canvas> 只支持一种原生的图形绘制：矩形，其他图形必须要路径(path)
canvas提供了三种方法绘制矩形：
  1、fillRect(x, y, width, height)：绘制一个填充的矩形。
  2、strokeRect(x, y, width, height)：绘制一个矩形的边框。
  3、clearRect(x, y, widh, height)：清除指定的矩形区域，然后这块区域会变的完全透明。
*/

// 得到canvas元素
let canvas = document.getElementById('canvas')

function draw1() {
  //  检验支持性
  if(!canvas.getContext) return
  //  获得 2d 上下文对象
  let ctx = canvas.getContext('2d')
  ctx.fillRect(10,10,100,50)
  ctx.strokeRect(20,20,100,50)
  ctx.clearRect(10,10,100,50)
}

// draw1()

/*
绘制路径，图形的基本元素是路径
  1、路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。
  2、一个路径，甚至一个子路径，都是闭合的。
  3、绘制图形的基本步骤：
    # 创建路径起始点
    # 调用绘制方法去绘制出路径
    # 把路径封闭
    # 一旦路径生成，通过描边或填充路径区域来渲染图形。
  4、所要使用的方法：
    # beginPath(),新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径
    # moveTo(x, y),把画笔移动到指定的坐标(x, y)。相当于设置路径的起始点坐标。
    # ctx.lineTo();  //绘制一条从当前位置到指定坐标的直线.
    # closePath(),闭合路径之后，图形绘制命令又重新指向到上下文中
    # stroke(),通过线条来绘制图形轮廓
    # fill(),通过填充路径的内容区域生成实心的图形
*/

function draw2() {
  if(!canvas.getContext) return
  // 绘制线段
  let ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(10,10)
  ctx.lineTo(50,50)
  ctx.closePath()
  ctx.stroke()

  // 绘制三角形
  
}

draw2()