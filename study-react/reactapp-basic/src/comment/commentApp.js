// 一个评论功能的总组件

import React, {Component} from 'react';
import  CommentInput  from './commentInput'
import  CommentList  from './commentList'

import './css/commentApp.css'

class CommentApp extends Component {

  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  getInputValue(msg) {
    // 直接对state加数据其实违反react的规定，但其实这个原则是为了 shouldComponentUpdate 的优化和变化的跟踪
    console.log('comments: ',msg)
    this.state.comments.push(msg)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onInputValue={(msg) => this.getInputValue(msg)} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
} 

export default CommentApp