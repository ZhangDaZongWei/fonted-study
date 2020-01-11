/**
 * 实现一个简易的redux
 */

// 引入reducer
const { countPlan, infoPlan } = require("./reducer/reducer");
// 引入middleware
const { printLogs, printError, printTime } = require("./middleware/middleware");

// redux是一个状态管理器，而状态指的就是数据

// 实现多个属性通用

const createStore = (plan, hasMiddlewares) => {
  // 判断有没有中间件，有则返回新的store
  if (hasMiddlewares) {
    return hasMiddlewares(createStore)(plan);
  }

  let state = {};
  let handlers = [];

  function listener(handler) {
    handlers.push(handler);
    // 返回一个函数用于退订
    return function removeListener() {
      let index = handlers.findIndex(item => item === handler);
      handlers.splice(index, 1);
    }
  }

  // emit就是dispatch
  function emit(action) {
    // plan就是reducer
    state = plan(state, action);
    if (handlers.length) {
      handlers.forEach(item => item());
    }
  }

  function getState() {
    return state;
  }

  // emit一下获得state初始值
  emit({
    type: Symbol()
  });

  return {
    listener,
    emit,
    getState
  };
};

// 写一个combineReducers
function combineReducers(args) {
  let keys = Object.keys(args);
  return function(state, action) {
    let reducerObj = keys.reduce((acc, curr) => {
      return {
        ...acc,
        [curr]: args[curr](state[curr], action)
      };
    }, {});
    return {
      ...state,
      ...reducerObj
    };
  };
}

// 这样写确实很麻烦，那就利用扩展createStore，
// 将它们封装一下，只要传入中间件就行了
function applyMiddleware(...middlewares) {
  return function(oldCreateStore) {
    return function(reducer) {
      const store = oldCreateStore(reducer);  
      let emit = store.emit;
      // 传入store
      // const chain = middlewares.map(middleware => middleware(store));
      // 按照最小开放原则，只对外暴露state
      const chain = middlewares.map(middleware => middleware(store.getState()));
      chain.forEach(item => (emit = item(emit)));
      store.emit = emit;
      return store;
    };
  };
}

const plan = combineReducers({
  count: countPlan,
  info: infoPlan
});

const store = createStore(
  plan,
  applyMiddleware(printLogs, printTime, printError)
);

function f1() {
  let state = store.getState();
  // 可以做一些视图更新
  console.log("store state count: ", state.count);
}

function f2() {
  let state = store.getState();
  // 可以做一些视图更新
  // console.log(state.info.name + ' love ' + state.info.love)
}

let removeF1 = store.listener(f1);

store.listener(f2);

removeF1()

store.emit({
  type: "increment"
});

// store.emit({
//   type: 'name',
//   value: '张宗伟'
// })

// store.emit({
//   type: 'love',
//   value: '段书晴'
// })
