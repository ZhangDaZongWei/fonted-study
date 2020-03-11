/**
 * 1. typeScript就支持JSX语法，所以不用安装转换JSX的依赖
 * 2. 但是依赖react，react-dom要使用ts语法，所以要安装
 * @types/react，@types/react-dom
 * 3. 文件后缀名一定要是.tsx 
 */
import * as React from 'react';
import { Component } from "react";
import * as ReactDOM from "react-dom";

export default class ReactExp extends Component {
  render() {
    return (<span>React-ts-Webpack</span>)
  }
}

ReactDOM.render(<ReactExp />, window.document.getElementById("root"));

