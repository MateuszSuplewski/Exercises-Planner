export const ADD = 'cart/ADD'
export const REMOVE = 'cart/REMOVE'

export const createActionAdd = (exercise) => {
  return {
    type: ADD,
    payload: exercise
  }
}

export const createActionRemove = (exerciseId) => {
  return {
    type: REMOVE,
    payload: exerciseId
  }
}

export const initialState = []

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload]
    case REMOVE:
      return [...state.filter(exercise => exercise.id !== action.payload)]
    default:
      return state
  }
}

export default reducer
