import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import App from './modules2/App';
import About from './modules2/About';
import Repos from './modules2/Repos';
import Repo from './modules2/Repo';
import Home from './modules2/home';

render((
  // 使用browserHistory模式
  // 但是有一个小坑！当你点击一个链接后，刷新页面，会出现 Cannot GET /about
  // 因为当使用H5模式时，你刷新url是要向后台发请求的，但是呢，后台又没有配置
  // 所以啊，后台要配置，DevServer使用这种配置 --history-api-fallback
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/repos' component={Repos}>
        <Route path='/repos/:userName/:repoName' component={Repo}></Route>
      </Route>
      <Route path='/about' component={About}></Route>
    </Route> 
  </Router>), document.getElementById('app'))
  