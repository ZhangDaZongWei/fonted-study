import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 递归函数
const recursive = (num) => {
  if (num == 1) {
    return 1
  }
  return num * recursive(num - 1)
}


const moduleA = {
  state: {
    todos: [
      { id: 1, text: 'I am No.1', done: true},
      { id: 2, text: 'I am No.2', done: false}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state,getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => state.todos.find(todo => todo.id === id)
  },
  mutations: {
    addElement: (state,payload) => {
      state.todos.push(payload)
    }
  },
  actions: (commit) => {
    commit('addElement')
  }
}

const moduleB = {
  state: {
    count: 2
  },
  getters: {
    rcuCount: (state,getters) => {
      return recursive(state.count)
    } 
  },
  mutations: {
    customIncrement: (state,payload) => {
      state.count += payload
    }
  },
  actions: {
    customIncrement: (commit) => {
      setTimeout(() => commit('customIncrement'),10)
    }
  }
}

export default new Vuex.Store({ 
 modules: {
   moduleA,
   moduleB
 }
})
