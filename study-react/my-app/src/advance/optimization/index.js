// 性能优化

// 生命周期方法 shouldComponentUpdate(nextProps, nextState)，该方法会在重新渲染被触发，
// 默认会返回true，也就是让React执行更新
// 可以通过返回false来阻止之后的渲染，即render调用及以后的操作

// 也可以直接使用 React.PureComponent来代替shouldComponentUpdate
// 它用当前与之前 props 和 state 的浅比较覆写了 shouldComponentUpdate() 的实现。

// 是否重新渲染取决与两个因素：shouldComponentUpdate()的返回值以及之前和之后的VDOM是否一样

