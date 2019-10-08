// 选择过滤条件，all,completed,incomplete

import React, { Component } from 'react';

export default class VisibilityFilters extends Component {

  constructor() {
    super()
    this.state = {
      currentIndex: ''
    }
  }

  handleClick(index) {
    this.setState({
      currentIndex: index
    })
  }

  render() {

    const visible = ['all','completed','incomplete']

    return (
      <div className='visibilityFilters'>
       {
         visible.map((item,index) => (
           <span 
            className={
              this.state.currentIndex === index && 'checked'
            }
            onClick={() => this.handleClick(index)}
            key={`${item}-${index}`}
           >{item}</span>
         ))
       }
      </div>
    )
  }
}