import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        {
          cid: 123,
          title: 'JSPang的个人博客'
        },
        {
          cid: 456,
          title: 'JSPang的个人文章'
        },
        {
          cid: 789,
          title: 'JSPang的个人生活'
        }
      ]
     }
    // 编程式导航
    // 记得吗？props中有history这个属性
    this.props.history.push('/home')
  }
  render() { 
    return ( 
      <div>
        {/* <Redirect to='/home'></Redirect> */}
        <ul>
          {
            this.state.list.map((item,index) => (
              <li key={`${item}-${index}`}>
                <Link to={'/list/' + item.cid}>{item.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
     );
  }
}
 
export default Main; 