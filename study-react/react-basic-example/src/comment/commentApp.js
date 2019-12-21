// 一个评论功能的总组件

import React, {Component} from 'react'
import  CommentInput  from './commentInput'
import  CommentList  from './commentList'
import  wrapperComponent  from './wrapperComponent'

import './css/commentApp.css'

class CommentApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      comments: props.data || []
    }
  }

  getInputValue(msg) {
    if (!msg.username) return alert('请输入用户名')
    if (!msg.content) return alert ('请输入评论内容')
    // 直接对state加数据其实违反react的规定，但其实这个原则是为了 shouldComponentUpdate 的优化和变化的跟踪
    this.state.comments.push(msg)
    this.setState({
      comments: this.state.comments
    })
    // 为什么要转为JSON呢？因为localStorage只能接受字符串
    this.props.onSaveData(JSON.stringify(this.state.comments))
    // this._saveComments(JSON.stringify(this.state.comments))
  }

  handleDetele(index) {
    this.state.comments.splice(index,1)
    this.setState({
      comments: this.state.comments
    })
    this.props.onSaveData(JSON.stringify(this.state.comments))
    // this._saveComments(JSON.stringify(this.state.comments))
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onInputValue={(msg) => this.getInputValue(msg)} />
        <CommentList comments={this.state.comments} onHandleDetele={(index) => this.handleDetele(index)} />
      </div>
    )
  }
} 

let newCommentApp = wrapperComponent(CommentApp,'comments')

export default newCommentApp