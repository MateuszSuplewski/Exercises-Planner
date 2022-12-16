export const ADD = 'trainingPlan/ADD'
export const REMOVE = 'trainingPlan/REMOVE'

export const createActionAdd = (exercise, dayOfWeek) => {
  return {
    type: ADD,
    payload: exercise,
    dayOfWeek
  }
}

export const createActionRemove = (exerciseId, dayOfWeek) => {
  return {
    type: REMOVE,
    payload: exerciseId,
    dayOfWeek
  }
}

export const initialState = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
}

export const reducer = (state = initialState, action) => {
  const { dayOfWeek } = action
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [dayOfWeek]: [...state[dayOfWeek], action.payload]
      }
    case REMOVE:
      return {
        ...state,
        [dayOfWeek]: state[dayOfWeek].filter(
          (exercise) => exercise.id !== action.payload
        )
      }
    default:
      return state
  }
}

export default reducer
