/**
 * 项目入口文件
 */
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'pages/App';

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Router>
        {<Component />}
      </Router>
    </AppContainer>,
    document.getElementById("root")
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./pages/App.js',() => {
    const NextRootContainer = require('./pages/App').default;
    render(NextRootContainer);
  })
}
