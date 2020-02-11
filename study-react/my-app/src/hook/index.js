import React, {useState, useEffect} from 'react';

/**
 * hook:  是一些让你能够在函数组件中使用state和生命周期的函数
 *  hook的使用规则：
 *    1. 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
 *    2. 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用
 *  自定义hook：在组件之间重用一些状态逻辑，每次调用都会返回一个完全独立的state
 *  其他hook：useContext，useReducer
 */

function HookExample(props) {

  /**
   * 1. useState(value)：value是state的初始值，只会在函数组件第一次渲染时被用到，
   * 返回一个数组包含state以及setState
   * 2. 另外state也是在函数组件首次渲染时被创建
   * 3. 更新 state 变量总是替换它而不是合并它。意思是说每次设置state都是一个新对象
   * 而不是更改老对象
   */
  const [count, setCount] = useState(0)

  /**
   *  1. EffectHook：副作用钩子，可以把 useEffect Hook 看做 
   *  componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
   *  2. 第一次渲染之后和每次更新之后，其实就是在每次render之后，都会执行useEffect
   *  3. 传递给 useEffect 的函数在每次渲染中都会有所不同，每次我们重新渲染，都会生成新的 effect，替换掉之前的
   *  4. effect 不会阻塞浏览器UI渲染，会在UI渲染后执行
   *  5. 当EffectHook返回一个函数时，就相当于在componentWillUnmount时执行，而且每次都会执行
   *  6. 可以传入第二个参数，类型是数组。当数组中某一个值有更新时，才执行effect。当传入一个空数组时，effect只会执行一次，
   *     内部的state和props都一直是初始值
   */

  useEffect(() => {
    document.title = count
  })

  return (
    <div>
      <button onClick={() => (setCount(count-1))}>Minus</button>
      <span> {count} </span>
      <button onClick={() => (setCount(count+1))}>ADD</button>
    </div>
  )
}

/**
 * 注意事项：
 * 1. 调用Hook时只能在最顶层调用，因为区分各个不同的state和effect，就是依靠调用顺序的
 */

export default HookExample;