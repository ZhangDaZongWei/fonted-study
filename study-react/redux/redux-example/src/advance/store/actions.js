let index = 0

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: index++,
  text
})

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id
})

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter
})