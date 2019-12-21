import React from 'react';

// JSX描述UI信息，其实JSX经过编译之后就是一个JS对象
// 可以用JS对象来描述DOM结构,即一个标签可以分为: 标签名,属性,子标签
function App() {
  return (
    <div className="App">
      <p>React.js小书</p>
    </div>
  );
}

// 如以上的代码,经过编译后如下:

// function App() {
//   return (
//     React.createElement(
//       "div",
//       {className: 'App'},
//       React.createElement(
//         'p',
//         null,
//         'React.js小书'
//       )
//     )
//   )
// }

export default App;
