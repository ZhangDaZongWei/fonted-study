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
          <li><NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
        </nav>
        {this.props.children}
      </div>
    )
  }
})
