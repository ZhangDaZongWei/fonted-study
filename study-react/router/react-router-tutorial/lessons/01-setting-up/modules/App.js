import React from 'react';
import { IndexLink } from 'react-router';
import NavLink from './NavLink';
import Home from './home';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Hello, React Router!</h1>
        <nav>
          {/* inline style */}
          {/* <li><Link to='/repos' activeStyle={{color: 'red'}}>Repos</Link></li>
          <li><Link to='/about' activeStyle={{color: 'hotpink'}}>About</Link></li> */}
          {/* stylesheet */}
          {/* <li><Link to='/repos' activeClassName='active1'>Repos</Link></li>
          <li><Link to='/about' activeClassName='active2'>About</Link></li> */}
          {/* 使用link封装组件 */}
          {/* 以下这种形式，Home链接一直处于激活状态 */}
          {/* <li><NavLink to='/'>Home</NavLink></li> */}
          {/* 以下这种方式，Home链接只在激活时有效 */}
          {/* <li><IndexLink to='/' activeClassName='active2'>Home</IndexLink></li> */}
          {/* 和上一种一样，不过加了一个onlyActiveOnIndex */}
          <li><NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
        </nav>
        {/* 嵌套路由的相关组件的显示使用this.props.children */}
        {/* 感觉Home组件就是将APP组件的内容给单独抽出来，这是第一种方式 */}
        {/* {this.props.children || <Home />} */}
        {this.props.children}
      </div>
    )
  }
})
