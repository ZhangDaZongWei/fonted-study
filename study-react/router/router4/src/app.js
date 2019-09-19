import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './pages/main';
import List from './pages/list';
import Home from './pages/home';

// 动态路由参数步骤：设置规则 传递值 接收值 显示页面
// 重定向和链接有区别，不可以前进或者回退
// 嵌套路由
// 后台动态获取路由

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }
  render() { 
    return ( 
      <div>
        <h1>React Router 4</h1>
        <Router>
          <nav>
            <li><Link to='/'>首页</Link></li>
            {/* 传值 */}
            <li><Link to='/list/123'>列表页</Link></li>
          </nav>
          {/* exact表示精确匹配，顾名思义了 */}
          <Route path='/' exact component={Main} />
          {/* 设置id规则 */}
          <Route path='/list/:id' component={List} />
          <Route path='/home' component={Home} />
        </Router>
      </div>
     );
  }
}
 
export default AppRouter;