import React from 'react'
import NavLink from './NavLink'


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
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
        </nav>
        {/* 嵌套路由 */}
        {this.props.children}
      </div>
    )
  }
})
