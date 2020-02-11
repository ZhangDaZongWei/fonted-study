import { createStore } from 'redux';
import { todoApp } from './reducer'

const initState = {
  todos: []
}

export const store = createStore(todoApp,initState)