/**
 * 打包技术的好处很明显，就是将分散的文件合并到一个文件中，并且还可以编译
 * 但是呢，一旦打的包大了之后，一次性加载的话就会性能受到影响
 * 所以啊，就需要 代码分割 技术了，好在webpack和browserify都支持
 * 不过，今天讲的是React提供的一些 代码分割 方式，我估计内部还是借助webpack实现的
 */

import React, {Suspense} from 'react';
//  动态import()语法，注意这种现在只是一个提案，不过肯定会被支持的
import("./math").then(math => {
  console.log(math.add(16, 26));
});

// 第二种就是 React.lazy 懒加载，动态地引入组件
// 可以看出来React.lazy接受一个函数，这个函数需要调用import()
// 必须返回一个Promise，就跟上面第一种方法一样
// 需要注意的是，引入的组件一定要是 default export 的React组件，你也可以使用
// 命名导出，但是要有一个中间模块，将其转换为默认导出
// 并且一定要配合Suspense使用，不然会报错的
// 另外，加载模块可能会失败，这时需要使用 异常捕获边界 技术来处理，之后再说
const OtherComponent = React.lazy(() => import('./otherComponent'))

// 那么代码该如何分割才算得上完美呢？
// 基于路由的加载是很合适的，一般在页面之间还有加载切换过程呢

export default function MyComponent() {
  return (
    <div>
      <h1>代码分割</h1>
      {/* 
        使用加载指示器组件Suspense优雅降级，就是说父组件渲染完了之后，
        当导入的子组件还没有加载完成，这时用户体验就很不好，
        所以使用Suspense来优雅降级，fallback属性接收JSX，
        Suspense组件可以置于懒加载组件之上的任何位置，意味着可以包裹多个
        懒加载组件
      */}
      <Suspense fallback={<div>loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  )
}