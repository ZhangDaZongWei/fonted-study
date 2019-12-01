#### css布局，左侧固定，右侧自适应有哪几种方法？

1. `float` + `margin`
2. `float` + `margin`(fix)
3. `float` + `overflow` (触发BFC) *不太明白*
4. 绝对定位
5. `table`布局
6. `flex`布局
7. `grid`布局

#### 对于三行的表格，对第一行进行删除，有哪几种方法？如何获得表格中的第一行？

1. 使用`document.querySelector`等方法获取表格第一行的父节点`parentNode`，然后使用`parentNode.firstElementChild`获取父节点的第一个子节点`firstNode`，最后使用`parentNode.removeChild(firstNode)`删除第一个子节点

   ```js
   // 代码如下
   let parentNode = document.querySelector('#id/.class')
   let firstNode = parentNode.firstElementChild
   parentNode.removeChild(firstNode)
   ```

2. 直接获取表格第一行`firstColumnNode`，然后使用`remove()`方法移除即可，或者再通过`parentElement`获取其父节点`parentNode`，然后使用`removeChild()`移除

   ```js
   // 代码如下
   let firstColumnNode = document.querySelector('#id/.class')
   // 第一种方式
   firstColumnNode.remove()
   // 第二种方式
   let parentNode = firstColumnNode.parentElement
   parentNode.removeChild(firstColumnNode)
   ```

3. 使用`css`的方式，首先获取表格第一行，然后使用`display: none`或者`visibility: hidden`(这个方式不能有边框)

