import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Props from './base'
import CommentApp from './comment/commentApp'
import * as serviceWorker from './serviceWorker';

// ReactDOM的作用就是将JSX生成的JS对象构造成DOM树,然后插入到页面特定的位置
// 那为什么不将JSX直接渲染成DOM结构呢? 原因有二:
// 1. 因为不一定会将一个表示 UI 的结构和信息的对象插入到浏览器的普通页面上,也有可能会在canvas,App上
// 2. 将JSX编译成JS对象后，方便了数据变化，组件更新的操作，可以用算法较快地比较两个JS对象，比操作DOM要快

ReactDOM.render(<CommentApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
