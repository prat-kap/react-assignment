export const INITIAL_STATE = {todos: []}

export const TodoItemReducer = (state, action) => {
  switch(action.type) {
    case "add":
      return {
        ...state,
        todos: [{taskName: action.payload, status: action.status, id: action.id},...state.todos]
      }
    case "toggle":
      const index = state.todos.findIndex(todo => todo.id === action.id)
      const newArray = [...state.todos]
      newArray[index].status = action.status
      return {
        ...state, todos: newArray
      }
    default:
      return state
  }
}