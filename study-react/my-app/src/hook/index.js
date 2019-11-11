import React, {useState, useEffect} from 'react';

/**
 * hook:  是一些让你能够在函数组件中使用state和生命周期的函数
 *  hook的使用规则：
 *    1. 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
 *    2. 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用
 *  自定义hook：在组件之间重用一些状态逻辑
 *  其他hook：useContext，useReducer
 */

function HookExample(props) {

  /**
   * useState(value)：value是state的初始值，返回一个数组包含state以及setState
   * 更新 state 变量总是替换它而不是合并它。
   */
  const [count, setCount] = useState(0)

  /**
   *  EffectHook：副作用钩子，可以把 useEffect Hook 看做 
   *  componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
   *  第一次渲染之后和每次更新之后都会执行useEffect
   *  传递给 useEffect 的函数在每次渲染中都会有所不同，每次我们重新渲染，都会生成新的 effect，替换掉之前的
   *  大多数情况下，effect 不需要同步地执行
   *  当EffectHook返回一个函数时，就相当于在componentWillUnmount时执行
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


export default HookExample;