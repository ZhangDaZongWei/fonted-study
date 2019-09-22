import React from 'react';
import { Input, Button, List, Icon } from 'antd';

// UI组件，一般是无状态组件
// 看起来清爽多了

const AppUI = (props={
  inputValue: '',
  data: [],
  onChange: undefined,
  onAddTodo: undefined,
  onDelTodo: undefined
}) => {

  return ( 
    <div style={{width: '500px',margin: '0 auto'}}>
      <div style={{margin: '50px'}}>
        <Input 
          placeholder={props.inputValue} 
          style={{width: '250px', marginRight: '10px'}} 
          onChange={(e) => props.onChange(e.target.value)}
        />
        <Button type='primary' onClick={() => props.onAddTodo()}>增加</Button>
      </div>
      <div style={{margin: '50px',width: '300px'}}>
        <List bordered dataSource={props.data} renderItem={(item,index) => {
          return (
            <div>
              <Icon type="close-circle" onClick={() => props.onDelTodo(index)} />
              <List.Item>{item}</List.Item>
            </div>
          )
        }} />
      </div>
    </div>
   );

} 

export default AppUI;