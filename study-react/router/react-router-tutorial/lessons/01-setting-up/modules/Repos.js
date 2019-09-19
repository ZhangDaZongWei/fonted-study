import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return <div>
      <h2>Repos</h2>
      <nav>
        <li><NavLink to='/repos/reactjs/react-router'>React Router</NavLink></li>
        <li><NavLink to='/repos/facebook/react'>React</NavLink></li>
      </nav>
      {this.props.children}
    </div>
  }
})