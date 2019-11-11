// 选择过滤条件，all,completed,incomplete

import React, { Component } from 'react';
import store from './redux/store';
import { visibilityFiltersAction } from './redux/actionCreator';

export default class VisibilityFilters extends Component {

  constructor() {
    super()
    this.state = {
      currentIndex: ''
    }
    store.subscribe(() => this.changeState())
  }

  changeState() {
    let state = store.getState()
    if (state.status === 'all') {
      this.setState({
        currentIndex: 0
      })
    }
  }

  handleClick(item,index) {
    this.setState({
      currentIndex: index
    })
    store.dispatch(visibilityFiltersAction(item))
  }

  render() {

    const visible = ['all','completed','incomplete']

    return (
      <div className='visibilityFilters'>
       {
         visible.map((item,index) => (
           <span 
            className={
              this.state.currentIndex === index ? 'checked' : undefined 
            }
            onClick={() => this.handleClick(item,index)}
            key={`${item}-${index}`}
           >{item}</span>
         ))
       }
      </div>
    )
  }
}