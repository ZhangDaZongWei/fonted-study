import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';
// import Home from 'pages/Home/Home';
// import Blog from 'pages/Blog/Blog';
// import Contract from 'pages/Contract/Contract';
import Loading from 'components/Loading';
import './app.css';
import reactImg from 'assets/images/react-redux-hook.png';

const Home = Loadable({
  loader: () => import('pages/Home/Home'),
  loading: Loading,
  timeout: 10000
})

const Blog = Loadable({
  loader: () => import('pages/Blog/Blog'),
  loading: Loading,
  timeout: 10000
})

const Contract = Loadable({
  loader: () => import('pages/Contract/Contract'),
  loading: Loading,
  timeout: 10000
})

class App extends Component {
  render() {
    return (
      <div>
        <p className='title'>Hello React Fifth Update ！</p>
        <img className='image' src={reactImg} />
        <NavLink to='/' activeStyle={{
          fontWeight: 'bold'
        }}>首页</NavLink>{" "}
        <NavLink to='/blog' activeStyle={{
          fontWeight: 'bold'
        }}>博客</NavLink>{" "}
        <NavLink to='/contract' activeStyle={{
          fontWeight: 'bold'
        }}>联系方式</NavLink>
        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/contract' component={Contract} />
      </div>
    )
  }
}

export default App