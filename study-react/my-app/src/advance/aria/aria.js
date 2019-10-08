import React, { Component,Fragment } from 'react';
import './aria.css';

/**
 * React对于无障碍访问做了兼容:
 *  1. JSX支持所有的aria-*属性，注意的是虽然属性名是驼峰写法，但是这个属性就要这样写
 *  2. 语义化的HTML，很明显，这个是基于原生HTML的
 *     有这样一种情况，就是本来连在一起的标签却分开了，经常出现在使用列表和表格时
 *     不过React提供了ReactFragments来应对上面的情况，就是提供了Fragment组件
 */

// 可以看得出来，Fragment连接了本该在一起的两个组件。若使用div，那么就不语义化了
function ListItem ({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  )
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  )
}

// 当然你也可以这样使用Fragment，将其映射到一个数组中
function otherGlossary(props) {
  return (
    <dl>
      {
        props.items.map(item => (
          <Fragment>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </Fragment>
        ))
      }
    </dl>
  )
}
// 如果不给Fragment传递任何参数的话，可以使用短语法写成<></>  

class Aria extends Component {
 
  render() { 
    let items = [{
      id: 0,
      term: 'a',
      description: 'this is a'
    },{
      id: 1,
      term: 'b',
      description: 'this is b'
    },{
      id: 2,
      term: 'c',
      description: 'this is c'
    },{
      id: 3,
      term: 'd',
      description: 'this is d'
    },]
    return ( 
      <Glossary items={items} />
     );
  }
}
 
// export default Aria

// 对于无障碍表单，HTML可使用的都能在JSX上使用，特别注意的是for应该写成htmlFor
// 因为for是js的关键字

// 管理焦点
// 其实要想管理某一元素的焦点，就先要获取它，所以使用react中的Refs来获取
class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    // createRef()很明显是创建一个DOM元素的ref
    // 像下面这样写是为了给textInput赋初值
    this.textInput = React.createRef()
  }

  focus() {
    console.log('input ref: ', this.textInput)
    // 注意：要通过访问 “current” 来获得 DOM 节点
    this.textInput.current.focus()
  }

  render() { 
    return ( 
      <div>
        {/* 通过ref回调函数获取input元素,并保存在textInput中 */}
        <input type='text' ref={this.textInput} />
        <button type='button' onClick={() => this.focus()}>点击获取焦点</button>
      </div>
     );
  }
}
 
// export default CustomTextInput;


class OuterClickExample extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false
     }
     this.toggleContainer = React.createRef()
  }

  componentWillMount() {
    
  }

  onClickHandler = () => {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }))
  }

  render() { 

    return ( 
      <div ref={this.toggleContainer}>
        {/* 这里为什么要bind this呢？
            1. React中的事件并不是绑定在真实dom上的，而是绑定在虚拟dom上
               在document这个根节点上绑了个SyntheticEvent，当用户点击的时候事件冒泡到document上，
               SyntheticEvent收到后再在真实dom上通过回调（回调是重点）执行你在render上绑定的事件。
               恰好回调函数改变了this指向，所以要绑定this
         */}
        <button onClick={this.onClickHandler}>Select an option</button>
        {
          this.state.isOpen && (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )
        }
      </div>
     );
  }
}
 
export default OuterClickExample;