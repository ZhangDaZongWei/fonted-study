import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './page2/main';
import Video from './page2/video/video';
import WorkPlace from './page2/workplace/workplace';
import './css/app2.css';

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      routerConfig: [
        {
          path: '/',
          title: '博客首页', 
          exact: true,
          component: Main
        },
        {
          path: '/video',
          title: '视频教程', 
          exact: false,
          component: Video
        },
        {
          path: '/workplace',
          title: '工作空间', 
          exact: false,
          component: WorkPlace
        },
      ]
     }
  }
  render() { 
    const { routerConfig } = this.state
    return ( 
      <Router>
        <div className='wrapper'>
          <div className='left-wrapper'>
            <h3>一级导航</h3>
            <ul>
              {
                routerConfig.map((item,index) => {
                  return (<li key={`${item}-${index}`}><Link to={item.path}>{item.title}</Link></li>)
                })
              }
            </ul>
          </div>
          <div className='right-wrapper'>
            {
              routerConfig.map((item,index) => {
                return (<Route path={item.path} exact={item.exact} component={item.component}  key={`${item}-${index}`}></Route>)
              })
            }
          </div>
        </div>
      </Router>
     );
  }
}
 
export default App2;