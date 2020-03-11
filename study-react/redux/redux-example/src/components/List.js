import React, {Component} from 'react';
import {store} from '../store/index';
import {upStatusAction} from '../store/actionCreator';

class List extends Component {

  handleClick(index) {
    store.dispatch(upStatusAction(index))
  }

  render() {
    const { content } = this.props
    return (
      <div className="list">
        <ul>
          {
            content.map((item,index) => (
              <li 
                style={{textDecoration: item.status === "completed" ? "line-through" : "none"}}
                onClick={this.handleClick.bind(this,index)}
                key={`${item}-${index}`} 
              >
                {item.name}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default List