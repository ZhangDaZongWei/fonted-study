"use strict";

// 单一数据源，整个应用的state都存在于一个Object tree中，而这个Object tree存在于唯一的store中
// state是只读的，只能通过触发action来改变它
let state = {
  todoList: [{
    text: "study",
    completed: falses
  }],
  show: "show_all"
};