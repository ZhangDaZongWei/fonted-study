// 一个评论功能的总组件

import React, {Component} from 'react'
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

  componentWillMount() {
    this._loadComments()
  }

  _saveComments(comments) {
    localStorage.setItem('comments',comments)
  }

  _loadComments() {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
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
    this._saveComments(JSON.stringify(this.state.comments))
  }

  handleDetele(index) {
    this.state.comments.splice(index,1)
    this.setState({
      comments: this.state.comments
    })
    this._saveComments(JSON.stringify(this.state.comments))
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

export default CommentApp