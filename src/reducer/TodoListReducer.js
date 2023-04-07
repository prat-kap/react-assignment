export const INITIAL_STATE = []
import { LABELS } from '../constants/CommonConsts'

export const TodoListReducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case LABELS.ADD: {
      return [{ taskDetails: payload }, ...state]
    }
    case LABELS.TOGGLE: {
      const index = state.findIndex(
        (todo) => todo.taskDetails.id === payload.id
      )
      const newArray = [...state]
      newArray[index].taskDetails.status = payload.status
      return newArray
    }
    default: {
      return state
    }
  }
}
