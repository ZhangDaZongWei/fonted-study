// 新React生命周期

import React, {Component} from "react";

export default function NewLifeCycle() {
  return (
    <div className="App">
      {/* <GetSnapshotBeforeUpdate /> */}
      <AAA />
    </div>
  );
}

class AAA extends React.Component {
  state = {
    age: 666
  };

  add = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        <ChildA onChangeParent={this.add} age={this.state.age} />
      </div>
    );
  }
}

class ChildA extends React.Component {
  state = {
    num: 888
	};
	// 当组建实例化、接收新的props、变更state时触发
  // 根据新的属性对象派生状态对象    
  // nextProps——新的属性对象 prevState——旧的状态对象
  // static getDerivedStateFromProps(nextprops, state) {
  //   console.log('props',nextprops);
  //   // 返回一个对象来更新 state 或者返回 null 来表示接收到的 props 不需要更新 state 
  //   if (nextprops.age !== state.age) {
  //     console.log("更新吧");
  //     return {
  //       onChangeParent:nextprops.onChangeParent,
  //       age: nextprops.age,
  //       // 注意：这里不需要把组件自身的状态也放进来
  //       // num:state.num
  //     };
  //   }
  //   return null;
	// }
	
  // 接收之前的props、state，必须返回一个值，必须结合componentDidUpdate使用，
  // 返回值作为componentDidUpdate的第三个参数
	// 在render之后，更新DOM和ref之前触发，所以可以去获取之前的DOM状态
	// getSnapshotBeforeUpdate(prevProps,prevState) {
	// 	console.log('getSnapshotBeforeUpdate')
	// 	console.log('prevProps prevState: ',prevProps,prevState)
	// 	return 'return value'
  // }

  componentWillMount() {
    console.log('componentWillMount: ',this.props)
  }
  
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps: ',this.props)
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate: ',this.props)
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate: ',this.props)
  }

	componentDidUpdate(prevProps,prevState,value) {
		console.log('componentDidUpdate: ', this.props)
		// console.log('prevProps prevState: ',prevProps,prevState)
  }
  
  componentDidMount() {
    console.log('componentDidMount: ', this.props)
  }

  add = () => {
    this.setState({ num: this.state.num + 1 });
	};
	
  render() {
    const { onChangeParent } = this.props;
    console.log('render: ',this.props)
    // console.log('state',this.state);
    return (
      <>
        <div onClick={onChangeParent}>change</div>
        <div onClick={this.add}>add</div>
      </>
    );
  }
}

class GetSnapshotBeforeUpdate extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = { messages: [] };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        messages: ["msg:" + this.state.messages.length, ...this.state.messages]
      });
    }, 5000);
  }
  getSnapshotBeforeUpdate() {
		// 返回更新之前内容的高度
		console.log('getSnapshotBeforeUpdate scrollHeight: ', this.wrapper.current.scrollHeight)
    return this.wrapper.current.scrollHeight;
  }
  componentDidUpdate(prevProps, prevState, prevScrollHeight) {
		console.log('componentDidUpdate scrollHeight: ', this.wrapper.current.scrollHeight)
    this.wrapper.current.scrollTop =
      this.wrapper.current.scrollTop +
      (this.wrapper.current.scrollHeight - prevScrollHeight);
  }
  render() {
    let style = {
      height: "100px",
      width: "200px",
      border: "1px solid red",
      overflow: "auto"
    };
    return (
      <ul style={style} ref={this.wrapper}>
        {this.state.messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    );
  }
}