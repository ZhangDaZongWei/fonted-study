// 用于展示评论输入框

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import  wrapperComponent  from './wrapperComponent'
import './css/commentInput.css'

class CommentInput extends Component {

  static propTypes = {
    onInputValue: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      username: props.data || '',
      content: ''
    }
  }

  componentDidMount() {
    this.textarea.focus()
  }

  changeInput(e) {
    this.setState({
      username: e.target.value
    })
  }

  blurInput() {
    // this._saveUsername(this.state.username)
    this.props.onSaveData(JSON.stringify(this.state.username))
  }
  
  changeTextarea(e) {
    this.setState({
      content: e.target.value
    })
  }

  submit() {
    if (this.props.onInputValue) {
      const { username, content } = this.state
      const createTime = +new Date()
      this.props.onInputValue({username,content,createTime})
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
          <input 
            type='text' 
            name='username' 
            value={this.state.username} 
            onChange={(e) => this.changeInput(e)} 
            onBlur={() => this.blurInput()}
          />
        </div>
        <div className='comment-input_field'>
          <label  htmlFor='content'>评论内容：</label>
          <textarea 
            name='content' 
            value={this.state.content} 
            onChange={(e) => this.changeTextarea(e)} 
            ref={(textarea) => this.textarea = textarea}
          ></textarea>
        </div>
        <div className='comment-input_button'>
          <button onClick={() => this.submit()}>发布</button>
        </div>
      </div>
    )
  }
}

let newCommentInput = wrapperComponent(CommentInput,'username')

export default newCommentInput