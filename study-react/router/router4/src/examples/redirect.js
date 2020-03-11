import React, { Component, useState } from "react";
import { Router, Link, Route, Redirect, withRouter } from "react-router-dom";

/**
 * 重定向的例子，登录注册很常见
 */

const Home = () => {
  return (
    <div>
      <Logout />
      <ul>
        <li>
          <Link to="/public">Public</Link>
        </li>
        <li>
          <Link to="/protected">Protected</Link>
        </li>
      </ul>
      <hr />
      <Route path="/public" component={Public}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/protected" component={Protected}></Route>
    </div>
  );
};

// 定义一个保存和处理登录状态的对象
const loginLabel = {
  label: false,
  login: function() {
    this.label = true;
  },
  logOut: function() {
    this.label = false;
  }
};

const Public = () => <div>Public Page</div>;

const Protected = ({ location }) => {
  console.log("location: ", location);
  return (
    <div>
      {loginLabel.label ? (
        <span>protected</span>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>
      )}
    </div>
  );
};

const Login = ({ location }) => {
  const [isRedirect, setIsRedirect] = useState(false);

  const { from } = location.state || { form: { pathname: "/" } };
  console.log("from: ", from);
  if (isRedirect) {
    return <Redirect to={from}></Redirect>;
  }

  return (
    <div>
      <p>You must login to view this page.</p>
      <button
        onClick={() => {
          setIsRedirect(true);
          loginLabel.login();
        }}
      >
        Login
      </button>
    </div>
  );
};

const Logout = withRouter(({history}) => {
  return (
    <div>
      {!loginLabel.label ? (
        <span>You are not login</span>
      ) : (
        <p>
          <span>Welcome! </span>
          <button onClick={() => {
            loginLabel.logOut() 
            history.push('/')
          }}>logOut</button>
        </p>
      )}
    </div>
  );
})

export default Home;
