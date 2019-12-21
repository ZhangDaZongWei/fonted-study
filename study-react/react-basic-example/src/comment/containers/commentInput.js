import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addComment } from '../reducers/comments'
import PropTypes from 'prop-types';
import CommentInput from '../components/commentInput';

class CommentInputContainer extends Component {

  static propTypes={
    comments: PropTypes.array,
    addComment: PropTypes.func
  }

  constructor() {
    super()
    this.state={
      username: ''
    }
  }

  componentWillMount() {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({
        username
      })
    }
  }
  
  handleInputBlur(value) {
    localStorage.setItem('username',value)
  }

  handleInputValue(value) {
    if (!value.username) return alert('请输入用户名')
    if (!value.content) return alert('请输入内容')
    const {comments} = this.props
    let newComments = [...comments,value]
    localStorage.setItem('comments', JSON.stringify(newComments))
    if (this.props.addComment) {
      this.props.addComment(value)
    }
  }

  render() {
    return (
      <CommentInput 
        username={this.state.username}
        onInputBlur={(value) => this.handleInputBlur(value)}
        onInputValue={(value) => this.handleInputValue(value)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => {
      dispatch(addComment(comment))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentInputContainer)