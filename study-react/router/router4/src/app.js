/**
 * 1. react-router的核心是router组件，在web中就是
 * 用于响应请求的服务器的<BrowersRouter>组件
 * 用于静态文件的<HashRouter>组件
 * 这两个组件会创建一个history对象
 *
 * 2. <Route>和<Switch>组件用于路由匹配
 * 就是通过path属性与当前路径的pathname进行匹配
 * 匹配上就渲染相应的组件，否则就返回null
 * 注意，若没有path属性，则所有都会匹配
 * 
 * path可以传递URL params: /:paramsName，
 * paramsName还可以为正则表达式，形式为：/:paramsName(正则表达式)
 *
 * <Switch>组件用于将<Route>分组，规则是每次都会遍历其中的
 * <Route>，仅渲染符合规则的第一个<Route>
 *
 * <Route>有三个属性用于渲染相应的组件：component、render、children
 * component: 就用于现有的组件，但是不能传递范围内的变量给component
 * render: 比component，实现可以将范围内的变量传递给component
 *
 * 3. <Link>、<NavLink>、<Redirect>用于导航
 * <NavLink>用于当to属性和当前路径相同时，变为活跃的
 * <Redirect>用于重定向，定向的新地址会覆盖history栈中的当前地址
 * 
 * 4. 若不想通过<Route>渲染组件也要使用math、location、history则可使用withRoute
 */

import React, { Component } from "react";
import { Router, Link, Route } from "react-router-dom";
import "./app.css";

const Home = () => {
  return <div>HOME</div>;
};

const About = () => {
  return <div>About</div>;
};

// 这里会接收一个match参数，其实它还是props的属性
const Topics = ({ match }) => {
  return (
    <div>
      <span>
        <Link to='/'>Home</Link>
      </span>
      <span>
        <Link to={`${match.url}/render`}>React Render</Link>
      </span>
      <span>
        <Link to={`${match.url}/components`}>Components</Link>
      </span>
      <span>
        <Link to={`${match.url}/props-vs-state`}>props v state</Link>
      </span>
      <hr />
      <Route exact path={`${match.path}/:matchId`} component={Topic} />
      <Route exact path={match.path} render={() => <h2>please choose a label</h2>} />
    </div>
  );
};

const Topic = (props) => {
  console.log('topic props: ',props)
  console.log('topic match: ',props.match)
  const {match} = props
  return (
  <div>{match.params.matchId}</div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="router">
        <h1>React Router Start !</h1>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/topics">Topics</Link>
        </span>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    );
  }
}

export default App;
