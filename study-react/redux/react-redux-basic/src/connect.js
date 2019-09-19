import React,{ Component } from 'react';
import PropTypes from 'prop-types';

// 高阶组件connect, 和context打交道

 const connect = (mapStateToProps, mapDispatchToProps) =>  (WrapperedComponent) => {
  class Connect extends Component {

    // 取得store
    static contextTypes = {
      store: PropTypes.object
    }

    constructor() {
      super()
      this.state={
        state: ''
      }
    }

    componentWillMount() {
      this._updateThemeColor()
      const { store } = this.context
      store.subScribe(() => this._updateThemeColor())
    }

    _updateThemeColor() {
      const { store } = this.context
      // mapStateToProps就可以定义要传什么样的数据
      // 这里给mapStateToProps再传入一个外部的props, 那么可定制性就更高了
      // 使用判断防止未传值
      const state = mapStateToProps ? mapStateToProps(store.getState(),this.props) : {}
      const dispatch = mapDispatchToProps ?  mapDispatchToProps(store.dispatch) : {}
      this.setState({
        state: {
          ...state,
          ...dispatch,
          ...this.props
        }
      })
    } 

    render() {
      return (
        // {...this.state.state}是将个对象里面的属性全部通过 `props` 方式传递进去
        <WrapperedComponent {...this.state.state} />
      )
    }
  }


  return Connect
}

export default connect