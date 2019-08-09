// 用于展示评论输入框

import React, {Component} from 'react';
import './css/commentInput.css'

class CommentInput extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  changeInput(e) {
    this.setState({
      username: e.target.value
    })
  }
  
  changeTextarea(e) {
    this.setState({
      content: e.target.value
    })
  }

  submit() {
    if (this.props.onInputValue) {
      const { username, content } = this.state
      this.props.onInputValue({username,content})
    }
    this.setState({
      content: ''
    })
  }
  
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-input_field'>
          <label htmlFor='username'>用户名：</label>
          <input type='text' name='username' value={this.state.username} onChange={(e) => this.changeInput(e)} />
        </div>
        <div className='comment-input_field'>
          <label  htmlFor='content'>评论内容：</label>
          <textarea name='content' value={this.state.content} onChange={(e) => this.changeTextarea(e)}></textarea>
        </div>
        <div className='comment-input_button'>
          <button onClick={() => this.submit()}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput