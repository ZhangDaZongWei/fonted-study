// 展示每一条评论

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../css/comment.css'

class Comment extends Component {

  static propTypes = {
    comment: PropTypes.object,
    onHandleDetele: PropTypes.func
  }

  static defaultProps = {
    comment: {
      username: '',
      content: '',
      createTime: null
    }
  }

  constructor() {
    super()
    this.state = {
      timer: ''
    }
  }

  componentWillMount() {
    this._getTimer()
    // 为什么要加上bind
    this.clearInterval = setInterval(this._getTimer.bind(this),5000)
  }

  componentWillUnmount() {
    clearInterval(this.clearInterval)
  }

  _getTimer() {
    const { comment: {createTime } } = this.props
    if (createTime) {
      let duration = (new Date() - createTime) / 1000
      this.setState({
        timer: duration > 60 ? `${Math.round(duration / 60)}分钟前` : `${Math.round(Math.max(duration,1))}秒前`
      })
    }
  }

  handleDetele() {
    if (this.props.onHandleDetele()) {
      this.props.onHandleDetele()
    }
  }

  _getProcessContent(content) {
    // 为什么这样写正则？
    return content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  render() {
    const { comment } = this.props
    return (
      <div className='comment-wrapper'>
        <span>{comment.username}：</span>
        <span dangerouslySetInnerHTML={{__html: this._getProcessContent(comment.content)}}></span>
        <span>{this.state.timer}</span>
        <span onClick={() => this.handleDetele()}>删除</span>
      </div>
    )
  }
}

export default Comment