import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        {/* 获取匹配的子路径 */}
        {this.props.params.userName} - {this.props.params.repoName}
      </div>  
    )
  }
})