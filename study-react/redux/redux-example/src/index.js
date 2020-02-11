import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import App from './App';
import App from './advance/App';
// import App from './async-flow/App';
import store from './advance/store/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    {/* redux搭配路由，其实就是使用路由来操作数据 */}
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
