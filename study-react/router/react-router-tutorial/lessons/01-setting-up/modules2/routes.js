// 新建routes.js，以便于客户端和服务端都可以引入
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';
import Home from './home';

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/repos' component={Repos}>
      <Route path='/repos/:userName/:repoName' component={Repo}></Route>
    </Route>
    <Route path='/about' component={About}></Route>
</Route> 
)
