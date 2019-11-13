import { ADD_TODO, TOGGLE_STATUS, VISIBILITY_FILTERS } from './actionType';

export const addTodoAction = (value) => ({
  type: ADD_TODO,
  value
})

export const toggleStatusAcion = (value) => ({
  type: TOGGLE_STATUS,
  value
})

export const visibilityFiltersAction = (value) => ({
  type: VISIBILITY_FILTERS,
  value
})