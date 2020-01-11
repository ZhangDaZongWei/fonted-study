/**
 * 核心概念 state action reducer
 */

// state（Object）

const state = {
  todoList: [
    {
      text: "study",
      completed: false
    }
  ],
  show: "show_all"
};

// action （Object）用来描述state发生的所有变化
// 只能触发action去改变state

const action1 = { type: "add_todo", text: "go to school" };
const action2 = { type: "visible", filter: "show_all" };
const action3 = { type: "toggle_todo", index: 1 };


// reducer（function） 将state和action连接起来，一般会将state中的每个属性都分别对应action

function operateTodo(state = [], action) {
  if (action.type === "add_todo") {
    return state.concat(state, [
      {
        text: action.text,
        completed: false
      }
    ]);
  }
  if (action.type === "toggle_todo") {
    return state.map((item, index) => {
      if (index === action.index) {
        return {
          text: item.text,
          completed: !item.completed
        };
      }
      return item;
    });
  }
  return state;
}

function operateVisible(state = "show_all", action) {
  if (action.type === "visible") {
    return action.filter;
  }
  return state;
}

// 总的reducer，将分reducer合起来

function allReducer(state = {}, action) {
  return {
    todoList: operateTodo(state.todoList, action),
    show: operateVisible(state.show, action)
  };
}

/**
 * 进阶概念：
 * 1. store单一数据源，即存储state的唯一地方
 * 2. dispatch用于触发action
 * 3. reducer用来描述action如何改变state，是个纯函数
 * 其实redux就是封装了一个API，来完善和简化操作 
 */