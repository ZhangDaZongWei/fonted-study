import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import creacteSagaMiddleware  from 'redux-saga';
import reducer from './reducer';
import mySagas from './saga';

const sagaMiddleware = creacteSagaMiddleware()
// 增强函数，链式函数，执行一个函数再执行一个函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
                         compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

// 中间件Middleware redux-thunk / redux-saga
// createStore只接受两个参数
export const store = createStore(
    reducer,
    enhancer
  )

sagaMiddleware.run(mySagas)
