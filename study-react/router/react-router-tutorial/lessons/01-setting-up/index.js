import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
render((
  <Router history={hashHistory}>
    {/* nested router */}
    <Route path='/' component={App}>
      <Route path='/repos' component={Repos}>
        {/* more nest */}
        {/* add params url */}
        <Route path='/repos/:userName/:repoName' component={Repo}></Route>
      </Route>
      <Route path='/about' component={About}></Route>
    </Route>
  </Router>), document.getElementById('app'))

/**
 * 1. 可以发现的是，如果使用react-router进行导航，那么就要使用特定的导航组件将页面组件给包裹起来
 * 2. Router是顶级，通过route进行注册，通过Link进行导航
 * 3. nest时，还是利用{this.props.children}，多层nest一样
 * 4. params url 的参数时传进url所在的那个页面组件的
 */
