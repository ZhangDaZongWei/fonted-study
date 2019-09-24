import React, { Component,Fragment } from 'react'

/**
 * React对于无障碍访问做了兼容:
 *  1. JSX支持所有的aria-*属性，注意的是虽然属性名是驼峰写法，但是这个属性就要这样写
 *  2. 语义化的HTML，很明显，这个是基于原生HTML的
 *     有这样一种情况，就是本来连在一起的标签却分开了，经常出现在使用列表和表格时
 *     不过React提供了ReactFragments来应对上面的情况，就是提供了Fragment组件
 */

// 可以看得出来，Fragment连接了本该在一起的两个组件。若使用div，那么就不语义化了
function ListItem ({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  )
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  )
}

class Aria extends Component {
 
  render() { 
    let items = [{
      id: 0,
      term: 'a',
      description: 'this is a'
    },{
      id: 1,
      term: 'b',
      description: 'this is b'
    },{
      id: 2,
      term: 'c',
      description: 'this is c'
    },{
      id: 3,
      term: 'd',
      description: 'this is d'
    },]
    return ( 
      <Glossary items={items} />
     );
  }
}
 
export default Aria

