import React, { Component } from 'react';
import { Route, Link, NavLink, Redirect } from 'react-router-dom';
import Content from './content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        {/* <Link to='/content'>内容</Link> */}
        {/* 与Link的不同点在于当match到pathname时，会处于active */}
        <NavLink to='/content'>内容</NavLink>
        <Route 
          path='/content' 
          // 传递参数，但是并没有卸载/重载组件
          render={(props = this.props) => <Content {...props} extra={'component content...'} />} />
      </div>
     );
  }
}
 
export default App;