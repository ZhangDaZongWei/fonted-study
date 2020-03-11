/**
 * react-redux Hook
 * 从此摆脱了使用connect连接UI组件和container容器组件
 * 1. useSelector(selector: Function,equalityFn?: Function)
 *    - 使用selector可以从redux store中获取数据
 *    - selector应该是一个纯函数，因为它潜在性地会在任意时刻执行多次
 *    - store中的state是selector唯一的参数，它会在函数组件被渲染时调用，
 *      而且还订阅了store，所以当每次dispatch action时也会被调用 
 *    - 看起来和mapStateToProps很像，但是还是有不同点：
 *      > selector可以返回任何值，不一定是对象，而且这个返回值即是useSelector()的返回值
 *      > 当dispatch action后useSelector会将之前的返回值和现在的返回值进行浅比较，虽然是
 *        浅比较，但是还是使用严格相等===，如果相同就不更新UI，如果不相同就进行强制更新UI
 *      > selector无法访问ownProps，但是可以通过闭包或者 a curried selector取得
 *      > 当使用memoizing selector时需格外小心
 *    - 如果在一个函数组件中调用了多次useSelector，那么就会生成多个独立的对store的订阅，但是
 *      因为react的批量更新行为，当dispatch action时，还是会返回一个新值
 *    - 不要用useSelector()中selector以整个对象的形式返回store state，因为每一次返回都是一个
 *      新对象，对于useSelector的浅比较来说都会重新触发渲染，造成性能浪费，所以要使用多个useSelector
 *      去分别获取store中的state，或者使用第二个参数
 * 2. useDispatch()
 *    - 和dispatch一样，但是当传入到子组件时，要使用callback以避免不必要的渲染
 * 3. useStore()
 *    - 获取store，但是并不会订阅store的变化，所以当dispatch action时，不会自动更新
 * 4. 一些建议或注意的地方
 *    - 最好不要在useSelect中依赖props
 *    - 组件最好使用React.memo去优化性能
 * 5. 一些不常用的API
 *    - useAction()
 *    - useShallowEqualSelector()
 */