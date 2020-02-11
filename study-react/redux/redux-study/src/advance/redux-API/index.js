/**
 * Redux 的API
 * 1. createStore(reducer: Function,[initState]: any,enhancer: Function)
 *    - 返回store
 *    - reducer即是编写的reducer
 *    - initState，可以是任何类型的值，但是如果传入的reducer通过combineReducer()封装，
 *      那么就一定要是对象类型，而且要和combineReducer返回对象的属性名一致
 *    - enhancer，传入store creator，返回强化过的store creator，例如applyMiddleware中间件
 * 2. store
 *    - 就是有几个方法的对象
 *    - getState()返回state
 *    - dispatch(action)触发action，改变state；返回要触发的action
 *    - subscribe(listener: Function)订阅state的变化，返回解绑监听的函数
 *    - replaceReducer(nextReducer: Function)，替换掉reducer
 * 3. combineReducer(Object)
 *    - Object的key就是state的key，值为每个子state对应的reducer函数，返回值是一个函数，
 *      用于返回执行各个reducer后的整体state
 * 4. applyMiddleware(...middlewares: Array)
 *    - 返回一个enhancer
 *    - 当传入storeCreator中时，一定要是enhancer中的第一个
 *    - 传入的middleware格式为：({dispatch,getState}) => next => action => {}
 * 5. bindActionCreators(actionCreator: Function/Object, dispatch: Function)
 *    - 目的是将传入的actionCreator，使用dispatch封装，并返回同名的function/object，
 *      这样将dispatch和actionCreator绑定在一起，直接执行即可，不需要以dispatch(action/actionCreator)的形式
 *    - 当传入的第一个参数是一个对象时，对象的值要为actionCreator
 * 6. compose(...function: Array)
 *    - compose(f1,f2,f3) => f1(f2(f3(...arguments)))
 *    - 用于有多个enhancer时
 */