export const INITIAL_STATE = { todos: [] };
import { LABELS } from "../constants/CommonConsts";

export const TodoListReducer = (state, action) => {
  switch (action.type) {
    case LABELS.ADD: {
      return {
        ...state,
        todos: [
          { taskName: action.payload, status: action.status, id: action.id },
          ...state.todos,
        ],
      };
    }
    case LABELS.TOGGLE: {
      const index = state.todos.findIndex((todo) => todo.id === action.id);
      const newArray = [...state.todos];
      newArray[index].status = action.status;
      return {
        ...state,
        todos: newArray,
      };
    }
    default: {
      return state;
    }
  }
};
