import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * react-redux基本API：
 * 1. 组件可分为：
 *  - UI组件，只负责接收props，然后渲染页面
 *  - container容器组件，负责与redux交互并处理数据逻辑
 * 2. connect(mapStateToProps,mapDispatchToProps)高阶函数，用于使用UI组件生成容器组件
 * 3. mapStateToProps(state,ownProps): 用于将state映射到props上，也可接收自身的props，返回一个对象
 *    此函数订阅了store，每当state更新时，就会重新执行
 * 4. mapDispatchToProps：用于将UI组件的操作映射到dispatch(action)上，可以是一个函数，
 *    即mapDispatchToProps(dispatch,ownProps)，返回一个对象。
 *    也可以是一个对象
 * 5. connect组件后，可以通过访问dispatch和mapStateToProps返回的state
 * 6. <Provider store={store}>，将store的state注入所有组件
 * 7. connect会使用shallow equality==比较mapSate的返回值来决定是否渲染，而且此比较不是比较
 *    mapState返回的整个对象，而是对象中的每一个单独的项
 * 
 * 参考：http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
