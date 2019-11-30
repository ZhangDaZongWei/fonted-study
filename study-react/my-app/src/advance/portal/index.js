import React, { Component } from 'react';

// portal：将子节点渲染到外部的节点上的方案
// 一般来说，子节点只会渲染到最近的父节点上
// 使节点成为portal：ReactDOM.createPortal(child,container)
// 可以挂载在DOM树的任何地方
// 事件冒泡

const modal = document.getElementById('#modal')

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      ReactDOM.createPortal(

      )
     );
  }
}
 
export default Modal;