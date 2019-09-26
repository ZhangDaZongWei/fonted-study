import React from 'react';
import { browserHistory } from 'react-router';
import NavLink from './NavLink';

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  // 编程式路由
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    // 第一种使用browserHistory.push
    browserHistory.push(path)
    // 第二种方式使用router context
    // this.context.router.push(path)
  },

  render() {
    return <div>
      <h2>Repos</h2>
      <nav>
        <li>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="userName"/> / {' '}
            <input type="text" placeholder="repo"/>{' '}
            <button type="submit">Go</button>
          </form>
        </li>
        <li><NavLink to='/repos/reactjs/react-router'>React Router</NavLink></li>
        <li><NavLink to='/repos/facebook/react'>React</NavLink></li>
      </nav>
      {this.props.children}
    </div>
  }
})